import React from 'react'

const PlayLists = ({ playLists }) => {
    return (
        <div>
            <header className="text-white bg-base-200 p-6 rounded-lg shadow-md flex items-center justify-between">
                {/* Title */}
                <h1 className="text-3xl font-bold text-primary">Your Playlists</h1>
            </header>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {Array(8).fill(0).map((item, index) => (
                        <div key={index} className="card bg-base-100 shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:cursor-pointer" onClick={() => handleMovieCardClick(item._id)}>
                            <figure className="relative">
                                <img
                                    src="https://res.cloudinary.com/dzsvbfzti/image/upload/v1738873325/MoviesBaros%20Images/dzqml1dvqybfrj6ua6pm.jpg"
                                    alt="Movie Poster"
                                    className="w-full h-64 object-cover"
                                />

                            </figure>
                            <div className="card-body p-4">
                                <div className="flex items-start justify-between">
                                    <h2 className="card-title text-lg">
                                        PlayList Name {index+1}

                                    </h2>

                                </div>


                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default PlayLists;