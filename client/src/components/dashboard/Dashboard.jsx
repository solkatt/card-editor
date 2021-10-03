import { useState, useEffect } from 'react'

import Input from '../Input'
import { CreateTextButton } from '../Text'
import './Dashboard.css'

import CreateBoxButton from '../dashboard/createBox/CreateBox'
import CreateImgButton from '../dashboard/createImg/CreateImg'
import { Vector3 } from 'three'

const Dashboard = (props) => {
	const {
		setContentState,
		contentState,
		setTextContent,
		scale,
		setScale,
		selected,
		handleEdit,
	} = props

	// useFrame((state, delta) => {
	// 	// mesh.current.rotation.x += 0.01
	// })

	// console.log('selected:', selected.uuid)
	console.log('contentState', contentState)

	// useEffect(() => {
	// 	if (selected) {
	// 		let objIndex = contentState.findIndex(
	// 			(obj) => obj.uuid == selected.uuid
	// 		)
	// 		console.log('selected:', objIndex)
	// 	}
	// })

	let objIndex

	const handleChange = (e) => {
		let scaleVal = parseInt(e.target.value)

		if (selected) {
			objIndex = contentState.findIndex(
				(obj) => obj.uuid == selected.uuid
			)
		}

		// let content = [...contentState]
		// content[objIndex] = {
		// 	...content[objIndex],
		// 	scale: [0.2, 0.2, 0.2],
		// }
		// selected.scale = new Vector3(0.2, 0.2, 0.2)

		handleEdit(e.target.value, objIndex)
	}

	return (
		<>
			<div className='dashboard'>
				<CreateBoxButton setContentState={setContentState} />
				<CreateImgButton setContentState={setContentState} />
				<CreateTextButton setContentState={setContentState} />
				<Input setTextContent={setTextContent} />

				{selected ? (
					<div className='object-details'>
						<span>
							Current obj ID: {selected ? selected.uuid : ''}{' '}
						</span>
						{/* <span>ScaleX: {selected ? selected.scale.x : ''} </span> */}
						<span>Index: {objIndex} </span>

						<div className='slidecontainer'>
							<h2>{scale}</h2>
							<input
								onChange={(e) => handleChange(e)}
								// onChange={(e) =>
								// 	setScale([
								// 		e.target.value,
								// 		e.target.value,
								// 		e.target.value,
								// 	])
								// }
								type='range'
								min='0.05'
								max='1'
								step='0.01'
								value={selected.scale.x}
								className='slider'
								id='myRange'
							/>
						</div>
					</div>
				) : (
					'Select to edit'
				)}
			</div>
		</>
	)
}

export default Dashboard
