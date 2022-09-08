const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--proxy-server=socks5://torproxy:9050',
        ]
    })
    const page = await browser.newPage()

    await page.goto('http://lockbitapt6vx57t3eeqjofwgcglmutr3a35nygvokja5uuccip4ykyd.onion/')
    await page.waitForTimeout(10000);
    const html = await page.content();
    console.log(html)
    await page.screenshot({path: '/work/screenshot.png', fullPage: true});

    await browser.close();
})()
