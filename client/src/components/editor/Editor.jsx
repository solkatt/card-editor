import React, { useEffect, useRef, useContext } from 'react'
import { useParams } from 'react-router-dom'

/// Three Fiber
import { Canvas, extend, useThree } from '@react-three/fiber'
// import { Stats } from '@react-three/drei'

/// Three
import { DragControls } from 'three/examples/jsm/controls/DragControls'

/// Components
import Dashboard from './dashboard/Dashboard'
import DesignContent from './design-content/DesignContent'

/// Context
import EditorContext from '../../context/EditorContext'

// Css
import './Editor.css'

extend({ DragControls, Text })

const EnableDragCtrls = (props) => {
	let { contentState } = props

	const {
		camera,
		gl: { domElement },
	} = useThree()

	return (
		<>
			<dragControls args={[[...contentState], camera, domElement]} />
		</>
	)
}

const Editor = () => {
	const {
		loadDesign,
		contentState,
		textContent,
		setTextContent,
		scale,
		selected,
		setSelected,
		editSelection,
	} = useContext(EditorContext)

	const { id } = useParams()

	useEffect(() => {
		loadDesign(id)
	}, [id])

	const containerRef = useRef()

	const AspectGroup = (props) => {
		const { viewport } = useThree()
		const { clientHeight, clientWidth } = containerRef.current

		return (
			<group scale={[clientWidth / 54, clientHeight / 86, 1]}>
				{props.children}
			</group>
		)
	}

	return (
		<>
			<div className='editor-container'>
				<div ref={containerRef} className='design-area'>
					<Canvas
						colorManagement
						orthographic
						camera={{
							zoom: 50,
							position: [0, 0, 10],
							near: 0.0001,
							far: 1000,
						}}
					>
						<AspectGroup>
							<DesignContent
								contentState={contentState}
								setSelected={setSelected}
								selected={selected}
								scale={scale}
								editSelection={editSelection}
								textContent={textContent}
								setTextContent={setTextContent}
							/>
						</AspectGroup>
						<EnableDragCtrls contentState={contentState} />
						{/* <Stats /> */}
					</Canvas>
				</div>
			</div>
			<Dashboard />
		</>
	)
}

export default Editor
