import React, { useContext } from 'react'
import { styled } from '@mui/material/styles'
import Fab from '@mui/material/Fab'
import Box from '@mui/material/Box'

import AddIcon from '@mui/icons-material/Add'
import ImageIcon from '@mui/icons-material/Image'

import axios from 'axios'
import api from '../../../../api'

//Context
import EditorContext from '../../../../context/EditorContext'

const Input = styled('input')({
	display: 'none',
})

export default function AddImageFAB(props) {
	const { setContentState, setSelected, createImg, setIsLoading } =
		useContext(EditorContext)

	const handleUpload = async (e) => {
		setIsLoading(true)

		const file = e.target.files[0]
		const { url } = await api.getSecureUrl()

		const headers = {
			'Content-Type': 'multipart/form-data',
		}

		await axios
			.put(url, file, headers)
			.then((res) => {
				console.log(res.data)
				setIsLoading(false)
			})
			.catch((err) => {
				console.log(err)
				setIsLoading(false)
			})
		setIsLoading(false)

		let imageUrl = url.split('?')[0]

		const item = {
			type: 'PlaneGeometry',
			url: imageUrl,
		}
		const mesh = createImg(item)
		setContentState((prevState) => [...prevState, mesh])
		setSelected(mesh)
	}

	return (
		<Box sx={{ '& > :not(style)': { m: 1 } }}>
			<Input
				accept='image/*'
				id='contained-button-file'
				multiple
				type='file'
				onChange={handleUpload}
			/>
			<label htmlFor='contained-button-file'>
				<Fab
					color='primary'
					aria-label='add'
					component='span'
					variant='extended'
				>
					<AddIcon />
					<ImageIcon />
				</Fab>
			</label>
		</Box>
	)
}
