// import './App.css'
import { Route, BrowserRouter as Routes } from 'react-router-dom';

import Layout from './components/Layout';
import Menu from './components/Menu';

// import TipTap from './components/MainEditor';

function App() {
	return (
		// <BrowserRouter>
		// 	{/* <Layout /> */}
		// 	<Routes>
		// 		<Route path="/Layout" exact element={<Layout />} />
		// 	</Routes>

		// 	{/* <Menu /> */}
		// </BrowserRouter>

		// <div className="App">
		//    <h1 className="text-3xl font-bold underline text-red-500">
		//   Hello world!
		// </h1>
		// </div>
		<>
			<Layout />
			{/* <Menu /> */}
			{/* <TipTap /> */}
		</>
	);
}

export default App;
