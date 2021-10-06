import './App.css'
import Create from './components/Create'
import CreateDesign from './components/CreateDesign'
import Editor from './components/editor/Editor'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					{/* <Route path='/' exact component={Landing} /> */}
					<Route path='/editor/design/:id' exact component={Editor} />
				</Switch>
			</Router>
			{/* <Create /> */}
			{/* <CreateDesign /> */}
			{/* <Editor /> */}
		</div>
	)
}

export default App
