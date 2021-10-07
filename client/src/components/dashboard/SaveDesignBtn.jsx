import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import api from '../../api'

import { useHistory, useParams } from 'react-router-dom'

const SaveDesignBtn = (props) => {
	const { contentState } = props

	const [designName, setDesignName] = useState()
	// const history = useHistory()
	const { id } = useParams()

	const onSubmit = async () => {
		// this.setState({
		//     isLoading: true,
		// });

		const content = contentState.map((item) => {
			if (item.geometry.type === 'PlaneGeometry') {
				return {
					type: item.geometry.type,
					url: item.material.map.image.currentSrc,
					position: item.position,
					scale: item.scale,
					uuid: item.uuid,
				}
			} else if (item.geometry.type === 'InstancedBufferGeometry')
				return {
					type: item.geometry.type,
					position: item.position,
					scale: item.position,
					text: item.text,
					uuid: item.uuid,
				}
		})

		console.log('CONTENT:', content)
		const payload = {
			designContent: content,
		}

		await api.updateDesign(id, payload).then(
			(res) => {
				// localStorage.setItem('storage-object', JSON.stringify({token: res.data}))

				// Load something
				console.log(res)
				alert('Design successfully saved')
				// console.log(this.state.images)
				// this.props.history.push('/products/all')

				const { id } = res.data
			},
			(err) => {
				console.log(err)
			}
		)
	}

	return (
		<>
			<Button variant='contained' onClick={onSubmit}>
				Save
			</Button>
		</>
	)
}

export default SaveDesignBtn
