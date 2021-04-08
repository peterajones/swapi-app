import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
	return (
		<main>
			<Switch>
				<Route path='/' component={Home} exact />
			</Switch>
		</main>
	);
}
export default App;
