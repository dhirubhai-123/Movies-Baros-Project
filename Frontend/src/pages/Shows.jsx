import React, { useEffect, useState } from 'react'
import { useAuthStore } from '../Store/useAuthStore';
import LoaderComponent from '../components/LoaderComponent';
import { PlayCircle, Heart, Star } from 'lucide-react';

const Shows = () => {

    const { getShowsForHome, showsForHome } = useAuthStore();
    const [loading, updateLoading] = useState(false);

    useEffect(() => {

        try {
            updateLoading(true);

            async function func() {
                await getShowsForHome();
                // console.log(moviesForHome, dramaMovies)
            }
            func();
        } catch (error) {
            toast.error(error.message);
        }
        finally {
            updateLoading(false);
        }
    }, [])

    const roundButtonClicked = (url) => {
        window.open(url, '_blank');
    }

    const handleMovieCardClick = (showId) => {
        window.open(`/showdetails/${showId}`, '_blank');
    }

    if (!showsForHome) {
        return (<LoaderComponent />)
    }

    return (

        <div className="min-h-screen bg-gradient-to-b from-base-200 to-base-100">
            {/* Header Section */}
            <header className="bg-gradient-to-r from-primary to-accent text-primary-content py-16">
                <div className="container mx-auto px-4">
                    <div className="breadcrumbs text-sm mb-4">
                        <ul className=''>
                            <li className='text-lg'><a href="/">Home</a></li>
                            {/* <li>Genres</li> */}
                            {/* <li>{genreName}</li> */}
                        </ul>
                    </div>
                    <h1 className="text-5xl font-bold mb-4 animate-fade-in-up">
                        Shows
                    </h1>
                    <p className="text-xl opacity-90">Explore our curated collection of shows.</p>
                </div>
            </header>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {
                        showsForHome.map((item, index) => (
                            <div key={index} className="card bg-base-100 shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:cursor-pointer" onClick={() => handleMovieCardClick(item._id)}>
                                <figure className="relative">
                                    <img
                                        src={item.showPoster}
                                        alt="Movie Poster"
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                                        <button className="absolute bottom-4 right-4 btn btn-circle btn-primary">
                                            <PlayCircle size={24}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    roundButtonClicked(item.showTrailer)
                                                }
                                                }
                                            />
                                        </button>
                                    </div>
                                </figure>
                                <div className="card-body p-4">
                                    <div className="flex items-start justify-between">
                                        <h2 className="card-title text-lg">
                                            {item.showName}
                                            <div className="badge badge-secondary">{item.showVerdict}</div>
                                        </h2>
                                        <button className="btn btn-ghost btn-sm">
                                            <Heart size={20} className="text-red-500" />
                                        </button>
                                    </div>

                                    <div className="flex items-center gap-1 mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={16} className="text-yellow-400 fill-current" />
                                        ))}
                                        <span className="text-sm ml-2">{item.showMovieBarosRating}</span>
                                    </div>

                                    <p className="text-sm text-gray-500 line-clamp-3">
                                        {item.showDescription}
                                    </p>

                                    <div className="card-actions justify-end mt-3">
                                        <div className="badge badge-outline">{item.showGenre.genre1}</div>
                                        <div className="badge badge-outline">{item.showGenre.genre2}</div>
                                        <div className="badge badge-outline">{item.showGenre.genre3}</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Shows;