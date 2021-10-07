import { useContext } from 'react'
import EditorContext from '../../../context/EditorContext'
import ScaleSlider from './ScaleSlider'

const TextControls = (props) => {
	const { handleChange } = props
	const { selected, handleTextChange, textContent } =
		useContext(EditorContext)

	return (
		<div className='object-details'>
			<span>Current obj ID: {selected ? selected.uuid : ''}</span>

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
					value={textContent.value}
					onChange={(e) => handleTextChange(e)}
				/>
			</div>
		</div>
	)
}

export default TextControls
