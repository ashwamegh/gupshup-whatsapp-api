# Gupshup WhatsApp API

## About

This is an unofficial library to leverage Gupshup Whatsapp API to be able to send Outbound messages of types (text, templates, video, audio, location, contact card, stickers, images).

> Note: It dooes not connect with the Inbound APIs (that are responsible for receiving messages from customers)

## Installation

```bash
npm i gupshup-whatsapp-api
```
or
```bash
yarn add gupshup-whatsapp-api
```

## Basic Usage

You will be needed to create gupshup instance with provided `apiKey`. You can obtain the api key from Whatsapp Dashboard (https://www.gupshup.io/whatsapp/dashboard) for your specific app or if you are testing with the sandbox application.

```javascript
const Gupshup = require('gupshup-whatsapp-api')

let client = new Gupshup({
	apiKey: 'YOUR_API_KEY'
});
```

## Supported Resources

### Messages

**1. Send Text Message**

```javascript
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
```

**2. Send Template Message**

```javascript
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
```

**3. Send Image as a Message**
- Supported Content-Types: image/jpeg, image/png
- maximum file size: 5 MB

```javascript
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
```

**4. Send Document/File as a Message**
- Supported Content-Types: Any valid MIME-type
- maximum file size: 100 MB

```javascript
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
```

**5. Send Audio as a Message**
- Supported Content-Types: audio/aac, audio/mp4, audio/amr, audio/mpeg, audio/ogg; codecs=opus. Note: The base audio/ogg type is not supported.
- maximum file size: 16 MB

```javascript
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
```

**6. Send Video as a Message**
- Supported Content-Types: video/mp4, video/3gpp. Note: Only H.264 video codec and AAC audio codec is supported.
- maximum file size: 16 MB

```javascript
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
```

**6. Send Location as a Message**

```javascript
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
```

**7. Send Contact Card as a Message**

```javascript
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
```

**8. Send Sticker as a Message**

```javascript
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
```

#### Messages API Response
```json
{	"status":"submitted",
	"messageId":"ee4a68a0-1203-4c85-8dc3-49d0b3226a35"
}
```

### User Opt-ins

**1. Get Opt-in users list**

```javascript
client.optins.getUsers('GupshupAppTest')
.then((response) => {
	console.log("Optins User list: ", response)
}).catch(err => {
	console.log("Optins User list error: ", err)
})
```

#### API Response
```json
{
	"status": "success",
	"users": [
		{
			"countryCode": "91",
			"lastMessageTimeStamp": 1585593959851,
			"optinSource": "URL",
			"optinStatus": "OPT_IN",
			"optinTimeStamp": 1585504095053,
			"phoneCode": "8x98xx21x4"
		}
	]
}
```

**2. Send User Opt-in Request**

```javascript
client.optins.sendUserOptinRequest({
	appName: 'GupshupAppTest',
	userMobileNumber: 919876543210
})
.then((response) => {
	console.log("Optin request sent: ", response)
}).catch(err => {
	console.log("Optin request error: ", err)
})
```

#### API Response
```json
{
	"status": 202
}
```
