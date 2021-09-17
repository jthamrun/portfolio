import AboutMeInfo from "./AboutMeInfo";

function AboutMe() {
    return (
        <div className="py-20 mx-6 md:mx-auto max-w-3xl">
            <div className="bg-gray-200 h-4 rounded-t-lg"></div>
            <div className="bg-gray-basic text-white text-sm space-y-5 py-10">
                <AboutMeInfo question="origin" answer="Surabaya, Indonesia" />
                <AboutMeInfo
                    question="education"
                    answer="University of California, Irvine"
                />
                <AboutMeInfo question="major" answer="Computer Science" />
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
                <AboutMeInfo question="workExperience.current" answer="Product Support, Associate" />
                <AboutMeInfo question="resume" answer="jonathan-thamrun.pdf" link="true" />
            </div>
        </div>
    );
}

export default AboutMe;
