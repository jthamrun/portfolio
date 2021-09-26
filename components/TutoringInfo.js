function TutoringInfo({
    imgUrl,
    language,
    project,
    description,
    orientation,
    button,
    dlLink,
}) {
    return (
        <div className="md:grid md:grid-cols-2 md:gap-x-10">
            <div className="relative pb-9/10">
                <img
                    className="absolute h-full w-full object-cover"
                    src={`${imgUrl}`}
                />
            </div>
            <div className="mt-5 flex flex-col items-center justify-center">
                <h2 className="text-xs font-merriweather">{language}</h2>
                <h1 className="text-3xl font-bold font-merriweather">
                    {project}
                </h1>
                <hr
                    className="border border-t-2 border-gray-300 my-5"
                    width="40%"
                />
                <p className="text-sm text-center">{description}</p>
                <button className="p-2 px-6 bg-black text-white mt-8">
                    <a href={`${dlLink}`}>Download Game Files</a>
                </button>
            </div>
        </div>
    );
}

export default TutoringInfo;
