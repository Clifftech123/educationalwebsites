import React from 'react'

import Monochromatic from './IMAGES/SEO_Monochromatic.svg'


function Introduction() {
  return (
		<div id="Introduction" className="Introduction text-center">
			<div>
				<div className=" bg-white shadow-sm   grid lg:grid-cols-2 2xl:grid-cols-5">
					<div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
						<div className="xl:max-w-lg ">
							<div className="aspect-w-16 aspect-h-9 lg:mt-32">
								<img
									className=" w-full mt-10 object-cover object-center 2xl:w-full 2zl:mt-10 2xl:object-cover 2xl:object-center   sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden"
									src={Monochromatic}
									alt="SVG img "
								/>
							</div>
							<h1 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
								You can learn on your own
								<br className="hidden lg:inline" />
								<span className="text-G_Purple">
									Take advantage of online platforms
								</span>
							</h1>
							<p className=" text-lg  mt-2 text-gray-600 sm:mt-4 sm:text-xl">
								Online education enables you to study or teach from anywhere in
								the world. This means there's no need to commute from one place
								to another, or follow a rigid schedule. On top of that, not only
								do you save time, but you also save money, which can be spent on
								other priorities.
							</p>
							<div className="mt-4 sm:mt-6">
							
							</div>
						</div>
					</div>
					<div className="hidden relative md:mt-10 lg:block 2xl:col-span-3">
						<img
							className="absolute inset-0 w-full h-full object-cover object-center"
							src={Monochromatic}
							alt="  SVG img for the  "
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
export default  Introduction;

