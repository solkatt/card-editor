const express = require('express')
const app = express()

const cors = require('cors')
require('dotenv').config({ path: 'config.env' })

const PORT = process.env.PORT || 5000

const db = require('./db/db')

app.use(cors())
app.use(express.json())

// app.use(require('./routes/record'))

app.use(require('./routes/editor'))

app.use(require('./routes/s3'))
const path = require('path')

// const dbo = require('./db/db')

db.on('error', console.log.bind(console, 'MongoDB connection error:'))

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, './client/build')))

	app.get('/*', function (req, res) {
		const index = path.join(__dirname, './client/build/index.html')
		res.sendFile(index)
	})
}

app.listen(PORT, () => {
	console.log(`Server up and running on port: ${PORT}`)
})

// app.listen(port, () => {
// 	dbo.connectToServer(function (err) {
// 		if (err) console.log(err)
// 	})
// 	console.log(`Server is running on port ${port}`)
// })
