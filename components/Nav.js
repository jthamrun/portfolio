import { MenuAlt4Icon } from "@heroicons/react/solid";
import InstaIcon from "../images/instagram.svg";
import LinkedInIcon from "../images/LinkedInIcon.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import Dropdown from "./Dropdown";
import React, { useState, useEffect } from "react";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const hideMenu = () => {
            if (window.innerWidth > 768 && isOpen) {
                setIsOpen(false);
            }
        };
        window.addEventListener("resize", hideMenu);

        return () => {
            window.removeEventListener("resize", hideMenu);
        };
    });

    return (
        <header className="md:pt-14 md:pb-10 z-20 bg-white py-4">
            <div className="flex flex-col h-24 ml-4 justify-center">
                <div className="flex items-center">
                    {/* <MenuAlt4Icon className="h-11 p-1" /> */}
                    <h1 className="ml-2 text-lg md:text-xl font-karla tracking-widest font-light">
                        JONATHAN THAMRUN
                    </h1>
                </div>

                <div className="hidden md:flex space-x-2 ml-2">
                    <Link
                        activeClass="active"
                        to="AboutMe"
                        spy={true}
                        smooth={true}
                        offset={-40}
                        duration={500}
                    >
                        <h2 className="text-light opacity-60 hover:opacity-100 hover:font-medium cursor-pointer">
                            About Me
                        </h2>
                    </Link>
                    <Link
                        activeClass="active"
                        to="Work"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        className="cursor-pointer"
                    >
                        <h2 className="text-light opacity-60 hover:opacity-100 hover:font-medium cursor-pointer">
                            Work
                        </h2>
                    </Link>
                    <Link
                        activeClass="active"
                        to="Tutoring"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        className="cursor-pointer"
                    >
                        <h2 className="text-light opacity-60 hover:opacity-100 hover:font-medium cursor-pointer">
                            Tutoring
                        </h2>
                    </Link>
                    <Link
                        activeClass="active"
                        to="ContactMe"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        className="cursor-pointer"
                    >
                        <h2 className="text-light opacity-60 hover:opacity-100 hover:font-medium cursor-pointer">
                            Contact Me
                        </h2>
                    </Link>
                    {/* <h2>About Me</h2>
                    <h2>Work</h2>
                    <h2>Tutoring</h2>
                    <h2>Contact Me</h2> */}
                </div>
            </div>

            <div
                className="flex h-24 -mt-24 mr-4 items-center justify-end cursor-pointer"
                onClick={toggle}
            >
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
            <Dropdown isOpen={isOpen} toggle={toggle} />
        </header>
    );
}

export default Nav;
