import * as React from 'react'

import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

export default function ScaleSlider(props) {
	const { selected, handleChange, max } = props

	return (
		<>
			<Box width={300}>
				<Slider
					size='small'
					defaultValue={selected.scale.x}
					value={selected.scale.x}
					aria-label='Small'
					min={0.01}
					max={max}
					step={0.001}
					onChange={(e) => handleChange(e)}
				/>
			</Box>
		</>
	)
}
