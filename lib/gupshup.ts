'use strict'

const pkg = require('./../package.json')
import API from './api'

import Message from './resources/message'
import Optins from './resources/optins'

class Gupshup {
	static VERSION = pkg.version
	apiKey: string
	api: InstanceType<typeof API>
	message;
	optins;

	constructor(options: { apiKey: string } = { apiKey: null }) {
		let { apiKey } = options
		if (!apiKey) {
			throw new Error('`apiKey` is mandatory')
		}
		this.apiKey = apiKey
		this.api = new API({ apiKey })
		
		this.addResources()
	}

	addResources() {
		this.message = Message(this.api)
		this.optins = Optins(this.api)
	}
}

module.exports = Gupshup