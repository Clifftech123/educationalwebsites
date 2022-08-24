
import React from 'react';
import './App.css';
import Introduction from './components/Introduction/Introduction.component';
import NavBarComponent from './components/Navbar/Navbar.component';


function App() {
  return (
		<div className='App'>
			<NavBarComponent />
			<Introduction/>
		</div>
	);
}

export default App;

