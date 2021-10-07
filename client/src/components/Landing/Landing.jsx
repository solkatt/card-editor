import React from 'react'

import CreateNewDesignModal from './create/CreateNewDesignModal'
import DesignCollection from './design-collection/DesignCollection'
import DesignCollectionModal from './design-collection/DesignCollectionModal'

const Landing = () => {
	return (
		<div>
			<button>Create New</button>
			<CreateNewDesignModal />
			<DesignCollectionModal />
			{/* <button>Load Designs</button> */}
			{/* <DesignCollection /> */}
		</div>
	)
}

export default Landing
