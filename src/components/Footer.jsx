


function Footer(){
    return(
        <>
            <div className="  bg-stone-900/30 p-5 flex flex-col items-center justify-center">
                <img src="./GreatXt.svg" alt="" className="mt-10 w-[100px] lg:w-auto" />

                <div className="mt-10 flex flex-col items-center gap-1 justify-center">
                    <h1 className="text-2xl font-semibold text-lime-500">Our Services</h1>
                    <a className="text-stone-100 text-xl">Websites</a>
                    <a className="text-stone-100 text-xl">Webapps</a>
                    <a className="text-stone-100 text-xl">Mobile Apps</a>
                    <a className="text-stone-100 text-xl">Graphic designing</a>
                    <div className="h-[100px]"></div>
                </div>


            </div>
        </>
    )
}

export default Footer;