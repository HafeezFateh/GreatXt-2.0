


function Footer(){
    return(
        <>
            <div className="h-[70px]     bg-gradient-to-b from-transparent to-stone-900/30"></div>
            <div className="  bg-stone-900/30  flex flex-col  items-center justify-center">
                
                <img src="./GreatXt.svg" alt="" className="mt-5 w-[100px] lg:w-auto" />

                <div className="mt-10 flex flex-col items-center gap-1 justify-center">
                    <h1 className="text-2xl font-semibold text-lime-500">Quick Links</h1>
                    <a className="text-stone-100 text-xl">Home</a>
                    <a className="text-stone-100 text-xl">About us</a>
                    <a className="text-stone-100 text-xl">Services</a>
                    <a className="text-stone-100 text-xl">Contact us</a>
                </div>
                <div className="mt-10 flex flex-col items-center gap-1 justify-center">
                    <h1 className="text-2xl font-semibold text-lime-500">Our Services</h1>
                    <a className="text-stone-100 text-xl">Websites</a>
                    <a className="text-stone-100 text-xl">Webapps</a>
                    <a className="text-stone-100 text-xl">Mobile Apps</a>
                    <a className="text-stone-100 text-xl">Graphic designing</a>
                </div>

                <a href="" className="text-2xl bg-lime-500 rounded-3xl  my-10 px-6 py-2 hover:shadow-lime-600/30 shadow-xl shadow-lime-600/20">Get a Quote</a>


                <div className="flex gap-3">
                    <div className="my-10 bg-stone-400/30  rounded-full">
                        <img src="./instagram.png" alt="" className="w-[40px] invert opacity-80 h-[40px] p-2 " />
                    </div>
                      <div className="my-10 bg-stone-400/30  rounded-full">
                        <img src="./facebook.png" alt="" className="w-[40px] invert opacity-80 h-[40px] p-2 " />
                    </div>
                      <div className="my-10 bg-stone-400/30  rounded-full">
                        <img src="./linkedin.png" alt="" className="w-[40px] invert opacity-80 h-[40px] p-2 " />
                    </div>
                      <div className="my-10 bg-stone-400/30  rounded-full">
                        <img src="./whatsapp.png" alt="" className="w-[40px] invert opacity-80  h-[40px] p-2 " />
                    </div>
                </div>
              
                <p className="p-3 mt-5 border-t border-stone-500/10 w-full text-center mx-5 font-light text-sm text-stone-500">© GreatXt 2025, All rights reserverd</p>
  

               
            </div>
             
        </>
    )
}

export default Footer;