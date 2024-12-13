import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Stash from './pages/Stash';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/stash' element={<Stash />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
