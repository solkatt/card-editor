import './App.css'
import Editor from './components/editor/Editor'
import Landing from './components/Landing/Landing'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
	return (
		<div className='App'>
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
