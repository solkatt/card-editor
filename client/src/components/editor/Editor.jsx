import React, { useState, useRef, useEffect } from 'react'

//Three Fiber
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'

// Three
import { DragControls } from 'three/examples/jsm/controls/DragControls'



import Dashboard from '../dashboard/Dashboard'

import { Stats } from '@react-three/drei'


import CardContent from '../dashboard/cardContent/CardContent'
// Css
import './Editor.css'

extend({ DragControls, Text })

///////////////////////////////////////////////



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

	const handleText = (value, index) => {
		// console.log(value, index)
		console.log('Editor>HandleText', value)
		setTextContent({ value: value, index: index })
	}
	const handleSelectObj = (e) => {
		e.stopPropagation()
		// console.log('handleSelect', e.eventObject)
		// console.log('handleSelect', e.object.uuid)
		setSelected(e.object)
		console.log(selected)
	}

	const deleteLast = () => {

	}
	// let [objects, setObjects] = useState([])

	return (
		<>
			<div className='editor-container'>
				<h2>{textContent.value}</h2>
				<Canvas
				colorManagement
					// background={'black'}
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
						textContent={textContent}
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
				handleText={handleText}
				deleteLast={deleteLast}

			/>
		</>
	)
}

export default Editor
