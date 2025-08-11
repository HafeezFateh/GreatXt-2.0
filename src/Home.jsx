import Layout from "./layout/Layout";
import gsap from "gsap";
import { useEffect } from "react";
import { motion } from "framer-motion";

function Home(){


    return(
        <>
            <Layout>

        <div id="hero" className="mx-5 mt-10 flex flex-col items-center lg:mt-25">
                <motion.h1 initial={{ y: 50, opacity: 0 }}
                    animate={{ translateY: -60, opacity: 1 }}
                    transition={{ duration: 0.3 }} className="p-2 bricolage-grotesque text-[43px]  lg:text-8xl bg-clip-text bg-gradient-to-br from-stone-100 to-stone-600 text-transparent ">GreatXt Agency</motion.h1>
                <motion.p  initial={{ y: 50, opacity: 0 }}
                    animate={{ translateY: -70, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2  }} className="text-2xl lg:mt-5 poppins-regular  lg:text-4xl text-stone-300 text-center">Your <span className="text-lime-600">Brand's success</span>, <br /> is what we want.</motion.p>
           </div>
            
         
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
            

            <h1 className="text-3xl mt-20 text-stone-300 font-semibold text-center ">Our Expertise</h1>
            
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

            </Layout>

             
         
            
            
        </>
    )
}

export default Home;
