# MacBook Marketplace Scraper

A Node.js application that scrapes Facebook Marketplace for MacBook listings and maintains an automatically updated database that refreshes every hour.

## Features

- Automated hourly scraping of Facebook Marketplace
- MacBook-specific search filtering
- JSON database storage with timestamped backups
- Detection of new listings and price changes
- CSV export functionality
- Basic logging and error handling

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Add your Facebook credentials

3. Run the application:
   ```bash
   npm start
   ```

## Project Structure

```
/
├── src/                # Source code
├── data/               # JSON database and exports
├── config/             # Configuration files
├── logs/               # Application logs
├── .env                # Environment variables (not tracked)
└── package.json        # Project dependencies
```

## MVP Status

This is currently in MVP development phase. See `MVPInstructions.md` for detailed development roadmap.

## Requirements

- Node.js 18+
- Playwright browsers (installed automatically)
- Facebook account credentials 