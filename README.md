# Keep Alive 🚀

[![Keep Alive Status](https://github.com/theriturajps/keep-alive/actions/workflows/keep-alive.yml/badge.svg)](https://github.com/theriturajps/keep-alive/actions)

Keep Alive is a simple yet powerful script to prevent your server from going to sleep by sending regular requests to your service(s) at 10-minute intervals via GitHub Actions.

## Features ✨

- ✅ Automated pings every 10 minutes
- ✅ Supports multiple URLs per user
- ✅ Easy configuration via JSON file
- ✅ Detailed logging
- ✅ Free to use with GitHub Actions

## How It Works ⚙️

The script reads a list of URLs from `alive.json` and sends HTTP requests to each one every 10 minutes. This keeps your servers active and prevents them from spinning down due to inactivity.

## How to Add Your URLs (3 Simple Steps) 🛠️

### Step 1: Fork the Repository
1. Click the "`Fork`" button at the top-right of this repository
2. This will create a copy in your GitHub account

### Step 2: Edit alive.json
1. In your forked repository, click on "`alive.json`" file
2. Click the pencil (`✏️`) icon to edit
3. Add your URLs in this format:
```json
{
  "users": [
    // Keep existing entries...
    {
      "github_username": "YOUR_GITHUB_USERNAME",
      "urls": [
        "https://your-first-service.com",
        "https://your-second-service.com/health",
        "https://api.your-service.com/status"
      ]
    }
  ]
}
```

### Step 3: Commit Changes
1. Scroll down to the commit section
2. Add a commit message (e.g., "`Add my service URLs`")
3. Click "`Commit changes`"

🎉 That's it! The GitHub Action will:
- Automatically start pinging your URLs every 10 minutes
- Begin working immediately after your commit
- Continue running indefinitely

## Viewing Activity Logs 📊
To check if your URLs are being pinged:
1. Go to the "`Actions`" tab in your repository
2. Click on the "`Keep Alive`" workflow
3. You'll see logs showing successful pings to your URLs

## Need to Update Your URLs? 🔄
Simply edit the "`alive.json`" file again and commit your changes. The updates will take effect immediately.

## License 📄
This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments 🙏
- Inspired by the need to keep free-tier services alive
- Thanks to GitHub for providing free Actions minutes