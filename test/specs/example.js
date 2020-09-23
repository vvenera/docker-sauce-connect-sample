describe('visit localhost page', () => {
	it('should have the right title', () => {
		browser.url('localhost:3000')
		expect(browser).toHaveTitle('some title')
	})
})

// describe('visit Google page', () => {
// 	it('should have the right title', () => {
// 		browser.url('https://google.com')
// 		expect(browser).toHaveTitle('Google')
// 	})
// })
