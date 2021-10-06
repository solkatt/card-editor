const mongoose = require('mongoose')

const designContentSchema = new mongoose.Schema({
	type: String,
	position: Object,
	scale: Object,
	url: String,
	text: String,
	uuid: String,
})

const DesignContent = mongoose.model('DesignContent', designContentSchema)

module.exports = DesignContent
