import { useCarousel } from "../hooks/useCarousel";

export const galleryBackground = [
    { img: '/images/gallery-01.svg' },
    { img: '/images/gallery-02.svg' },
    { img: '/images/gallery-03.svg' },
    { img: '/images/gallery-04.svg' },
];

interface Gallery {
    img: string;
}

const DestinationGallery = ({ data }: { data: Gallery[] }) => {
    const gap = 16;    
    const { itemsVisible } = useCarousel(data.length);
    const isVertical = itemsVisible === 1;
    const currentItems = isVertical ? 1 : 4;    
    const widthCalc = `calc(${100 / currentItems}% - ${(gap * (currentItems - 1)) / currentItems}px)`;

    return (
        <div className="relative overflow-hidden p-4 flex justify-center">
            <div className="w-350 max-[1440px]:w-272 max-[1120px]:w-3xl max-[800px]:w-120 max-[530px]:w-72 overflow-hidden py-6">
                <div
                    className={`flex transition-all duration-500 ease-out 
                        ${isVertical ? 'flex-col' : 'flex-row'}`}
                    style={{
                        gap: `${gap}px`,
                        transform: 'none' 
                    }}
                >
                    {data.map((dest, index) => (
                        <div
                            key={index}
                            style={{ 
                                width: widthCalc,
                                backgroundImage: dest.img.includes('url(') ? dest.img.match(/\((.*?)\)/)?.[1] : `url(${dest.img})` 
                            }}
                            className="h-142.5 max-[640px]:h-87.75 max-[530px]:h-80 transition-all duration-300 hover:-translate-y-5 shrink-0 relative rounded-3xl overflow-hidden shadow-xl bg-cover bg-center"
                        >
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DestinationGallery;
