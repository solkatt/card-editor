import * as React from 'react'
import { styled } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
import Fab from '@mui/material/Fab'
import Box from '@mui/material/Box'

import AddIcon from '@mui/icons-material/Add'
import ImageIcon from '@mui/icons-material/Image'

import axios from 'axios'
import { createImg } from '../../editor/loadContent'

const Input = styled('input')({
	display: 'none',
})

export default function AddImageFAB(props) {
	const { setContentState, setSelected } = props

	const handleUpload = async (e) => {
		const file = e.target.files[0]

		// return axios.get('http://localhost:5000/s3Url').then((res) => res.data)
		const { url } = await getSecureUrl()
		console.log(url)

		const headers = {
			'Content-Type': 'multipart/form-data',
		}

		await axios.put(url, file, headers).then((res) => console.log(res.data))
		let imageUrl = url.split('?')[0]

		console.log(imageUrl)

		const item = {
			type: 'PlaneGeometry',
			url: imageUrl,
		}
		const mesh = createImg(item)
		setContentState((prevState) => [...prevState, mesh])
		setSelected(mesh)

	}

	const getSecureUrl = async () => {
		return axios.get('http://localhost:5000/s3Url').then((res) => res.data)
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
