import InstaIcon from "../images/instagram.svg";
import LinkedInIcon from "../images/LinkedInIcon.svg";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Link from "next/link";

function Footer() {
    return (
        <div className="flex flex-col items-center justify-center py-10 mx-5 md:mx-auto md:max-w-4xl">
            <div className="flex space-x-2">
                <Link href="https://www.instagram.com/jthamrun/">
                    <InstaIcon className="h-6 cursor-pointer" />
                </Link>
                <Link href="https://www.linkedin.com/in/jthm/">
                    <LinkedInIcon className="h-6 cursor-pointer" />
                </Link>
            </div>
            <div className="mt-2 flex space-x-2 ml-2">
                <ScrollLink
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
                </ScrollLink>
                <ScrollLink
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
                </ScrollLink>
                <ScrollLink
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
                </ScrollLink>
                <ScrollLink
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
                </ScrollLink>
                {/* <h2>About Me</h2>
                    <h2>Work</h2>
                    <h2>Tutoring</h2>
                    <h2>Contact Me</h2> */}
            </div>
            <p className="text-black opacity-75 text-xs mt-1">
                © 2021 Jonathan Thamrun.
            </p>
        </div>
    );
}

export default Footer;
