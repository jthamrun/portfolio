import WorkInfo from "./WorkInfo";

function Work() {
    return (
        <div className="py-10 mx-5 md:mx-auto md:max-w-4xl" id="Work">
            <div className="text-center font-karla tracking-widest">
                <h1>WORK</h1>
            </div>
            <div className="mt-16 space-y-5 md:grid md:grid-cols-2 md:grid-flow-row md:gap-y-4 md:gap-x-10 text-center md:mx-6">
                <div className="col-span-2 bg-white shadow">
                    <div className="relative pb-1/2 bg-red-500 border border-1">
                        <img
                            className="absolute h-full w-full"
                            src="https://i.imgur.com/AhHctVd.png"
                        />
                    </div>
                    <div className="py-6 px-4 md:px-8 text-sm text-left font-karla border border-1s">
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
                    ImageUrl="https://i.imgur.com/jZcPqbT.png"
                    Title="AIRBNB CLONE - Ongong Project"
                    Text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                />

                <WorkInfo
                    ImageUrl="https://i.imgur.com/8xXVzV2.png"
                    Title="ROOKBOOK"
                    Text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s uwhduawdw wduahdu."
                />

                <WorkInfo
                    ImageUrl="https://i.imgur.com/ynyDCz3.png"
                    Title="AMAZON CLONE"
                    Text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                />

                <WorkInfo
                    ImageUrl="https://i.imgur.com/sA0BG2n.png"
                    Title="HULU CLONE"
                    Text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                />

                <WorkInfo
                    ImageUrl="https://i.imgur.com/zrlaJE5.png"
                    Title="LINKEDIN CLONE"
                    Text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                />

                <WorkInfo
                    ImageUrl="https://i.imgur.com/rB6apgn.png"
                    Title="E-COMMERCE APPLICATION"
                    Text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever."
                />
            </div>
        </div>
    );
}

export default Work;
