import React from "react";
import cardImageOne from "./IMAGES/cardIMageOne.jpg";
import Student from "./IMAGES/Student (1).jpg";
import Marketing from "./IMAGES/Marketing.jpg";
import C from "./IMAGES/Slider2.jpg";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { BsDashCircle } from "react-icons/bs";








const HomePagesCards = () => {
	const Navigate = useNavigate();
	return (
		<>
			{/* CARD SECTION  */}
			<div className="p-10 py-24  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
				{/*============ FIRST CARD=========  */}
				<div className=" overflow-hidden  rounded-xl border p-1  hover:shadow-lg  bg-white  shadow-sm">
					<img
						className="w-full  2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center"
						src={cardImageOne}
						alt="Programing"
					/>
					<div className="px-6 py-4  border-b">
						<div className=" font-Poppins  text-Footer_bg text-3xl text-center mb-2">
							Programing
						</div>
						<p className="text-gray-700 text-base mb-5">
							Learning to code not only allows you to give machines
							instructions, but it also teaches you abstract thinking and
							problem-solving. In fact, problem-solving skills and creativity
							are key to becoming a successful computer programmer. Of course,
							you'll also need to know some coding languages to apply your
							knowledge.
						</p>
						<small className="text-Footer_bg font-medium ">
							{" "}
							Click Button below to view all the variable website to learn
							marketing{" "}
						</small>
					</div>
					{/* FIRST  BUTTON */}
					<div className=" flex text-center justify-center  px-6 pt-4 pb-2">
						<button
							// onClick button will automatically lead you to the programing page
							onClick={() => Navigate("/programing")}
							type="button"
							className="  p-4 w-full  text-center justify-center align-middle px-6 pt-2.5 pb-2 bg-Footer_bg text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-G_Purple  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
						>
							<span className="text-lg">
								{" "}
								<FaChevronDown />
							</span>
							See more
						</button>
					</div>
				</div>

				{/* END OF FIRST  CARD */}

				{/*================ SECOND CARD================== */}
				<div className=" rounded-xl border p-1  hover:shadow-lg overflow-hidden  bg-white  shadow-sm">
					<img
						className="w-full  2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center "
						src={Student}
						alt="Sut"
					/>
					<div className="px-6 py-4 border-b">
						<div className=" font-Poppins   text-Footer_bg text-3xl text-center   mb-2">
							Student
						</div>
						<p className="text-gray-700 text-base mb-5">
							Among the many benefits of an online learning, you’ll find virtual
							classrooms are great for people who are advancing their education
							while working. In a traditional classroom, lectures will be
							scheduled at a specific time of day and your schedule will be
							formed around the availability of classes.Online Study is the new
							trane
						</p>
						<small className="text-Footer_bg font-medium ">
							{" "}
							Click Button below to see website available for student{" "}
						</small>
					</div>
					{/*   BUTTON  SECOND */}
					<div className=" flex text-center justify-center  px-6 pt-4 pb-2">
						<button
							// onClick button will automatically lead you to the Student page
							onClick={() => Navigate("/Student")}
							type="button"
							className="   w-full text-center justify-center align-middle   px-6 pt-2.5 pb-2 bg-Footer_bg text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-G_Purple  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
							title="Student "
						>
							<span className="text-lg">
								{" "}
								<FaChevronDown />
							</span>
							See more
						</button>
					</div>
				</div>

				{/*END OF  SECOND CARD */}

				{/*========== THIRD CARD============  */}
				<div className="  rounded-xl border p-1  hover:shadow-lg overflow-hidden  bg-white   shadow-sm">
					<img
						className="w-full 2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center  "
						src={Marketing}
						alt="Forest"
					/>
					<div className="px-6 py-4  border-b">
						<div className=" font-Poppins text-Footer_bg text-3xl text-center   mb-2">
							Jobs
						</div>
						<p className="text-gray-700 text-base mb-5">
							here are so many reasons why you might want to study marketing: it
							will prepare you for a range of careers, marketing is one of the
							fastest-growing industries, you’ll learn what drives a business,
							you get to be creative and strategic… the list could go on and on!
							Marketing is a versatile degree that will prepare you for a wide
							range.
						</p>

						<small className="text-Footer_bg font-medium ">
							{" "}
							Click Button below to view all the variable website to learn
							marketing{" "}
						</small>
					</div>
					{/* THIRD BUTTON  */}
					<div className=" flex text-center justify-center  px-6 pt-4 pb-2">
						<button
							// onClick button will automatically lead you to the marking page
							onClick={() => Navigate("/Jobs")}
							type="button"
							className="  w-full text-center justify-center align-middle   px-6 pt-2.5 pb-2 bg-Footer_bg text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-G_Purple hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
						>
							<span className="text-lg">
								{" "}
								<FaChevronDown />
							</span>
							<span className="font "> See more </span>
						</button>
					</div>
				</div>
			</div>
			{/* END OF CARD SECTION  */}

			{/*========= ACCORDING SECTION ========== */}

		

			{/*========= WHY SHOULD STUDY ONLINE TEXT   =========== */}

			<div id="Introduction" className=" text-center">
				<div>
					<div className=" bg-white shadow-sm  md:ml-20 grid lg:grid-cols-2 2xl:grid-cols-5 ">
						<div className="hidden relative sm:p-20 py-12 lg:block 2xl:col-span-3">
							<img
								className="absolute inset-0 w-full h-full  "
								src={C}
								alt="  SVG img for the  "
							/>
						</div>
						<div className="px-2 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
							<div className="xl:max-w-lg ">
								<div className="aspect-w-16 aspect-h-9 lg:mt-32">
									<img
										className=" w-full mt-10 object-cover object-center 2xl:w-full 2xl:mt-10 2xl:object-cover 2xl:object-center sm:p-30   sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden"
										src={C}
										alt="Woman  on the beach"
									/>
								</div>
								<h1 className="mt-6 text-2xl  text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
									Take your skills to the next level
									<br className="hidden lg:inline" />
								</h1>
								<p className=" text-lg md: mt-2 text-gray-600 sm:mt-4 sm:text-xl">
									The beauty of a virtual classroom is that you can learn
									practically anything! Some programs require practical skills,
									such as training to become a healthcare worker (nurse, doctor,
									etc.) or a craftsperson. However, most theoretical knowledge
									can easily be obtained through online learning. Some of the
									most popular courses are those for the IT industry, such as
									computer science and data science courses. Digital marketing
									is also a popular topic these days, as well as all different
									kinds of management..
								</p>
								<div className="mt-4 sm:mt-6"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomePagesCards;
