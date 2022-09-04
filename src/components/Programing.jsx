import React from "react";
import { useState } from "react";
import W3school from "./IMAGES/Programing/W3school.png";
import FreeCodeCamp from "./IMAGES/Programing/freecodcamp.png";
import Udemy from "./IMAGES/Programing/Udyme.png";
import Udx from "./IMAGES/Programing/Udx.png";
import Udercity  from './IMAGES/Programing/Udercity.png'
import pluralsight  from './IMAGES/Programing/P.png'
import MDN from './IMAGES/Programing/MDN.png'
import codeCademy from "./IMAGES/Programing/CodeCamp.png";




// SITE LINKS
const  W3schoolSite = "https://www.w3schools.com/";
const FreeCodeCampSite = "https://www.freecodecamp.org/"
const UdyemSite = "https://www.udemy.com/courses/free/";
const UdxSite = "https://www.edx.org/school/edx"
const Usercity = "https://www.udacity.com/";
const Pluralsight ="https://www.pluralsight.com/"
const  Mozilla =  "https://developer.mozilla.org/en-US/"
const codecademy = "https://www.codecademy.com/";

const Programing = () => {

 

	return (
		<>
			<div className=" p-30 py-24  sm:w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 ">
				{/* W3SCHOOL */}
				<div className="p-10">
					<div className="max-w-sm rounded overflow-hidden shadow-sm border">
						<img
							className="w-full  2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center"
							src={W3school}
							alt="W3school "
						/>
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2  text-Footer_bg ">
								W3school
							</div>
							<p className="text-gray-700 text-base">
								W3Schools is a web developers site, with tutorials and
								references on web development languages such as HTML, CSS,
								JavaScript, PHP, SQL, and JQuery, covering most aspects of web
								programming.
							</p>
						</div>
						<div className="px-6 pt-4 pb-2 ">
							<span>
								<li className=" inline-block  w-full text-center last:  bg-blue-700 px-3 py-1 rounded-md text-md py-1 text-md font-semibold text-white mr-2 mb-2 ">
									<a href={W3schoolSite} target={"_blank"} rel="noreferrer">
										Visit Site
									</a>
								</li>
							</span>
						</div>
					</div>
				</div>

				{/* SECOND CARD  /FreecodeCamp*/}
				<div className="p-10">
					<div className="max-w-sm rounded overflow-hidden  shadow-sm border">
						<img
							className="w-full  2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center"
							src={FreeCodeCamp}
							alt="FreeCodeCamp"
						/>
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2   text-Footer_bg ">
								FreeCodeCamp
							</div>
							<p className="text-gray-700 text-base">
								freeCodeCamp is a non-profit organization that consists of an
								interactive learning web platform, an online community forum,
								chat rooms, online publications and local organizations that
								intend to make learning web development.
							</p>
						</div>
						<div className="px-6 pt-4 pb-2">
							<span>
								<li className=" inline-block  text-center w-full  bg-blue-700 px-3 py-1 rounded-md text-md text-md font-semibold text-white mr-2 mb-2 ">
									<a href={FreeCodeCampSite} target={"_blank"} rel="noreferrer">
										Visit Site
									</a>
								</li>
							</span>
						</div>
					</div>
				</div>

				{/* THIRD CARD Udemy  */}
				<div className="p-10">
					<div className="max-w-sm rounded overflow-hidden  shadow-sm border">
						<img
							className="w-full  2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center"
							src={Udemy}
							alt="Udemy"
						/>
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2   text-Footer_bg ">
								Udemy
							</div>
							<p className="text-gray-700 text-base">
								Udemy a for-profit massive open online course provider aimed at
								professional adults and students. Caglar. the platform has more
								than 52 million students, 196,000 courses, and 68,000
								instructors teaching courses in over 75 languages.
							</p>
						</div>
						<div className="px-6 pt-4 pb-2 md:space-2">
							<span>
								<li className=" inline-block text-center w-full bg-blue-700 px-3 py-1 rounded-md text-md font-semibold text-white mr-2 mb-2 ">
									<a href={UdyemSite} target={"_blank"} rel="noreferrer">
										Visit Site
									</a>
								</li>
							</span>
						</div>
					</div>
				</div>
				{/* FOURTH CARD  EDX */}

				<div className="p-10">
					<div className="max-w-sm rounded overflow-hidden  shadow-sm border">
						<img
							className="w-full  2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center"
							src={Udx}
							alt="Udx"
						/>
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2  text-Footer_bg ">edx</div>
							<p className="text-gray-700 text-base hidden">
								Love is good we have to sick to and see what the more we lve the
								more good we you in your own way the more peolple come to me the
								more i show thme what o ennnd to give to them on thire own
							</p>
						</div>
						<div className="px-6 pt-4 pb-2 md:space-2">
							<span>
								<button
									
									type="button"
									className="inline-block  bg-G_Purple -200 rounded-full px-3 py-1 text-md font-semibold text-white mr-2 mb-2"
								>
									Read More
								</button>
							</span>
							<span>
								<li className=" inline-block  bg-G_Purple -200 rounded-full px-3 py-1 text-md font-semibold text-white mr-2 mb-2 ">
									<a href={UdxSite} target={"_blank"} rel="noreferrer">
										Visit Site
									</a>
								</li>
							</span>
						</div>
					</div>
				</div>
			</div>

			{/* -----------=============== SECOND ROW=========== ============== */}
			<div className=" p-30 py-24  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 sm:justify-center">
				{/* https://www.udacity.com/ */}
				<div className="p-10">
					<div className="max-w-sm rounded overflow-hidden shadow-sm border">
						<img
							className="w-full  2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center"
							src={Udercity}
							alt="Udercity "
						/>
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2  text-Footer_bg ">
								Udacity
							</div>
							<p className="text-gray-700 text-base"></p>
						</div>
						<div className="px-6 pt-4 pb-2 md:space-2">
							<span>
								<button
									type="button"
									className="inline-block  bg-G_Purple -200 rounded-full px-3 py-1 text-md font-semibold text-white mr-2 mb-2"
								>
									Read More
								</button>
							</span>
							<span>
								<li className=" inline-block  bg-G_Purple -200 rounded-full px-3 py-1 text-md font-semibold text-white mr-2 mb-2 ">
									<a href={Usercity} target={"_blank"} rel="noreferrer">
										Visit Site
									</a>
								</li>
							</span>
						</div>
					</div>
				</div>

				{/* pluralsight*/}
				<div className="p-10">
					<div className="max-w-sm rounded overflow-hidden  shadow-sm border">
						<img
							className="w-full  2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center"
							src={pluralsight}
							alt="pluralsight"
						/>
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2   text-Footer_bg ">
								Pluralsight
							</div>
							<p className="text-gray-700 text-base"></p>
						</div>
						<div className="px-6 pt-4 pb-2 md:space-2">
							<span>
								<button
									type="button"
									className="inline-block  bg-G_Purple -200 rounded-full px-3 py-1 text-md font-semibold text-white mr-2 mb-2"
								>
									Read More
								</button>
							</span>
							<span>
								<li className=" inline-block  bg-G_Purple -200 rounded-full px-3 py-1 text-md font-semibold text-white mr-2 mb-2 ">
									<a href={Pluralsight} target={"_blank"} rel="noreferrer">
										Visit Site
									</a>
								</li>
							</span>
						</div>
					</div>
				</div>

				{/* MDN  */}
				<div className="p-10">
					<div className="max-w-sm rounded overflow-hidden  shadow-sm border">
						<img
							className="w-full  2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center"
							src={MDN}
							alt="MDN"
						/>
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2   text-Footer_bg ">
								MDN
							</div>
							<p className="text-gray-700 text-base"></p>
						</div>
						<div className="px-6 pt-4 pb-2 md:space-2">
							<span>
								<button
									type="button"
									className="inline-block  bg-G_Purple -200 rounded-full px-3 py-1 text-md font-semibold text-white mr-2 mb-2"
								>
									Read More
								</button>
							</span>
							<span>
								<li className=" inline-block  bg-G_Purple -200 rounded-full px-3 py-1 text-md font-semibold text-white mr-2 mb-2 ">
									<a href={Mozilla} target={"_blank"} rel="noreferrer">
										Visit Site
									</a>
								</li>
							</span>
						</div>
					</div>
				</div>
				{/* codecademy */}

				<div className="p-10">
					<div className="max-w-sm rounded overflow-hidden  shadow-sm border">
						<img
							className="w-full  2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center"
							src={codeCademy}
							alt="codecademy"
						/>
						<div className="px-6 py-6">
							<div className="font-bold text-xl mb-2  text-Footer_bg ">
								{" "}
								codecademy
							</div>
							<p className="text-gray-700 text-base hidden">
								Love is good we have to sick to and see what the more we lve the
								more good we you in your own way the more peolple come to me the
								more i show thme what o ennnd to give to them on thire own
							</p>
						</div>
						<div className="px-6 pt-4 pb-2 md:space-2">
							<span>
								<button
								
									type="button"
									className="inline-block  bg-G_Purple -200 rounded-full px-3 py-1 text-md font-semibold text-white mr-2 mb-2"
								>
									Read More
								</button>
							</span>
							<span>
								<li className=" inline-block  bg-G_Purple -200 rounded-full px-3 py-1 text-md font-semibold text-white mr-2 mb-2 ">
									<a href={codecademy} target={"_blank"} rel="noreferrer">
										Visit Site
									</a>
								</li>
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Programing;
