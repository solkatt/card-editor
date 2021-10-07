import { useContext } from 'react'

import './Dashboard.css'

import ImgControls from './controls/ImgControls'
import TextControls from './controls/TextControls'
import SaveDesignBtn from './SaveDesignBtn'

///FAB
import AddTextFAB from './upload/AddTextFAB'
import AddImageFAB from './upload/AddImageFAB'

// Context
import EditorContext from '../../context/EditorContext'

const Dashboard = (props) => {
	const {
		setContentState,
		contentState,
		setTextContent,
		scale,
		selected,
		handleText,
		handleEdit,
		setSelected,
		designName,
		deleteDesignObject,
	} = useContext(EditorContext)

	// useFrame((state, delta) => {
	// 	// mesh.current.rotation.x += 0.01
	// })

	// console.log('selected:', selected.uuid)
	console.log('contentState', contentState)

	let objIndex

	const handleChange = (e) => {
		if (selected) {
			objIndex = contentState.findIndex(
				(obj) => obj.uuid === selected.uuid
			)
		}

		handleEdit(e.target.value, objIndex)
	}

	const handleTextChange = (e) => {
		if (selected) {
			objIndex = contentState.findIndex(
				(obj) => obj.uuid === selected.uuid
			)
		}
		let text = e.target.value

		handleText(text, objIndex)
	}

	return (
		<>
			<div className='dashboard'>
				<h2>{designName}</h2>

				{selected && selected.geometry.type === 'PlaneGeometry' && (
					<h2>Image {selected.objIndex}</h2>
				)}
				{selected &&
					selected.geometry.type === 'InstancedBufferGeometry' && (
						<h2>Text</h2>
					)}

				{/* <CreateImgButton setContentState={setContentState} /> */}
				{/* <CreateTextButton setContentState={setContentState} /> */}
				{/* <Input setTextContent={setTextContent} /> */}
				{/* <UploadButton setContentState={setContentState} /> */}

				<div className='add-buttons'>
					<AddTextFAB
						setContentState={setContentState}
						setSelected={setSelected}
					/>
					<AddImageFAB
						setContentState={setContentState}
						setSelected={setSelected}
					/>
				</div>
				{!selected && ' Select to edit'}

				{selected && selected.geometry.type === 'PlaneGeometry' && (
					<ImgControls
						selected={selected}
						objIndex={objIndex}
						scale={scale}
						handleChange={handleChange}
					/>
				)}

				{selected &&
					selected.geometry.type === 'InstancedBufferGeometry' && (
						<TextControls
							selected={selected}
							objIndex={objIndex}
							scale={scale}
							handleChange={handleChange}
							handleTextChange={handleTextChange}
							setTextContent={setTextContent}
						/>
					)}

				{selected && (
					<button onClick={() => deleteDesignObject(selected.uuid)}>
						delete w/ index
					</button>
				)}
				{/* <button onClick={saveDesignToDB}>save</button> */}
				{/* <CreateDesign contentState={contentState} /> */}
				<SaveDesignBtn contentState={contentState} />
			</div>
		</>
	)
}

export default Dashboard
