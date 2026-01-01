import DestinationGallery, { galleryBackground } from "../components/DestinationGallery"

export const Gallery = () => {
    return (
        <div className="mt-25">
            <div className="flex items-center">
                <div className="w-full flex flex-col">
                    <div className="ml-5 mb-10">
                        <h2 className="text-[54px] max-[800px]:text-[45px] max-[640px]:text-[40px] font-bold leading-tight mt-20 max-[530px]:w-72">
                            Destination Gallery
                        </h2>
                        <div className="w-65 h-1 bg-white my-6" />
                        <p className="text-lg opacity-80">
                            Our photo gallery on trip.
                        </p>
                    </div>
                    <DestinationGallery data={galleryBackground} />
                </div>
            </div>
        </div>
    )
}