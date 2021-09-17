import Nav from "../components/Nav";
import Image from "next/image";
import AboutMe from "../components/AboutMe";

export default function Home() {
    return (
        <div>
            <Nav></Nav>
            <div className="relative bg-white pb-2/3">
                <img
                    className="absolute h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1467&q=80"
                />
            </div>
            <div className="bg-gray-400">
                <AboutMe />
            </div>
        </div>
    );
}
