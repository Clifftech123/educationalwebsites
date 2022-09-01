import React from 'react'
import Introduction from './Introduction.component';
import HomePagesCards from "./HomePagesCards"
import Slider from './Slider';



const  HomePage =() => {
  return (
		// RENDING THE HOMEPAGE COMPONENTS
		<>
		<Slider/>
			<Introduction /> {/* RENDING THE INTRODUCTION PAGE COMPONENT  */}
			<HomePagesCards /> {/* RENDING HOME CARD COMPONENT     */}
		</>
	);
}

export default HomePage
