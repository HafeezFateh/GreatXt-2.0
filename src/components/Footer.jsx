


function Footer(){
    return(
        <>
            <div className="h-[70px]     bg-gradient-to-b from-transparent to-stone-900/30"></div>
            <div className="  bg-stone-900/30   ">
            <div className="flex flex-col lg:justify-evenly lg:flex-row my-10 max-w-7xl lg:mx-auto items-center justify-center">
                {/* 1 */}
                <img src="./GreatXt.svg" alt="" className="lg:-mt-15 my-5 lg:w-[200px]   " />
                {/* 2 */}
                <div className="mt-10 lg:mt-5 flex flex-col items-center lg:items-start gap-1 justify-center">
                    <h1 className="text-2xl font-semibold text-lime-500">Quick Links</h1>
                    <a className="text-stone-100 text-xl">Home</a>
                    <a className="text-stone-100 text-xl">About us</a>
                    <a className="text-stone-100 text-xl">Services</a>
                    <a className="text-stone-100 text-xl">Contact us</a>
                </div>
                {/* 3 */}
                <div className="mt-10 lg:mt-5 flex flex-col items-center lg:items-start gap-1 justify-center">
                    <h1 className="text-2xl font-semibold text-lime-500">Our Services</h1>
                    <a className="text-stone-100 text-xl">Websites</a>
                    <a className="text-stone-100 text-xl">Webapps</a>
                    <a className="text-stone-100 text-xl">Mobile Apps</a>
                    <a className="text-stone-100 text-xl">Graphic designing</a>
                </div>

                {/* 4 */}
                <div className="flex flex-col items-center mt-15 lg:mt-5 ">

                <a href="" className="text-2xl text-center bg-lime-500 rounded-3xl poppins-regular   px-10 py-2 hover:shadow-lime-600/30 shadow-xl shadow-lime-600/20 ">Get a Quote</a>


                {/* 5 */}
                <div className="flex gap-3 mt-10 lg:mt-0 ">
                    <a href="#" className="my-10 bg-stone-400/30  rounded-full">
                        <img src="./instagram.png" alt="" className="w-[40px] invert opacity-80 h-[40px] p-2 " />
                    </a>
                      <a href="#" className="my-10 bg-stone-400/30  rounded-full">
                        <img src="./facebook.png" alt="" className="w-[40px] invert opacity-80 h-[40px] p-2 " />
                    </a>
                      <a href="#" className="my-10 bg-stone-400/30  rounded-full">
                        <img src="./linkedin.png" alt="" className="w-[40px] invert opacity-80 h-[40px] p-2 " />
                    </a>
                      <a href="#" className="my-10 bg-stone-400/30  rounded-full">
                        <img src="./whatsapp.png" alt="" className="w-[40px] invert opacity-80  h-[40px] p-2 " />
                    </a>
                </div>
              </div>
                </div>
  

                <p className="p-3  border-t border-stone-500/10 w-full text-center  font-light text-sm text-stone-500">© GreatXt 2025, All rights reserverd</p>
            </div>
             
        </>
    )
}

export default Footer;