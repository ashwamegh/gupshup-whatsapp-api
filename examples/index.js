const Gupshup = require('gupshup-whatsapp-sdk');

const client = new Gupshup({
	apiKey: 'faefecf791f34cc8cce8976357a15f57'
});


client.message.send({
	channel : "whatsapp",
	source : "917384811114",
	destination : "918587099540",
	'src.name': "richpanelTestAPI",
	message : {
		isHSM: "false",
		type: "text",
		text: "Hi John, your order is confirmed and will be delivered to you by 15 Feb"
	}
}).then((repos) => console.log(repos)).catch(err => console.error(err))