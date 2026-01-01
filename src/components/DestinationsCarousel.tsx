import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { useCarousel } from '../hooks/useCarousel';

export const destineBackgrounds = [
    { name: 'Monument of Berlin', img: './images/monument-of-berlim.png', local: 'Berlin, Germany' },
    { name: 'Millennium Bridge', img: './images/millennium-bridge.png', local: 'London, United Kingdom' },
    { name: 'Rialto Bridge', img: './images/rialto-bridge.png', local: 'Venice, Italy' },
    { name: 'Sea of Orange Tiles', img: 'images/sea-of-orange-tails.png', local: 'Lisbon, Portugal' },
    { name: 'Eiffel Tower', img: './images/paris-france.png', local: 'Paris, France' },
    { name: 'Golden Gate Bridge', img: 'images/golden-gate-bridge.png', local: 'United States, San Francisco' },
    { name: 'Pueblos Blancos', img: './images/malaga-province.png', local: 'Province of Málaga, Spainish' },
    { name: 'The Great Wall', img: './images/great-wall.png', local: 'Huairou District, China' }
];

interface DestinationBackgrounds {
    name: string;
    img: string;
    local: string;
}

const DestinationsCarousel = ({ data }: { data: DestinationBackgrounds[] }) => {
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
                    }}
                >
                    {destineBackgrounds.map((dest, index) => (
                        <div
                            key={index}
                            style={{ width: `calc(${100 / itemsVisible}% - ${(gap * (itemsVisible - 0.1)) / itemsVisible}px)`, backgroundImage: `url(${dest.img})` }}
                            className={`h-165.25 max-[640px]:h-80 w-full shrink-0 transition-all duration-300 hover:scale-102 relative rounded-3xl overflow-hidden shadow-xl group/card bg-cover bg-center`}
                        >
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                            <div className="absolute bottom-0 left-0 p-6 w-full text-white">
                                <h3 className="text-2xl font-bold mb-2 tracking-tight">
                                    {dest.name}
                                </h3>
                                <div className="flex items-center gap-1.5 text-white/80">
                                    <MapPin size={16} className="text-blue-400" />
                                    <span className="text-sm font-medium">{dest.local}</span>
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

export default DestinationsCarousel;