import React, { useState,useEffect,useRef} from 'react'
import SliderOne from './IMAGES/akson-1K8pIbIrhkQ-unsplash.jpg'
import SliderTwo from './IMAGES/becca-tapert-GnY_mW1Q6Xc-unsplash.jpg'
import SlidThree from './IMAGES/mimi-thian-GXEcTqlZHno-unsplash.jpg'
import SliderFour from './IMAGES/tran-mau-tri-tam-tZnbakTUcTI-unsplash.jpg'
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";


//IMAGES
 const StudentImages = [SliderOne, SliderTwo, SlidThree, SliderFour];

 
let count = 0;
let slideInterval;

const Slider =() => {
    // IMAGE CHANGE STATE
const  [currentIndex , SetCurrentIndex] = useState(0)

const SliderRef  = useRef()
 const removeAnimation = () => {
		SliderRef.current.classList.remove("fade-anim");
 };



// useEffect THE CHANGE THE IMAGE AUTOMATICALLY
useEffect(() => {
SliderRef.current.addEventListener("animationend", removeAnimation);
SliderRef.current.addEventListener("mouseenter", pauseSlider);
SliderRef.current.addEventListener("mouseleave", Slider);
  Slider();

// eslint-disable-next-line react-hooks/exhaustive-deps
}, [0]);

// METHOD THE CHANGE THE IMAGE
const Slider =() => {
   slideInterval = setInterval(() => {
		handelOnNextClick();
	}, 5000);
};
 const pauseSlider = () => {
		clearInterval(slideInterval);
 };

// onClick IMAGE CHANGE  IMAGE TO Next  
const handelOnNextClick = ()=>{
    count =(count +1) % StudentImages.length;
    SetCurrentIndex(count)
    SliderRef.current.classList.add('fade-anim')

}
// ON CLICK CHANGE IMAGE TO Previous
const handelOnPrevClick = ()=>{
    const ImageLength = StudentImages.length
    count=(currentIndex + ImageLength -1)%ImageLength;
    SetCurrentIndex(count)
      SliderRef.current.classList.add("fade-anim");
}
  return (
		<>
			<div ref={SliderRef} className=" lg:px-8 max-w-full  mx-auto ">
				<div className=" w-full select-none relative ">
					<div className="aspect-w-16 aspect-h-9">
						<img
							className="  object-cover  object-center"
							src={StudentImages[currentIndex]}
							alt="slide img"
						/>
					</div>
					<div className=" absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center text-G_Purple">
						<button
							className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
							onClick={handelOnPrevClick}
						>
							
							<AiOutlineVerticalRight size={35} />{" "}
						</button>
						<button
							className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
							onClick={handelOnNextClick}
						>
							
							<AiOutlineVerticalLeft size={35} />{" "}
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Slider
