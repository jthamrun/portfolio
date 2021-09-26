function WorkInfo({ ImageUrl, Title, Text }) {
    return (
        <div className="bg-white shadow">
            <div className="relative pb-9/10 bg-red-500 border border-1">
                <img
                    className="absolute h-full w-full object-cover"
                    src={`${ImageUrl}`}
                />
            </div>
            <div className="py-6 px-4 md:px-8 text-sm text-left font-karla border border-1">
                <p className="font-light">
                    <span className="font-semibold">{Title}</span>
                    &nbsp;&nbsp;&nbsp;{Text}
                </p>
            </div>
        </div>
    );
}

export default WorkInfo;
