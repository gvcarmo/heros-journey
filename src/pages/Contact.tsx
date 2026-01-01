export const Contact = () => {
    return (
        <div className="h-full w-full flex flex-col items-center justify-center">
            <div className="relative h-full w-300 max-[1210px]:w-183 max-[800px]:w-[288px]">
                <div className="h-50 max-[1210px]:h-81 max-[800px]:h-110"></div>
                <div className="absolute top-25 max-[1210px]:top-0 max-[1210px]:w-183 max-[800px]:w-[288px] max-[800px]:h-110 left-0 h-50 max-[1210px]:h-81 w-300 max-[1210px]:flex-col border border-neutral-very-grayish rounded-3xl bg-neutral-very-dark-blue flex items-center max-[1210px]:items-start gap-25 max-[1210px]:gap-10">
                    <h2 className="text-[54px] max-[800px]:text-[40px] font-bold ml-25 max-[800px]:ml-5 max-[1210px]:ml-15 max-[1210px]:mt-10 max-[800px]:mt-5">Our Newsletter</h2>
                    <div className="max-[1210px]:ml-15 max-[800px]:ml-5">
                        <p className="mb-4">Email</p>
                        <div className="flex gap-8 max-[800px]:flex-col">
                            <input className="outline-none border-b opacity-30 w-90 max-[800px]:w-62 max-[800px]:h-18 bg-neutral-blue/20 rounded-xl px-8" type="text" placeholder="Enter your email" />
                            <a className="btn-grad text-neutral-very-grayish font-semibold h-18 w-40.75 max-[800px]:w-62 rounded-xl flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-125" href="/"><span>Subscribe</span></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-125 max-[1210px]:h-full max-[1210px]:pb-35 max-[1210px]:pt-10 w-full bg-neutral-blue flex justify-center items-center max-[1210px]:justify-start max-[1210px]:pl-25 max-[800px]:pl-15">
                <div className="mt-20 flex max-[1210px]:flex-col gap-25">
                    <div className="">
                        <a href="" className="cursor-pointer font-semibold text-[32px] text-transparent bg-clip-text bg-[linear-gradient(90deg,rgba(61,203,255,1)_16%,rgba(64,30,158,1)_64%)]" >Hero's Journey</a>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-semibold text-[24px]">Menu</p>
                        <a href="#">Home</a>
                        <a href="#offer">Explore</a>
                        <a href="#trips">Travel</a>
                        <a href="#blog">Blog</a>
                        <a href="#trips">Pricing</a>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-semibold text-[24px]">Information</p>
                        <a href="">Destinations</a>
                        <a href="">Supports</a>
                        <a href="">Terms & Conditions</a>
                        <a href="">Privacy</a>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-semibold text-[24px]">Contact Info</p>
                        <p>+123 456 789</p>
                        <p>info@travellian.com</p>
                        <p>1245, New Yourk, USA</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-semibold text-[24px] mb-5">Follow us on</p>
                        <div className="flex gap-5 items-center">
                            <a href=""><img src="./images/fb-icon.svg" alt="Facebook" /></a>
                            <a href=""><img src="./images/p-icon.svg" alt="P" /></a>
                            <a href=""><img src="./images/instagram-icon.svg" alt="Instagram" /></a>
                            <a href=""><img src="./images/twitter-icon.svg" alt="Twitter" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}