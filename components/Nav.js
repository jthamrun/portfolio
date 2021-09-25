import { MenuAlt4Icon } from "@heroicons/react/solid";
import InstaIcon from "../images/instagram.svg";
import LinkedInIcon from "../images/LinkedInIcon.svg";
import Link from "next/link";

function Nav() {
    return (
        <header className="md:pt-14 md:pb-10 z-20 bg-white py-4">
            <div className="flex flex-col h-24 ml-4 justify-center">
                <div className="flex items-center">
                    {/* <MenuAlt4Icon className="h-11 p-1" /> */}
                    <h1 className="ml-2 text-lg md:text-xl font-karla tracking-widest">
                        JONATHAN THAMRUN
                    </h1>
                </div>

                <div className="hidden md:flex text-black space-x-2 ml-2 opacity-60">
                    <h2>About Me</h2>
                    <h2>Work</h2>
                    <h2>Tutoring</h2>
                    <h2>Contact Me</h2>
                </div>
            </div>

            <div className="flex h-24 -mt-24 mr-4 items-center justify-end">
                <MenuAlt4Icon className="h-12 p-1" />
            </div>
            {/* <div className="flex h-24 -mt-24 mr-5 items-center justify-end space-x-2">
                <Link href="">
                    <InstaIcon className="h-6 cursor-pointer" />
                </Link>
                <Link href="">
                    <LinkedInIcon className="h-6 cursor-pointer" />
                </Link>
            </div> */}
        </header>
    );
}

export default Nav;
