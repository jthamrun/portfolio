import { Link, animateScroll as scroll } from "react-scroll";

function Dropdown({ isOpen, toggle }) {
    return (
        <div
            className={
                isOpen
                    ? "flex flex-col py-4 space-y-4 text-center items-center bg-white text-black"
                    : "hidden"
            }
        >
            <div className="flex space-x-2 ml-2">
                <Link
                    activeClass="active"
                    to="AboutMe"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    onClick={toggle}
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
                    offset={-50}
                    duration={500}
                    className="cursor-pointer"
                    onClick={toggle}
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
                    offset={-50}
                    duration={500}
                    className="cursor-pointer"
                    onClick={toggle}
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
                    onClick={toggle}
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
    );
}

export default Dropdown;
