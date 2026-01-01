import { travelerExp, TravelerExperiences } from "../components/TravelerExperiences"

export const Experiences = () => {
    return (
        <div className="w-full flex flex-col items-center mt-25">
            <div className="w-350 max-[1440px]:w-272 max-[1120px]:w-3xl max-[800px]:w-120 max-[530px]:w-72 mx-auto flex flex-col items-center h-full gap-10">
                <div className="w-full flex flex-col flex-1 text-white mb-40">
                    <div className="flex flex-col">
                        <h2 className="text-[54px] max-[800px]:text-[45px] max-[640px]:text-[40px] font-bold leading-tight mt-20">
                            Traveler’s Experiences
                        </h2>
                        <div className="w-80 max-[640px]:w-60 max-[] h-1 bg-white my-6" />
                        <p className="text-lg opacity-80 mb-12">
                            Here some awesome feedback from our travelers
                        </p>
                    </div>
                    <TravelerExperiences data={travelerExp} />
                </div>
            </div>
        </div>
    )
}