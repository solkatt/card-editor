const mongoose = require('mongoose')

const designContent = require('./designContentModel').schema

const schema = new mongoose.Schema(
	{
		designName: String,
		designContent: [designContent],
	},
	{ timestamps: true },
	{ collection: 'designs' }
)

module.exports = mongoose.model('Design', schema)
