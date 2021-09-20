import WorkInfo from "./WorkInfo"

function Work() {
    return (
        <div className="py-20 mx-10 md:mx-auto md:max-w-4xl">
            <div className="text-center font-karla tracking-widest">
                <h1>WORK</h1>
            </div>
            <div className="mt-16 space-y-5 md:grid md:grid-cols-2 md:grid-flow-row md:gap-y-4 md:gap-x-10 text-center md:mx-6">
                <div className="col-span-2 bg-white shadow">
                    <div className="relative pb-1/2 bg-red-500">
                        <img
                            className="absolute h-full w-full object-cover"
                            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1700&q=80"
                        />
                    </div>
                    <div className="py-6 px-4 md:px-8 text-sm text-left font-karla">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                    </div>
                </div>
                
                <WorkInfo 
                    ImageUrl="https://images.unsplash.com/photo-1551650992-ee4fd47df41f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    Text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." 
                />

                <WorkInfo 
                    ImageUrl="https://images.unsplash.com/photo-1560461396-41fd0b4f711c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    Text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." 
                />

                <WorkInfo 
                    ImageUrl="https://images.unsplash.com/photo-1552238979-402eb7a9258c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=990&q=80" 
                    Text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." 
                />

                <WorkInfo 
                    ImageUrl="https://images.unsplash.com/photo-1558655146-6c222b05fce4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" 
                    Text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." 
                />

                <WorkInfo 
                    ImageUrl="https://images.unsplash.com/photo-1556155092-8707de31f9c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80" 
                    Text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." 
                />

                <WorkInfo 
                    ImageUrl="https://images.unsplash.com/photo-1555631545-d29638363b03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80" 
                    Text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." 
                />
            </div>
        </div>
    )
}

export default Work
