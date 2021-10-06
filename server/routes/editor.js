const express = require('express')

const router = express.Router()

const dbo = require('../db/db')

const ObjectId = require('mongodb').ObjectId

//// controller
const EditorCtrl = require('../controllers/editorCtrl')

////

router.post('/editor/design/add', EditorCtrl.createDesign)
router.get('/editor/design/:id', EditorCtrl.getDesignById)

//////

// // This section will help you create a new record.
// router.route('/editor/add').post((req, response) => {
// 	let db_connect = dbo.getDb()

// 	console.log(req.body)
// 	const { designName, designContent } = req.body

// 	// TODO - DesignContent Schema
// 	let design = {
// 		designName: designName,
// 		designContent: [designContent],
// 	}

// 	db_connect.collection('designs').insertOne(design, (err, res) => {
// 		if (err) throw err
// 		response.json(res)
// 	})
// })

// // This section will help you get a list of all the records.
// router.route('/editor/design/:id').get((req, response) => {
// 	let db_connect = dbo.getDb('employees')
// 	db_connect
// 		.collection('records')
// 		.find({})
// 		.toArray((err, res) => {
// 			if (err) throw err
// 			response.json(res)
// 		})
// })

module.exports = router
