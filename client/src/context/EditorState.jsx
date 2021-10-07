import React, { useState } from 'react';

import EditorContext from './EditorContext'
import api from '../api'

import convertToMesh from './convertToMesh'; 

const EditorState = ({children}) => { 

	const [contentState, setContentState] = useState([])
	const [designName, setDesignName] = useState('')
  const [isLoading, setIsLoading] = useState(false)


  const loadDesign = async (id) => {
		setIsLoading(true)

		await api
			.getDesignById(id)
			.then((design) => {
				console.log('FROM DB', design.data.data)
				const meshes = convertToMesh({ design: design.data.data })
				setContentState(meshes)
				setDesignName(design.data.data.designName)

				setIsLoading(false)
			})
			.catch((err) => {
        console.log(err)
        setIsLoading(false)      
      })

		console.log(contentState)
	}

  return (

    <EditorContext.Provider value={{
      loadDesign, contentState, setContentState
      
    }}>
    {children}
  </EditorContext.Provider>
    )
}

export default EditorState