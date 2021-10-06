// const express = require('express')

// const recordRoutes = express.Router()

// // This will help us connect to the database
// const dbo = require('../db/db')

// // This help convert the id from string to ObjectId for the _id.
// const ObjectId = require('mongodb').ObjectId

// // This section will help you get a list of all the records.
// recordRoutes.route('/record').get((req, response) => {
// 	let db_connect = dbo.getDb('employees')
// 	db_connect
// 		.collection('records')
// 		.find({})
// 		.toArray((err, res) => {
// 			if (err) throw err
// 			response.json(res)
// 		})
// })

// // This section will help you create a new record.
// recordRoutes.route('/record/add').post((req, response) => {
// 	let db_connect = dbo.getDb()

// 	console.log(req.body)
// 	let myobj = {
// 		person_name: req.body.person_name,
// 		person_position: req.body.person_position,
// 		person_level: req.body.person_level,
// 	}

// 	db_connect.collection('records').insertOne(myobj, (err, res) => {
// 		if (err) throw err
// 		response.json(res)
// 	})
// })

// // This section will help you update a record by id.
// recordRoutes.route('/record/update/:id').post((req, res) => {
// 	let db_connect = dbo.getDb()
// 	let myquery = { _id: ObjectId(req.params.id) }
// 	let newvalues = {
// 		$set: {
// 			person_name: req.body.person_name,
// 			person_position: req.body.person_position,
// 			person_level: req.body.person_level,
// 		},
// 	}
// 	db_connect
// 		.collection('records')
// 		.updateOne(myquery, newvalues, (err, res) => {
// 			if (err) throw err
// 			console.log('One document updated')
// 			response.json(res)
// 		})
// })

// // This section will help you delete a record
// recordRoutes.route('/:id').delete((req, res) => {
// 	let db_connect = dbo.getDb()
// 	let myquery = { _id: ObjectId(req.params.id) }
// 	db_connect.collection('records').deleteOne(myquery, (err, res) => {
// 		if (err) throw err
// 		console.log('One document deleted')
// 		response.json(res)
// 	})
// })

// module.exports = recordRoutes
