import ScaleSlider from './ScaleSlider'

const ImgControls = (props) => {
	const { selected, scale, handleChange } = props

	return (
		<div className='object-details'>
			<span>Current obj ID: {selected ? selected.uuid : ''} </span>
			{/* <span>ScaleX: {selected ? selected.scale.x : ''} </span> */}

			<div className='slidecontainer'>
				<h2>{scale}</h2>

				<ScaleSlider selected={selected} handleChange={handleChange} max={0.1} />
			</div>
		</div>
	)
}

export default ImgControls
