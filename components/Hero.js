import InstaIcon from "../images/instagram.svg";
import LinkedInIcon from "../images/LinkedInIcon.svg";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

function Hero() {
    return (
        <div className="flex flex-col mx-5 md:mx-auto md:max-w-4xl">
            <div className="relative bg-white pb-55">
                <img
                    className="absolute h-full w-full object-cover"
                    src="https://i.imgur.com/8UE9nBd.jpg"
                />
            </div>
            <p className="my-4 text-2xl md:text-2xl text-center font-inter">
                Hello World - I am a developer and designer.
            </p>

            <div className="mt-5 flex flex-col space-y-4 md:space-y-0 md:flex-row items-center justify-center space-x-4">
                <div className="flex space-x-2">
                    <Link href="https://www.instagram.com/jthamrun/">
                        <InstaIcon className="h-8 cursor-pointer" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/jthm/">
                        <LinkedInIcon className="h-8 cursor-pointer" />
                    </Link>
                </div>

                <ScrollLink
                    activeClass="active"
                    to="ContactMe"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className="cursor-pointer"
                >
                    <button className="md:self-center p-2 px-12 bg-black text-white">
                        <h2 className="">Contact Me</h2>
                    </button>
                </ScrollLink>
            </div>
        </div>
    );
}

export default Hero;
