const Gupshup = require('gupshup-whatsapp-api');

const client = new Gupshup({
	apiKey: 'YOUR_API_KEY'
});

// Sending Text Message
client.message.send({
	channel : "whatsapp",
	source : "917834811114",
	destination : "919876543210",
	'src.name': "GupshupAppTest",
	message : {
		isHSM: "false",
		type: "text",
		text: "hi there"
	}
}).then((response) => {
	console.log("Text message sent", response)
}).catch(err => {
	console.log("Text message err:", err)
})

// Sending Template Text Message
client.message.send({
	channel : "whatsapp",
	source : "917834811114",
	destination : "919876543210",
	'src.name': "GupshupAppTest",
	message : {
		isHSM: "true",
		type: "text",
		text: "Hi Ashwamegh, your order is confirmed and will be delivered to you by 15 Feb"
	}
}).then((response) => {
	console.log("Template text message sent", response)
}).catch(err => {
	console.log("Template text message err:", err)
})

// Send Image Message
// - Supported Content-Types: image/jpeg, image/png
// - maximum file size: 5 MB
client.message.send({
	channel : "whatsapp",
	source : "917834811114",
	destination : "919876543210",
	'src.name': "GupshupAppTest",
	message : {
		type: "image",
		originalUrl: "https://www.buildquickbots.com/whatsapp/media/sample/jpg/sample01.jpg",
		previewUrl: "https://www.buildquickbots.com/whatsapp/media/sample/jpg/sample01.jpg",
		caption:"Sample image"
	}
}).then((response) => {
	console.log("Image message sent", response)
}).catch(err => {
	console.log("Image message err:", err)
})

// Send document/ file message
// - Supported Content-Types: Any valid MIME-type
// - maximum file size: 100 MB
client.message.send({
	channel : "whatsapp",
	source : "917834811114",
	destination : "919876543210",
	'src.name': "GupshupAppTest",
	message : {
		type: "file",
		url: "https://www.buildquickbots.com/whatsapp/media/sample/pdf/sample01.pdf",
		filename: "Sample file"
	}
}).then((response) => {
	console.log("Document message sent", response)
}).catch(err => {
	console.log("Document message err:", err)
})


// Send Audio Message
// - Supported Content-Types: audio/aac, audio/mp4, audio/amr, audio/mpeg, audio/ogg; codecs=opus. Note: The base audio/ogg type is not supported.
// - maximum file size: 16 MB
client.message.send({
	channel : "whatsapp",
	source : "917834811114",
	destination : "919876543210",
	'src.name': "GupshupAppTest",
	message : {
		type: "audio",
		url: "https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3"
	}
}).then((response) => {
	console.log("Audio message sent", response)
}).catch(err => {
	console.log("Audio message err:", err)
})

// Send Video Message
// - Supported Content-Types: video/mp4, video/3gpp. Note: Only H.264 video codec and AAC audio codec is supported.
// - maximum file size: 16 MB
client.message.send({
	channel : "whatsapp",
	source : "917834811114",
	destination : "919876543210",
	'src.name': "GupshupAppTest",
	message : {
		type: "video",
		url:"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
		caption:"Sample video"
	}
}).then((response) => {
	console.log("Video message sent", response)
}).catch(err => {
	console.log("Video message err:", err)
})

// Send location Message
client.message.send({
	channel : "whatsapp",
	source : "917834811114",
	destination : "919876543210",
	'src.name': "GupshupAppTest",
	message : {
		type: "location",
		longitude: 43.43,
		latitude: 33.34,
		name: "Name of the location",
		address: "Postal address"
	}
}).then((response) => {
	console.log("Location message sent", response)
}).catch(err => {
	console.log("Location message err:", err)
})


// Send Contact Card Message
client.message.send({
	channel : "whatsapp",
	source : "917834811114",
	destination : "919876543210",
	'src.name': "GupshupAppTest",
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
}).then((response) => {
	console.log("Contact Card sent", response)
}).catch(err => {
	console.log("Contact Card err:", err)
})


// Send sticker Message
client.message.send({
	channel : "whatsapp",
	source : "917834811114",
	destination : "919876543210",
	'src.name': "GupshupAppTest",
	message : {
		type: 'sticker',
		url:"https://cdn.getstickerpack.com/storage/uploads/sticker-pack/tunes-traffic/7.png"
	}
}).then((response) => {
	console.log("Location message sent", response)
}).catch(err => {
	console.log("Location message err:", err)
})

// Get Opt-in User list
client.optins.getUsers('GupshupAppTest')
.then((response) => {
	console.log("Optins User list: ", response)
}).catch(err => {
	console.log("Optins User list error: ", err)
})

// Example response
// {
// 	"status": "success",
// 	"users": [
// 		{
// 			"countryCode": "91",
// 			"lastMessageTimeStamp": 1585593959851,
// 			"optinSource": "URL",
// 			"optinStatus": "OPT_IN",
// 			"optinTimeStamp": 1585504095053,
// 			"phoneCode": "8x98xx21x4"
// 		}
// 	]
// }

// Send User Optin Request
client.optins.sendUserOptinRequest({
	appName: 'GupshupAppTest',
	userMobileNumber: 919876543210
})
.then((response) => {
	console.log("Optin request sent: ", response)
}).catch(err => {
	console.log("Optin request error: ", err)
})

