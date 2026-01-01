import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCarousel } from "../hooks/useCarousel";

export const specialOffers = [
    { name: 'Lisbon, Portugal', stars: '5', img: '/images/lisbon-portugal.png', description: '5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.', price: '€500' },
    { name: 'Athens, Greece', stars: '5', img: '/images/athens-greece.png', description: '5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.', price: '€800' },
    { name: 'Rome, Italy', stars: '5', img: '/images/rome-italy.png', description: '5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.', price: '€750' },
]

interface SpecOffers {
    name: string;
    stars: React.ReactNode;
    img: string;
    description: string;
    price: React.ReactNode;
}

export const SpecialOffer = ({ data }: { data: SpecOffers[] }) => {
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
                className={`cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/30 hover:bg-white/60 border border-white/90 transition-all ${!canPrev ? 'opacity-20 cursor-not-allowed' : 'opacity-100'
                    }`}>
                <ChevronLeft className="text-white w-6 h-6" />
            </button>

            <div className="w-350 max-[1440px]:w-272 max-[1120px]:w-3xl max-[800px]:w-120 max-[530px]:w-72 mx-auto overflow-hidden py-6">
                <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{
                        transform: `translateX(-${currentIndex * (100 / itemsVisible)}%)`,
                        gap: `${gap}px`
                    }}
                >
                    {specialOffers.map((offers, index) => (
                        <div
                            key={index}
                            style={{ width: `calc(${100 / itemsVisible}% - ${(gap * (itemsVisible - 0.5)) / itemsVisible}px)` }}
                            className={`hover:brightness-125 transition-all duration-300 shrink-0 relative rounded-3xl overflow-hidden shadow-xl bg-neutral-very-dark-blue h-166.75 max-[640px]:h-80 w-full sm:w-1/2 lg-w-1/3`}
                        >
                            <div style={{ backgroundImage: `url(${offers.img})` }} className={`h-[65%] max-[530px]:h-[45%] max-[640px]:h-[55%] max-[800px]:h-[55%] max-[1120px]:h-[63%] max-[1440px]:h-[62%] w-full bg-cover bg-center`} aria-label={offers.name} ></div>


                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                            <div className="cursor-pointer hover:scale-102 transition-all duration-300 absolute bottom-0 left-0 p-6 w-full text-white">

                                <div className={`relative top-5 -right-95 flex items-center justify-center w-8 h-8`}>
                                    <span style={{}} className={`animate-ping absolute inline-flex h-5 w-5 rounded-full opacity-75 bg-white`}></span>
                                    <img src="./images/go-to.svg" className={`absolute inline-flex rounded-full`} />
                                </div>


                                <h3 className="text-2xl font-bold mb-2 tracking-tight">
                                    {offers.name}
                                </h3>
                                <div className="flex gap-1 my-2">
                                    {Array.from({ length: Number(offers.stars) }).map((_, i) => (
                                        <img key={i} className="h-4 my-2" src="./images/star.svg" alt="Stars" />
                                    ))}
                                </div>
                                <div className="flex items-center gap-1.5 text-white/80 mb-5">
                                    <span className="text-sm font-medium">{offers.description}</span>
                                </div>
                                <div className="font-semibold flex items-center">
                                    <p>From:&nbsp;</p><span className="text-neutral-very-grayish text-2xl"> {offers.price}</span>
                                </div>
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