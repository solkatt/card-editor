import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import api from '../../../api'


const LoadDesignCollectionBtn = () => {

  const [designs, setDesigns] = useState([])
  const history = useHistory()

  useEffect(() => {
    loadDesigns()
  }, [])



  const loadDesigns = async () => {
    // const { storeID } = this.state.store._id

    // console.log(id)
    // this.setState({ isLoading: true })


    await api.getAllDesigns().then((designs) => {
      console.log('from db:', designs)
      setDesigns(designs.data.data)

      // isLoading: false,
      console.log(designs)


    }, (err) => {
      console.log(err)

      // isLoading: false,


    })

    // this.setState({ isLoading: false })

  }


  const handleClick = (id) => {

    alert(id)
    history.push(`/editor/design/${id}`)



    ///
  }


  return (
    <div className="design-collection">

      <h2>DesignCollection</h2>
      <ul>

        {designs.map(design => {
          return (

            <li> {design.designName }
            <span>- - - - - -</span >
            <button onClick={() => handleClick(design._id)}>Open</button>
            </li>

          )

        })}


      </ul>
    </div >
  )
}


export default LoadDesignCollectionBtn



