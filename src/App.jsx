// import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import Menu from './components/Menu';
import { useState } from 'react';

// import TipTap from './components/MainEditor';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Layout />} />
					{/* <Route path="/" element={< />} /> */}
					{/* <Route path="/" element={< />} /> */}
					{/* <Route path="/" element={< />} /> */}
					{/* <Route path="/" element={< />} /> */}
					{/* <Route path="/" element={< />} /> */}
					{/* <Route path="/" element={< />} /> */}
				</Routes>
			</Router>
		</>
		// <>
		// 	<Layout />
		// 	{/* <Menu /> */}
		// 	{/* <TipTap /> */}
		// </>
		//   <>
	);
}

export default App;
