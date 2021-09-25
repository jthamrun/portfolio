import InstaIcon from "../images/instagram.svg";
import LinkedInIcon from "../images/LinkedInIcon.svg";
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
            <div className="flex text-black space-x-2 mt-2">
                <h2>About Me</h2>
                <h2>Work</h2>
                <h2>Tutoring</h2>
                <h2>Contact Me</h2>
            </div>
            <p className="text-black opacity-75 text-xs mt-1">
                © 2021 Jonathan Thamrun.
            </p>
        </div>
    );
}

export default Footer;
