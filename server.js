const express = require('express')
const app = express()

const cors = require('cors')
require('dotenv').config({ path: 'config.env' })
const path = require('path')
const db = require('./db/db')

const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use(require('./routes/editor'))
app.use(require('./routes/s3'))

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
