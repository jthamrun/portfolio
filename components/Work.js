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
                    <div className="py-6 px-4 md:px-8 text-sm text-left font-karla border border-1">
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
                    Title="AIRBNB CLONE - Ongoing Project"
                    Text="Clone project based off the original Airbnb Website. Used Next.js, Tailwind CSS, Server-Side Rendering, Date-picker, and Mapbox Integration."
                />

                <WorkInfo
                    ImageUrl="https://i.imgur.com/8xXVzV2.png"
                    Title="ROOKBOOK"
                    Text="Rookbook is a sports management agency focusing on Southeast Asia, with reaching spanning the globe. This was a draft website created using React for the company."
                />

                <WorkInfo
                    ImageUrl="https://i.imgur.com/ynyDCz3.png"
                    Title="AMAZON CLONE"
                    Text="Amazone Clone project inspired by the original e-Commerce platform. Features a Responsive Design, developed using Next.js, Stripe Checkout, Google Authentication, Google Firestore and Fake Store API."
                />

                <WorkInfo
                    ImageUrl="https://i.imgur.com/sA0BG2n.png"
                    Title="HULU CLONE"
                    Text="Clone project based on the original Hulu web application. Movies integrated by calling The Movie Database API. Features Responsive design to ensure a seamless user exerpience in any screen size."
                />

                <WorkInfo
                    ImageUrl="https://i.imgur.com/zrlaJE5.png"
                    Title="LINKEDIN CLONE"
                    Text="Project created to mimick and clone the features of the original social media networking platform. Built using React, Redux and Google Firestore."
                />

                <WorkInfo
                    ImageUrl="https://i.imgur.com/rB6apgn.png"
                    Title="E-COMMERCE APPLICATION"
                    Text="A basic e-Commerce Application that serves the purpose of selling succulents. Built and developed using Flutter, Dart, Google Firestore."
                />
            </div>
        </div>
    );
}

export default Work;
