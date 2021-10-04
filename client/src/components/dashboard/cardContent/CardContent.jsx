
import React, { useState, useRef, useEffect } from 'react'



const CardContent = (props) => {
	let { contentState, setSelected, editSelection, selected, scale, textContent } = props

	const itemsRef = useRef([])

	useEffect(() => {
		itemsRef.current = itemsRef.current.slice(0, contentState.length)
	}, [props.items, contentState])

	const handleSize = (value, i) => {
		console.log(itemsRef.current[i].geometry)

		if (itemsRef.current[i].geometry.type === 'PlaneGeometry') {
			let imgHeight = itemsRef.current[i].material.map.image.height
			let imgWidth = itemsRef.current[i].material.map.image.width
			itemsRef.current[i].scale.x = value
			itemsRef.current[i].scale.y = (imgHeight / imgWidth) * value
			itemsRef.current[i].scale.z = value
		} else {
			itemsRef.current[i].scale.x = value
			itemsRef.current[i].scale.y = value
			itemsRef.current[i].scale.z = value
		}

		// itemsRef.current[i].text = 'hej'
	}

	const handleText = (value, i) => {
		itemsRef.current[i].text = value

		console.log(textContent.value)
	}

	useEffect(() => {
		// console.log('HEEJ', editSelection)
		if (editSelection) handleSize(editSelection.value, editSelection.index)
		if (textContent) handleText(textContent.value, textContent.index)
	}, [editSelection, textContent])


	const addOnTop = (type, i) => {
		if (type === 'PlaneGeometry') {
			return 0.1 * i
		}
		if (type === 'InstancedBufferGeometry') {
			return 0.1 * i
		}
		console.log(type)
		return 0.1 * i
	}


 const handleSelection = (e) => {
		e.stopPropagation()

		setSelected(e.object)
	}

	return contentState.map((item, i) => {

		const type = item.geometry.type
		return (
			<>
				<primitive
					// onClick={(item) => handleSize(i)}
					position={[0, 0, addOnTop(type, i)]}
					// position={[0, 0, -10]}
				// renderOrder={i}
					key={i}
					object={item}
					ref={(el) => (itemsRef.current[i] = el)}
					onClick={(e) => handleSelection(e)}
				/>
			</>
		)
	})
}

export default CardContent