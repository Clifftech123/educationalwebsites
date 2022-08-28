import React from 'react'
import Developer from '../.././IMAGES/Developer-.png'
import { FaFacebook,  FaGithub, FaTwitter } from "react-icons/fa";

const Footer =() =>   {
// SOCIAL LIKENS
const Github = "https://github.com/Clifftech123";
const Twitter = "https://twitter.com/Clifftech_Dev";
const Facebook = "https://web.facebook.com/opokuisaiah.clifford/";


  return (
		<>
			<section className="Developer-information bg-Footer_bg h-50">
				<div className="container ">
					<div class="relative max-w-md mx-auto sm:max-w- sm:mx-auto md:max-w-full lg:mt-20 min-w-0 break-words bg-Footer_bg lg:w-full m-6  rounded-2xl mt-16">
						<div class="px-6">
							<div class="flex flex-wrap justify-center">
								<div class="w-full flex justify-center">
									<div class="relative">
										<img
											src={Developer}
											alt=""
											class=" mt-1 rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
										/>
									</div>
								</div>
								<div class="w-full text-center mt-40">
									<div class="flex justify-center lg:pt-4 pt-8 pb-0">
										{/*======= SOCIAL ICON FACEBOOK========= */}
										<div class="p-3 text-center">
											<span class="text-xl font-bold block uppercase tracking-wide text-gray-100">
												{/* SOCIAL ICON FACEBOOK */}
												<ul>
													<li
														className="text-white 
												textDecoration-none 
												hover:text-Navbar_text_color"
													>
														<a
															href={Facebook}
															target={"_blank"}
															rel="noreferrer"
														>
															<FaFacebook />
														</a>
													</li>
												</ul>
											</span>
										</div>
										{/* END OF  SOCIAL ICON FACEBOOK */}

										{/*========= SOCIAL ICON GITHUB========= */}
										<div class="p-3 text-center">
											<span class="text-xl font-bold block uppercase tracking-wide ">
												<ul>
													<li
														className="text-white 
												textDecoration-none 
												hover:text-Navbar_text_color"
													>
														<a href={Github} target={"_blank"} rel="noreferrer">
															<FaGithub />
														</a>
													</li>
												</ul>
											</span>
										</div>
										{/*  END  SOCIAL ICON GITHUB */}

										{/*======= SOCIAL ICON GITHUB======== */}
										<div class="p-3 text-center">
											<span class="text-xl font-bold block uppercase tracking-wide ">
												<ul>
													<li
														className="text-white 
												textDecoration-none 
												hover:text-Navbar_text_color"
													>
														<a
															href={Twitter}
															target={"_blank"}
															rel="noreferrer"
														>
															<FaTwitter />
														</a>
													</li>
												</ul>
											</span>
										</div>
									</div>
								</div>
							</div>
							{/* eEND OF SOCIAL ICON GITHUB */}

							{/*================ DEVELOPER TEXT ===========*/}
							<div class="text-center mt-2">
								<h3 class="text-2xl text-white font-bold leading-normal mb-1">
									Opoku Isaiah Clifford
								</h3>
								<div class="text-xs mt-0 mb-2 text-gray-100 font-bold ">
									<i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
									Software Developer
								</div>
							</div>
							{/*======== FOOTER TEXT ========*/}
							<div class="mt-6 py-6 border-t border-slate-200 text-center">
								<div class="flex flex-wrap justify-center">
									<div class="w-full px-4">
										<p class="font-light leading-relaxed text-white mb-4">
											{/* TODO: I WILL ADD TEXT HERE  */}
											The world might be on hold but we are here to ensure that
											your future is not! Keeping the importance of higher
											education abroad in mind, we have added exclusive online
											Platforms test preparation classes for students. Whether
											you are planning to pursue a UG, PG or Diploma course from
											top-notch universities, there are a set of course that are
											to be taken before starting the application process.
										</p>
									</div>
								</div>
							</div>
							{/* END OF FOOTER TEXT */}
						</div>
					</div>

					
					{/* COPYWRITER SECTION  */}
					<footer class="relative pt-6  mt-2">
						<div class="container mx-auto px-4">
							<div class="flex flex-wrap items-center md:justify-between justify-center">
								<div class="w-full md:w-6/12 px-4 mx-auto text-center">
									<div class="text-sm text-white  font-semibold py-1">
										{/* TODO: I WILL COPYWRITER HERE */}
										<p>
											Develope by Opoku Isaiah Clifford &copy; Copyright 2022
										</p>
									</div>
								</div>
							</div>
						</div>
					</footer>
				</div>
			</section>
		</>
	);
}

export default Footer
