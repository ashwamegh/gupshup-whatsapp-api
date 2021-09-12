const chai = require('chai');
const assert = chai.assert;

const gupshupInstance = require('./../gupshup');

const messagePrefix = {
	channel : "whatsapp",
	source : "917834811114",
	destination : "918587099540",
	'src.name': "GupshupAppTest"
}

describe('MESSAGES', () => {
	it('Should be able to send text message', (done) => {
			gupshupInstance.message.send({
				...messagePrefix,
				message : {
					isHSM: "false",
					type: "text",
					text: "hi there"
				}
			}).then((result) => {
				assert.equal(result.status, 'submitted');
				done();
			}).catch(err => done(new Error(JSON.stringify(err))))
	}).timeout(5000)

	it('Should be able to send template text message', (done) => {
		gupshupInstance.message.send({
			...messagePrefix,
			message : {
				isHSM: "true",
				type: "text",
				text: "Hi Ashwamegh, your order is confirmed and will be delivered to you by 15 Feb"
			}
		}).then((result) => {
			assert.equal(result.status, 'submitted');
			done();
		}).catch(err => done(new Error(JSON.stringify(err))))
	}).timeout(5000)

	it('Should be able to send image message', (done) => {
		gupshupInstance.message.send({
			...messagePrefix,
			message : {
				type: "image",
				originalUrl: "https://www.buildquickbots.com/whatsapp/media/sample/jpg/sample01.jpg",
				previewUrl: "https://www.buildquickbots.com/whatsapp/media/sample/jpg/sample01.jpg",
				caption:"Sample image"
			}
		}).then((result) => {
			assert.equal(result.status, 'submitted');
			done();
		}).catch(err => done(new Error(JSON.stringify(err))))
	}).timeout(5000)

	it('Should be able to send message with documents/files', (done) => {
		gupshupInstance.message.send({
			...messagePrefix,
			message : {
				type: "file",
				url: "https://www.buildquickbots.com/whatsapp/media/sample/pdf/sample01.pdf",
				filename: "Sample file"
			}
		}).then((result) => {
			assert.equal(result.status, 'submitted');
			done();
		}).catch(err => done(new Error(JSON.stringify(err))))
	}).timeout(5000)


	it('Should be able to send message with audio', (done) => {
		gupshupInstance.message.send({
			...messagePrefix,
			message : {
				type: "audio",
				url: "https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3"
			}
		}).then((result) => {
			assert.equal(result.status, 'submitted');
			done();
		}).catch(err => done(new Error(JSON.stringify(err))))
	}).timeout(5000)

	it('Should be able to send message with video', (done) => {
		gupshupInstance.message.send({
			...messagePrefix,
			message : {
				type: "video",
				url:"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
				caption:"Sample video"
			}
		}).then((result) => {
			assert.equal(result.status, 'submitted');
			done();
		}).catch(err => done(new Error(JSON.stringify(err))))
	}).timeout(5000)

	it('Should be able to send message with location', (done) => {
		gupshupInstance.message.send({
			...messagePrefix,
			message : {
				type: "location",
				longitude: 43.43,
				latitude: 33.34,
				name: "Name of the location",
				address: "Postal address"
			}
		}).then((result) => {
			assert.equal(result.status, 'submitted');
			done();
		}).catch(err => done(new Error(JSON.stringify(err))))
	}).timeout(5000)

	it('Should be able to send message with contact card', (done) => {
		gupshupInstance.message.send({
			...messagePrefix,
			message : {
				type: "contact",
				contact: {
					addresses: [
						{
							city: "Menlo Park",
							country: "United States",
							countryCode: "us",
							state: "CA",
							street: "1 Hacker Way",
							type: "HOME",
							zip: "94025"
						},
						{
							city: "Menlo Park",
							country: "United States",
							countryCode: "us",
							state: "CA",
							street: "200 Jefferson Dr",
							type: "WORK",
							zip: "94025"
						}
					],
					birthday: "2012-08-18",
					emails: [
						{
							email: "test@fb.com",
							type: "WORK"
						},
						{
							email: "test@whatsapp.com",
							type: "WORK"
						}],
					name: {
						firstName: "John",
						formattedName: "John Smith",
						lastName: "Smith"
					},
					org: {
						company: "WhatsApp",
						department: "Design",
						title: "Manager"
					},
					phones: [
						{
							phone: "+1 (940) 555-1234",
							type: "HOME"
						},
						{
							phone: "+1 (650) 555-1234",
							type: "WORK",
							wa_id: "16505551234"
						}
					],
					urls: [
						{
							url: "https://www.facebook.com",
							type: "WORK"
						}
					]
				}
			}
		}).then((result) => {
			assert.equal(result.status, 'submitted');
			done();
		}).catch(err => done(new Error(JSON.stringify(err))))
	}).timeout(5000)

	it('Should be able to send message with sticker', (done) => {
		gupshupInstance.message.send({
			...messagePrefix,
			message : {
				type: 'sticker',
				url:"https://cdn.getstickerpack.com/storage/uploads/sticker-pack/tunes-traffic/7.png"
			}
		}).then((result) => {
			assert.equal(result.status, 'submitted');
			done();
		}).catch(err => done(new Error(JSON.stringify(err))))
	}).timeout(5000)

	it('Should be able to send message with quick reply options', (done) => {
		gupshupInstance.message.send({
			...messagePrefix,
			message : {
				type: "quick_reply",
				msgid: "qr1",
				content: {type:"text", header:"Hello", text:"Hello testing", caption:"Select one option"},
				options: [{type:"text", title:"First"},{type:"text", title:"Second"}, {type:"text", title:"Third"}]
			}
		}).then((result) => {
			assert.equal(result.status, 'submitted');
			done();
		}).catch(err => done(new Error(JSON.stringify(err))))
	}).timeout(5000)
})