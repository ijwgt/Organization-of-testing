import puppeteer from 'puppeteer';

jest.setTimeout(30000);

describe('Form', () => {
	let browser = null;
	let page = null;
	const baseUrl = 'http://localhost:9000';

	beforeAll(async () => {
		browser = await puppeteer.launch({
			headless: false, // show gui
			// slowMo: 100,
			devtools: false, // show devTools
			// defaultViewport: {
			//   width: 1000,
			//   height: 1000,
			// },

		});
		page = await browser.newPage();
	});

	afterAll(async () => {
		await browser.close();
	});

	test('should add "valid" class for valid input', async () => {
		await page.goto(baseUrl);

		const input = await page.$('.input');
		const button = await page.$('.button');

		await input.type ('5536913843636420');
		await button.click();
		await page.waitForSelector('.valid');
	})

	test('should add "invalid" class for valid input', async () => {
		await page.goto(baseUrl);

		const input = await page.$('.input');
		const button = await page.$('.button');

		await input.type ('1111111111111111');
		await button.click();
		await page.waitForSelector('.invalid');
	})
})