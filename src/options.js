module.exports = options = (start) => {
    const options = {
		authTimeout: 0,
		cacheEnabled: false,
		//defaultViewport: null,
		disableSpins: true,
		headless: true,
		killProcessOnBrowserClose: true,
		qrTimeout: 0,
		restartOnCrash: start,
		sessionId: 'ImprovisaBOT',
		throwErrorOnTosBlock: false,
		useChrome: true,
		userDataDir: "./logs/Chrome",
        chromiumArgs: [
			'--aggressive-cache-discard',
			'--disable-application-cache',
			'--disable-cache',
			'--disable-offline-load-stale-cache',
			'--disable-setuid-sandbox',
			'--disk-cache-size=0',
			'--ignore-certificate-errors',
			'--no-sandbox'
        ]
    }
    return options
}