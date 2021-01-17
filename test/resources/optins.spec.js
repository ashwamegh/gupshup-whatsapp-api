'use strict'

const chai = require('chai')
const assert = chai.assert
const gupshupInstance = require('../gupshup')

const gupshupAppName = 'GupshupAppTest'

describe('USER OPTINS', () => {
	it('should be able to fetch optin users list', (done) => {
		gupshupInstance.optins.getUsers(gupshupAppName)
		.then(result => {
			assert.equal(result.status, 'success');
			done();
		})
		.catch(err => done(new Error(JSON.stringify(err))))
	}).timeout(5000)

	it('should be able to send optin requests to users', (done) => {
		gupshupInstance.optins.sendUserOptinRequest({
			appName: gupshupAppName,
			userMobileNumber: 918587099540
		})
		.then(result => {
			assert.equal(result.status, '202');
			done();
		})
		.catch(err => done(new Error(JSON.stringify(err))))
	}).timeout(5000)

})