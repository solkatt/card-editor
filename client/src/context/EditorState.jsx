import React, { useState } from 'react'

import EditorContext from './EditorContext'
import api from '../api'

import convertToMesh, { createImg, createText } from './convertToMesh'

const EditorState = ({ children }) => {
	const [contentState, setContentState] = useState([])
	const [designName, setDesignName] = useState('')
	// const [isLoading, setIsLoading] = useState(false)
	const [textContent, setTextContent] = useState('')
	const [scale, setScale] = useState(1)
	const [selected, setSelected] = useState()
	const [editSelection, setEditSelection] = useState()

	const loadDesign = async (id) => {
		// setIsLoading(true)

		await api
			.getDesignById(id)
			.then((design) => {
				const meshes = convertToMesh({ design: design.data.data })
				setContentState(meshes)
				setDesignName(design.data.data.designName)

				// setIsLoading(false)
			})
			.catch((err) => {
				console.log(err)
				// setIsLoading(false)
			})
	}

	const deleteDesignObject = (uuid) => {
		if (contentState.length === 0) {
			return setContentState([])
		}

		const newContent = contentState.filter((item) => item.uuid !== uuid)
		setSelected(null)
		setContentState(newContent)
	}

	const handleText = (value, index) => {
		setTextContent({ value: value, index: index })
	}

	const handleTextChange = (e) => {
		e.preventDefault()
		let objIndex

		if (selected) {
			objIndex = contentState.findIndex(
				(obj) => obj.uuid === selected.uuid
			)
		}

		let text = e.target.value
		setTextContent({ value: text, index: objIndex })
	}

	const handleEdit = (value, index) => {
		setEditSelection({ value: value, index: index })
	}

	return (
		<EditorContext.Provider
			value={{
				loadDesign,
				contentState,
				setContentState,
				designName,
				textContent,
				setTextContent,
				scale,
				setScale,
				selected,
				setSelected,
				editSelection,
				setEditSelection,
				handleText,
				handleEdit,
				createImg,
				createText,
				deleteDesignObject,
				handleTextChange,
			}}
		>
			{children}
		</EditorContext.Provider>
	)
}

export default EditorState
