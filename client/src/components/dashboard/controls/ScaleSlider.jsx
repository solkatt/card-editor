import * as React from 'react'

import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

export default function ScaleSlider(props) {
	const { selected, handleChange, max } = props



	return (
		<>
			<h2>{selected.scale.x}</h2>

			<Box width={300}>
				<Slider
  			
					size='small'
					value={props.selected.scale.x ? props.selected.scale.x  : ""}
					aria-label='Small'
					valueLabelDisplay='auto'
					min={0.01}
					max={max}
					step={0.001}
					onChange={(e) => handleChange(e)}
				/>
			</Box>
		</>
	)
}
