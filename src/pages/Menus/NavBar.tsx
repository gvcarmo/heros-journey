import { useState } from 'react';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const links = `flex items-center p-4 text-2xl delay-100`;

    const hamburgerBar = `absolute block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out`
    return (
        <nav className={`p-4 transition-colors duration-300 `}>
            <div className="container mx-auto flex items-center justify-between">

                <button
                    onClick={toggleMenu}
                    className="z-50 hidden max-[768px]:block focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    <div className={`cursor-pointer relative h-6 w-6`}>
                        <span className={`${hamburgerBar} ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                        <span className={`${hamburgerBar} translate-y-2.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`${hamburgerBar} translate-y-5 ${isOpen ? '-rotate-45 translate-y-2.5' : ''}`}></span>
                    </div>

                </button>

                <div className={`bg-neutral-very-dark-blue fixed inset-0 z-40 flex flex-col items-center justify-center transition-transform duration-300 min-[768px]:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <a onClick={closeMenu} className={links} href="#"><p >Home</p></a>
                    <a onClick={closeMenu} className={links} href="#offer"><p >Explore</p></a>
                    <a onClick={closeMenu} className={links} href="#trips"><p >Travel</p></a>
                    <a onClick={closeMenu} className={links} href="#blog"><p >Blog</p></a>
                    <a onClick={closeMenu} className={links} href="#travel"><p >Pricing</p></a>
                    <a onClick={closeMenu} className={links} href="#travel"><p >Login</p></a>

                    <a className="btn-grad m-8 text-2xl text-neutral-very-grayish font-semibold h-16 w-33 rounded-xl flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-125" href="#"><span>Sign up</span></a>

                </div>

            </div>
        </nav >
    )
}

export default Navbar;