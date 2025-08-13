import { useState } from "react";
import { Link } from "react-router-dom";

function Header(){

    const [open, setOpen] = useState(false);

    return(
        <>
               <div id="header" className="flex items-center justify-between p-5 mt-2 lg:mx-auto     max-w-7xl w-full">

                <div className="flex gap-2">
                    <img src="./GreatXt.svg" className="w-[100px] lg:w-auto" alt= "" />
                </div>
                <svg onClick={() => setOpen (prev => !prev) } xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 text-stone-200 lg:hidden">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>



                <div className="hidden lg:flex gap-5 text-stone-200 text-lg">  
                               
                    <Link to='/' className="py-1 poppins-regular hover:text-lime-600">About</Link>
                    <Link to='/' className="py-1 poppins-regular hover:text-lime-600">Services</Link>
                    <Link to='/' className="px-5 py-1  bg-lime-600  rounded-4xl  text-stone-900 shadow-xl shadow-lime-300/10  poppins-regular hover:text-lime-100 ">Contact</Link>
                    
                </div>


            </div>

            
             <div className={`transition-all duration-400 overflow-hidden text-3xl text-stone-200 flex flex-col border-b  border-lime-600/50 p-2  items-center lg:hidden ${open ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0" }`}>
                <Link to='/' className="p-3 hover:text-lime-600">About</Link>
                <Link to='/' className="p-3 hover:text-lime-600">Services</Link>
                <Link to='/' className="p-3 hover:text-lime-600 pb-7">Contact</Link>
            </div>
            
        
        </>
    )
}

export default Header;