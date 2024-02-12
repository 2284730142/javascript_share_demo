const puppeteer = require('puppeteer');

(async () => {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({});

    // Create a new page
    const page = await browser.newPage();

    // Set screen size
    await page.setViewport({ width: 1080, height: 1024 });

    // measure the performance of the page
    await page.metrics();

    // Navigate to the page to a specific URL
    await page.goto('http://localhost:3000/index.html');

    // Wait for the page to load and display the form
    await page.waitForSelector('#username');
    await page.waitForSelector('#password');

    // output the performance metrics
    const metrics = await page.metrics();
    console.log(`current mertrics: \n`, metrics);

    // 关闭浏览器
    await browser.close();
})();