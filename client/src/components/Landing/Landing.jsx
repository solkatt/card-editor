import React from 'react'

import CreateNewDesign from './create/CreateNewDesign'
import DesignCollection from './design-collection/DesignCollection'

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
