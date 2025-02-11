import React from 'react';
import { useParams } from 'react-router-dom';
import { PlayCircle, Heart, Star } from 'lucide-react';

const GenreWiseMoviesNShows = () => {
    const { genre } = useParams();
    const genreName = genre[0].toUpperCase() + genre.slice(1);

    const handleCardClick = (movieId) => {
        window.open(`/moviedetails/${movieId}`, '_blank');
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-base-200 to-base-100">
            {/* Header Section */}
            <header className="bg-gradient-to-r from-primary to-accent text-primary-content py-16">
                <div className="container mx-auto px-4">
                    <div className="breadcrumbs text-sm mb-4">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/genres">Genres</a></li>
                            <li>{genreName}</li>
                        </ul>
                    </div>
                    <h1 className="text-5xl font-bold mb-4 animate-fade-in-up">
                        {genreName} Entertainment
                    </h1>
                    <p className="text-xl opacity-90">Explore our curated collection of {genreName.toLowerCase()} movies and shows</p>
                </div>
            </header>

            {/* Movies Grid */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {Array(12).fill(0).map((_, index) => (
                        <div key={index} className="card bg-base-100 shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl" onClick={() => handleCardClick(index)}>
                            <figure className="relative">
                                <img
                                    src="https://images.pexels.com/photos/302820/pexels-photo-302820.jpeg"
                                    alt="Movie Poster"
                                    className="w-full h-64 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <button className="absolute bottom-4 right-4 btn btn-circle btn-primary">
                                        <PlayCircle size={24} />
                                    </button>
                                </div>
                            </figure>
                            <div className="card-body p-4">
                                <div className="flex items-start justify-between">
                                    <h2 className="card-title text-lg">
                                        Movie Title
                                        <div className="badge badge-secondary">NEW</div>
                                    </h2>
                                    <button className="btn btn-ghost btn-sm">
                                        <Heart size={20} className="text-red-500" />
                                    </button>
                                </div>

                                <div className="flex items-center gap-1 mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="text-yellow-400 fill-current" />
                                    ))}
                                    <span className="text-sm ml-2">(4.5)</span>
                                </div>

                                <p className="text-sm text-gray-500 line-clamp-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quisquam, voluptatum.
                                </p>

                                <div className="card-actions justify-end mt-3">
                                    <div className="badge badge-outline">Action</div>
                                    <div className="badge badge-outline">Adventure</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="join mt-12 flex justify-center">
                    <button className="join-item btn btn-active">1</button>
                    <button className="join-item btn">2</button>
                    <button className="join-item btn">3</button>
                    <button className="join-item btn">4</button>
                </div>
            </div>
        </div>
    );
};

export default GenreWiseMoviesNShows;