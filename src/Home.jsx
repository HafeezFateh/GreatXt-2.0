import Header from "./components/Header";


function Home(){



    return(
        <>
            <Header />

            <div id="hero" className="mx-5 flex flex-col items-center mt-25">
                <h1 className="p-2 bricolage-grotesque text-4xl lg:text-8xl bg-clip-text bg-gradient-to-br from-stone-100 to-stone-600 text-transparent">GreatXt Agency</h1>
                <p className="text-2xl poppins-regular  lg:text-4xl text-stone-300 text-center">Your <span className="text-lime-500">Brand's success</span>, <br /> is what we want.</p>
            </div>
            
            <div className="flex justify-center mt-20 p-5">
                <img src="./greatxt.png" alt="" className="w-[200px] lg:w-[400px] opacity-5"/>
            </div>

            <div className="flex justify-center">
            <div className="w-[1000px] h-[200px] blur-3xl opacity-5 bg-lime-500 rounded-full"></div>
            </div>

             
         
            
            
        </>
    )
}

export default Home;
