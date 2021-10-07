import * as React from 'react'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import ImageIcon from '@mui/icons-material/Image'
import TextFieldsIcon from '@mui/icons-material/TextFields'

import { extend } from '@react-three/fiber'
import { Text } from 'troika-three-text'

extend({ Text })

export default function AddTextFAB(props) {
	let { setContentState } = props

	const handleAddText = () => {
		let text = new Text()

		text.text = 'Text'
		text.fontSize = 3
		text.color = 0x9966ff

		text.textAlign = 'justify'
		text.anchorX = 'left'
		text.anchorY = 'middle'

		text.position.x = -0.5
		text.position.y = 0
		// text.position.z = 0.1
		text.scale.set(0.2, 0.2, 0.2)
		console.log('text addBtn', text.scale)
		text.sync()

		setContentState((prevState) => [...prevState, text])
	}

	return (
		<Box sx={{ '& > :not(style)': { m: 1 } }}>
			<Fab
				color='primary'
				aria-label='add'
				variant='extended'
				onClick={handleAddText}
			>
				<AddIcon />
				<TextFieldsIcon />
			</Fab>
		</Box>
	)
}
