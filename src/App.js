
import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import HomePage from './components/HomePage.jsx';
import NavBarComponent from './components/Navbarcomponent'
import Programing from './components/Programing'
import Student from './components/Student'
import Marketing from './components/Marketing'
import Footer from './components/Footer.jsx';


function App() {
  return (
	<BrowserRouter>
		<NavBarComponent />
		<Routes>
			<Route path="/" element={< HomePage />} />
			<Route path="/programing" element={<Programing />} />
			<Route path="/Student" element={<Student />} />
			<Route path="/Marketing" element={<Marketing />} />
		</Routes>
		<Footer/>
	</BrowserRouter>
  )
}

export default App;

