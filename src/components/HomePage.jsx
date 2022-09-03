import React from 'react'
import Introduction from './Introduction.component';
import HomePagesCards from "./HomePagesCards"
import SliderComponent from "./Slider";



const  HomePage =() => {
  return (
		// RENDING THE HOMEPAGE COMPONENTS
		<>
			<Introduction /> {/* RENDING THE INTRODUCTION PAGE COMPONENT  */}
			<SliderComponent />
			<HomePagesCards /> {/* RENDING HOME CARD COMPONENT     */}
		</>
	);
}

export default HomePage
