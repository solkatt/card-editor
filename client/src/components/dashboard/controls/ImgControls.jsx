

const ImgControls = (props) => {

const {selected, objIndex, scale, handleChange} = props

  return (
    <div className='object-details'>
      <span>
        Current obj ID: {selected ? selected.uuid : ''}{' '}
      </span>
      {/* <span>ScaleX: {selected ? selected.scale.x : ''} </span> */}
      <span>Index: {objIndex} </span>

      <div className='slidecontainer'>
        <h2>{scale}</h2>
        <input
          onChange={(e) => handleChange(e)}
          // onChange={(e) =>
          // 	setScale([
          // 		e.target.value,
          // 		e.target.value,
          // 		e.target.value,
          // 	])
          // }
          type='range'
          min='0.05'
          max='1'
          step='0.01'
          value={selected.scale.x}
          className='slider'
          id='myRange'
        />
      </div>
    </div>

  )
}

export default ImgControls

