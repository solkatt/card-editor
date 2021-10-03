import { useState, useRef } from 'react'

//Three Fiber
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'


// Three
import { DragControls } from 'three/examples/jsm/controls/DragControls'

import * as THREE from 'three'


// Css
import './Editor.css'


extend({ DragControls })



const Box = (props) => {

  const mesh = useRef()

  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)


  useFrame((state, delta) => {
    mesh.current.rotation.x += 0.01
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


  let newBox = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 'green'}))

  console.log('NEWBOX', newBox)


  return (

    <button onClick={() => setContentState(prevState => (
      [...prevState, newBox]
    )
    )
    }> Create BOX</button>
  )
}


const CreateImgButton = (props) => {


  let { setContentState } = props



 let sprite = new THREE.Sprite( new THREE.SpriteMaterial( { map: new THREE.TextureLoader().load( "kalasstrumpa1.png" ), color: 0xffffff } ) );
 
 var planeGeom = new THREE.PlaneGeometry(20, 20);
 var imgSrc = "kalasstrumpa1.png"
 var mesh;
 var tex = new THREE.TextureLoader().load(imgSrc, (tex) => {
   tex.needsUpdate = true;
   mesh.scale.set(.2, (tex.image.height / tex.image.width) * .2, .2);
   mesh.position.set(1,1,0.1)
 });
 
 var material = new THREE.MeshBasicMaterial({
   color: 0xffffff,
   map: tex
 });


 mesh = new THREE.Mesh(planeGeom, material);





  console.log('NEWBOX', mesh)


  return (

    <button onClick={() => setContentState(prevState => (
      [...prevState, mesh]
    )
    )
    }> Create IMG</button>
  )
}









///////////////////////////////////////////////

const CardContent = (props) => {


  let { contentState } = props

  console.log('DATA:', contentState)





  return (


    contentState.map(item => {



      return (

      <primitive object={item} /> 


        // <mesh
        //   {...props}

        // >

        //   <boxGeometry args={[1, 1, 1]} />
        //   <meshBasicMaterial color={item.color} />

        // </mesh>






      )
    })


  )
}



const Card = (props) => {


  return (
    <mesh {...props}>

      <planeBufferGeometry args={[5.4, 8.6]} />
      <meshBasicMaterial color='blue' />

    </mesh>

  )
}





// const ex = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 'green'}))

const Scene = (props) => {

  let {contentState} = props

  const {
    camera,
    gl: { domElement }
  } = useThree()
  

  

  return (
    <>
      {/* <primitive object={ex} /> */}
      <dragControls args={[[... contentState], camera, domElement]} />
    </>
  )
}






const Editor = () => {

  let [contentState, setContentState] = useState([])
  // let [objects, setObjects] = useState([])

  console.log(contentState)

  return (
    <div className='editor-container'>
      <div className='dashboard'>
        <CreateBoxButton setContentState={setContentState} />
        <CreateImgButton setContentState={setContentState} />



      </div>


      <Canvas background={'black'}


        orthographic camera={{ zoom: 50, position: [0, 0, 1], }}


      >
        {/* <Box position={[0, 0, 0]} /> */}
        <Card />
        <CardContent contentState={contentState} />
        <Scene contentState={contentState}  />
      </Canvas>
    </div>
  )
}



export default Editor


const c = <Canvas> </Canvas>

console.log(c)
