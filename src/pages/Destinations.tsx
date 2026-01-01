import DestinationsCarousel, { destineBackgrounds } from "../components/DestinationsCarousel"

interface DestinationsCarousel {
    name: string;
    img: string;
    local: string;
}

export const Destinations = () => {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-350 max-[1120px]:w-3xl max-[640px]:w-[288px] max-[800px]:w-120 container mx-auto px-10 flex flex-col items-center h-full gap-10">
                <div className="flex flex-col text-white ">
                    <div className="ml-5 mb-10">
                        <h2 id="explore" className="text-[54px] max-[800px]:text-[45px] max-[640px]:text-[40px] font-bold leading-tight mt-40 max-[640px]:mt-25">
                            Popular Destinations
                        </h2>
                        <div className="w-80 max-[640px]:w-60 h-1 bg-white my-6" />
                        <p className="text-[24px] opacity-80 max-[640px]:mb-5">
                            Most popular destinations around the world, from historical places to natural wonders.
                        </p>
                    </div>
                    <DestinationsCarousel data={destineBackgrounds} />
                </div>
            </div>
        </div>
    )
}