import { useState } from "react";
import { Link } from "react-router-dom";

function Header(){

    const [open, setOpen] = useState(false);

    return(
        <>
               <div id="header" className="flex items-center justify-between p-5 mt-2 lg:mx-20">

                <div className="flex gap-2">
                    <img src="./GreatXt.svg" className="w-[100px] lg:w-auto" alt= "" />
                </div>

                <span onClick={() => setOpen (prev => !prev) } className="material-symbols-outlined text-stone-50"><span className="lg:hidden">density_medium</span> </span>

                <div className="hidden lg:flex gap-5 text-stone-200 text-lg">  
                               
                    <Link to='/' className="py-1 poppins-regular hover:text-lime-600">About</Link>
                    <Link to='/' className="py-1 poppins-regular hover:text-lime-600">Serices</Link>
                    <Link to='/' className="px-5 py-1  bg-lime-600  rounded-4xl  text-stone-900 shadow-xl shadow-lime-300/10  poppins-regular hover:text-lime-100 ">Contact</Link>
                    
                </div>


            </div>

            { open &&
             <div className="text-3xl text-stone-200 flex flex-col border-b  border-lime-600 p-2  items-center lg:hidden ">
                <Link to='/' className="p-3 hover:text-lime-600">About</Link>
                <Link to='/' className="p-3 hover:text-lime-600">Serices</Link>
                <Link to='/' className="p-3 hover:text-lime-600 pb-7">Contact</Link>
            </div>
            }
        
        </>
    )
}

export default Header;