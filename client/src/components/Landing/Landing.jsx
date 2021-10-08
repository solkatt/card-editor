import React from 'react'

import CreateNewDesignModal from './create/CreateNewDesignModal'
import DesignCollectionModal from './design-collection/DesignCollectionModal'

const Landing = () => {
	return (
		<div
			style={{
				height: '100vh',
				width: '100vw',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<CreateNewDesignModal />
			<span style={{ width: '2rem' }}></span>
			<DesignCollectionModal />
		</div>
	)
}

export default Landing
