"use strict";

interface ContactAddress {
	city: string // Eg: "Menlo Park",
	country: string // Eg: "United States",
	countryCode: string // Eg: "us",
	state: string // Eg: "CA",
	street: string // Eg: "1 Hacker Way",
	type: string // Eg: "HOME",
	zip: string //Eg: "94025"
}

interface ContactEmail {
	email: string // Eg: "test@fb.com",
	type: string // Eg: "WORK"
}

interface ContactName {
	firstName: string // Eg: "John",
	formattedName: string // Eg: "John Smith",
	lastName: string // Eg: "Smith"
}

interface ContactOrg {
	company: string // Eg: "WhatsApp",
	department: string // Eg: "Design",
	title: string // Eg: "Manager"
}

interface ContactPhone {
	phone: string // Eg: "+1 (650) 555-1234",
	type: string // Eg: "WORK",
	wa_id?: string // Eg: "16505551234"
}

interface ContactUrl {
	url: string // Eg: "https://www.facebook.com",
	type: string // Eg: "WORK"
}

interface ContactCard {
	addresses: [ContactAddress]
	birthday: string // Eg: "2012-08-18"
	emails: [ContactEmail]
	name: ContactName
	org: ContactOrg
	phones: [ContactPhone]
	url: [ContactUrl]
}

export interface MessagePayload {
	[key: string]: any; // For fixing Query String type error
	isHSM?: string // true (for template message) || false (for session message)
	type: 'text'| 'audio'| 'video'| 'file'| 'image' | 'location'| 'contact'| 'sticker'
	text?: string // The text message to be sent to the customer, in case of type=text, Eg: 'Hello, World!'
	url?: string // The public URL where the file / audio / video attachment to be sent to the customer is hosted, Eg: https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3
	originalUrl?: string // The public URL where the image to be sent to the customer is hosted. Only to be sent for type = image, Eg: https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg
	previewUrl?: string // The public URL where a thumbnail of the image to be sent to the customer is hosted. Only to be sent for type = image, Eg: https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg
	caption?: string // Add caption to media messages, applicable to media type = image|video|file, Eg: Media caption text,

	// For sending location
	longitude?: number // Eg: 43.43
	latitude?: number // Eg: 33.34
	name?: string // "Name of the location",
	address?: string // "Postal address"

	// For Sending Contact Card
	contact?: ContactCard
}

export interface MessageBody {
	[key: string]: any; // For fixing Query String type error
	channel: string // Eg: whatsapp
	destination: string // Eg: 919876543210
	source: string // Business number (from which message is sent) Eg: 917834811114
	message: MessagePayload
	'src.name'?: string // Your whatsapp name Eg: DemoApp, required for Sandbox app
}