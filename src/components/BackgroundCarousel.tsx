import { useState, useEffect } from 'react';

const homeBackgrounds = [
    'bg-[url(/images/praia.jpg)]',
    'bg-[url(/images/dubai.jpg)]',
    'bg-[url(/images/italia.jpg)]',
    'bg-[url(/images/toquio.jpg)]',
    'bg-[url(/images/roma.jpg)]'
]

const BackgroundCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const [selected, setSelected] = useState('');

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === homeBackgrounds.length - 1 ? 0 : prevIndex + 1
        );
    };


    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            {homeBackgrounds.map((bgClass, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        } ${bgClass}`}
                />
            ))}

            <div className="absolute inset-0 bg-black/30" />

            <div className="h-250 relative z-10 flex flex-col items-center justify-center text-white  max-[640px]:mb-50">
                <h1 className="text-7xl max-[768px]:text-[54px] max-[640px]:mt-50 text-center font-bold flex flex-wrap">Explore the world</h1>
                <p className="mt-4 text-[24px] max-[410px]:text-[20px] text-center flex flex-wrap mb-25">Your next journey start with us.</p>
                <div className="absolute h-35 w-250 max-[640px]:w-[288px] bg-neutral-blue left-0 bottom-20 flex rounded-r-[20px] max-[640px]:rounded-2xl items-center max-[999px]:w-160 max-[640px]:flex max-[640px]:h-90 max-[640px]:flex-col max-[640px]:static">
                    <div className="w-205 flex items-center ml-20 max-[640px]:ml-0 text-neutral-very-dark-blue gap-8 max-[640px]:flex-col">
                        <div className="flex gap-10 max-[999px]:flex-col max-[999px]:gap-2">
                            <div className="max-[640px]:mt-5" >
                                <p className="text-[16px] opacity-60">DESTINATION</p>
                                <input className="text-[20px] border-b-2 w-35 max-[640px]:w-62  outline-none" type="text" placeholder="Dubai" />
                            </div>
                            <div>
                                <p className="text-[16px] opacity-60">PERSON</p>
                                <select value={selected} onChange={(e) => setSelected(e.target.value)}
                                    className="max-[640px]:w-62 text-[18px] border-b-2 w-30 outline-none pb-1.5" >
                                    <option value="" className="text-black">Quantas pessoas?</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex gap-10 max-[999px]:flex-col max-[999px]:gap-2 ">
                            <div>
                                <p className="text-[16px] opacity-60">CHECK IN</p>
                                <select value={selected} onChange={(e) => setSelected(e.target.value)}
                                    className="max-[640px]:w-62 text-[18px] border-b-2 w-45 outline-none pb-1.5" >
                                    <option value="sun-17-sep-2026">Sun, 17th Sep 2025</option>
                                </select>
                            </div>
                            <div>
                                <p className="text-[16px] opacity-60">CHECK OUT</p>
                                <select value={selected} onChange={(e) => setSelected(e.target.value)}
                                    className="max-[640px]:w-62 text-[18px] border-b-2 w-45 outline-none pb-1.5" >
                                    <option value="sun-17-oct-2026">Sun, 17th Oct 2025</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <button className="max-[640px]:my-15 max-[640px]:w-72 max-[640px]:rounded-t-none max-[640px]:rounded-b-2xl cursor-pointer bg-neutral-very-dark-blue h-35 w-45 rounded-r-[20px] text-4xl flex items-center pl-5 gap-3">
                        <div className="max-[640px]:h-32 flex flex-col max-[640px]:flex-row max-[640px]:gap-3 items-center">
                            <p>Book</p>
                            <p>Now</p>
                        </div>
                        <p className="max-[640px]:ml-10">→</p>
                    </button>
                </div>
            </div>

            <div className="absolute right-5 top-1/2 max-[640px]:top-1/3 -translate-y-1/2 z-20 flex flex-col gap-3">
                {homeBackgrounds.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 border-white/50 ${index === currentIndex ? 'bg-white h-10 w-2' : 'bg-white/30 h-2 w-2'
                            }`}
                        aria-label={`Ir para slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default BackgroundCarousel