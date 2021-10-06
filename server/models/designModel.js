const mongoose = require('mongoose')

const designContent = require('./designContentModel').schema

const schema = new mongoose.Schema({
	name: String,
	designContent: [designContent],
})

module.exports = mongoose.model('Design', schema)
