import WorkInfo from "./WorkInfo";

function Work() {
    return (
        <div className="py-10 mx-5 md:mx-auto md:max-w-4xl" id="Work">
            <div className="text-center font-karla tracking-widest">
                <h1>WORK</h1>
            </div>
            <div className="mt-16 space-y-5 md:grid md:grid-cols-2 md:grid-flow-row md:gap-y-4 md:gap-x-10 text-center md:mx-6">
                <div className="col-span-2 bg-white shadow">
                    <div className="relative pb-1/2 bg-red-500">
                        <img
                            className="absolute h-full w-full"
                            src="https://i.imgur.com/AhHctVd.png"
                        />
                    </div>
                    <div className="py-6 px-4 md:px-8 text-sm text-left font-karla border-t-2">
                        <p className="font-light">
                            <span className="font-semibold">
                                GREEN - Ongoing Project.
                            </span>
                            &nbsp;&nbsp;&nbsp;A personal project inspired by my
                            frustration with currently available applications to
                            split charges among friends. With COVID-19 now
                            lifted, I want to create a tool where a group of
                            friends will be able to calculate and split charges
                            from a group expense through simple clicks. Not only
                            will complex and tedious calculations be removed, a
                            history of these splitted charges will be saved in
                            the web application.
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
    );
}

export default Work;
