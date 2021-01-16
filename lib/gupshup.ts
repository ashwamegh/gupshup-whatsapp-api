'use strict'

const pkg = require('./../package.json')
import API from './api'

export default class Gupshup {
	static VERSION = pkg.version
	apiKey: string
	api: InstanceType<typeof API>

	constructor(options: { apiKey: string } ) {
		let { apiKey } = options
		if (!apiKey) {
			throw new Error('`apiKey` is mandatory')
		}
		this.apiKey = apiKey
		this.api = new API({ apiKey });
		
		this.addResources()
	}

	addResources() {
		Object.assign(this, {
			
		})
	}
}