import './App.css'
import Editor from './components/editor/Editor'
import Landing from './components/landing/Landing'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Loader from './components/loader/Loader'
function App() {
	return (
		<div className='App'>
			<Loader />
			<Router>
				<Switch>
					<Route path='/' exact component={Landing} />
					<Route path='/editor/design/:id' exact component={Editor} />
				</Switch>
			</Router>
		</div>
	)
}

export default App
