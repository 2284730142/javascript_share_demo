const puppeteer = require('puppeteer');

(async () => {
  // Launch the browser
  const browser = await puppeteer.launch({});

  // Create a new page
  const page = await browser.newPage();

  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });

  // Navigate to the page to a specific URL
  await page.goto('http://localhost:3000/index.html');

  // screenshot
  await page.screenshot({ path: 'example.png' });

  // pdf
//   await page.emulateMediaType('screen');
  await page.pdf({ path: 'example.pdf', format: 'A4' });

  // close browser
  await browser.close();
})();