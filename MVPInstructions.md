# MacBook Marketplace Scraper - MVP Instructions

## MVP Overview
Build a minimal viable product that scrapes Facebook Marketplace for MacBook listings and maintains an updated list that refreshes hourly.

## MVP Phase 1: Basic Environment Setup

### Step 1.1: Project Initialization
- Install Node.js (LTS version)
- Initialize npm project with package.json
- Install core dependencies: Playwright, fs utilities
- Create basic project structure:
  ```
  /src
  /data
  /config
  /logs
  ```

### Step 1.2: Basic Configuration
- Create `.env` file for Facebook credentials
- Set up basic config file for search parameters
- Define MacBook search keywords and price ranges

## MVP Phase 2: Browser Automation & Login

### Step 2.1: Playwright Setup
- Configure Playwright with Chrome browser
- Set up basic stealth mode to avoid detection
- Create browser context management

### Step 2.2: Facebook Login
- Build simple login flow using credentials from .env
- Implement session persistence
- Add basic error handling for login failures

### Step 2.3: Marketplace Navigation
- Navigate to Facebook Marketplace
- Implement MacBook search functionality
- Handle basic search results page

## MVP Phase 3: Data Extraction

### Step 3.1: Listing Detection
- Identify listing elements on search results page
- Create selectors for title, price, location, and link
- Handle pagination (at least first 2-3 pages)

### Step 3.2: Basic Data Parsing
- Extract listing title, price, and location
- Parse basic MacBook model information from titles
- Normalize price formats (remove currency symbols, commas)
- Extract listing URLs for future reference

### Step 3.3: Data Structure
- Define JSON structure for storing listings
- Include fields: id, title, price, location, url, timestamp, model
- Create unique identifier system (hash of title + price + location)

## MVP Phase 4: Data Storage

### Step 4.1: JSON File Storage
- Save scraped data to timestamped JSON files
- Create master listings file that gets updated
- Implement basic backup mechanism

### Step 4.2: Data Management
- Load existing listings on startup
- Compare new scrapes with existing data
- Update existing listings or add new ones
- Track when listings were first seen and last updated

## MVP Phase 5: Automation & Scheduling

### Step 5.1: Hourly Scraping
- Implement setInterval for hourly scraping
- Add basic rate limiting (delays between requests)
- Create simple retry logic for failed scrapes

### Step 5.2: Basic Error Handling
- Log errors to console and file
- Continue running even if individual scrapes fail
- Basic recovery from network issues

### Step 5.3: Process Management
- Create main application entry point
- Add graceful shutdown handling
- Basic logging of scraping activities

## MVP Phase 6: Basic Reporting

### Step 6.1: Console Output
- Display newly found listings
- Show updated listings (price changes)
- Print summary statistics (total listings, new today, etc.)

### Step 6.2: Simple Data Export
- Export current listings to CSV
- Create daily summary reports
- Basic listing count and price range statistics

## MVP Success Criteria
- Successfully logs into Facebook Marketplace
- Scrapes MacBook listings every hour
- Maintains updated JSON database of listings
- Detects new listings and price changes
- Runs continuously without manual intervention
- Provides basic console output and CSV export

## MVP File Structure
```
/
├── src/
│   ├── scraper.js          # Main scraping logic
│   ├── auth.js             # Facebook login handling
│   ├── parser.js           # Data extraction and parsing
│   ├── storage.js          # JSON file management
│   └── scheduler.js        # Hourly automation
├── data/
│   ├── listings.json       # Master listings file
│   ├── daily/              # Daily backup files
│   └── exports/            # CSV exports
├── config/
│   ├── config.js           # Search parameters
│   └── selectors.js        # CSS selectors
├── logs/
│   └── scraper.log         # Application logs
├── .env                    # Facebook credentials
├── package.json
└── index.js                # Application entry point
```

## MVP Technical Requirements
- Node.js 18+
- Playwright for browser automation
- Basic JSON file storage (no database required)
- Simple console logging
- CSV export capability
- Hourly scheduling with setInterval

## MVP Limitations (Acceptable for Initial Version)
- No advanced deal detection
- No web dashboard
- No email notifications
- No price trend analysis
- No duplicate detection beyond basic ID matching
- No advanced error recovery
- No performance optimization
- Limited to first few pages of search results 