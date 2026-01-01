import { SpecialOffer, specialOffers } from "../components/SpecialOffer"

interface SpecialOffer {
    name: string;
    stars: React.ReactNode;
    img: string;
    description: string;
    price: React.ReactNode;
}

export const Offers = () => {
   
    return (
        <div className="w-full flex flex-col items-center mt-25">
            <div className="w-350 max-[640px]:w-[288px] container mx-auto flex flex-col items-center h-full gap-10">
                <div className="flex flex-col text-white ">
                    <div className="max-[640px]:ml-5 max-[640px]:mr-0 mr-8 flex flex-col items-end max-[640px]:items-start">
                        <h2 id="offer" className="text-[54px] max-[800px]:text-[45px] max-[640px]:text-[40px] font-bold leading-tight mt-20">
                            Special Offer
                        </h2>
                        <div className="w-80 max-[640px]:w-65 h-1 bg-white my-6" />
                        <p className="text-[24px] opacity-80 mb-12">
                            Check out our special offer and discounts.
                        </p>
                    </div>
                    <SpecialOffer data={specialOffers} />
                </div>
            </div>
        </div>
    )
}