import axios from 'axios'

const UploadButton = () => {



  const handleUpload = async (e) => {
    const file = e.target.files[0]

    // return axios.get('http://localhost:5000/s3Url').then((res) => res.data)
    const {url} = await getSecureUrl()
    console.log(url)

    const headers = {
      'Content-Type': 'multipart/form-data',
    }
    
    

     axios.put(url, file, headers).then(res => console.log(res.data))
  

     const imageUrl = url.split('?')[0]
     console.log(imageUrl)
  }

  const getSecureUrl = async () => {
    return axios.get('http://localhost:5000/s3Url').then((res) => res.data)
  }

  return (
    <>
      <input
        type="file"
        accept="image/*"
        id="actual-btn"
        style={{ display: 'none' }}
        onChange={handleUpload}
      />


      <label htmlFor="actual-btn"
        style={{
          background: 'orange',
          border: '2px solid white'
        }}
      >Choose File</label>

    </>)
}

export default UploadButton


// let config = {
//   headers: {
//     header1: value,
//   }
// }

// let data = {
//   'HTTP_CONTENT_LANGUAGE': self.language
// }

// axios.post(URL, data, config).then(...)