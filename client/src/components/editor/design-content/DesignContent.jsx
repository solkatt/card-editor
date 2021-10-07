import React, { useRef, useEffect } from 'react'

const DesignContent = (props) => {
	let {
		contentState,
		setSelected,
		editSelection,
		textContent,
		setTextContent,
	} = props

	const itemsRef = useRef([])

	useEffect(() => {
		itemsRef.current = itemsRef.current.slice(0, contentState.length)
	}, [props.items, contentState])

	useEffect(() => {
		if (editSelection && contentState.length >= 1)
			handleSize(editSelection.value, editSelection.index)
		if (textContent && contentState.length >= 1)
			updateText(textContent.value, textContent.index)
	}, [editSelection, textContent, contentState, setSelected])

	const handleSize = (value, i) => {
		if (!itemsRef.current[i]) return
		if (itemsRef.current[i].geometry.type === 'PlaneGeometry') {
			let imgHeight = itemsRef.current[i].material.map.image.height
			let imgWidth = itemsRef.current[i].material.map.image.width
			itemsRef.current[i].scale.x = value
			itemsRef.current[i].scale.y = (imgHeight / imgWidth) * value
			itemsRef.current[i].scale.z = value
		} else {
			if (!itemsRef.current[i]) return
			itemsRef.current[i].scale.x = value
			itemsRef.current[i].scale.y = value
			itemsRef.current[i].scale.z = value
		}
	}

	const updateText = (value, i) => {
		if (!itemsRef.current[i]) return

		itemsRef.current[i].text = value
	}

	const handleSelection = (e, i) => {
		setSelected(e.object)
		setTextContent({ value: e.object.text, index: i })
	}

	return contentState.map((item, i) => {
		return (
			<primitive
				position={[item.position.x, item.position.y, 0.1 * i]}
				scale={[item.scale.x, item.scale.y, item.scale.z]}
				key={item.uuid}
				object={item}
				ref={(el) => (itemsRef.current[i] = el)}
				onClick={(e, i) => handleSelection(e, i)}
			/>
		)
	})
}

export default DesignContent
