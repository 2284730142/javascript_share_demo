const puppeteer = require('puppeteer');

(async () => {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({
        headless: false, // close the headless browser
    });

    // Create a new page
    const page = await browser.newPage();

    // Set screen size
    await page.setViewport({ width: 1080, height: 1024 });

    // Navigate to the page to a specific URL
    await page.goto('http://localhost:3000/index.html');

    // Wait for the page to load and display the form
    await page.waitForSelector('#username');
    await page.waitForSelector('#password');

    // Wait for 1 second
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Type into the form
    await page.type('#username', 'admin');
    await page.type('#password', 'password');

    // submit the form
    await Promise.all([
        page.click('button[type="submit"]'),
    ]);

    console.log('Login form submitted!');

    // Close the browser manually
    // await browser.close();
})();