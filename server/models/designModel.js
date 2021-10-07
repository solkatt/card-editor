const mongoose = require('mongoose')

const DesignContent = require('./designContentModel').schema

const schema = new mongoose.Schema(
	{
		designName: String,
		designContent: [DesignContent],
	},
	{ timestamps: true },
	{ collection: 'designs' }
)

module.exports = mongoose.model('Design', schema)
