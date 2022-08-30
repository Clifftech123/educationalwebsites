import React from "react";
import cardImageOne from "./IMAGES/cardIMageOne.jpg";
import Student from "./IMAGES/Student (1).jpg";
import Marketing from "./IMAGES/Marketing.jpg";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HomePagesCards = () => {
	const Navigate = useNavigate();
	return (
		<>
			{/* CARD SECTION  */}
			<div className="p-10 py-24  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
				{/*============ FIRST CARD=========  */}
				<div className=" overflow-hidden  rounded-xl border p-1  hover:shadow-lg  bg-white  shadow-sm">
					<img
						className="w-full shadow-lg 2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center"
						src={cardImageOne}
						alt="Programing"
					/>
					<div className="px-6 py-4 border-b">
						<div className="font-bold  font-Poppins text-xl text-G_Purple mb-2">
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
						<small className="text-G_Purple font-medium ">
							{" "}
							Click Button below to view all the variable website to learn
							marketing{" "}
						</small>
					</div>
					{/* FIRST  BUTTON */}
					<div className=" flex text-center justify-center  px-6 pt-4 pb-2">
						<button
							// onClick button will automatically lead you to the programing page
							onClick={() => Navigate("programing")}
							type="button"
							className="  p-4 w-full  text-center justify-center align-middle px-6 pt-2.5 pb-2 bg-G_Purple text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
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
				<div className="    rounded-xl border p-1  hover:shadow-lg overflow-hidden   bg-white  shadow-sm">
					<img
						className="w-full  2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center shadow-lg"
						src={Student}
						alt="Sut"
					/>
					<div className="px-6 py-4 border-b">
						<div className="font-bold font-Poppins text-xl text-G_Purple mb-2">
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
						<small className="text-G_Purple font-medium ">
							{" "}
							Click Button below to see website available for student{" "}
						</small>
					</div>
					{/*   BUTTON  SECOND */}
					<div className=" flex text-center justify-center  px-6 pt-4 pb-2">
						<button
							// onClick button will automatically lead you to the Student page
							onClick={() => Navigate("Student")}
							type="button"
							className="   w-full text-center justify-center align-middle   px-6 pt-2.5 pb-2 bg-G_Purple text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
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
						className="w-full 2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center  shadow-md"
						src={Marketing}
						alt="Forest"
					/>
					<div className="px-6 py-4 border-b">
						<div className="font-bold font-Poppins text-xl text-G_Purple   mb-2">
							Marketing
						</div>
						<p className="text-gray-700 text-base mb-5">
							here are so many reasons why you might want to study marketing: it
							will prepare you for a range of careers, marketing is one of the
							fastest-growing industries, you’ll learn what drives a business,
							you get to be creative and strategic… the list could go on and on!
							Marketing is a versatile degree that will prepare you for a wide
							range of careers.
						</p>

						<small className="text-G_Purple font-medium ">
							{" "}
							Click Button below to view all the variable website to learn
							marketing{" "}
						</small>
					</div>
					{/* THIRD BUTTON  */}
					<div className=" flex text-center justify-center  px-6 pt-4 pb-2">
						<button
							// onClick button will automatically lead you to the marking page
							onClick={() => Navigate("Marketing")}
							type="button"
							className="  w-full text-center justify-center align-middle   px-6 pt-2.5 pb-2 bg-G_Purple text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
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


			{/*======= TODO: I WILL MODIFY TEXT======  */}
			<section>
				<div class="flex items-center justify-center  mb-10  mt-10">
					{" "}
					<div class="rounded-xl border p-5 shadow-md w-9/12 bg-white">
						<div class="flex w-full items-center justify-between border-b ">
							<div class="flex items-center space-x-3">
								<div class="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]"></div>
								<div class="text-lg font-bold text-slate-700">Joe Smith</div>
							</div>
							<div class="flex items-center space-x-8">
								<button class="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold">
									Category
								</button>
								<div class="text-xs text-neutral-500">2 hours ago</div>
							</div>
						</div>

						<div class="mt-4 mb-6">
							<div class="mb-3 text-xl font-bold">
								Nulla sed leo tempus, feugiat velit vel, rhoncus neque?
							</div>
							<div class="text-sm text-neutral-600">
								Aliquam a tristique sapien, nec bibendum urna. Maecenas
								convallis dignissim turpis, non suscipit mauris interdum at.
								Morbi sed gravida nisl, a pharetra nulla. Etiam tincidunt turpis
								leo, ut mollis ipsum consectetur quis. Etiam faucibus est risus,
								ac condimentum mauris consequat nec. Curabitur eget feugiat
								massa
							</div>
						</div>

						<div>
							<div class="flex items-center justify-between text-slate-500">
								<div class="flex space-x-4 md:space-x-8">
									<div class="flex cursor-pointer items-center transition hover:text-slate-600">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="mr-1.5 h-5 w-5"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											stroke-width="2"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
											/>
										</svg>
										<span>125</span>
									</div>
									<div class="flex cursor-pointer items-center transition hover:text-slate-600">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="mr-1.5 h-5 w-5"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											stroke-width="2"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
											/>
										</svg>
										<span>4</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* END OF THE ACCORDING */}
		</>
	);
};

export default HomePagesCards;
