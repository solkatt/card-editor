import ScaleSlider from './ScaleSlider'

const ImgControls = (props) => {
	const { selected, objIndex, scale, handleChange } = props

	return (
		<div className='object-details'>
			<span>Current obj ID: {selected ? selected.uuid : ''} </span>
			{/* <span>ScaleX: {selected ? selected.scale.x : ''} </span> */}
			<span>Index: {objIndex} </span>

			<div className='slidecontainer'>
				<h2>{scale}</h2>

				<ScaleSlider selected={selected} handleChange={handleChange} />
			</div>
		</div>
	)
}

export default ImgControls
