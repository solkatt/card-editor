require('dotenv').config({path: 'config.env'})
const aws = require('aws-sdk')

const region = 'eu-north-1'
const bucketName = 'event-go-editor-images'
const accessKeyId = process.env.S3_ACCESS_KEY_ID
const secretAccessKey = process.env.S3_SECRET_ACCESS_KEY


const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: 'v4'
});



const generateUploadURL = async (props) => {
  const imageName = 'koom'

  const params = {
    Bucket: bucketName,
    Key: imageName,
    Expires: 60
  }

  const uploadURL = await s3.getSignedUrlPromise('putObject', params)
  return uploadURL
}



module.exports = {
  generateUploadURL: generateUploadURL

}