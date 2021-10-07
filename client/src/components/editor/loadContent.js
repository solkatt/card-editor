import * as THREE from 'three'
import { Text } from 'troika-three-text'
import { extend } from '@react-three/fiber'

extend({
	Text,
})

const loadContent = (props) => {
	const { design } = props

	return design.designContent.map((item, i) => {
		if (item.type === 'PlaneGeometry') return createImg(item, i)
		if (item.type === 'InstancedBufferGeometry') return createText(item, i)

		return ''
	})
}

export default loadContent

export const createImg = (item, i) => {
	var planeGeom = new THREE.PlaneBufferGeometry(50, 50)

	var imgSrc = item.url

	// var imgSrc = 'nonagonPost2.jpg'
	var mesh
	var tex = new THREE.TextureLoader().load(imgSrc, (tex) => {
		tex.needsUpdate = true
		// mesh.scale.set(0.2, (tex.image.height / tex.image.width) * 0.2, 0.2)

		if (item.scale) {
			mesh.scale.set(
				item.scale.x,
				(tex.image.height / tex.image.width) * item.scale.x,
				item.scale.z
			)
		} else {
			mesh.scale.set(0.2, (tex.image.height / tex.image.width) * 0.2, 0.2)
		}
		// imageRatio = tex.image.height / tex.image.width
		// mesh.position.set(0, 0, 0.1)
	})

	tex.encoding = THREE.sRGBEncoding
	tex.magFilter = THREE.NearestFilter
	// tex.magFilter = THREE.LinearFilter

	var material = new THREE.MeshBasicMaterial({
		transparent: false,
		map: tex,
	})

	mesh = new THREE.Mesh(planeGeom, material)

	mesh.material.side = THREE.DoubleSide

	/// If item already has been given values
	if (item.position) {
		mesh.position.x = item.position.x
		mesh.position.y = item.position.y
		mesh.position.z = item.position.z
	} else {
		mesh.position.x = 0
		mesh.position.y = 0
		mesh.position.z = 0.1 * i
	}

	if (item.uuid) mesh.uuid = item.uuid

	// mesh.name = "Bengt"

	return mesh
}

export const createText = (item, i) => {
	let text = new Text()

	// text.font = 'https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff'
	text.text = item.text
	text.fontSize = 3
	text.color = 0x9966ff

	// text.material = new THREE.MeshBasicMaterial()
	// text.materialType = 'MeshBasicMaterial'
	text.textAlign = 'justify'
	text.anchorX = 'left'
	text.anchorY = 'middle'

	// if (item.position) {
	// 	text.position.x = item.position.x
	// 	text.position.y = item.position.y
	// 	// text.positionk.z = -10
	// } else {
	// 	text.position.x = 0
	// 	text.position.y = 0
	// 	// text.position.z = -1
	// }

	text.position.x = item.position.x
	text.position.y = item.position.y

	text.scale.x = item.scale.x
	text.scale.y = item.scale.y
	text.scale.y = item.scale.z

	text.sync()

	// text.material.depthTest = false
	// text.anchorY = 'center'

	return text
}

// const createImg = (designContent) => {

// 	//////////

// 	return designContent.map((item, i) => {

// 		if (item.type === 'PlaneGeometry') return {

// 		}

// 	var planeGeom = new THREE.PlaneBufferGeometry(50, 50)

// 	var imgSrc = item.url
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

// 	mesh = new THREE.Mesh(planeGeom, material)

// 	mesh.material.side = THREE.DoubleSide

// 	// mesh.position.set(2,1,1)
// 	mesh.uuid = item.uuid

// 	// mesh.name = "Bengt"

// 		return (

// 			mesh

// 		)
// 	})

// }
