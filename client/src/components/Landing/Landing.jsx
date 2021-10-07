import CreateNewDesign from './createNewDesign/CreateNewDesign'
import DesignCollection from './designCollection.jsx/DesignCollection.jsx'

const Landing = () => {


	return (
		<div>
			<button>Create New</button>
			<CreateNewDesign />
			<button>Load Designs</button>
			<DesignCollection />
		</div>
	)
}

export default Landing
