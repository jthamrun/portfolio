function WorkInfo({ ImageUrl, Title, Text, ProjectUrl }) {
    return (
        <div className="bg-white shadow">
            <div className="relative pb-9/10 bg-red-500 border border-1">
                <img
                    className="absolute h-full w-full object-cover"
                    src={`${ImageUrl}`}
                />
            </div>
            <div className="py-6 px-4 md:px-8 text-sm text-left font-karla border border-1 h-40 flex items-center">
                {ProjectUrl != "" ? 
                    (
                        <p className="font-light">
                            <a href={`${ProjectUrl}`}>
                                <span className="font-semibold hover:underline">{Title}</span>
                            </a>
                            &nbsp;&nbsp;&nbsp;{Text}
                        </p>   
                    ) : (
                        <p className="font-light">
                            <span className="font-semibold hover:underline">{Title}</span>
                            &nbsp;&nbsp;&nbsp;{Text}
                        </p>
                    )
                }   
            </div>
        </div>
    );
}

export default WorkInfo;
