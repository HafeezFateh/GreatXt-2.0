import Layout from "./layout/Layout";
import gsap from "gsap";
import { useEffect } from "react";
import { motion } from "framer-motion";

function Home(){


    return(
        <>
            <Layout>

        <div id="hero" className="mx-5 mt-10  flex flex-col items-center max-w-7xl lg:mx-auto lg:mt-25">
                <motion.h1 initial={{ y: 50, opacity: 0 }}
                    animate={{ translateY: -60, opacity: 1 }}
                    transition={{ duration: 0.3 }} className="p-2 bricolage-grotesque text-4xl  lg:text-8xl bg-clip-text bg-gradient-to-br from-stone-100 to-stone-600 text-transparent ">GreatXt Agency</motion.h1>
                <motion.p  initial={{ y: 50, opacity: 0 }}
                    animate={{ translateY: -70, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2  }} className="text-xl lg:mt-5 poppins-regular  lg:text-4xl text-stone-300 text-center">Your <span className="text-lime-600">Brand's success</span>, <br /> is what we want.</motion.p>
           </div>

           <motion.div initial={{ y: 50, opacity: 0 }}
                    animate={{ translateY: -70, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.3  }} className="flex justify-center">
                <a href="" className="text-lg text-stone-300 px-5 lg:px-10 my-7  poppins-regular py-2 bg-violet-800 shadow-lg shadow-violet-800/50 rounded-3xl lg:text-3xl">Start your project</a>
           </motion.div>
            
         
            <div className="flex justify-center my-5 opacity-10  ">
                <img src="./logo.png" alt="" className=""/>
            </div>

            <div className="flex flex-col max-w-7xl mx-auto relative ">
              <div className="bg-lime-400/5 h-[250px]  w-[350px] lg:h-[300px] lg:w-[1000px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full  absolute inset-0 blur-3xl ">
                
              </div>
              
              <div className="grid grid-cols-2 gap-8 p-5 text-center">
                    <h1 className="text-2xl poppins-regular text-stone-300">Reached 0</h1>
                    <h1 className="text-2xl poppins-regular text-stone-300">Projects 0</h1>
                    <h1 className="text-2xl poppins-regular text-stone-300 col-span-2 ">Achieved 0</h1>
              </div>
                
            </div>
            

            <h1 className="text-3xl mt-20 text-stone-300 font-semibold text-center ">Our Services </h1>
            
            <div className="mt-10 max-w-7xl mx-5 lg:mx-auto">
            <div className="lg:mx-20">
            <div className=" grid grid-cols-2 lg:grid-cols-4 gap-5 ">
                <div className="border border-lime-500/50 rounded-xl flex flex-col items-center justify-center">
                     <img src="./logo.png" alt="" className="w-[100px]"/>
                    <h1 className="text-xl text-stone-300 ">Websites </h1>
                </div>
                <div className="border p-5 border-lime-500/50 rounded-xl flex flex-col items-center justify-center">
                    <img src="./logo.png" alt="" className="w-[100px]"/>
                    <h1 className="text-xl text-stone-300">Webapps </h1>
                </div>
            
                <div className="relative p-20 flex justify-center items-center"> 
                <div className=" absolute inset-0 border blur-xs  border-lime-500/50 rounded-xl flex flex-col items-center justify-center">
                     <img src="./logo.png" alt="" className="w-[100px]"/>
                    <h1 className="text-xl z-10 text-stone-300 ">Mobile Apps</h1>
                </div>
                <h1 className="absolute text-xl text-stone-200 bg-red-500/30 backdrop-blur-lg shadow-xl shadow-red-500/10 rounded-3xl px-3 py-1 ">Coming soon</h1>
                </div>

                <div className="relative flex justify-center items-center"> 
                <div className=" absolute inset-0 border blur-xs  border-lime-500/50 rounded-xl flex flex-col items-center justify-center">
                     <img src="./logo.png" alt="" className="w-[100px]"/>
                    <h1 className="text-xl z-10 text-stone-300 ">Mobile Apps</h1>
                </div>
                <h1 className="absolute text-xl text-stone-200 bg-red-500/30 backdrop-blur-lg shadow-xl shadow-red-500/10 rounded-3xl px-3 py-1 ">Coming soon</h1>
                </div>
                </div>
                </div>
                
                
            </div>

            {/* About us */}

            <div className="relative mt-25 overflow-x-clip">
                <div className=" mx-auto max-w-7xl ">
                    <div className="lg:mx-20">                
                        <div className="mx-5 lg:mx-auto" >
                            <h1 className="text-3xl text-stone-300 font-semibold lg:text-center">About us</h1>
                            <p className="text-stone-400 mt-2 text-xl text-justify">At GreatXt, we turn ambitious ideas into exceptional digital experiences.
                            We are a team of creative designers, skilled developers, and problem-solvers who believe in building solutions that make an impact. From sleek websites to powerful web apps and innovative mobile applications, we blend modern design with cutting-edge technology to deliver products that not only work—but inspire.</p>
                        </div>
                    </div>
                </div>
                <img src="./logo.png" alt=""  className="absolute -right-11 opacity-30 "/>
            </div>
            <div className="h-[200px]"></div>


            {/* Our Expertise */}

            <div className="h-[0px] bg-gradient-to-b from-transparent to-stone-50 "></div>
            <div className="bg-stone-50  ">
                <div className="max-w-7xl mx-5 lg:mx-auto pt-5  ">
                    <h1 className="text-4xl font-semibold text-stone-700 poppins-bold  text-center my-10">Designs always transforms </h1>
                    <div className="lg:mx-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className=" shadow-2xl/30 shadow-stone-900 bg-gradient-to-br from-red-200 via-red-50 rounded-2xl p-3 ">
                            <h1 className="text-3xl text-stone-100 font-semibold shadow-lg/10 rounded-xl bg-red-500 p-3 text-center">Old School Designs </h1>
                            <ul className="p-3 flex flex-col gap-5 my-3 ">
                                <li className="text-2xl font-semibold text-stone-800 flex gap-3 items-center ">
                                    <img src="./wrong.png" className="w-[30px] h-[30px]" alt="" />No Branding</li>
                                    <li className="text-2xl font-semibold text-stone-800 flex gap-3 items-center ">
                                    <img src="./wrong.png" className="w-[30px] h-[30px]" alt="" />Gen Z Dissappointment</li>
                                    <li className="text-2xl font-semibold text-stone-800 flex gap-3 items-center ">
                                    <img src="./wrong.png" className="w-[30px] h-[30px]" alt="" />Less Followers</li>
                                    <li className="text-2xl font-semibold text-stone-800 flex gap-3 items-center ">
                                    <img src="./wrong.png" className="w-[30px] h-[30px]" alt="" />Few Leads</li>

                            </ul>
                        </div>
                        <div className=" shadow-2xl/30 shadow-stone-900 bg-gradient-to-br from-green-100 via-green-50 rounded-2xl p-3 ">
                            <h1 className="text-3xl text-stone-100 font-semibold shadow-lg/10 rounded-xl bg-lime-600 p-3 text-center">Modern Age Designs</h1>
                            <ul className="p-3 flex flex-col gap-5 my-3">
                                <li className="text-2xl font-semibold text-stone-800 flex gap-3 items-center ">
                                    <img src="./check.png" className="w-[30px] h-[30px]" alt="" />More Branding</li>
                                    <li className="text-2xl font-semibold text-stone-800 flex gap-3 items-center ">
                                    <img src="./check.png" className="w-[30px] h-[30px]" alt="" />More Likes</li>
                                    <li className="text-2xl font-semibold text-stone-800 flex gap-3 items-center ">
                                    <img src="./check.png" className="w-[30px] h-[30px]" alt="" />More Followers</li>
                                    <li className="text-2xl font-semibold text-stone-800 flex gap-3 items-center ">
                                    <img src="./check.png" className="w-[30px] h-[30px]" alt="" />More Leads</li>

                            </ul>
                        </div>

                    </div>
                    
                    <p className="my-10 p-3 lg:mx-20 text-justify lg:text-center text-3xl poppins-regular text-stone-700">At GreatXt, we follow the <span className="text-lime-600">Modern Age Design</span> patterns. In order to evolve with time our team works on the specific areas where there needs an improvement with total handcrafted code... </p>
                  
                    <div className="lg:mx-20  ">
                            <h1 className="my-10 text-3xl font-semibold text-stone-800 text-center ">Our Expertise</h1>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5  ">
                            <div className="bg-gradient-to-br shadow-xl rounded-xl from-violet-400 via-violet-300 to-stone-100 p-[1px] ">
                                <div className=" rounded-xl p-5 shadow-xls bg-stone-100">
                                    <img src="./design.jpg" alt="" className="rounded-xl h-[200px] w-full " />
                                    <h1 className="text-2xl font-semibold  my-3 text-lime-600">Design Research</h1>
                                    <hr className="text-stone-300 "/>
                                    <p className="my-3 text-lg text-stone-700 ">We research a wide variety of modern age designs in order to keep up with the current trends in the industry.</p>

                                </div>
                            </div>
                              <div className="bg-gradient-to-br rounded-xl shadow-xl from-violet-400 via-violet-300 to-stone-100 p-[1px] ">
                                <div className=" rounded-xl p-5 shadow-xls bg-stone-100">
                                    <img src="./marketing.jpg" alt="" className="rounded-xl h-[200px] w-full" />
                                    <h1 className="text-2xl font-semibold  my-3 text-lime-600">Market Research</h1>
                                    <hr className="text-stone-300 "/>
                                    <p className="my-3 text-lg text-stone-700 ">We also research a wide variety of modern marketing strategies to upgrade with respect to market trends.</p>

                                </div>
                            </div>
                              <div className="bg-gradient-to-br rounded-xl shadow-xl from-violet-400 via-violet-300 to-stone-100 p-[1px] ">
                                <div className=" rounded-xl p-5 shadow-xls bg-stone-100">
                                    <img src="./copywriting.jpg" alt="" className="rounded-xl h-[200px] w-full" />
                                    <h1 className="text-2xl font-semibold  my-3 text-lime-600">Copywriting</h1>
                                    <hr className="text-stone-300 "/>
                                    <p className="my-3 text-lg text-stone-700 ">We make the best possible copies for the brand in order to intrigue the leads and turn them into customers.</p>

                                </div>
                            </div>
                    </div>
                    </div>
                </div>
                <div className="h-[100px]"></div>
            </div>
            <div>
                
            </div>

           <div className="p-10 h-[200px] w-full flex justify-center items-center relative ">

            <img src="./logo.png" alt="" className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2   opacity-10 " />
            <h1 className="text-3xl bg-gradient-to-br from-white font-bold to-stone-600 text-transparent bg-clip-text  bricolage-grotesque lg:text-6xl">Lets get things done </h1>
           </div>
  

 

            

            </Layout>

             
         
            
            
        </>
    )
}

export default Home;
