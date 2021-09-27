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
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest"></link>
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
