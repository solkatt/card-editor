const Input = (props) => {
	const { setTextContent } = props

	const handleTextChange = (e) => {
		let text = e.target.value
		setTextContent(text)
	}

	return (
		<div className='input-container'>
			<input type='text' onChange={(e) => handleTextChange(e)}></input>
		</div>
	)
}

export default Input
