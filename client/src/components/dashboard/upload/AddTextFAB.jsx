import * as React from 'react'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import ImageIcon from '@mui/icons-material/Image'
import TextFieldsIcon from '@mui/icons-material/TextFields'

export default function AddTextFAB() {
	// const { setContentState } = props

	return (
		<Box sx={{ '& > :not(style)': { m: 1 } }}>
			<Fab color='primary' aria-label='add' variant='extended'>
				<AddIcon />
				<TextFieldsIcon />
			</Fab>
		</Box>
	)
}
