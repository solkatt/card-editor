import { useContext } from 'react'
import EditorContext from '../../../../context/EditorContext'

import ScaleSlider from './ScaleSlider'

const ImgControls = (props) => {
	const { handleChange } = props
	const { selected, scale } = useContext(EditorContext)

	return (
		<div className='object-details'>
			<span>Current obj ID: {selected ? selected.uuid : ''} </span>

			<div className='slidecontainer'>
				<h2>{scale}</h2>

				<ScaleSlider
					selected={selected}
					handleChange={handleChange}
					max={0.1}
					defaultValue={0.05}
				/>
			</div>
		</div>
	)
}

export default ImgControls
