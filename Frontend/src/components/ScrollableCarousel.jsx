import React, { useEffect, useRef } from 'react';

const ScrollableCarousel = ({ mostRatedGoats, handleCardClick }) => {
    const scrollRef = useRef(null);

    const scrollRight = () => {
        if (scrollRef.current) {
            const distanceToEnd = scrollRef.current.scrollWidth - scrollRef.current.scrollLeft - scrollRef.current.clientWidth;
            if (distanceToEnd <= 50) {
                scrollRef.current.scrollLeft = 0;
            } else {
                scrollRef.current.scrollBy({
                    left: 150,
                    behavior: 'smooth',
                });
            }
        }
    };

    useEffect(() => {
        console.log("most rated goats from Scrollable carousel", mostRatedGoats);
        const interval = setInterval(() => {
            scrollRight();
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col border-slate-800 m-auto p-auto" >
            <h1 className="flex justify-center items-center py-5 lg:px-20 md:px-10 px-5 font-bold text-4xl text-primary/80">
                Most Rated Goats
            </h1>
            <div className="flex overflow-x-scroll pb-10 hide-scroll-bar" style={{ msOverflowStyle: "none", scrollbarWidth: "none" }} ref={scrollRef}>
                <div className="flex flex-nowrap lg:ml-10 md:ml-5 ml-2">
                    {mostRatedGoats.map((movie) => (
                        <div className="relative inline-block px-3" key={movie._id} onClick={() => handleCardClick(movie._id)} >
                            <div className="w-64 h-80 max-w-xs overflow-hidden rounded-lg shadow-md border border-slate-600 hover:shadow-xl hover:cursor-pointer transition-shadow duration-300 ease-in-out">
                                <div className="h-2/3 w-full overflow-hidden">
                                    <img src={`${movie.moviePoster}`} alt="img" className="object-contain max-h-full max-w-full relative aspect-auto" />
                                </div>
                                <div className="h-1/3 font-semibold flex items-center justify-center flex-col">
                                    <h2 className="text-xl">{movie.movieName}</h2>
                                    <span className='pl-1 text-xs text-yellow-200'>({movie.movieImdbRating})</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                .hide-scroll-bar::-webkit-scrollbar {
                    display: none;  /* Safari and Chrome */
                }
            `}</style>
        </div>
    );
};

export default ScrollableCarousel;
