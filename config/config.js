// Facebook Marketplace Scraper Configuration

module.exports = {
  // MacBook search keywords
  searchKeywords: [
    'MacBook',
    'MacBook Pro',
    'MacBook Air',
    'Mac Book',
    'Apple MacBook'
  ],

  // Price range for MacBook searches
  priceRange: {
    min: 200,
    max: 3000
  },

  // Search parameters
  searchParams: {
    location: '', // Will be set based on user's location
    radius: 25, // miles
    sortBy: 'creation_time', // newest first
    maxPages: 3 // limit to first 3 pages for MVP
  },

  // Scraping intervals
  scrapeInterval: 60 * 60 * 1000, // 1 hour in milliseconds

  // Browser settings
  browser: {
    headless: true,
    slowMo: 1000, // slow down by 1 second between actions
    timeout: 30000 // 30 second timeout
  },

  // File paths
  paths: {
    data: './data',
    logs: './logs',
    exports: './data/exports'
  }
}; 