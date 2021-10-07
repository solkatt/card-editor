import { useContext } from 'react'

//Css
import './Dashboard.css'

//Components
import ImgControls from './controls/ImgControls'
import TextControls from './controls/TextControls'
import SaveDesignBtn from './SaveDesignBtn'

///FAB
import AddTextFAB from './upload/AddTextFAB'
import AddImageFAB from './upload/AddImageFAB'

// Context
import EditorContext from '../../context/EditorContext'

const Dashboard = () => {
	const {
		contentState,
		selected,
		handleEdit,
		designName,
		deleteDesignObject,
	} = useContext(EditorContext)

	let objIndex

	const handleChange = (e) => {
		if (selected) {
			objIndex = contentState.findIndex(
				(obj) => obj.uuid === selected.uuid
			)
		}

		handleEdit(e.target.value, objIndex)
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

				<div className='add-buttons'>
					<AddTextFAB />
					<AddImageFAB />
				</div>
				{!selected && ' Select to edit'}

				{selected && selected.geometry.type === 'PlaneGeometry' && (
					<ImgControls handleChange={handleChange} />
				)}

				{selected &&
					selected.geometry.type === 'InstancedBufferGeometry' && (
						<TextControls handleChange={handleChange} />
					)}

				{selected && (
					<button onClick={() => deleteDesignObject(selected.uuid)}>
						delete w/ index
					</button>
				)}
				<SaveDesignBtn />
			</div>
		</>
	)
}

export default Dashboard
