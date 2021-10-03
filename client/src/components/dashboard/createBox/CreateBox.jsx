import { useState, useRef } from 'react'

//Three Fiber
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'

const Box = (props) => {
	const mesh = useRef()

	const [hovered, setHover] = useState(false)
	const [active, setActive] = useState(false)

	useFrame((state, delta) => {
		// mesh.current.rotation.x += 0.01
	})

	return (
		<mesh
			{...props}
			ref={mesh}
			scale={active ? 1.5 : 1}
			onClick={() => setActive(!active)}
			onPointerOver={() => setHover(true)}
			onPointerOut={() => setHover(false)}
		>
			<boxGeometry args={[1, 1, 1]} />
			<meshBasicMaterial color={hovered ? 'hotpink' : props.color} />
		</mesh>
	)
}

///////////////////////////////////////

const CreateBoxButton = (props) => {
	let { setContentState } = props

	// let newBox = {
	//   type: props.type,
	//   color: props.color
	// }

	// let newBox = new THREE.Mesh(
	// 	new THREE.BoxGeometry(1, 1, 1),
	// 	new THREE.MeshBasicMaterial({ color: 'green' })
	// )

	let newBox = Box

	// console.log('NEWBOX', newBox)

	return (
		<button
			onClick={() =>
				setContentState((prevState) => [...prevState, newBox])
			}
		>
			{' '}
			Create BOX
		</button>
	)
}

export default CreateBoxButton
