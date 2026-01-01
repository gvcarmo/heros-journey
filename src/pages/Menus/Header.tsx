import BackgroundCarousel from "../../components/BackgroundCarousel"
import NavBar from "./NavBar"

export const Header = () => {
    return (
        <>
            <header className="fixed w-full top-0 z-99 border-b border-neutral-very-grayish flex justify-center bg-neutral-very-dark-blue">
                <nav className="h-22.5 w-full mx-10 flex items-center justify-between">
                    <a href="" className="cursor-pointer font-semibold text-[22px] text-transparent bg-clip-text bg-[linear-gradient(90deg,rgba(61,203,255,1)_16%,rgba(64,30,158,1)_64%)]" >Hero's Journey</a>
                    <div className="max-[768px]:hidden text-[20px] font-light flex gap-5">
                        <a href="#">Home</a>
                        <a href="#offer">Explore</a>
                        <a href="#trips">Travel</a>
                        <a href="#blog">Blog</a>
                        <a href="#trips">Pricing</a>
                    </div>
                    <div className="max-[768px]:hidden text-[20px] flex gap-9 items-center justify-center ml-5">
                        <a href="#">Login</a>
                        <a className="btn-grad text-neutral-very-grayish font-semibold h-16 w-33 rounded-xl flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-125" href="#"><span>Sign up</span></a>
                    </div>
                </nav>
                <div className="flex items-center px-5">
                    <NavBar />
                </div>
            </header>

            <main className="flex justify-center w-full mt-22">
                <BackgroundCarousel />
            </main>
        </>
    )
}