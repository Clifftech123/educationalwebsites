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

 const [ CloseText , SetCloseText] = useState(false)

	return (
		<>
			<div className=" p-10  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 sm:justify-center">
				{/* W3SCHOOL */}
				<div className="p-10">
					<div className="max-w-sm rounded overflow-hidden shadow-sm border">
						<img className="w-full" src={W3school} alt="W3school " />
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2  text-Footer_bg ">
								W3school
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
						<img className="w-full" src={FreeCodeCamp} alt="FreeCodeCamp" />
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2   text-Footer_bg ">
								FreeCodeCamp
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
						<img className="w-full" src={Udemy} alt="Udemy" />
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2   text-Footer_bg ">
								Udemy
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
						<img className="w-full" src={Udx} alt="Udx" />
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
									onClick={() => SetCloseText(true)}
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
			<div className=" p-10  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 sm:justify-center">
				{/* https://www.udacity.com/ */}
				<div className="p-10">
					<div className="max-w-sm rounded overflow-hidden shadow-sm border">
						<img className="w-full" src={Udercity} alt="Udercity " />
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
						<img className="w-full" src={pluralsight} alt="pluralsight" />
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
						<img className="w-full" src={MDN} alt="MDN" />
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
						<img className="w-full" src={codeCademy} alt="codecademy" />
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2  text-Footer_bg "> codecademy</div>
							<p className="text-gray-700 text-base hidden">
								Love is good we have to sick to and see what the more we lve the
								more good we you in your own way the more peolple come to me the
								more i show thme what o ennnd to give to them on thire own
							</p>
						</div>
						<div className="px-6 pt-4 pb-2 md:space-2">
							<span>
								<button
									onClick={() => SetCloseText(true)}
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
