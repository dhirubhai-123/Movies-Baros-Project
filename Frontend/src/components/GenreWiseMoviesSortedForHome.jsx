import React from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Genre_Card_Home from './Genre_Card_Home';

const GenreWiseMoviesSortedForHome = ({ genreName, movies, handleCardClick, handleAllCardClick }) => {

    const scrollLeft = () => {
        scrollRef.current.scrollBy({
            left: -300, // Adjust scroll distance as needed
            behavior: 'smooth',
        });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({
            left: 300, // Adjust scroll distance as needed
            behavior: 'smooth',
        });
    };

    return (
        <div className='w-full px-2'>
            <div className='text-xl sm:text-lg md:text-2xl lg:text-3xl px-4 text-white font-semibold text-center flex justify-between items-center'>
                {genreName}
                <div className='flex justify-between items-center space-x-2'>
                    <div className="hover:animate-pulse cursor-pointer">
                        <ArrowLeft size={32} className="text-blue-500" onClick={scrollLeft} />
                    </div>
                    <div className="hover:animate-pulse cursor-pointer">
                        <ArrowRight size={32} className="text-blue-500" onClick={scrollRight} />
                    </div>
                </div>
            </div>
            <div className="flex overflow-x-auto space-x-4 p-4 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
                {movies.map((movie) => (
                    <Genre_Card_Home
                        genrePoster={movie.moviePoster}
                        movieName={movie.movieName}
                        key={movie._id}
                        movieId={movie._id}
                        onClick={() => handleCardClick(movie._id)}
                    />
                ))}
                <Genre_Card_Home onClick={handleAllCardClick} />
            </div>
        </div>
    )
}

export default GenreWiseMoviesSortedForHome