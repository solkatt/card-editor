const UploadButton = () => {



  const handleUpload = (e) => {
console.log(e.target.files[0])
    // alert('upload')
  }
  return (
    <>
      <input 
      type="file" 
      accept="image/*"
      id="actual-btn" 
      style={{display: 'none'}}
      onChange={handleUpload}
      />

  
      <label for="actual-btn" 
      style={{
        background: 'orange',
        border: '2px solid white'
      }}
      >Choose File</label>

    </>)
}

export default UploadButton