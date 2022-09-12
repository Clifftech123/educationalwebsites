import React from 'react'
import SutdentIntro from "./IMAGES/StudentPage.svg"
import card1 from "./IMAGES/student/card1.png";
import card2 from "./IMAGES/student/card2.png";
import card3 from "./IMAGES/student/card3.png";
import card4 from "./IMAGES/student/card4.png";
import card5 from "./IMAGES/student/card5.png";
import card6 from "./IMAGES/student/card6.png";
import card7 from "./IMAGES/student/card7.png";
import card8 from "./IMAGES/student/card8.png";
import card9 from "./IMAGES/student/card9.png";
import card10 from "./IMAGES/student/card10.png";
import card11 from "./IMAGES/student/card11.png"
import card12 from "./IMAGES/student/card12.png"

// SITE LINKS 
const Coursera = " https://in.coursera.org/";
const linkedin = "https://www.linkedin.com/learning/courses";
const skillshare = "https://www.skillshare.com/login";
const Alison = "https://alison.com/"
const khanacademy = "https://www.khanacademy.org/";
const academicearth = "https://academicearth.org/";
const stanford = "https://online.stanford.edu/";
const harvard = "https://pll.harvard.edu/catalog/free";
const Yale = "https://oyc.yale.edu/";   
const uopeople = "https://www.uopeople.edu/";
const podcasts = "https://podcasts.ox.ac.uk/";
const memrise ="https://www.memrise.com/"

const  Student = () => {
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
										src={SutdentIntro}
										alt="SVG img "
									/>
								</div>
								<h1 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
									<span className="text-Footer_bg">
										Make you journey Simple
									</span>
								</h1>
								<p className=" text-lg  mt-2 text-gray-600 sm:mt-4 sm:text-xl">
								Over many years, education has been changing at every level - from preschool to graduate school - and digital learning methods have become increasingly common with the development of new technologies every day. 
								</p>
								<div className="mt-4 sm:mt-6"></div>
							</div>
						</div>
						<div className="hidden relative md:mt-10 lg:block 2xl:col-span-3">
							<img
								className="absolute inset-0 w-full h-full object-cover object-center"
								src={SutdentIntro}
								alt="  SVG img for the  "
							/>
						</div>
					</div>
				</div>
			</div>
			{/* END OF THE INTRODUCTION  */}
			<div className=" p-30 py-20 sm:w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ">
				{/* coursera */}
				<div className="p-10">
					<div className="max-w-sm rounded overflow-hidden shadow-sm border hover:shadow-lg ">
						<img
							className="w-full  2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center"
							src={card1}
							alt="coursera "
						/>
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2  text-Footer_bg ">
								Coursera
							</div>
							<p className="text-gray-700 text-base  ">
								Coursera is a free learning site that offers MOOCs courses from
								well-known universities. All Coursera courses contain
								pre-recorded video lectures that you can watch when it is
								convenient for you. Coursera has programs together with
								universities that allow you to get a master degree or
								specializations. You can explore various college courses without
								any hassle.
							</p>
						</div>
						<div className="px-6 pt-4 pb-2 ">
							<span>
								<button className=" inline-block  w-full text-center last: bg-Footer_bg  px-3 py-1 rounded-md text-md text-md font-semibold text-white mr-2 mb-2 ">
									<a href={Coursera} target={"_blank"} rel="noreferrer">
										Visit Site
									</a>
								</button>
							</span>
						</div>
					</div>
				</div>

				{/*    linkedin Learning */}
				<div className="p-10">
					<div className="max-w-sm rounded overflow-hidden hover:shadow-lg shadow-sm border">
						<img
							className="w-full  2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center"
							src={card2}
							alt="FreeCodeCamp"
						/>
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2   text-Footer_bg ">
								LinkedIn Learning
							</div>
							<p className="text-gray-700 text-base">
								LinkedIn Learning is a website that offers video courses that
								are taught by experts. You can use this website to access up to
								15,000 courses in more than seven languages available both for
								free and with a subscription. LinkedIn free courses give you a
								chance to learn from industry experts without spending a dime.
								These LinkedIn training courses are perfect for beginners,
								intermediate learners, and experts.
							</p>
						</div>
						<div className="px-6 pt-4 pb-2">
							<span>
								<button className=" inline-block  text-center w-full bg-Footer_bg   px-3 py-1 rounded-md text-md text-md font-semibold text-white mr-2 mb-2 ">
									<a href={linkedin} target={"_blank"} rel="noreferrer">
										Visit Site
									</a>
								</button>
							</span>
						</div>
					</div>
				</div>

				{/* skillshare  */}
				<div className="p-10">
					<div className="max-w-sm rounded hover:shadow-lg overflow-hidden  shadow-sm border">
						<img
							className="w-full  2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center"
							src={card3}
							alt="Udemy"
						/>
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2   text-Footer_bg ">
								skillshare
							</div>
							<p className="text-gray-700 text-base">
								Skillshare is an online platform that focused on education. It
								includes numerous topics related to graphics design, data
								science, e-commerce, analytics, etc. This website helps you to
								find classes that are designed for real life. The classes in
								Skillshare are taught by real creators. You can join the courses
								to learn from any device. It helps you to achieve your business
								growth without any hassle.
							</p>
						</div>
						<div className="px-6 pt-4 pb-2 md:space-2">
							<span>
								<button className=" inline-block text-center w-full bg-Footer_bg  px-3 py-1 rounded-md text-md font-semibold text-white mr-2 mb-2 ">
									<a href={skillshare} target={"_blank"} rel="noreferrer">
										Visit Site
									</a>
								</button>
							</span>
						</div>
					</div>
				</div>
				{/*------ END OF THE FIRST ROW-----  */}

				{/* -----------=============== SECOND ROW=========== ============== */}
				{/* Alison */}
				<div className="p-10">
					<div className="max-w-sm rounded overflow-hidden hover:shadow-lg shadow-sm border">
						<img
							className="w-full  2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center"
							src={card4}
							alt=" Alison"
						/>
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2  text-Footer_bg ">
								Alison
							</div>
							<p className="text-gray-700 text-base ">
								Alison is a free online learning site that provides that offers
								certification on completing the course. The subjects this site
								offers are business, technology, health, and more. Alison helps
								you to study, learn, and certify through online training. It
								provides various courses related to specific languages like
								English, Spanish, German, French, and Arabic. The site enables
								you to choose three types of courses certificate courses.
							</p>
						</div>
						<div className="px-6 pt-4 pb-2 md:space-2">
							<span>
								<button className=" inline-block text-center w-full bg-Footer_bg  rounded-md px-3 py-1 text-md font-semibold text-white mr-2 mb-2 ">
									<a href={Alison} target={"_blank"} rel="noreferrer">
										Visit Site
									</a>
								</button>
							</span>
						</div>
					</div>
				</div>

				{/*  khanacademy */}
				<div className="p-10 ">
					<div className="max-w-sm rounded hover:shadow-lg overflow-hidden shadow-sm border">
						<img
							className="w-full  2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center"
							src={card5}
							alt="Khan Academy "
						/>
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2  text-Footer_bg ">
								Khan Academy
							</div>
							<p className="text-gray-700 text-base">
								Khan Academy is a study website. It offers in-depth subjects.
								This site is useful to match your learning goals. You choose
								this site to personalize your learning experience.This free
								platform can be used for learners and teachers. It includes lots
								of learning exercises. The resources of this site are available
								online as well as the app. The content of Khan Academy is
								available in English, French, German, Italian, Japanese, and
								more.
							</p>
						</div>
						<div className="px-6 pt-4 pb-2 md:space-2">
							<span>
								<button className=" inline-block  text-center w-full  bg-Footer_bg  rounded-md px-3 py-1 text-md font-semibold text-white mr-2 mb-2 ">
									<a href={khanacademy} target={"_blank"} rel="noreferrer">
										Visit Site
									</a>
								</button>
							</span>
						</div>
					</div>
				</div>

				{/* 	Academic Earth*/}
				<div className="p-10">
					<div className="max-w-sm rounded hover:shadow-lg overflow-hidden  shadow-sm border">
						<img
							className="w-full  2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center"
							src={card6}
							alt="Academic Earth"
						/>
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2   text-Footer_bg ">
								Academic Earth
							</div>
							<p className="text-gray-700 text-base">
								Academic Earth is a top online learning site that offers many
								courses from various schools. In this website, you can explore
								numerous topics. It enables you to search the course outline by
								specific subjects. The subjects of Academic Earth are design in
								a way that suits your personal and professional needs. The
								platform has varieties of courses related to computer and IT,
								business, education, and health. These courses can be learned
								for free.
							</p>
						</div>
						<div className="px-6 pt-4 pb-2 md:space-2">
							<span>
								<button className=" inline-block text-center w-full  bg-Footer_bg  rounded-md  px-3 py-1 text-md font-semibold text-white mr-2 mb-2 ">
									<a href={academicearth} target={"_blank"} rel="noreferrer">
										Visit Site
									</a>
								</button>
							</span>
						</div>
					</div>
				</div>
				{/*----- END OF THE SECOND ROW ----- */}

				{/* -----------=============== Third ROW=========== ============== */}

				{/* Stanford Online  */}
				<div className="p-10">
					<div className="max-w-sm rounded  hover:shadow-lg overflow-hidden  shadow-sm border">
						<img
							className="w-full  2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center"
							src={card7}
							alt="Stanford Online"
						/>
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2   text-Footer_bg ">
								Stanford Online
							</div>
							<p className="text-gray-700 text-base">
								Stanford Online is a study site that provides learning
								opportunities via free online degrees, online courses,
								e-learning, and more. You can learn a wide range of subjects
								including, computer science, AI, health and medicine, arts, and
								data science. The platform offers certification after completing
								the program. You can enroll in courses to learn new skills, get
								a job, and to create a new future. It has a collection of free
								e-books, webinars, videos and etc.
							</p>
						</div>
						<div className="px-6 pt-4 pb-2 md:space-2">
							<span>
								<button className=" inline-block text-center w-full bg-Footer_bg  rounded-md px-3 py-1 text-md font-semibold text-white mr-2 mb-2 ">
									<a href={stanford} target={"_blank"} rel="noreferrer">
										Visit Site
									</a>
								</button>
							</span>
						</div>
					</div>
				</div>
				{/* 	Harvard Extension */}
				<div className="p-10">
					<div className="max-w-sm rounded overflow-hidden hover:shadow-lg shadow-sm border">
						<img
							className="w-full  2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center"
							src={card8}
							alt="Harvard Extension"
						/>
						<div className="px-6 py-6">
							<div className="font-bold text-xl mb-2  text-Footer_bg ">
								Harvard Extension
							</div>
							<p className="text-gray-700 text-base ">
								Harvard Extension is the best online learning site that provides
								free online education courses from Harvard University. It
								enables students to search for courses by professional
								certificate. Harvard Extension offers various subject areas like
								art and design, business, data science, health, and much more.
								It allows you to search for various subjects using the start
								date and duration. Courses of this place have three difficulty
								levels introductory, and intermediate.
							</p>
						</div>
						<div className="px-6 pt-4 pb-2 md:space-2">
							<span>
								<button className=" inline-block text-center w-full  bg-Footer_bg  rounded-md px-3 py-1 text-md font-semibold text-white mr-2 mb-2 ">
									<a href={harvard} target={"_blank"} rel="noreferrer">
										Visit Site
									</a>
								</button>
							</span>
						</div>
					</div>
				</div>
				{/* Open Yale Courses */}
				<div className="p-10">
					<div className="max-w-sm rounded overflow-hidden hover:shadow-lg shadow-sm border">
						<img
							className="w-full  2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center"
							src={card9}
							alt="Open Yale Courses"
						/>
						<div className="px-6 py-6">
							<div className="font-bold text-xl mb-2  text-Footer_bg ">
								{" "}
								Open Yale Courses
							</div>
							<p className="text-gray-700 text-base ">
								Open Yale Courses is the best online learning site website that
								offers free and open access to introductory courses that are
								taught by teachers and scholars. Lectures available on this
								website are recorded in Yale College classrooms. This website
								offers learning through audio, text transcript, and video media
								format. You can access these materials without any registration.
								Open Yale Courses provides courses like chemistry, economics,
								history.
							</p>
						</div>
						<div className="px-6 pt-4 pb-2 md:space-2">
							<span>
								<button className=" inline-block text-center w-full  bg-Footer_bg  rounded-md px-3 py-1 text-md font-semibold text-white mr-2 mb-2 ">
									<a href={Yale} target={"_blank"} rel="noreferrer">
										Visit Site
									</a>
								</button>
							</span>
						</div>
					</div>
				</div>
				{/* -----END OF THE THE THIRD ROW-----  */}

				{/* -----------=============== Fourth  ROW=========== ============== */}
				{/* University of the People */}
				<div className="p-10">
					<div className="max-w-sm rounded overflow-hidden hover:shadow-lg shadow-sm border">
						<img
							className="w-full  2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center"
							src={card10}
							alt="University of the People"
						/>
						<div className="px-6 py-6">
							<div className="font-bold text-xl mb-2  text-Footer_bg ">
								University of the People
							</div>
							<p className="text-gray-700 text-base ">
								University of the People is an educational service provider. It
								offers varieties of degree programs, including business
								administration, health, and computer science. This place
								provides students the necessary skill sets that are important to
								thrive in taking academic degrees. University of the People site
								does not charge anyone for enrolling in any course. It enables
								you to access all the books and other course materials without
								any hassle. Students who are graduate and undergraduate both.
								
							</p>
						</div>
						<div className="px-6 pt-4 pb-2 md:space-2">
							<span>
								<button className=" inline-block text-center w-full  bg-Footer_bg  rounded-md px-3 py-1 text-md font-semibold text-white mr-2 mb-2 ">
									<a href={uopeople} target={"_blank"} rel="noreferrer">
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
							src={card11}
							alt=" Oxford Podcasts"
						/>
						<div className="px-6 py-6">
							<div className="font-bold text-xl mb-2  text-Footer_bg ">
								University of Oxford Podcasts
							</div>
							<p className="text-gray-700 text-base ">
								University of Oxford Podcasts a place where you can find public
								lectures, interviews, teaching materials, and more. The content
								on this is added on a regular basis regularly. You can use
								lectures and a series of talks in the document, audio, and video
								format. This site has over 633 series. The curriculum is
								available for biology, philosophy, depression, etc. You can view
								your interested course by categories like social sciences
								division, mathematical, physical and life sciences, medical
								sciences.
							</p>
						</div>
						<div className="px-6 pt-4 pb-2 md:space-2">
							<span>
								<button className=" inline-block text-center w-full bg-Footer_bg rounded-md px-3 py-1 text-md font-semibold text-white mr-2 mb-2 ">
									<a href={podcasts} target={"_blank"} rel="noreferrer">
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
							src={card12}
							alt="codecademy"
						/>
						<div className="px-6 py-6">
							<div className="font-bold text-xl mb-2  text-Footer_bg ">
								Memrise
							</div>
							<p className="text-gray-700 text-base ">
								Memrise is educational websites for adults that offers a
								personalized learning experience. The website can be accessed in
								various languages, including English, Arabic, American, and
								Dutch. This place has categories like art, literature,
								mathematics, science, history, and more. Memrise can be
								accessible from iOS and Android devices. The website includes
								challenges that increase your learning experience. You can
								easily signup into this site in order to access the course and
								materials.
							</p>
						</div>
						<div className="px-6 pt-4 pb-2 md:space-2">
							<span>
								<button className=" inline-block text-center w-full bg-Footer_bg   rounded-md px-3 py-1 text-md font-semibold text-white mr-2 mb-2 ">
									<a href={memrise} target={"_blank"} rel="noreferrer">
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
}

export default Student
