import React, { useState } from 'react'

import EditorContext from './EditorContext'
import api from '../api'

import convertToMesh from './convertToMesh'

const EditorState = ({ children }) => {
	const [contentState, setContentState] = useState([])
	const [designName, setDesignName] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [textContent, setTextContent] = useState('')
	const [scale, setScale] = useState(1)
	const [selected, setSelected] = useState()
	const [editSelection, setEditSelection] = useState()

	const loadDesign = async (id) => {
		setIsLoading(true)

		await api
			.getDesignById(id)
			.then((design) => {
				console.log('FROM DB', design.data.data)
				const meshes = convertToMesh({ design: design.data.data })
				setContentState(meshes)
				setDesignName(design.data.data.designName)

				setIsLoading(false)
			})
			.catch((err) => {
				console.log(err)
				setIsLoading(false)
			})

		console.log(contentState)
	}

	const deleteLast = () => {
		if (contentState.length === 0) {
			return setContentState([])
		}
		let newArr = contentState
		newArr.pop()
		setSelected(null)
		setContentState(newArr)
		console.log(contentState)
	}

	const handleText = (value, index) => {
		// console.log(value, index)
		console.log('Editor>HandleText', value)
		setTextContent({ value: value, index: index })
	}

	const handleEdit = (value, index) => {
		// console.log(value, index)

		setEditSelection({ value: value, index: index })
	}

	return (
		<EditorContext.Provider
			value={{
				loadDesign,
				deleteLast,
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
			}}
		>
			{children}
		</EditorContext.Provider>
	)
}

export default EditorState