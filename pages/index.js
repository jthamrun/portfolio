import Nav from "../components/Nav";
import Image from "next/image";
import AboutMe from "../components/AboutMe";
import Work from "../components/Work";
import Tutoring from "../components/Tutoring";
import ContactMe from "../components/ContactMe";
import portfolioPic from "../public/portfolioPic.jpg";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div>
            <Nav></Nav>
            <div className="relative bg-white pb-2/3 mx-10">
                <img
                    className="absolute h-full w-full object-cover"
                    src="https://i.imgur.com/8UE9nBd.jpg"
                />
            </div>
            {/* <div className="relative bg-white pb-2/3">
                <Image
                    className="absolte h-full w-full object-cover"
                    src={portfolioPic}
                />
            </div> */}
            <div className="bg-gray-silver">
                <AboutMe />
            </div>
            <div className="bg-gray-light">
                <Work />
            </div>
            <div className="bg-gray-lighter">
                <Tutoring />
            </div>
            <div className="bg-gray-lightest">
                <ContactMe />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}
