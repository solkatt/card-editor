import React, { useContext } from 'react'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import Button from '@mui/material/Button'

import EditorContext from '../../context/EditorContext'

export default function Loader() {
	const { isLoading } = useContext(EditorContext)
	console.log(isLoading)
	return (
		<div>
			<Backdrop
				sx={{
					color: '#fff',
					zIndex: (theme) => theme.zIndex.drawer + 1,
				}}
				open={isLoading}
			>
				<CircularProgress color='inherit' />
			</Backdrop>
		</div>
	)
}
