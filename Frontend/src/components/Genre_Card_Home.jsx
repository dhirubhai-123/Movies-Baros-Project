import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Genre_Card_Home = ({ genrePoster, movieName, movieId, onClick }) => {

    const navigate = useNavigate();

    return (
        <div className="card glass min-w-60 sm:w-80 lg:w-100  hover:shadow-slate-700 hover:shadow-lg hover:scale-105 hover:cursor-pointer"
        >
            <figure className="relative" onClick={onClick}>
                <img
                    src={genrePoster ? genrePoster : 'https://res.cloudinary.com/dzsvbfzti/image/upload/v1738873325/MoviesBaros%20Images/dzqml1dvqybfrj6ua6pm.jpg'}
                    alt={movieName}
                    className="w-full h-56 object-cover rounded-t-lg" // Ensuring image aspect ratio is fixed and responsive
                />
            </figure>
            <div className="card-body p-4 md:px-8 lg:px-12">

                <div className="overflow-hidden">
                    <button className="btn btn-primary w-full mt-4 truncate hover:scale-110 " >
                        {movieName ? movieName : "Watch All"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Genre_Card_Home;
