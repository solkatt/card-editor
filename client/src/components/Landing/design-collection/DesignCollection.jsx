import React, { useEffect, useState } from 'react'
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

const DesignCollection = () => {
	const [designs, setDesigns] = useState([])
	const history = useHistory()

	useEffect(() => {
		loadDesigns()
	}, [])

	const loadDesigns = async () => {
		// const { storeID } = this.state.store._id

		// console.log(id)
		// this.setState({ isLoading: true })

		await api.getAllDesigns().then(
			(designs) => {
				console.log('from db:', designs)
				setDesigns(designs.data.data)

				// isLoading: false,
				console.log(designs)
			},
			(err) => {
				console.log(err)

				// isLoading: false,
			}
		)

		// this.setState({ isLoading: false })
	}

	const handleClick = (id) => {
		alert(id)
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
								<ListItem disablePadding>
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
