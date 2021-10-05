import * as React from 'react'

import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

export default function ScaleSlider(props) {
	const { selected, handleChange } = props
	return (
		<>
			<h2>{selected.scale.x}</h2>

			<Box width={300}>
				<Slider
					size='small'
					defaultValue={selected.scale.x}
					aria-label='Small'
					valueLabelDisplay='auto'
					min={0.01}
					max={2}
					step={0.01}
					onChange={(e) => handleChange(e)}
				/>
			</Box>
		</>
	)
}
