import Button from '@mui/material/Button'

import api from '../../api'

import { useParams } from 'react-router-dom'

const SaveDesignBtn = (props) => {
	const { contentState } = props

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
					scale: item.scale,
					text: item.text,
					uuid: item.uuid,
				}
			return ''
		})

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
