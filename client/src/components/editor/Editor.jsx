import React, { useState, useEffect } from 'react'

//Three Fiber
import { Canvas, extend, useThree } from '@react-three/fiber'

// Three
import { DragControls } from 'three/examples/jsm/controls/DragControls'

import Dashboard from '../dashboard/Dashboard'

import { Stats } from '@react-three/drei'

import CardContent from '../dashboard/cardContent/CardContent'

import loadContent from './loadContent'

// Css
import './Editor.css'

extend({ DragControls, Text })

///////////////////////////////////////////////

// const Card = (props) => {
// 	return (
// 		<mesh {...props}>
// 			<planeBufferGeometry args={[5.4, 8.6]} />
// 			<meshBasicMaterial color='blue' />
// 		</mesh>
// 	)
// }

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

	const mockDB = {
		designName: 'DB Design Name',
		designContent: [
			{
				type: 'PlaneGeometry',
				position: [1, 1, 0.1],
				scale: [0.2, 0.3, 0.2],
				url: 'https://images.unsplash.com/photo-1618824834789-eb5d98e150f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
				uuid: '50A82A72-9E28-40B9-8B10-93CDBED6292B',
			},
			{
				type: 'PlaneGeometry',
				position: [1, 1, 0.1],
				scale: [0.2, 0.3, 0.2],
				url: 'https://images.unsplash.com/photo-1618824834789-eb5d98e150f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
				uuid: '50A82A72-9E28-40B9-8B10-93CDBEDHEHEHE',
			},
			{
				type: 'InstancedBufferGeometry',
				text: 'Hej från DB',
				scale: [0.2, 0.3, 0.2],
				uuid: '50A82A72-9E28-40B9-8dsdCDBEDHEHEHE',
			},
		],
	}

	useEffect(() => {
		const meshes = loadContent({ dbData: mockDB })

		console.log(meshes)
		setContentState(meshes)
	}, [])

	//TO DO
	// Convert DB.data to meshes
	// Set Contenstate to meshes

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
		let newArr = contentState
		newArr.pop()
		setSelected(null)
		setContentState(newArr)
		console.log(contentState)
	}
	// let [objects, setObjects] = useState([])

	return (
		<>
			<div className='editor-container'>
				<div className='design-area'>
					{/* <h2>{textContent.value}</h2> */}
					<Canvas
						colorManagement
						// background={'black'}
						orthographic
						camera={{
							zoom: 50,
							position: [0, 0, 10],
							near: 0.0001,
							far: 1000,
						}}
					>
						{/* <Box position={[0, 0, 0]} /> */}
						{/* <ResponsiveText textContent={textContent} /> */}

						{/* <Card /> */}
						<CardContent
							contentState={contentState}
							setSelected={setSelected}
							selected={selected}
							scale={scale}
							editSelection={editSelection}
							textContent={textContent}
						/>
						<Scene contentState={contentState} />
						<Stats />
					</Canvas>
				</div>
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
