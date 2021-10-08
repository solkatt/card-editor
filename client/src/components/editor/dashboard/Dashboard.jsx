import { useContext } from 'react'

//Css
import './Dashboard.css'

/// Components
import ImgControls from './controls/ImgControls'
import TextControls from './controls/TextControls'
import SaveDesignBtn from './SaveDesignBtn'

/// FAB
import AddTextFAB from './add-buttons/AddTextFAB'
import AddImageFAB from './add-buttons/AddImageFAB'

/// MUI
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'

// Context
import EditorContext from '../../../context/EditorContext'

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
				<div style={{ height: '1rem', lineHeight: '0.1rem' }}>
					<h5 style={{ fontWeight: 50 }}>Design </h5>{' '}
					<h4> {designName}</h4>
				</div>
				<div className='dashboard-controls'>
					{selected && selected.geometry.type === 'PlaneGeometry' && (
						<h3>Image</h3>
					)}
					{selected &&
						selected.geometry.type ===
							'InstancedBufferGeometry' && <h3>Text</h3>}
					<div className='add-buttons'>
						<AddTextFAB />
						<AddImageFAB />
					</div>
					{!selected && ' Select object to edit'}
					{selected && selected.geometry.type === 'PlaneGeometry' && (
						<ImgControls handleChange={handleChange} />
					)}
					{selected &&
						selected.geometry.type ===
							'InstancedBufferGeometry' && (
							<TextControls handleChange={handleChange} />
						)}
				</div>
				{selected && (
					<div style={{ width: '1rem' }}>
						<IconButton
							aria-label='delete'
							size='large'
							onClick={() => deleteDesignObject(selected.uuid)}
						>
							<DeleteIcon />
						</IconButton>
					</div>
				)}
				<SaveDesignBtn />
			</div>
		</>
	)
}

export default Dashboard
