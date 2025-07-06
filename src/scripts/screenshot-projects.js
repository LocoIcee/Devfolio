import { chromium } from "playwright";

// update these with your real production URLs
const projects = [
  {
    name: "ahcr",
    url: "https://ahcr.vercel.app"
  },
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // consistent viewport for repeatable screenshots
  await page.setViewportSize({ width: 1280, height: 800 });

  for (const project of projects) {
    try {
      console.log(`Capturing ${project.name}...`);
      await page.goto(project.url, { waitUntil: 'networkidle' });

      await page.screenshot({
        path: `public/images/${project.name}.png`, // save to your Next.js public dir
        fullPage: false
      });

      console.log(`Saved: public/images/${project.name}.png`);
    } catch (e) {
      console.error(`Error capturing ${project.name}:`, e);
    }
  }

  await browser.close();
})();
