import Nav from "../components/Nav";
import Image from "next/image";
import AboutMe from "../components/AboutMe";
import Work from "../components/Work";
import Tutoring from "../components/Tutoring";
import ContactMe from "../components/ContactMe";
import portfolioPic from "../public/portfolioPic.jpg";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Head from "next/head";

export default function Home() {
    return (
        <div className="md:px-5 md:mx-auto max-w-7xl">
            <Head>
                <title>Jonathan Thamrun</title>
            </Head>
            <Nav></Nav>
            <div className="">
                <Hero />
            </div>
            <div className="bg-white">
                <AboutMe />
            </div>
            <div className="bg-white">
                <Work />
            </div>
            <div className="bg-white">
                <Tutoring />
            </div>
            <div className="bg-white">
                <ContactMe />
            </div>
            <div className="bg-white">
                <Footer />
            </div>
        </div>
    );
}
