import React from 'react'
import cardIm1 from "./IMAGES/Jobs/jobCard1.png";
import cardIm2 from "./IMAGES/Jobs/JobCard2.png";
import CardImg3 from "./IMAGES/Jobs/jobCard3.png";
import cardImg4 from "./IMAGES/Jobs/jobCard4.png";
import cardImg5 from "./IMAGES/Jobs/jobCard5.png";
import cardImg6 from  "./IMAGES/Jobs/jobCard6.png";
import cardIm7 from "./IMAGES/Jobs/jobCard7.png";
import cardIm8 from "./IMAGES/Jobs/jobCard8.png"
import cardIm9 from "./IMAGES/Jobs/jobCard9.png"



// WEBSITE  LINKS 
const Careerbuilder="https://www.careerbuilder.com/";
const Indeed ="https://www.indeed.jobs/";
const Job  = "https://job.com/";
const linkedin = "https://gh.linkedin.com/jobs";
const theladders = "https://www.theladders.com/";
const glassdoor = "https://www.glassdoor.com/index.htm";
const Getwork = "https://getwork.com/";
const  Dice  ="https://www.dice.com/";
const Google = "https://careers.google.com/jobs/results/";




const Marketing =() => {
  return (
		<>
			<div className=" p-30 py-20 sm:w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ">
				{/* CareerBuilder*/}
				<div className="p-10">
					<div className="max-w-sm rounded overflow-hidden shadow-sm border hover:shadow-lg ">
						<img
							className="w-full  2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center"
							src={cardIm1}
							alt="CareerBuilder "
						/>
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2  text-Footer_bg ">
								CareerBuilder
							</div>
							<p className="text-gray-700 text-base    ">
								CareerBuilder is an employment website founded in 1995 with
								offices in the United States, Canada, Europe, and Asia. In 2008,
								it had the largest market share among online employment websites
								in the United States, where it was founded. CareerBuilder.
							</p>
						</div>
						<div className="px-6 pt-4 pb-2 ">
							<span>
								<button className=" inline-block  w-full text-center last: bg-blue-900  px-3 py-1 rounded-md text-md text-md font-semibold text-white mr-2 mb-2 ">
									<a href={Careerbuilder} target={"_blank"} rel="noreferrer">
										Visit Site
									</a>
								</button>
							</span>
						</div>
					</div>
				</div>

				{/*   Indeed  */}
				<div className="p-10">
					<div className="max-w-sm rounded overflow-hidden hover:shadow-lg shadow-sm border">
						<img
							className="w-full  2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center"
							src={cardIm2}
							alt="Indeed"
						/>
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2   text-Footer_bg ">
								Indeed
							</div>
							<p className="text-gray-700 text-base">
								Indeed is an American worldwide employment website for job
								listings launched in November 2004. It is a subsidiary of
								Japan's Recruit Co. Ltd. and is co-headquartered in Austin,
								Texas, and Stamford, Connecticut, with additional offices around
								the world.
							</p>
						</div>
						<div className="px-6 pt-4 pb-2">
							<span>
								<button className=" inline-block  text-center w-full bg-blue-900  px-3 py-1 rounded-md text-md text-md font-semibold text-white mr-2 mb-2 ">
									<a href={Indeed} target={"_blank"} rel="noreferrer">
										Visit Site
									</a>
								</button>
							</span>
						</div>
					</div>
				</div>

				{/* Job  */}
				<div className="p-10">
					<div className="max-w-sm rounded hover:shadow-lg overflow-hidden  shadow-sm border">
						<img
							className="w-full  2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center"
							src={CardImg3}
							alt="job"
						/>
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2   text-Footer_bg ">
								Job
							</div>
							<p className="text-gray-700 text-base">
								Job portals, or job boards, are sites where you can advertise
								jobs and search for resumes. They are an integral part of almost
								every hiring process and using them effectively will translate
								into qualified candidates for relatively low costs.
							</p>
						</div>
						<div className="px-6 pt-4 pb-2 md:space-2">
							<span>
								<button className=" inline-block text-center w-full  bg-blue-900 px-3 py-1 rounded-md text-md font-semibold text-white mr-2 mb-2 ">
									<a href={Job} target={"_blank"} rel="noreferrer">
										Visit Site
									</a>
								</button>
							</span>
						</div>
					</div>
				</div>
				{/*------ END OF THE FIRST ROW-----  */}

				{/* -----------=============== SECOND ROW=========== ============== */}
				{/* linkedin */}
				<div className="p-10">
					<div className="max-w-sm rounded overflow-hidden hover:shadow-lg shadow-sm border">
						<img
							className="w-full  2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center"
							src={cardImg4}
							alt=" linkedin"
						/>
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2  text-Footer_bg ">
								linkedin
							</div>
							<p className="text-gray-700 text-base ">
								inkedIn is an American business and employment-oriented online
								service that operates via websites and mobile apps. Launched on
								May 5, 2003 the platform is primarily used for professional
								networking and career development, and allows job seekers.
							</p>
						</div>
						<div className="px-6 pt-4 pb-2 md:space-2">
							<span>
								<button className=" inline-block text-center w-full bg-blue-900  rounded-md px-3 py-1 text-md font-semibold text-white mr-2 mb-2 ">
									<a href={linkedin} target={"_blank"} rel="noreferrer">
										Visit Site
									</a>
								</button>
							</span>
						</div>
					</div>
				</div>

				{/*  theladders */}
				<div className="p-10 ">
					<div className="max-w-sm rounded hover:shadow-lg overflow-hidden shadow-sm border">
						<img
							className="w-full  2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center"
							src={cardImg5}
							alt="Khan Academy "
						/>
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2  text-Footer_bg ">
								theladders
							</div>
							<p className="text-gray-700 text-base">
								Ladders is dedicated to bringing you in-depth advice across
								industries and covers all aspects of our quickly evolving
								workplace. Everything the modern professional needs to know is
								available at a click and new articles appear daily.
							</p>
						</div>
						<div className="px-6 pt-4 pb-2 md:space-2">
							<span>
								<button className=" inline-block  text-center w-full   bg-blue-900  rounded-md px-3 py-1 text-md font-semibold text-white mr-2 mb-2 ">
									<a href={theladders} target={"_blank"} rel="noreferrer">
										Visit Site
									</a>
								</button>
							</span>
						</div>
					</div>
				</div>

				{/* glassdoor*/}
				<div className="p-10">
					<div className="max-w-sm rounded hover:shadow-lg overflow-hidden  shadow-sm border">
						<img
							className="w-full  2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center"
							src={cardImg6}
							alt=" glassdoor"
						/>
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2   text-Footer_bg ">
								Glassdoor
							</div>
							<p className="text-gray-700 text-base">
								Glassdoor is an American website where current and former
								employees anonymously review companies.[1] Headquartered in San
								Francisco, California, it has additional offices in Chicago,
								Dublin, London, and São Paulo. Glassdoor also allows its users
								to anonymously.
							</p>
						</div>
						<div className="px-6 pt-4 pb-2 md:space-2">
							<span>
								<button className=" inline-block text-center w-full   bg-blue-900 rounded-md  px-3 py-1 text-md font-semibold text-white mr-2 mb-2 ">
									<a href={glassdoor} target={"_blank"} rel="noreferrer">
										Visit Site
									</a>
								</button>
							</span>
						</div>
					</div>
				</div>
				{/*----- END OF THE SECOND ROW ----- */}

				{/* -----------=============== Third ROW=========== ============== */}

				{/*  Getwork  */}
				<div className="p-10">
					<div className="max-w-sm rounded  hover:shadow-lg overflow-hidden  shadow-sm border">
						<img
							className="w-full  2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center"
							src={cardIm7}
							alt="Getwork"
						/>
						<div className="px-6 py-4">
							<div className="font-bold text-xl mb-2   text-Footer_bg ">
								Getwork
							</div>
							<p className="text-gray-700 text-base">
								We saw huge potential in focusing on company websites as the
								best and cleanest source of jobs, so we formed LinkUp, a job
								site with millions of verified listings sourced directly from
								company career sites.
							</p>
						</div>
						<div className="px-6 pt-4 pb-2 md:space-2">
							<span>
								<button className=" inline-block text-center w-full bg-blue-900  rounded-md px-3 py-1 text-md font-semibold text-white mr-2 mb-2 ">
									<a href={Getwork} target={"_blank"} rel="noreferrer">
										Visit Site
									</a>
								</button>
							</span>
						</div>
					</div>
				</div>
				{/* 	Dice */}
				<div className="p-10">
					<div className="max-w-sm rounded overflow-hidden hover:shadow-lg shadow-sm border">
						<img
							className="w-full  2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center"
							src={cardIm8}
							alt="Dice"
						/>
						<div className="px-6 py-6">
							<div className="font-bold text-xl mb-2  text-Footer_bg ">
								Dice
							</div>
							<p className="text-gray-700 text-base ">
								Dice.com is a career website based in New York City with primary
								sales and development operations in Urbandale, Iowa and Denver.
								It serves information technology and engineering professionals,
								as well.
							</p>
						</div>
						<div className="px-6 pt-4 pb-2 md:space-2">
							<span>
								<button className=" inline-block text-center w-full  bg-blue-900 rounded-md px-3 py-1 text-md font-semibold text-white mr-2 mb-2 ">
									<a href={Dice} target={"_blank"} rel="noreferrer">
										Visit Site
									</a>
								</button>
							</span>
						</div>
					</div>
				</div>
				{/* Google */}
				<div className="p-10">
					<div className="max-w-sm rounded overflow-hidden hover:shadow-lg shadow-sm border">
						<img
							className="w-full  2xl:object-cover 2xl:object-center sm:w-full sm:object-cover sm:object-center"
							src={cardIm9}
							alt="Goggle"
						/>
						<div className="px-6 py-6">
							<div className="font-bold text-xl mb-2  text-Footer_bg ">
								Google careers
							</div>
							<p className="text-gray-700 text-base ">
								vWhether you're preparing for your first internship or pivoting
								to your next opportunity, Google Careers OnAir will help you
								connect, learn, and grow. Register for upcoming livestreams,
								watch previously-aired events.
								
							</p>
						</div>
						<div className="px-6 pt-4 pb-2 md:space-2">
							<span>
								<button className=" inline-block text-center w-full   bg-blue-900  rounded-md px-3 py-1 text-md font-semibold text-white mr-2 mb-2 ">
									<a href={Google} target={"_blank"} rel="noreferrer">
										Visit Site
									</a>
								</button>
							</span>
						</div>
					</div>
				</div>
				{/* -----END OF THE THE THIRD ROW-----  */}
			</div>
		</>
	);
}

export default Marketing;
