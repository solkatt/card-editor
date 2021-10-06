import { useState } from 'react'
import axios from 'axios'

import api from '../api'

const CreateDesign = (props) => {
	const { contentState } = props

	const onSubmit = async () => {
		// event.preventDefault()

		// this.setState({
		//     isLoading: true,
		// });

		const content = contentState.map((item) => {
			if (item.geometry.type === 'PlaneGeometry') {
				return {
					type: item.geometry.type,
					url: item.material.map.img.currentSrc,
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

		const payload = {
			designName: contentState.designName,
			designContent: content,
		}

		await api.addDesign(payload).then(
			(res) => {
				// localStorage.setItem('storage-object', JSON.stringify({token: res.data}))

				// Load something
				console.log(res)
				alert('Design successfully created')
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
			<button onClick={onSubmit} style={{ background: 'orange' }}>
				Save/Create to DB
			</button>
		</>
	)
}

export default CreateDesign

// const CreateDesign = (props) => {
// 	const { contentState } = props

// 	// const onSubmit = (props) => {

// 	// 	const body = {
// 	// 		designName: 'hej',
// 	// 		designContent: [{ type: 'bild', url: 'url' }],
// 	// 	}

// 	// 	axios
// 	// 		.post('http://localhost:5000/editor/add', body)
// 	// 		.then((res) => console.log(res.data))
// 	// }

// 	const onSubmit = () => {
// 		const content = contentState.map((item) => {
// 			if (item.geometry.type === 'PlaneGeometry') {
// 				return {
// 					type: item.geometry.type,
// 					url: item.material.map.img.currentSrc,
// 					position: item.position,
// 					scale: item.scale,
// 					uuid: item.uuid,
// 				}
// 			} else if (item.geometry.type === 'InstancedBufferGeometry')
// 				return {
// 					type: item.geometry.type,
// 					position: item.position,
// 					scale: item.position,
// 					text: item.text,
// 					uuid: item.uuid,
// 				}
// 		})

// 		const body = {
// 			designName: contentState.designName,
// 			designContent: content,
// 		}
// 		axios
// 			.post('http://localhost:5000/editor/add', body)
// 			.then((res) => console.log(res.data))
// 	}

// 	return (
// 		<>
// 			<button onClick={onSubmit}>Save/Create to DB</button>
// 		</>
// 	)
// }

// export default CreateDesign
