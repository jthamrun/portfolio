import InstaIcon from "../images/instagram.svg";
import LinkedInIcon from "../images/LinkedInIcon.svg";
import Link from "next/link";

function Hero() {
    return (
        <div className="flex flex-col mx-5 md:mx-auto md:max-w-4xl">
            <div className="relative bg-white pb-55">
                <img
                    className="absolute h-full w-full object-cover"
                    src="https://i.imgur.com/8UE9nBd.jpg"
                />
            </div>
            <p className="my-4 text-lg md:text-2xl">
                I'm Jonathan — is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it.
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

                <button className="md:self-center p-2 px-12 bg-black text-white">
                    Download Resume
                </button>
            </div>
        </div>
    );
}

export default Hero;
