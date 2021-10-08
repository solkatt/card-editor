import React from 'react'

import CreateNewDesignModal from './create/CreateNewDesignModal'
import DesignCollection from './design-collection/DesignCollection'
import DesignCollectionModal from './design-collection/DesignCollectionModal'

const Landing = () => {
	return (
		<div>
			<CreateNewDesignModal />
			<DesignCollectionModal />
			{/* <DesignCollection /> */}
		</div>
	)
}

export default Landing
