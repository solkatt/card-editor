import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import api from '../../../api'

import { useHistory } from 'react-router-dom'

const CreateBtn = (props) => {
	const [designName, setDesignName] = useState()
	const history = useHistory()

	const onSubmit = async () => {
		// this.setState({
		//     isLoading: true,
		// });

		const payload = {
			designName: designName,
			designContent: [],
		}

		await api.addDesign(payload).then(
			(res) => {
				// localStorage.setItem('storage-object', JSON.stringify({token: res.data}))

				// Load something
				console.log(res)
				alert('Design successfully created')
				// console.log(this.state.images)
				// this.props.history.push('/products/all')

				const { id } = res.data
				openEditor(id)
			},
			(err) => {
				console.log(err)
			}
		)
	}

	const openEditor = (id) => {
		console.log('Design ID;', id)
		history.push(`/editor/design/${id}`)
	}

	const handleChange = (e) => {
		setDesignName(e.target.value)
	}
	return (
		<>
			<TextField
				onChange={handleChange}
				id='standard-basic'
				label='Design Name'
				variant='standard'
			/>
			<Button variant='contained' onClick={onSubmit}>
				Create
			</Button>
		</>
	)
}

export default CreateBtn
