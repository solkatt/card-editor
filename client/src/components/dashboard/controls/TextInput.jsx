import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

export default function TextInput(props) {
	const { selected, handleTextChange, setTextContent } = props

	return (
		<Box
			component='form'
			sx={{
				'& .MuiTextField-root': { m: 1, width: '25ch' },
			}}
			noValidate
			autoComplete='off'
		>
			<div>
				<TextField
					// id='outlined-multiline-flexible'
					// label='Outlined'
					// multiline
					defaultValue={selected.text}
					rows={4}
					value={selected.text}
					onChange={(e) => handleTextChange(e)}
				/>
			</div>
			<h2>{console.log(selected.text)}</h2>
		</Box>
	)
}
