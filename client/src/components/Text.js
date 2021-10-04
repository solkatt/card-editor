import React, { useRef, useState, useMemo } from 'react'
import * as THREE from 'three'

import { Canvas, useThree, extend } from '@react-three/fiber'
// import { Text } from '@react-three/drei'
import { Text } from 'troika-three-text'

extend({ Text })

// export default function ResponsiveText(props) {
// 	const { textContent } = props

// 	const { viewport } = useThree()

// 	const color = '#EC2D2D'

// 	const fontSize = 11.5

// 	const maxWidth = 90

// 	const lineHeight = 0.75

// 	const letterSpacing = -0.08

// 	const textAlign = 'justify'

// 	return (
// 		<>
// 			<Text
// 				color={color}
// 				fontSize={fontSize}
// 				maxWidth={(viewport.width / 100) * maxWidth}
// 				lineHeight={lineHeight}
// 				letterSpacing={letterSpacing}
// 				textAlign={textAlign}
// 				font='https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff'
// 				anchorX='center'
// 				anchorY='middle'
// 			>
// 				{textContent}
// 			</Text>
// 		</>
// 	)
// }

export const CreateTextButton = (props) => {
	let { setContentState } = props

	// console.log('NEWTEXT:', newText)
	let text = new Text()

	// text.font = 'https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff'
	text.text = 'Hello!'
	text.fontSize = 1
	text.color = 0x9966ff
	text.position.z = -180
	text.materialType = 'MeshPhongMaterial'
	text.textAlign = 'justify'
	text.anchorX = 'left'
	text.anchorY = 'middle'
	// text.anchorY = 'center'

	return (
		<button
			onClick={() => setContentState((prevState) => [...prevState, text])}
			// onClick={console.log(text)}
		>
			Create TEXT
		</button>
	)
}

export const TextEl = () => {
	const [opts, setOpts] = useState({
		// font: 'https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff',
		fontSize: 1,
		color: '#99ccff',
		maxWidth: 20,
		lineHeight: 1,
		letterSpacing: 0,
		textAlign: 'justify',
		materialType: 'MeshPhongMaterial',
	})

	const text = 'Lorem ipsum dol.'

	return (
		<text
			// position-z={-180}
			{...opts}
			// text={text}
			// anchorX='center'
			// anchorY='middle'
		>
			<meshPhongMaterial attach='material' color={opts.color} />
		</text>
	)
}
