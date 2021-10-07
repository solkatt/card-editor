import React, { useRef, useEffect } from 'react'

const CardContent = (props) => {
	let { contentState, setSelected, editSelection, textContent } = props

	const itemsRef = useRef([])

	useEffect(() => {
		itemsRef.current = itemsRef.current.slice(0, contentState.length)
	}, [props.items, contentState])

	const handleSize = (value, i) => {
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
	}

	useEffect(() => {
		// console.log('HEEJ', editSelection)
		if (editSelection && contentState.length >= 1)
			handleSize(editSelection.value, editSelection.index)
		if (textContent && contentState.length >= 1)
			handleText(textContent.value, textContent.index)
	}, [editSelection, textContent, contentState])

	const handleSelection = (e) => {
		e.stopPropagation()

		setSelected(e.object)
	}

	return contentState.map((item, i) => {
		console.log('ITEM SCALE X:', item.scale.x)
		// const type = item.geometry.type

		return (
			<>
				<primitive
					// onClick={(item) => handleSize(i)}
					position={[item.position.x, item.position.y, 0.1 * i]}
					scale={[item.scale.x, item.scale.y, item.scale.z]}
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
