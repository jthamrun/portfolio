import AboutMeInfo from "./AboutMeInfo";

function AboutMe() {
    return (
        <div className="mt-32 md:mt-20 mb-10 mx-5 md:mx-auto md:max-w-4xl" id="AboutMe">
            {/* <div className="text-center font-karla tracking-widest">
                <h1>EDUCATION & SKILLS</h1>
            </div>

            <div className="md:grid md:grid-cols-2 md:gap-x-10 items-center mt-10">
                <div className="flex justify-center text-2xl font-semibold">
                    <h1>University</h1>
                </div>
                <div className="flex flex-col text-start items-center md:items-start">
                    <h1 className="font-medium text-xl mt-5 md:mt-0">
                        University of California, Irvine
                    </h1>
                    <h2 className="text-sm">
                        Bachelor's Degree, Computer Science •June 2020
                    </h2>
                    <h3 className="text-sm">
                        Dean's Honor List: 2018 Fall, 2019 Winter, 2019 Fall,
                        2020 Spring
                    </h3>
                </div>
            </div>

            <div className="md:grid md:grid-cols-2 md:gap-x-10 items-center mt-10">
                <div className="flex justify-center text-2xl font-semibold">
                    <h1>Coding Languages</h1>
                </div>
                <div className="flex flex-col text-start items-center md:items-start">
                    <h1 className="text-sm mt-5 md:mt-0">
                        Python, Java, Javascript, React,
                    </h1>
                    <h2 className="text-sm">
                        HTML, CSS, MySQL, NoSQL, Fluter, Git, Unity
                    </h2>
                </div>
            </div> */}

            <div className="bg-gray-200 h-4 rounded-t-lg"></div>
            <div className="bg-white text-sm space-y-5 py-10 border border-2">
                <AboutMeInfo question="origin" answer="Surabaya, Indonesia" />
                <AboutMeInfo
                    question="education"
                    answer="University of California, Irvine"
                />
                <AboutMeInfo question="major" answer="Computer Science" />
                <AboutMeInfo
                    question="coding"
                    answer='["Python", "Java", "Javascript", "HTML", "CSS", "React", "C++", "Flutter", "Lua", "MySQL", "NoSQL"]'
                />
                <AboutMeInfo
                    question="interests"
                    answer='["Development", "Code", "Football", "Coffee", "Manchester United"]'
                />
                <AboutMeInfo
                    question="email"
                    answer="jonathan.thamrun@gmail.com"
                    mail="true"
                    link="true"
                />
                <AboutMeInfo
                    question="workExperience.current"
                    answer="Product Support, Associate"
                />
                {/* <AboutMeInfo
                    question="resume"
                    answer="jonathan-thamrun.pdf"
                    link="true"
                /> */}
            </div>
        </div>
    );
}

export default AboutMe;
