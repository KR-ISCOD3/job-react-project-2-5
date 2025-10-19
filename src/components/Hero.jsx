
function Hero() {
  return (
    <div className='w-full flex justify-center p-3 py-10 md:py-15'>
        <div className="text-center w-full md:w-[60%] lg:w-[45%]">
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-medium'>Get The <span className='text-blue-800'>Right Job</span></h1>
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-medium animate-bounce my-4 lg:my-4'>You Deserve</h1>
            <p className="text-gray-500">1,000,000 jobs is waiting you right now</p>
            <form action="" className="flex shadow-sm rounded-3xl overflow-hidden my-5">
                <input type="text" name="" id="" className="w-full outline-0  py-3 px-5" placeholder="Find your favourite job"/>
                <button className="bg-blue-800 px-8 text-white rounded-3xl shadow-sm">
                    Search
                </button>
            </form>
        </div>
    </div>
  )
}

export default Hero
