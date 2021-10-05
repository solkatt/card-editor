import Input from '../Input'
import { CreateTextButton } from './createImg/Text'
import './Dashboard.css'

import CreateImgButton from '../dashboard/createImg/CreateImg'

import ImgControls from './controls/ImgControls'
import TextControls from './controls/TextControls'
import UploadButton from './upload/UploadBtn'

const Dashboard = (props) => {
	const {
		setContentState,
		contentState,
		setTextContent,
		scale,
		selected,
		handleText,
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
				<h2>Design Name</h2>
				<CreateImgButton setContentState={setContentState} />
				<CreateTextButton setContentState={setContentState} />
				<Input setTextContent={setTextContent} />
				<UploadButton setContentState={setContentState} />
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
						/>
					)}
			</div>
		</>
	)
}

export default Dashboard
