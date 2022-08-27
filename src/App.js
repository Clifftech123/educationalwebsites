
import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Introduction from './components/Introduction/Introduction.component';
import NavBarComponent from './components/Navbar/Navbar.component'
import Programing from './Pages/Programing/Programing'
import Student from './Pages/Student/Student'
import Marketing from './Pages/Markeeting/Marketing'

function App() {
	
  return (
		<div className='App'>
			<BrowserRouter>
				<NavBarComponent />

				<Routes>
					<Route path="/" element={<Introduction />} />
					<Route path="/programing" element={<Programing />} />
					<Route path="/Student" element={<Student />} />
					<Route path="/Marketing" element={<Marketing />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

