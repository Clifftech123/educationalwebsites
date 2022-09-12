import React from "react";
import ProgamingInTRO from "./IMAGES/coding.svg"
import W3school from "./IMAGES/Programing/W3school.png";
import FreeCodeCamp from "./IMAGES/Programing/freecodcamp.png";
import Udemy from "./IMAGES/Programing/Udyme.png";
import Udx from "./IMAGES/Programing/Udx.png";
import Udercity  from './IMAGES/Programing/Udercity.png'
import pluralsight  from './IMAGES/Programing/P.png'
import MDN from './IMAGES/Programing/MDN.png'
import codeCademy from "./IMAGES/Programing/CodeCamp.png";
import Greek from "./IMAGES/Programing/Greek.png";
import programiz from "./IMAGES/Programing/Progamix.png";
import StudyTonight from "./IMAGES/Programing/StudyTonigth.png";
import Theodinproject from "./IMAGES/Programing/Theodinproject.png";  





//  EXTERNAL SITE LINKS
const  W3schoolSite = "https://www.w3schools.com/";
const FreeCodeCampSite = "https://www.freecodecamp.org/"
const UdyemSite = "https://www.udemy.com/courses/free/";
const UdxSite = "https://www.edx.org/school/edx"
const Usercity = "https://www.udacity.com/";
const Pluralsight ="https://www.pluralsight.com/"
const  Mozilla =  "https://developer.mozilla.org/en-US/"
const codecademy = "https://www.codecademy.com/";
const greeKforGreeks  = 'https://www.geeksforgeeks.org/'
const Progamix = "https://www.programiz.com/";
const studytonight = "https://www.studytonight.com/";
const theodinproject = "https://www.theodinproject.com/";

const Programing = () => {
	return (
		<>
			{/* PAGE INTRODUCTION  */}
			<div id="Programing" className="Programing  text-center">
				<div>
					<div className=" bg-white shadow-sm   grid lg:grid-cols-2 2xl:grid-cols-5">
						<div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
							<div className="xl:max-w-lg ">
								<div className="aspect-w-16 aspect-h-9 lg:mt-32">
									<img
										className=" w-full mt-10 object-cover object-center 2xl:w-full 2zl:mt-10 2xl:object-cover 2xl:object-center   sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden"
										src={ProgamingInTRO}
										alt="SVG img "
									/>
								</div>
								<h1 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
									<span className="text-Footer_bg">
										Benefits of Learning Programming
									</span>
								</h1>
								<p className=" text-lg  mt-2 text-gray-600 sm:mt-4 sm:text-xl">
									Learning to code not only allows you to give machines
									instructions, but it also teaches you abstract thinking and
									problem-solving. In fact, problem-solving skills and
									creativity are key to becoming a successful computer
									programmer. Of course, you'll also need to know some coding
									languages to apply
								</p>
								<div className="mt-4 sm:mt-6"></div>
							</div>
						</div>
						<div className="hidden relative md:mt-10 lg:block 2xl:col-span-3">
							<img
								className="absolute inset-0 w-full h-full object-cover object-center"
								src={ProgamingInTRO}
								alt="  SVG img for the  "
							/>
						</div>
					</div>
				</div>
			</div>
			{/* END OF THE INTRODUCTION  */}

			<div className=" p-30 py-20 sm:w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ">
				{/* W3SCHOOL */}
				<div className="p-10">
					<div className="c rounded overflow-hidden shadow-sm border hover:shadow-lg ">
						<img
							className="w-full  2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center"
							src={W3school}
							alt="W3school "
						/>
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2  text-Footer_bg ">
								W3school
							</div>
							<p className="text-gray-700 text-base  ">
								W3Schools is a web developers site, with tutorials and
								references on web development languages such as HTML, CSS,
								JavaScript, PHP, SQL, and JQuery, covering most aspects of web
								programming.
							</p>
						</div>
						<div className="px-6 pt-4 pb-2 ">
							<span>
								<button className=" inline-block  w-full text-center last: bg-Footer_bg  px-3 py-1 rounded-md text-md text-md font-semibold text-white mr-2 mb-2 ">
									<a href={W3schoolSite} target={"_blank"} rel="noreferrer">
										Visit Site
									</a>
								</button>
							</span>
						</div>
					</div>
				</div>

				{/*   /FreecodeCamp*/}
				<div className="p-10">
					<div className="max-w-sm rounded overflow-hidden hover:shadow-lg shadow-sm border">
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
								<button className=" inline-block  text-center w-full bg-Footer_bg   px-3 py-1 rounded-md text-md text-md font-semibold text-white mr-2 mb-2 ">
									<a href={FreeCodeCampSite} target={"_blank"} rel="noreferrer">
										Visit Site
									</a>
								</button>
							</span>
						</div>
					</div>
				</div>

				{/* Udemy  */}
				<div className="p-10">
					<div className="max-w-sm rounded hover:shadow-lg overflow-hidden  shadow-sm border">
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
								<button className=" inline-block text-center w-full bg-Footer_bg  px-3 py-1 rounded-md text-md font-semibold text-white mr-2 mb-2 ">
									<a href={UdyemSite} target={"_blank"} rel="noreferrer">
										Visit Site
									</a>
								</button>
							</span>
						</div>
					</div>
				</div>
				{/*------ END OF THE FIRST ROW-----  */}
				{/* -----------=============== SECOND ROW=========== ============== */}
				{/* UDX */}
				<div className="p-10">
					<div className="max-w-sm rounded overflow-hidden hover:shadow-lg shadow-sm border">
						<img
							className="w-full  2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center"
							src={Udx}
							alt="Udx"
						/>
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2  text-Footer_bg ">edx</div>
							<p className="text-gray-700 text-base ">
								edX courses consist of weekly learning sequences. Each learning
								sequence is composed of short videos interspersed with
								interactive learning exercises, where students can immediately
								practice the concepts from the videos.
							</p>
						</div>
						<div className="px-6 pt-4 pb-2 md:space-2">
							<span>
								<button className=" inline-block text-center w-full bg-Footer_bg rounded-md px-3 py-1 text-md font-semibold text-white mr-2 mb-2 ">
									<a href={UdxSite} target={"_blank"} rel="noreferrer">
										Visit Site
									</a>
								</button>
							</span>
						</div>
					</div>
				</div>

				{/* https://www.udacity.com/ */}
				<div className="p-10 ">
					<div className="max-w-sm rounded hover:shadow-lg overflow-hidden shadow-sm border">
						<img
							className="w-full  2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center"
							src={Udercity}
							alt="Udercity "
						/>
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2  text-Footer_bg ">
								Udacity
							</div>
							<p className="text-gray-700 text-base">
								Udacity is the outgrowth of free computer science classes
								offered in 2011 through Stanford University. Thrun has stated he
								hopes half a million students will enroll, after an enrollment
								of 160,000 students in the predecessor course at Stanford.
							</p>
						</div>
						<div className="px-6 pt-4 pb-2 md:space-2">
							<span>
								<button className=" inline-block  text-center w-full  bg-Footer_bg  rounded-md px-3 py-1 text-md font-semibold text-white mr-2 mb-2 ">
									<a href={Usercity} target={"_blank"} rel="noreferrer">
										Visit Site
									</a>
								</button>
							</span>
						</div>
					</div>
				</div>

				{/* pluralsight*/}
				<div className="p-10">
					<div className="max-w-sm rounded hover:shadow-lg overflow-hidden  shadow-sm border">
						<img
							className="w-full  2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center"
							src={pluralsight}
							alt="pluralsight"
						/>
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2   text-Footer_bg ">
								Pluralsight
							</div>
							<p className="text-gray-700 text-base">
								Pluralsight, Inc. is an American privately held online education
								company that offers a variety of video training courses for
								software developers, IT administrators, and creative
								professionals through its website.
							</p>
						</div>
						<div className="px-6 pt-4 pb-2 md:space-2">
							<span>
								<button className=" inline-block text-center w-full  bg-Footer_bg  rounded-md  px-3 py-1 text-md font-semibold text-white mr-2 mb-2 ">
									<a href={Pluralsight} target={"_blank"} rel="noreferrer">
										Visit Site
									</a>
								</button>
							</span>
						</div>
					</div>
				</div>
				{/*----- END OF THE SECOND ROW ----- */}

				{/* -----------=============== Third ROW=========== ============== */}

				{/* MDN  */}
				<div className="p-10">
					<div className="max-w-sm rounded  hover:shadow-lg overflow-hidden  shadow-sm border">
						<img
							className="w-full  2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center"
							src={MDN}
							alt="MDN"
						/>
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2   text-Footer_bg ">
								MDN
							</div>
							<p className="text-gray-700 text-base">
								MDN Web Docs, previously Mozilla Developer Network and formerly
								Mozilla Developer Center, is a documentation repository and
								learning resource for web developers. It was started by Mozilla
								in 2005 as a unified place for documentation .
							</p>
						</div>
						<div className="px-6 pt-4 pb-2 md:space-2">
							<span>
								<button className=" inline-block text-center w-full bg-Footer_bg  rounded-md px-3 py-1 text-md font-semibold text-white mr-2 mb-2 ">
									<a href={Mozilla} target={"_blank"} rel="noreferrer">
										Visit Site
									</a>
								</button>
							</span>
						</div>
					</div>
				</div>
				{/* codecademy */}

				<div className="p-10">
					<div className="max-w-sm rounded overflow-hidden hover:shadow-lg shadow-sm border">
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
							<p className="text-gray-700 text-base ">
								Codecademy is an American online interactive platform that
								offers free coding classes in different programming languages
								including Python pandas-Python library, Beautiful Soup-Python
								Java etc.
							</p>
						</div>
						<div className="px-6 pt-4 pb-2 md:space-2">
							<span>
								<button className=" inbuttonne-block text-center w-full  bg-Footer_bg rounded-md px-3 py-1 text-md font-semibold text-white mr-2 mb-2 ">
									<a href={codecademy} target={"_blank"} rel="noreferrer">
										Visit Site
									</a>
								</button>
							</span>
						</div>
					</div>
				</div>
				{/* GreeksForgreek */}
				<div className="p-10">
					<div className="max-w-sm rounded overflow-hidden hover:shadow-lg shadow-sm border">
						<img
							className="w-full  2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center"
							src={Greek}
							alt="codecademy"
						/>
						<div className="px-6 py-6">
							<div className="font-bold text-xl mb-2  text-Footer_bg ">
								{" "}
								Geeksforgeeks
							</div>
							<p className="text-gray-700 text-base ">
								GeeksforGeeks.org was created with a goal in mind to provide
								well written, well thought and well explained solutions for
								selected questions. The core team of five super geeks
								constituting of technology lovers and computer science
								enthusiasts have been constantly.
							</p>
						</div>
						<div className="px-6 pt-4 pb-2 md:space-2">
							<span>
								<button className=" inline-block text-center w-full  bg-Footer_bg rounded-md px-3 py-1 text-md font-semibold text-white mr-2 mb-2 ">
									<a href={greeKforGreeks} target={"_blank"} rel="noreferrer">
										Visit Site
									</a>
								</button>
							</span>
						</div>
					</div>
				</div>
				{/* -----END OF THE THE THIRD ROW-----  */}

				{/* -----------=============== Fourth  ROW=========== ============== */}
				{/* Programi */}
				<div className="p-10">
					<div className="max-w-sm rounded overflow-hidden hover:shadow-lg shadow-sm border">
						<img
							className="w-full  2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center"
							src={programiz}
							alt="codecademy"
						/>
						<div className="px-6 py-6">
							<div className="font-bold text-xl mb-2  text-Footer_bg ">
								{" "}
								Programiz
							</div>
							<p className="text-gray-700 text-base ">
								Programiz is a platform to learn programming built by
								programmers for programmers. With more than 50 million
								enthusiasts relying on Programiz to learn programming, we pride
								ourselves in being among the leaders in the industry.
							</p>
						</div>
						<div className="px-6 pt-4 pb-2 md:space-2">
							<span>
								<button className=" inline-block text-center w-full  bg-Footer_bg  rounded-md px-3 py-1 text-md font-semibold text-white mr-2 mb-2 ">
									<a href={Progamix} target={"_blank"} rel="noreferrer">
										Visit Site
									</a>
								</button>
							</span>
						</div>
					</div>
				</div>

				{/* studytonight */}
				<div className="p-10">
					<div className="max-w-sm rounded overflow-hidden hover:shadow-lg shadow-sm border">
						<img
							className="w-full  2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center"
							src={StudyTonight}
							alt="codecademy"
						/>
						<div className="px-6 py-6">
							<div className="font-bold text-xl mb-2  text-Footer_bg ">
								{" "}
								Studytonight
							</div>
							<p className="text-gray-700 text-base ">
								Studytonight believe that by widening the reach of education, by
								making it easily available, in different languages, at
								affordable price, so much can be achieved and changed. And this
								journey started in 2013 when a young boy thought to have a
								website, with simple.
							</p>
						</div>
						<div className="px-6 pt-4 pb-2 md:space-2">
							<span>
								<button className=" inline-block text-center w-full bg-Footer_bg rounded-md px-3 py-1 text-md font-semibold text-white mr-2 mb-2 ">
									<a href={studytonight} target={"_blank"} rel="noreferrer">
										Visit Site
									</a>
								</button>
							</span>
						</div>
					</div>
				</div>

				{/* theodinproject */}
				<div className="p-10">
					<div className="max-w-sm rounded overflow-hidden hover:shadow-lg shadow-sm border">
						<img
							className="w-full  2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center"
							src={Theodinproject}
							alt="codecademy"
						/>
						<div className="px-6 py-6">
							<div className="font-bold text-xl mb-2  text-Footer_bg ">
								{" "}
								Theodinproject
							</div>
							<p className="text-gray-700 text-base ">
								Theodinproject has a curriculum with the best curated online
								tutorials, blogs, and courses. website we wish we had when we
								were learning on our own. We scour the internet looking for only
								the best resources to supplement your learning.
							</p>
						</div>
						<div className="px-6 pt-4 pb-2 md:space-2">
							<span>
								<button className=" inline-block text-center w-full bg-Footer_bg   rounded-md px-3 py-1 text-md font-semibold text-white mr-2 mb-2 ">
									<a href={theodinproject} target={"_blank"} rel="noreferrer">
										Visit Site
									</a>
								</button>
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Programing;
