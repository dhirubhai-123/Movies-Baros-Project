import React, { useEffect, useState } from 'react'
import { useAuthStore } from '../Store/useAuthStore';
import LoaderComponent from '../components/LoaderComponent';
import { PlayCircle, Heart, Star } from 'lucide-react';
import SearchBar from '../components/SearchBar';

const Movies = () => {

  const { getMoviesForHome, moviesForHome, sortFilter } = useAuthStore();
  const [loading, updateLoading] = useState(false);
  const sort = []

  useEffect(() => {

    try {
      updateLoading(true);

      async function func() {
        await getMoviesForHome();
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

  const handleMovieCardClick = (movieId) => {
    window.open(`/moviedetails/${movieId}`, '_blank');
  }

  if (!moviesForHome || loading) {
    return (<LoaderComponent />)
  }

  return (

    <div className="min-h-screen bg-gradient-to-b from-base-200 to-base-100">
      {/* <SearchBar /> */}
      {/* Header Section */}
      <header className="bg-gradient-to-r from-primary to-accent text-primary-content py-8">
        <div className="container mx-auto px-2">
          <div className="breadcrumbs text-sm">
            <ul className='flex flex-col justify-between md:flex-row '>
              <li className='text-lg mt-6 md:my-0'><a href="/">Home</a></li>
              <SearchBar />
              {/* <li>Genres</li> */}
              {/* <li>{genreName}</li> */}
            </ul>
          </div>
          <h1 className="text-5xl font-bold mb-4 animate-fade-in-up">
            Movies
          </h1>
          <p className="text-xl opacity-90">Explore our curated collection of movies.</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {
            moviesForHome.map((item, index) => (
              <div key={index} className="card bg-base-100 shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:cursor-pointer" onClick={() => handleMovieCardClick(item._id)}>
                <figure className="relative">
                  <img
                    src={item.moviePoster}
                    alt="Movie Poster"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <button className="absolute bottom-4 right-4 btn btn-circle btn-primary">
                      <PlayCircle size={24}
                        onClick={(e) => {
                          e.stopPropagation();
                          roundButtonClicked(item.movieTrailer)
                        }
                        }
                      />
                    </button>
                  </div>
                </figure>
                <div className="card-body p-4">
                  <div className="flex items-start justify-between">
                    <h2 className="card-title text-lg">
                      {item.movieName}
                      <div className="badge badge-secondary">{item.movieVerdict}</div>
                    </h2>
                    <button className="btn btn-ghost btn-sm">
                      <Heart size={20} className="text-red-500" />
                    </button>
                  </div>

                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                    <span className="text-sm ml-2">{item.movieMovieBarosRating}</span>
                  </div>

                  <p className="text-sm text-gray-500 line-clamp-3">
                    {item.movieDescription}
                  </p>

                  <div className="card-actions justify-end mt-3">
                    <div className="badge badge-outline">{item.movieGenre.genre1}</div>
                    <div className="badge badge-outline">{item.movieGenre.genre2}</div>
                    <div className="badge badge-outline">{item.movieGenre.genre3}</div>
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

export default Movies;