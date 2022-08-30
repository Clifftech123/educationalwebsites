
import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Introduction from './HomePagesCards';
import NavBarComponent from './Navbarcomponent'
import Programing from './Programing'
import Student from './Student'
import Marketing from './Marketing'
import Footer from './Footer';

function App() {
	
  return (
		<div className="App">
			<BrowserRouter>
				<NavBarComponent />

				<Routes>
					<Route path="/" element={<Introduction />} />
					<Route path="/programing" element={<Programing />} />
					<Route path="/Student" element={<Student />} />
					<Route path="/Marketing" element={<Marketing />} />
				</Routes>
			</BrowserRouter>
			<Footer/>
			
			
		</div>
	);
}

export default App;

