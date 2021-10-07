import ScaleSlider from './ScaleSlider'

const TextControls = (props) => {
	const { selected, objIndex, handleChange, handleTextChange } = props

	return (
		<div className='object-details'>
			<span>Current obj ID: {selected ? selected.uuid : ''}</span>
			{/* <span>ScaleX: {selected ? selected.scale.x : ''} </span> */}
			<span>Index: {objIndex} </span>

			<div className='slidecontainer'>
				<ScaleSlider
					selected={selected}
					handleChange={handleChange}
					max={0.2}
					defaultValue={0.1}
				/>
				<input
					style={{
						height: '4rem',
						borderRadius: '4px',
						border: '1px #c2c2c2 solid',
					}}
					type='text'
					defaultValue={selected.text}
					onChange={(e) => handleTextChange(e)}
				/>
			</div>
		</div>
	)
}

export default TextControls
