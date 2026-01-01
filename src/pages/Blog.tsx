export const Blog = () => {
    return (
        <div>
            <div className="w-350 max-[1440px]:w-272 max-[1120px]:w-3xl max-[800px]:w-120 max-[530px]:w-72 mx-auto flex flex-col items-center h-full gap-10">
                <div className="flex flex-col text-white">
                    <div id="blog" className="ml-5 mt-50 max-[1120px]:ml-0  flex flex-col">
                        <h2 className="text-[54px] font-bold leading-tight max-[800px]:text-[45px] max-[640px]:text-[40px] ">
                            Our Blog
                        </h2>
                        <div className="w-35 h-1 bg-white my-6" />
                        <p className="text-[24px] opacity-80 mb-18 ">
                            An insight the incredible experience in the world.
                        </p>
                    </div>
                    <div className="flex gap-8 items-center max-[800px]:flex-col">

                        <img className="max-[1440px]:w-150 max-[1120px]:w-100 max-[800px]:w-120" src="./images/italy.png" alt="" />

                        <div className="">
                            <h4 className="text-[54px] max-[1440px]:text-[41px] max-[1120px]:text-[30px] max-[800px]:text-[43px] max-[530px]:text-[35px] mb-6">Beautiful Italy Let’s travel</h4>

                            <p className="text-[24px] max-[1440px]:text-[22px] max-[1120px]:text-[18px] max-[800px]:text-[20px] max-[530px]:text-[18px] leading-12 max-[1120px]:leading-8 max-[800px]:leading-10 mb-6">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness. No one rejects, dislike, or avoids plasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremly painful. Nor again is there anyone who loves or pursues.</p>
                            <a className="text-[24px] max-[1120px]:text-[20px] max-[800px]:text-[22px] max-[530px]:text-[20px] text-neutral-very-light-blue hover:text-neutral-purple transition-all duration-300" href="#">Read More →</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}