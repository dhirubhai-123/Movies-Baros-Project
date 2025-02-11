import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthStore } from '../Store/useAuthStore.js';
import LoaderComponent from "../components/LoaderComponent.jsx";
import { ExternalLink } from 'lucide-react';

const MoviesDetails = () => {
    const { movieId } = useParams();
    const { detailsOfMovie, getMovieDetails, relatedYoutubeVideos } = useAuthStore();
    const [timer, updateTimer] = useState(false);

    const capitalizePlatform = (platform) => {
        return platform.charAt(0).toUpperCase() + platform.slice(1);
    };

    const extractPlatformFromURL = (url) => {
        const regex = /(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9-]+)\.com/;
        const match = url.toLowerCase().match(regex);
        if (match) {
            return capitalizePlatform(match[1]); // match[1] contains the domain name
        }
        return "Unknown Platform";
    };

    useEffect(() => {
        getMovieDetails(movieId);
    }, [movieId]);

    useEffect(() => {
        setTimeout(() => {
            updateTimer(true)
        }, 8000)
    })


    if (!detailsOfMovie && !timer) {
        return <LoaderComponent />;
    }

    if (!detailsOfMovie && timer) {
        return <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-pink-200 via-pink-300 to-pink-500">
            <div className="text-center">
                <div className="text-4xl font-semibold text-white mb-4">
                    <h2>
                        <div>
                            Movie Not found ID -
                        </div>
                        <div>
                            {movieId}
                        </div>
                    </h2>
                </div>
                {/* <div className="bg-white text-center p-6 rounded-lg shadow-xl max-w-sm mx-auto"> */}
                <p className="text-xl text-gray-700 mb-4 max-w-sm mx-auto">
                    We're sorry, we couldn't find the movie you're looking for.
                    Please check the movie ID or try again later.
                </p>
                {/* <button className="btn btn-outline btn-pink max-w-1/2 mt-4">
                    Go Back
                </button> */}
                {/* </div> */}
            </div>
        </div>
    }

    return (
        <div className="container mx-auto p-4 md:p-8 lg:max-w-7xl">
            {/* Main Card */}
            <div className="card lg:card-side bg-base-100 shadow-xl">
                {/* Poster */}
                <figure className="md:flex-1">
                    <img
                        src={detailsOfMovie.moviePoster}
                        alt={detailsOfMovie.movieName}
                        className="w-full h-96 md:h-[600px] object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                    />
                </figure>

                {/* Content */}
                <div className="card-body md:flex-1 p-4 md:p-8 space-y-6">
                    {/* Title Section */}
                    <div className="space-y-4">
                        <h1 className="text-3xl md:text-4xl font-bold text-primary">
                            {detailsOfMovie.movieName}
                        </h1>
                        <p className="text-gray-600 text-lg">
                            {detailsOfMovie.movieDescription}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm">
                            <div className="badge badge-accent badge-lg">
                                {new Date(detailsOfMovie.movieReleaseDate).toLocaleDateString()}
                            </div>
                            <div className="badge badge-secondary badge-lg">
                                {detailsOfMovie.movieVerdict}
                            </div>
                            <div className="badge badge-info badge-lg">
                                {detailsOfMovie.movieLanguage}
                            </div>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Ratings */}
                        <div className="stats shadow">
                            <div className="stat">
                                <div className="stat-title">Baros Rating</div>
                                <div className="stat-value text-primary">
                                    {detailsOfMovie.movieMovieBarosRating}
                                </div>
                            </div>
                        </div>

                        <div className="stats shadow">
                            <div className="stat">
                                <div className="stat-title">IMDB Rating</div>
                                <div className="stat-value text-secondary">
                                    {detailsOfMovie.movieImdbRating}
                                </div>
                            </div>
                        </div>

                        <div className="stats shadow">
                            <div className="stat">
                                <div className="stat-title">Rotten Tomatoes</div>
                                <div className="stat-value text-accent">
                                    {detailsOfMovie.movieRottenTomatoesRating}%
                                </div>
                            </div>
                        </div>

                        {/* Runtime & Age */}
                        <div className="stats shadow">
                            <div className="stat">
                                <div className="stat-title">Runtime</div>
                                <div className="stat-value">
                                    {detailsOfMovie.movieRunTime}min
                                </div>
                                <div className="stat-title">Age Rating</div>
                                <div className="stat-desc text-lg">
                                    {detailsOfMovie.movieAgeRating}+
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Genres */}
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold">Genres</h3>
                        <div className="flex flex-wrap gap-2">
                            {Object.values(detailsOfMovie.movieGenre).map((genre, index) => (
                                <div key={index} className="badge badge-outline badge-lg">
                                    {genre}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Cast & Crew */}
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-base-200 p-4 rounded-lg">
                                <h4 className="font-bold text-lg mb-2">Director</h4>
                                <p>{detailsOfMovie.movieDirector}</p>
                            </div>
                            <div className="bg-base-200 p-4 rounded-lg">
                                <h4 className="font-bold text-lg mb-2">Star Cast</h4>
                                <ul className="list-disc pl-4">
                                    {Object.values(detailsOfMovie.movieStarCast).map((member, index) => (
                                        <li key={index} className="text-sm">{member}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-base-200 p-4 rounded-lg">
                                <h4 className="font-bold text-lg mb-2">Crew Cast</h4>
                                <ul className="list-disc pl-4">
                                    {Object.values(detailsOfMovie.movieCrewCast).map((member, index) => (
                                        <li key={index} className="text-sm">{member}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Watch Links */}
                    <div className="flex flex-wrap gap-4">
                        {Object.values(detailsOfMovie.movieWatchLinks).map((link, index) => (
                            link.trim() !== "NA" && (
                                <a
                                    key={index}
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary gap-2"
                                >
                                    <ExternalLink size={18} />
                                    {extractPlatformFromURL(link)} {/* Display the platform name dynamically */}
                                </a>
                            )
                        ))}
                    </div>

                    {/* Related Youtube Videos */}
                    <div className="flex flex-wrap gap-4">
                        {
                            !Array.isArray(relatedYoutubeVideos) || relatedYoutubeVideos.length === 0 ? (
                                <div className='mx-auto animate-bounce'>Finding Related YouTube videos...</div>
                            ) : (
                                <div className="flex overflow-x-auto space-x-4 scrollbar-none">
                                    {relatedYoutubeVideos.map((item, index) => (
                                        <div key={index} className="flex-shrink-0">
                                            <img
                                                src={item.thumbnail}
                                                alt={item.title}
                                                className="w-48 h-28 object-cover rounded-lg"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )
                        }
                    </div>


                    {/* Trailer */}
                    <div className="mt-4">
                        <a
                            href={detailsOfMovie.movieTrailer}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-accent btn-block"
                        >
                            <ExternalLink className="mr-2" size={18} />
                            Watch Trailer
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoviesDetails;