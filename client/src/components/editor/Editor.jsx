import React, { useState, useRef, useEffect } from 'react'

//Three Fiber
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'

// Three
import { DragControls } from 'three/examples/jsm/controls/DragControls'

import * as THREE from 'three'

import ResponsiveText, { CreateTextButton } from '../Text'

import Dashboard from '../dashboard/Dashboard'

import { Stats } from '@react-three/drei'

import { TextEl } from '../Text'
// Css
import './Editor.css'

extend({ DragControls, Text })

///////////////////////////////////////////////

const CardContent = (props) => {
	let { contentState, setSelected, editSelection, selected, scale } = props

	const [localScale, setLocalScale] = useState([0.2, 0.2, 0.2])
	const itemsRef = useRef([])

	useEffect(() => {
		itemsRef.current = itemsRef.current.slice(0, contentState.length)
	}, [props.items])

	const handleSize = (value, i) => {
		// console.log(i)
		let imgHeight = itemsRef.current[i].material.map.image.height
		let imgWidth = itemsRef.current[i].material.map.image.width
		// let imgHeight = itemsRef.current[i].material.map.image.height
		console.log('height', imgHeight)
		itemsRef.current[i].scale.x = value
		itemsRef.current[i].scale.y = (imgHeight / imgWidth) * value
		itemsRef.current[i].scale.z = value
		// itemsRef.current[i].text = 'hej'
	}

	const handleText = (value, i) => {
		itemsRef.current[i].text.text = 'hej'
	}

	useEffect(() => {
		// console.log('HEEJ', editSelection)
		if (editSelection) handleSize(editSelection.value, editSelection.index)
	}, [editSelection])

	return contentState.map((item, i) => {
		return (
			<>
				<primitive
					// onClick={(item) => handleSize(i)}
					// position={[0, 0, -1]}
					key={i}
					object={item}
					ref={(el) => (itemsRef.current[i] = el)}
					onClick={(e) => setSelected(e)}
				/>
			</>
		)
	})
}

const Card = (props) => {
	return (
		<mesh {...props}>
			<planeBufferGeometry args={[5.4, 8.6]} />
			<meshBasicMaterial color='blue' />
		</mesh>
	)
}

// const ex = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 'green'}))

const Scene = (props) => {
	let { contentState } = props

	const {
		camera,
		gl: { domElement },
	} = useThree()

	return (
		<>
			{/* <primitive object={ex} /> */}
			<dragControls args={[[...contentState], camera, domElement]} />
		</>
	)
}

const Editor = () => {
	const [contentState, setContentState] = useState([])

	const [textContent, setTextContent] = useState('')

	const [scale, setScale] = useState(1)

	const [selected, setSelected] = useState()

	const [editSelection, setEditSelection] = useState()

	const handleEdit = (value, index) => {
		// console.log(value, index)

		setEditSelection({ value: value, index: index })
	}

	const handleSelectObj = (e) => {
		// console.log('handleSelect', e.eventObject)
		// console.log('handleSelect', e.object.uuid)
		setSelected(e.object)
	}

	const deleteLast = () => {}
	// let [objects, setObjects] = useState([])

	return (
		<>
			<div className='editor-container'>
				<Canvas
					background={'black'}
					orthographic
					camera={{ zoom: 50, position: [0, 0, 1] }}
				>
					{/* <Box position={[0, 0, 0]} /> */}
					{/* <ResponsiveText textContent={textContent} /> */}

					{/* <Card /> */}
					<CardContent
						contentState={contentState}
						setSelected={handleSelectObj}
						selected={selected}
						scale={scale}
						editSelection={editSelection}
					/>
					<Scene contentState={contentState} />
					<Stats />
				</Canvas>
			</div>
			<Dashboard
				setContentState={setContentState}
				contentState={contentState}
				setTextContent={setTextContent}
				scale={scale}
				setScale={setScale}
				selected={selected}
				handleEdit={handleEdit}
				deleteLast={deleteLast}
			/>
		</>
	)
}

export default Editor
