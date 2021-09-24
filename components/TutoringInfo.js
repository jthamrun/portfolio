function TutoringInfo({ imgUrl, language, project, description, orientation, button }) {
    return (
        
        <div>
            {orientation == "left" ? 
            <div className="md:grid md:grid-cols-2 md:gap-x-10">
                <div className="relative pb-9/10 bg-red-500">
                    <img
                        className="absolute h-full w-full object-cover"
                        src={`${imgUrl}`}
                    />
                </div>
                <div className="mt-5 flex flex-col items-center justify-center">
                    <h2 className="text-xs font-merriweather self-start">{language}</h2>
                    <h1 className="text-3xl font-bold font-merriweather self-start">{project}</h1>
                    <hr className="border border-t-2 border-gray-300 my-5 self-start" width="40%" />
                    <p className="text-sm">
                        {description}
                    </p>
                    <button className="p-2 px-6 bg-black text-white mt-8">Click Me</button>
                </div>
            </div>: 
            <div className="md:grid md:grid-cols-2 md:gap-x-10">
                <div className="hidden mt-5 md:flex md:flex-col md:items-center md:justify-center">
                    <h2 className="text-xs font-merriweather self-start">{language}</h2>
                    <h1 className="text-3xl font-bold font-merriweather self-start">{project}</h1>
                    <hr className="border border-t-2 border-gray-300 my-5 self-start" width="40%" />
                    <p className="text-sm">
                        {description}
                    </p>
                    <button className="p-2 px-6 bg-black text-white mt-8">Click Me</button>
                </div>
                <div className="relative pb-9/10 bg-red-500">
                    <img
                        className="absolute h-full w-full object-cover"
                        src={`${imgUrl}`}
                    />
                </div>
                <div className="md:hidden mt-5 flex flex-col items-center justify-center">
                    <h2 className="text-xs font-merriweather self-start">{language}</h2>
                    <h1 className="text-3xl font-bold font-merriweather self-start">{project}</h1>
                    <hr className="border border-t-2 border-gray-300 my-5 self-start" width="40%" />
                    <p className="text-sm">
                        {description}
                    </p>
                    <button className="p-2 px-6 bg-black text-white mt-8">Click Me</button>
                </div>
            </div>}
        </div>
    )
}

export default TutoringInfo
