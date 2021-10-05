import * as THREE from 'three'

// const CreateImgButton = (props) => {
// 	let { setContentState } = props

// 	// let data = {
// 	// 	type: 'img',
// 	// 	scale: [1, 0.5, 1],
// 	// 	position: [0, 0, 0],
// 	// 	color: 'green',
// 	// }

// 	const realFuncHereLater = () => {
// 		console.log('hej')
// 		// replace in mesh with below
// 		// (e) => setSelected(e)
// 	}

// 	let newImg = () => (
// 		<mesh {...props} scale={[1, 1, 1]} onClick={realFuncHereLater}>
// 			<boxGeometry args={[1, 1, 1]} />
// 			<meshBasicMaterial color='green' />
// 		</mesh>
// 	)

// 	console.log('NEW IMG', newImg)

// 	return (
// 		<button
// 			onClick={() =>
// 				setContentState((prevState) => [...prevState, newImg])
// 			}
// 		>
// 			{' '}
// 			Create IMG
// 		</button>
// 	)
// }

const CreateImgButton = (props) => {
	let { setContentState } = props

	// let sprite = new THREE.Sprite(
	// 	new THREE.SpriteMaterial({
	// 		map: new THREE.TextureLoader().load('kalasstrumpa1.png'),
	// 		color: 0xffffff,
	// 	})
	// )

	var planeGeom = new THREE.PlaneBufferGeometry(50, 50)

	var imgSrc = 'kalasstrumpa1.png'
	// var imgSrc = 'nonagonPost2.jpg'
	var mesh
	var tex = new THREE.TextureLoader().load(imgSrc, (tex) => {
		tex.needsUpdate = true
		mesh.scale.set(0.2, (tex.image.height / tex.image.width) * 0.2, 0.2)
		// mesh.position.set(0, 0, 0.1)
	})

	tex.encoding = THREE.sRGBEncoding
	tex.magFilter = THREE.NearestFilter
	// tex.magFilter = THREE.LinearFilter

	var material = new THREE.MeshBasicMaterial({
		transparent: false,
		map: tex,
	})

	// material.depthTest = false


	// material.toneMapped = false

	mesh = new THREE.Mesh(planeGeom, material)

	mesh.material.side = THREE.DoubleSide

	mesh.position.set(2,1,1)
	mesh.uuid = 'hej'

	// mesh.name = "Bengt"

	return (
		<button
			onClick={() => setContentState((prevState) => [...prevState, mesh])}
		>
			Create IMG
		</button>
	)
}

export default CreateImgButton
