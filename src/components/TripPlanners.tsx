import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCarousel } from '../hooks/useCarousel';

export const tripPlannersBgs = [
    { name: 'Lisbon, Portugal', img: './images/lisbon-portugal.png', local: 'London, United Kingdom', stars: '5', price: '€99 /Day', days: '7 Days tour' },
    { name: 'Millennium Bridge', img: './images/millennium-bridge.png', local: 'London, United Kingdom', stars: '5', price: '€80 /Day', days: '7 Days tour' },
    { name: 'Sea of Orange Tiles', img: './images/sea-of-orange-tails.png', local: 'Lisbon, Portugal', stars: '5', price: '€120 /Day', days: '7 Days tour' },
    { name: 'The Great Wall', img: './images/great-wall.png', local: 'Huairou District, China', stars: '5', price: '€140 /Day', days: '7 Days tour' },
];

interface TripPlanners {
    name: string;
    img: string;
    local: string;
    stars: React.ReactNode;
    price: React.ReactNode;
    days: React.ReactNode;
}

const TripPlanners = ({ data }: { data: TripPlanners[] }) => {

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

            <div className="w-230 max-[1440px]:w-152 max-[1120px]:w-3xl max-[800px]:w-120 max-[530px]:w-72 mx-auto overflow-hidden py-6">

                <div
                    className=" flex transition-transform duration-500 ease-out"
                    style={{
                        transform: `translateX(-${currentIndex * (100 / itemsVisible)}%)`,
                        gap: `${gap}px`
                    }}
                >
                    {tripPlannersBgs.map((trip, index) => (
                        <div
                            key={index}
                            style={{ width: `calc(${100 / itemsVisible}% - ${(gap * (itemsVisible)) / itemsVisible}px)` }}
                            className="relative shrink-0 rounded-3xl overflow-hidden shadow-xl group bg-neutral-very-dark-blue cursor-pointer h-100"
                        >
                            <div
                                style={{ backgroundImage: `url(${trip.img})` }}
                                className={`absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:-translate-y-1/3`}
                            >
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
                            </div>

                            <div className="absolute inset-x-0 bottom-0 p-6 translate-y-[44.5%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out bg-neutral-very-dark-blue/90 backdrop-blur-md">

                                <h3 className="text-xl font-bold text-white uppercase">{trip.name}</h3>
                                <p className="text-blue-400 text-sm font-medium mb-3">{trip.local}</p>

                                <div className="flex justify-between">
                                    <div className="flex gap-1 mb-2">
                                        {Array.from({ length: Number(trip.stars) }).map((_, i) => (
                                            <img key={i} className="h-3" src="./images/star.svg" alt="" />
                                        ))}
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        {trip.days}
                                    </p>
                                </div>

                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 flex justify-between">
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        GUIDED TOUR
                                    </p>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        {trip.price}
                                    </p>
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
    );
};

export default TripPlanners;