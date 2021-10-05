import * as THREE from 'three'
import {
	Text
} from 'troika-three-text'
import {
	extend
} from '@react-three/fiber'

extend({
	Text
})

const loadContent = (props) => {

	const {
		dbData
	} = props



	return dbData.designContent.map((item, i) => {
		let mesh;
		if (item.type === 'PlaneGeometry') return createImg(item)
		if (item.type === 'InstancedBufferGeometry') return createText(item)


		return (

			mesh

		)
	})

}

export default loadContent




const createImg = (item) => {

	var planeGeom = new THREE.PlaneBufferGeometry(50, 50)

	var imgSrc = item.url
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


	mesh = new THREE.Mesh(planeGeom, material)

	mesh.material.side = THREE.DoubleSide

	// mesh.position.set(2,1,1)
	mesh.uuid = item.uuid

	// mesh.name = "Bengt"

	return (

		mesh

	)



}



const createText = (item) => {


	// console.log('NEWTEXT:', newText)
	let text = new Text()

	// text.font = 'https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff'
	text.text = 'Hello!'
	text.fontSize = 3
	text.color = 0x9966ff
	// text.position.z = -1
	// text.material = new THREE.MeshBasicMaterial()
	// text.materialType = 'MeshBasicMaterial'
	text.textAlign = 'justify'
	text.anchorX = 'left'
	text.anchorY = 'middle'

	// text.material.depthTest = false
	// text.anchorY = 'center'

	return (
		text
	)
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