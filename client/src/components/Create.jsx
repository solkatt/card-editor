import { useState } from 'react'
import axios from 'axios'

const Create = () => {

  const [testState, setTestState] = useState({
    person_name: '',
    person_position: '',
    person_level: '',
  })

  const onChangeName = (e) => {
     setTestState({...testState, person_name: e.target.value})
  }
  const onChangePosition = (e) => {
     setTestState({...testState, person_position: e.target.value})
  }
  const onChangeLevel = (e) => {
     setTestState({...testState, person_level: e.target.value})
  }


  const onSubmit = () => {

    const newperson = {
      person_name: testState.person_name,
      person_position: testState.person_position,
      person_level: testState.person_level
    }

    axios
    .post('http://localhost:5000/record/add', newperson)
    .then((res) => console.log(res.data))

    setTestState({
      person_name: '',
      person_position: '',
      person_level: '',
    })
  }


  return (
    <>
    <p>{testState.person_name}</p>
    <p>{testState.person_position}</p>
    <p>{testState.person_level}</p>

    <span>NAME</span><input type="text"value={testState.person_name} onChange={(e) => onChangeName(e)}></input>
    <span>POSITION</span><input type="text" value={testState.person_position} onChange={(e) => onChangePosition(e)}></input>
    <span>LEVEL</span><input type="text" value={testState.person_level} onChange={(e) => onChangeLevel(e)}></input>

    <button onClick={onSubmit}>Submit</button>
    </>
  )
}

export default Create