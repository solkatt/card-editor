import axios from 'axios'
import { createImg } from '../../editor/loadContent'

const UploadButton = (props) => {
	const { setContentState } = props

	const handleUpload = async (e) => {
		const file = e.target.files[0]

		// return axios.get('http://localhost:5000/s3Url').then((res) => res.data)
		const { url } = await getSecureUrl()
		console.log(url)

		const headers = {
			'Content-Type': 'multipart/form-data',
		}

		await axios.put(url, file, headers).then((res) => console.log(res.data))
		let imageUrl = url.split('?')[0]

		console.log(imageUrl)

		const item = {
			type: 'PlaneGeometry',
			url: imageUrl,
		}
		const mesh = createImg(item)
		setContentState((prevState) => [...prevState, mesh])
	}

	const getSecureUrl = async () => {
		return axios.get('http://localhost:5000/s3Url').then((res) => res.data)
	}

	return (
		<>
			<input
				type='file'
				accept='image/*'
				id='actual-btn'
				style={{ display: 'none' }}
				onChange={handleUpload}
			/>

			<label
				htmlFor='actual-btn'
				style={{
					background: 'orange',
					border: '2px solid white',
				}}
			>
				Choose File
			</label>
		</>
	)
}

export default UploadButton

// const CreateImgButton = (props) => {
// 	let { setContentState } = props

// 	// let sprite = new THREE.Sprite(
// 	// 	new THREE.SpriteMaterial({
// 	// 		map: new THREE.TextureLoader().load('kalasstrumpa1.png'),
// 	// 		color: 0xffffff,
// 	// 	})
// 	// )

// 	var planeGeom = new THREE.PlaneBufferGeometry(50, 50)

// 	var imgSrc = 'kalasstrumpa1.png'
// 	// var imgSrc = 'nonagonPost2.jpg'
// 	var mesh
// 	var tex = new THREE.TextureLoader().load(imgSrc, (tex) => {
// 		tex.needsUpdate = true
// 		mesh.scale.set(0.2, (tex.image.height / tex.image.width) * 0.2, 0.2)
// 		// mesh.position.set(0, 0, 0.1)
// 	})

// 	tex.encoding = THREE.sRGBEncoding
// 	tex.magFilter = THREE.NearestFilter
// 	// tex.magFilter = THREE.LinearFilter

// 	var material = new THREE.MeshBasicMaterial({
// 		transparent: false,
// 		map: tex,
// 	})

// 	// material.depthTest = false

// 	// material.toneMapped = false

// 	mesh = new THREE.Mesh(planeGeom, material)

// 	mesh.material.side = THREE.DoubleSide

// 	mesh.position.set(2,1,1)
// 	mesh.uuid = 'hej'

// 	// mesh.name = "Bengt"

// 	return (
// 		<button
// 			onClick={() => setContentState((prevState) => [...prevState, mesh])}
// 		>
// 			Create IMG
// 		</button>
// 	)
// }
