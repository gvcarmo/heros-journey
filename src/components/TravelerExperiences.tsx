import { ChevronLeft, ChevronRight } from "lucide-react"
import { useCarousel } from "../hooks/useCarousel";

export const travelerExp = [
    { img: 'bg-[url(/images/avatar1.svg)]', description: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness.', stars: '5', name: 'John Doe', prof: 'Accountant' },
    { img: 'bg-[url(/images/avatar2.svg)]', description: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness.', stars: '5', name: 'John Smith', prof: 'Journalist, HWO News' },
    { img: 'bg-[url(/images/avatar3.svg)]', description: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness.', stars: '5', name: 'Tamara Bellis', prof: 'Managing Director, JTH' },
]

interface Travelers {
    img: string;
    description: string;
    stars: React.ReactNode;
    name: string;
    prof: string;
}

export const TravelerExperiences = ({ data }: { data: Travelers[] }) => {
    const gap = 16;

    const {
        currentIndex,
        itemsVisible,
        nextSlide,
        prevSlide,
        canNext,
        canPrev
    } = useCarousel(data.length);

    return (
        <div className="relative overflow-hidden p-4">

            <button
                onClick={prevSlide}
                disabled={!canPrev}
                className={`cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/30 hover:bg-white/60 border border-white/90 transition-all ${currentIndex === 0 ? 'opacity-20 cursor-not-allowed' : 'opacity-100'
                    }`}>
                <ChevronLeft className="text-white w-6 h-6" />
            </button>

            <div className="w-350 max-[1440px]:w-272 max-[1120px]:w-3xl max-[800px]:w-120 max-[530px]:w-72 mx-auto overflow-hidden py-6">
                <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{
                        transform: `translateX(-${currentIndex * (100 / itemsVisible)}%)`,
                        gap: `${gap}px`
                    }}>
                    {travelerExp.map((trav, index) => (
                        <div key={index}
                            style={{ width: `calc(${100 / itemsVisible}% - ${(gap * (itemsVisible - 0.1)) / itemsVisible}px)` }}
                            className={`hover:brightness-125 transition-all duration-300 shrink-0 relative rounded-3xl overflow-hidden shadow-xl bg-neutral-very-dark-blue h-90.75 max-[800px]:h-120 max-[640px]:h-98.75 max-[530px]:h-100`}>
                            <div className={`ml-7 h-25 w-25 max-[800px]:w-20 max-[800px]:h-20 rounded-full ${trav.img}`} aria-label={trav.name}></div>

                            <div className="hover:scale-102 transition-all duration-300 absolute bottom-0 left-0 p-6 w-full text-white">

                                <div className="flex items-center gap-1.5 text-white/80 mb-5">
                                    <span className="text-sm font-medium">{trav.description}</span>
                                </div>

                                <div className="flex gap-1 my-2">
                                    {Array.from({ length: Number(trav.stars) }).map((_, i) => (
                                        <img key={i} className="h-4 my-2" src="./images/star.svg" alt="Stars" />
                                    ))}
                                </div>

                                <h3 className="text-2xl font-bold mb-2 tracking-tight">
                                    {trav.name}
                                </h3>
                                <p className="text-[18px]">{trav.prof}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={nextSlide}
                disabled={!canNext}
                className={`cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/30 hover:bg-white/60 border border-white/90 transition-all ${!canNext ? 'opacity-20 cursor-not-allowed' : 'opacity-100'
                    }`}
            >
                <ChevronRight className="text-white w-6 h-6" />
            </button>

        </div>
    )
}