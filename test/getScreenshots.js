const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs-extra");
const { IMAGE_DIRECTORY } = require("./constants");

const VIEWPORTS = {
    mobile: { width: 320, height: 560 },
    desktop: { width: 1000, height: 800 }
};

async function screenshotPage(currentViewport) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`file:${path.join(__dirname, "../index.html")}`);
    await page.setViewport(VIEWPORTS[currentViewport]);

    let counter = 0;
    let isDone = true;
    while (isDone) {
        await page.screenshot({ path: `${IMAGE_DIRECTORY}/${currentViewport}.${counter}.png` });
        await page.evaluate(scrollDownPage);
        isDone = !(await page.evaluate(isEndOfPage));
        counter++;
    }

    await browser.close();
};

function isEndOfPage() {
    return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
}

function scrollDownPage() {
    window.scrollBy(0, window.innerHeight);
}

function main() {
    fs.emptyDirSync(IMAGE_DIRECTORY);

    const viewportKeys = Object.keys(VIEWPORTS);
    viewportKeys.forEach(currentViewport => {
        screenshotPage(currentViewport);
    });
}

main();