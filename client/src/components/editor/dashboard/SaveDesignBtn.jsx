import React, { useContext } from 'react'
import Button from '@mui/material/Button'

import api from '../../../api'

import { useParams } from 'react-router-dom'

import EditorContext from '../../../context/EditorContext'

const SaveDesignBtn = (props) => {
	const { contentState } = useContext(EditorContext)

	const { id } = useParams()

	const onSubmit = async () => {
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
				console.log(res)
				alert('Design successfully saved')
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
