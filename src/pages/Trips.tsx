import TripPlanners, { tripPlannersBgs } from "../components/TripPlanners"

export const Trips = () => {
    return (
        <div id="trips" className="flex flex-col items-center mt-60">
            <div className="w-350 max-[1440px]:w-272 max-[1120px]:w-3xl max-[800px]:w-120 max-[530px]:w-72 mx-auto flex max-[1120px]:flex-col h-full gap-10">
                <div className="flex flex-col text-white ">
                    <div className="flex flex-col min-[1440px]:w-110 max-[1440px]:w-110 max-[1120px]:w-3xl max-[800px]:w-120 max-[530px]:w-72">
                        <h2 className="text-[54px] max-[800px]:text-[45px] max-[640px]:text-[40px] font-bold leading-tight">
                            Trip Planners
                        </h2>
                        <div className="w-58 h-1 bg-white my-6" />
                        <p className="text-lg opacity-80 mb-8">
                            20 years from now you will be more disappointed by the things that you didn’t do. Stop regretting and start travelling, start throwing off the bowlines.
                        </p>
                    </div>
                    <div className="ml-10 relative hover:scale-105 hover:brightness-125 transition-all duration-300 cursor-pointer ">
                        <img src="./images/view-trip-plans.svg" alt="View all trip plans" />
                        <p className="absolute top-8 left-10">View all trip plans</p>
                    </div>
                </div>
                <TripPlanners data={tripPlannersBgs} />
            </div>
        </div>
    )
}