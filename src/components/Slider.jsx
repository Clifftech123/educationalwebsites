import React, { useState, useEffect, useRef } from "react";
import SliderOne from "./IMAGES/Slider1.jpg";
import SliderTwo from "./IMAGES/Slider2.jpg";
import SlidThree from "./IMAGES/Slider3.jpg";

import SliderFive from "./IMAGES/Slider5.jpg";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";

//IMAGES
const StudentImages = [SliderOne, SliderTwo, SlidThree, SliderFive];

let count = 0;
let slideInterval;

const SliderComponent = () => {
	// IMAGE CHANGE STATE
	const [currentIndex, SetCurrentIndex] = useState(0);

	const SliderRef = useRef();
	const removeAnimation = () => {
		SliderRef.current.classList.remove("fade-anim");
	};

	// useEffect THE CHANGE THE IMAGE AUTOMATICALLY
	useEffect(() => {
		Slider();
		SliderRef.current.addEventListener("animationend", removeAnimation);
		SliderRef.current.addEventListener("mouseenter", pauseSlider);
		SliderRef.current.addEventListener("mouseleave", Slider);
	}, []);

	// METHOD THE CHANGE THE IMAGE On Every 6 seconds
	const Slider = () => {
		slideInterval = setInterval(() => {
			handelOnNextClick();
		}, 4000);
	};

	// PAUSE INTERNAL FUNCTIONS
	const pauseSlider = () => {
		clearInterval(slideInterval);
	};

	const handelOnNextClick = () => {
		count = (count + 1) % StudentImages.length;
		SetCurrentIndex(count);
		SliderRef.current.classList.add("fade-anim");
	};
	const handelOnPrevClick = () => {
		const ImageLength = StudentImages.length;
		count = (currentIndex + ImageLength - 1) % ImageLength;
		SetCurrentIndex(count);
		SliderRef.current.classList.add("fade-anim");
	};
	return (
		<>
			<div ref={SliderRef} className=" lg:px-8 max-sm  mx-auto ">
				<div className=" w-sm  relative  select-none ">
					<div className="aspect-w-16 aspect-h-9">
						<img
							className="  object-cover  object-center"
							src={StudentImages[currentIndex]}
							alt="slide img"
						/>
					</div>
					<div className=" absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center text-G_Purple">
						<button
							className="bg-G_Purple text-white p-1 rounded-full  cursor-pointer hover:bg-opacity-50 transition"
							onClick={handelOnPrevClick}
						>
							<AiOutlineVerticalRight size={35} />{" "}
						</button>
						<button
							className="bg-G_Purple text-white p-1 rounded-full bg-opacity-100 cursor-pointer hover:bg-opacity-50 transition"
							onClick={handelOnNextClick}
						>
							<AiOutlineVerticalLeft size={35} />{" "}
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default SliderComponent;
