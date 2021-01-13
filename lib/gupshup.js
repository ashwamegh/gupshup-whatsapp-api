'use strict'

const pkg = require('../package.json')

class Gupshup {
	static VERSION = pkg.version

	constructor(options = {}) {
		let { apiKey } = options

		if (!apiKey) {
			throw new Error('`apiKey` is mandatory')
		}

		this.apiKey = apiKey
		
		// this.api = new API({ apiKey });
		
		this.addResources()
	}

	addResources() {
		Object.assign(this, {

		})
	}
}

module.exports = Gupshup