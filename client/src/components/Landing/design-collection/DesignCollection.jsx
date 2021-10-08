import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'

/// MUI
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import LabelIcon from '@mui/icons-material/Label'

import api from '../../../api'

import EditorContext from '../../../context/EditorContext'

const DesignCollection = () => {
	const [designs, setDesigns] = useState([])
	const history = useHistory()
	const { setIsLoading } = useContext(EditorContext)

	useEffect(() => {
		loadDesigns()
	}, [])

	const loadDesigns = async () => {
		// setIsLoading(true)

		await api.getAllDesigns().then(
			(designs) => {
				setDesigns(designs.data.data)

				// setIsLoading(false)
			},
			(err) => {
				console.log(err)

				// setIsLoading(false)
			}
		)

		// setIsLoading(false)
	}

	const handleClick = (id) => {
		history.push(`/editor/design/${id}`)

		///
	}

	return (
		<div className='design-collection'>
			<h2>DesignCollection</h2>

			<Box
				sx={{
					width: '100%',
					maxWidth: 360,
					bgcolor: 'background.paper',
				}}
			>
				<nav aria-label='main mailbox folders'>
					<List>
						{designs.map((design) => {
							return (
								<ListItem disablePadding key={design._id}>
									<ListItemButton
										onClick={() => handleClick(design._id)}
									>
										<ListItemIcon>
											<LabelIcon />
										</ListItemIcon>
										<ListItemText
											primary={design.designName}
										/>
									</ListItemButton>
								</ListItem>
							)
						})}
					</List>
				</nav>
			</Box>
		</div>
	)
}

export default DesignCollection
