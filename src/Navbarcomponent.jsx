
import  React from 'react';
import {NavLink } from "react-router-dom";
import { useState } from "react";
import {FaGithub}  from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";





// the initial state the control the gel
const NavBarComponent = () => {
	const [navbar, setNavbar] = useState(false);

	// Active Style navItems the
	const navLinkStyles = ({ isActive }) => {
		return {
			fontWeight: isActive ? "  normal" : " ",
			textDecoration: isActive ? "underline" : " none",
			color: isActive ? " yellow " : " whiteSmoke",
		};
		

	};

	// SOCIAL IONS LIKENS
	const Github = "https://github.com/Clifftech123";
	const Twitter = "https://twitter.com/Clifftech_Dev";

	return (
		<nav className=" bg-G_Purple    lg:sticky top-0 z-30 w-full  shadow">
			<div className="      justify-between  px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 font">
				<div>
					<div className="flex items-center justify-between py-3 md:py-5 md:block">
							<h2 className="text-2xl font-bold text-white">LOGO</h2>
					
						<div className="md:hidden">
							<button
								className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
								onClick={() => setNavbar(!navbar)}
							>
								{navbar ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
											clipRule="evenodd"
										/>
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="w-6 h-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>
				<div>
					<div
						className={`flex-1  text-lg   text-center pb-3 mt-8 md:block md: md:pb-0 md:mt-0 ${
							navbar ? "block   " : "hidden"
						}`}
					>
						<ul className="items-center   text-lg  justify-center space-y-8 md:flex md:space-x-6 md:space-y-0  md:divide-y-0">
							<li className="text-white   hover:text-Navbar_text_color">
								<NavLink  style={navLinkStyles} to="/">Home</NavLink>{" "}
							</li>
							<li className="text-white    hover:text-Navbar_text_color">
								<NavLink style={navLinkStyles} to="/programing"> Programming </NavLink>
							</li>
							<li className="text-white active:text-red-400   hover:text-Navbar_text_color">
								<NavLink style={navLinkStyles} to="/Student"> Student </NavLink>
							</li>
							<li className="text-white  hover:text-Navbar_text_color">
								<NavLink style={navLinkStyles} to="/Marketing"> Marketing </NavLink>
							</li>
							<div>
								{/* Social links it automatically hidden in the small device  */}
								<ul className=" hidden text-2xl  mt-5 mr-4 ml-0  md:ml-10   text-center  md:flex justify-end  md:mt-0   md:space-x-6 md:space-y-0">
									<li className="text-white  hover:text-Navbar_text_color">
										<a href={Github} target={"_blank"} rel="noreferrer">
											<FaGithub />
										</a>
									</li>
									<li className=" text-white  hover:text-Navbar_text_color">
										<a href={Twitter} target={"_blank"} rel="noreferrer">
											<FaTwitter />
										</a>
									</li>
								</ul>
							</div>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBarComponent;
