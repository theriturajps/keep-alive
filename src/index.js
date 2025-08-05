const cron = require('node-cron');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Read URLs from alive.json
const aliveDataPath = path.join(__dirname, '..', 'alive.json');
const aliveData = JSON.parse(fs.readFileSync(aliveDataPath, 'utf8'));
const allURLs = aliveData.users.flatMap(user => user.urls);

const CronExpression = {
  EVERY_10_MINUTES: '*/10 * * * *',
};

function getNextScheduleTime() {
  const now = new Date();
  const nextRun = new Date(now.getTime() + 10 * 60 * 1000);
  return nextRun.toISOString();
}

cron.schedule(CronExpression.EVERY_10_MINUTES, async () => {
  console.log(`⏰ Running health check at ${new Date().toISOString()}`);
  console.log('----------------------------');

  await Promise.all(allURLs.map((url) => getHealth(url)));

  console.log('----------------------------');
  console.log(`⏱ Next check scheduled at: ${getNextScheduleTime()}`);
  console.log('\n');
});

async function getHealth(URL) {
  try {
    const startTime = Date.now();
    const res = await axios.get(URL, { timeout: 10000 });
    const responseTime = Date.now() - startTime;

    console.log(`✅ ${URL} - Status: ${res.status} (${responseTime}ms)`);
    return res.data;
  } catch (error) {
    const errorCode = error.response?.status || 'CONNECTION_FAILED';
    console.log(`❌ ${URL} - Error: ${errorCode} (${error.message})`);
    return null;
  }
}