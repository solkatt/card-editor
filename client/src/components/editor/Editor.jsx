import React, { useState, useEffect, useRef, useContext } from 'react'

//Three Fiber
import { Canvas, extend, useThree } from '@react-three/fiber'

// Three
import { DragControls } from 'three/examples/jsm/controls/DragControls'

import Dashboard from '../dashboard/Dashboard'

import { Stats } from '@react-three/drei'

import CardContent from '../dashboard/cardContent/CardContent'

import loadContent from './loadContent'

import axios from 'axios'

import { Redirect, useParams } from 'react-router-dom'

import api from '../../api'

import EditorContext from '../../context/EditorContext'


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

const EnableDragCtrls = (props) => {
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

const Editor = (props) => {

	const { loadDesign, contentState, setContentState } = useContext(EditorContext)

	// const [contentState, setContentState] = useState([])
	const [designName, setDesignName] = useState('')

	const [textContent, setTextContent] = useState('')

	const [scale, setScale] = useState(1)

	const [selected, setSelected] = useState()

	const [editSelection, setEditSelection] = useState()


	const { id } = useParams()


	useEffect(() => {
		loadDesign(id)
	}, [id])



	const handleEdit = (value, index) => {
		// console.log(value, index)

		setEditSelection({ value: value, index: index })
	}

	const handleText = (value, index) => {
		// console.log(value, index)
		console.log('Editor>HandleText', value)
		setTextContent({ value: value, index: index })
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




	const containerRef = useRef()

	const AspectGroup = (props) => {
		const { viewport } = useThree()
		const {clientHeight, clientWidth} = containerRef.current


return (
	<group scale={[clientWidth / 54, clientHeight / 86, 1]}>
		{props.children}
	</group>
)
	}

	return (
		<>
			<div className='editor-container'>
				<div ref={containerRef}className='design-area'>
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
						<AspectGroup>
						<CardContent
							contentState={contentState}
							setSelected={setSelected}
							selected={selected}
							scale={scale}
							editSelection={editSelection}
							textContent={textContent}
						/>
						</AspectGroup>
						<EnableDragCtrls contentState={contentState} />
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
				designName={designName}
				setSelected={setSelected}
			/>
		</>
	)
}

export default Editor
