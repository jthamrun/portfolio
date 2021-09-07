import { MenuAlt4Icon } from "@heroicons/react/solid";

function Nav() {
    return (
        <header className="sticky top-0 z-20 bg-white">
            <div className="flex h-24 items-center justify-center">
                <div>
                    <h1 className="text-lg md:text-2xl font-karla font-light tracking-widest">
                        JONATHAN THAMRUN
                    </h1>
                </div>
            </div>
            <div className="flex h-24 -mt-24 mr-8 items-center justify-end">
                <MenuAlt4Icon className="h-12 p-1" />
            </div>
        </header>
    );
}

export default Nav;
