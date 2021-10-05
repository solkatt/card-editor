const express = require('express')
const s3Routes = express.Router()

const s3 = require("../services/s3");


s3Routes.route('/s3Url').get( async (req, res) => {


  const url = await s3.generateUploadURL()
  res.send({
    url
  })
})



module.exports = s3Routes
