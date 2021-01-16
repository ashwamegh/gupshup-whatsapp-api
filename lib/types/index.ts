"use strict";

export interface MessagePayload {
	isHSM: string // true (for template message) || false (for session message)
	type: 'text'| 'audio'| 'video'| 'file'| 'image'
	text?: string // The text message to be sent to the customer, in case of type=text, Eg: 'Hello, World!'
	url?: string // The public URL where the file / audio / video attachment to be sent to the customer is hosted, Eg: https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3
	originalUrl?: string // he public URL where the image to be sent to the customer is hosted. Only to be sent for type = image, Eg: https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg
	previewUrl?: string // The public URL where a thumbnail of the image to be sent to the customer is hosted. Only to be sent for type = image, Eg: https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg
	caption?: string // Add caption to media messages, applicable to media type = image|video|file, Eg: Media caption text
}

export interface MessageBody {
	channel: string // Eg: whatsapp
	destination: string // Eg: 919876543210
	source: string // Business number (from which message is sent) Eg: 917834811114
	message: MessagePayload
	'src.name'?: string // Your whatsapp name Eg: DemoApp, required for Sandbox app
}