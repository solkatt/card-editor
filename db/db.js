// const {
//   MongoClient
// } = require('mongodb')

// const Db = process.env.ATLAS_URI

// const client = new MongoClient(Db, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })

// var _db;

const mongoose = require('mongoose')
const url = process.env.ATLAS_URI

mongoose
	.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
	.catch((e) => {
		console.error('Connection error', e.message)
	})

const db = mongoose.connection

module.exports = db
