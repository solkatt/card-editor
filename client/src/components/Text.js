import React, { useRef, useState, useMemo } from 'react'
import * as THREE from 'three'

import { Canvas, useThree } from '@react-three/fiber'
import { Text } from '@react-three/drei'


export default function ResponsiveText(props) {
	const { textContent } = props

	const { viewport } = useThree()


	const color = '#EC2D2D'

	const fontSize = 11.5

	const maxWidth = 90

	const lineHeight = 0.75

	const letterSpacing = -0.08

	const textAlign = 'justify'


	return (
		<>
			<Text
				color={color}
				fontSize={fontSize}
				maxWidth={(viewport.width / 100) * maxWidth}
				lineHeight={lineHeight}
				letterSpacing={letterSpacing}
				textAlign={textAlign}
				font='https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff'
				anchorX='center'
				anchorY='middle'
			>
				{textContent}
			</Text>
		</>
	)
}
