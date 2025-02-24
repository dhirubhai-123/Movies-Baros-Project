import React, { useEffect, useState } from 'react'
import LoaderComponent from '../components/LoaderComponent'
import { useAuthStore } from '../Store/useAuthStore';
import { useParams } from 'react-router-dom';

const MoviesFromPlayList = () => {

    const [processing, updateProcessing] = useState(true);
    const { playListName } = useParams();

    const { authUser, getContentFromPlayList, showsFromPlayList, moviesFromPlayList,
        getShowsByIds, getMoviesByIds, showsByIds, moviesByIds, removeFromPlayList } = useAuthStore();

    useEffect(() => {
        console.log(showsFromPlayList, moviesFromPlayList)
        if (showsFromPlayList && showsFromPlayList.length !== 0) {
            async function func() {
                const showsFromPlayListString = showsFromPlayList.map((item) => item.toString());
                await getShowsByIds({ showIds: showsFromPlayListString });
            }
            func();
        }

        if (moviesFromPlayList && moviesFromPlayList.length !== 0) {
            console.log("movieIds:", moviesFromPlayList);
            async function func() {
                const moviesFromPlayListString = moviesFromPlayList.map((item) => item.toString());
                await getMoviesByIds({ movieIds: moviesFromPlayListString });
            }
            func();
        }
    }, [showsFromPlayList, moviesFromPlayList]);

    // useEffect(()=>{
    //     const func = async () =>{
    //         await getContentFromPlayList()
    //     }
    //     func();
    // })

    const handleClickRemoveMovie = (type, itemId) => {
       
        // type, userId, mediaId, playListName
        if (authUser && type && itemId && playListName) {
            const userId = authUser._id;
            const func = async () => {
                await removeFromPlayList({ playListName, type, userId, mediaId: itemId });
            }
            func();
        }
    }


    // useEffect(() => {
    //     console.log("useEffect", moviesByIds, showsByIds)
    // }, [moviesByIds, showsByIds])



    const handleMovieCardClick = (movieId) => {
        window.open(`/moviedetails/${movieId}`, '_blank');
    }

    const handleShowCardClick = (showId) => {
        window.open(`/showdetails/${showId}`, '_blank');
    }

    // if (processing) {
    //     return <LoaderComponent />
    // }

    return (
        <div className="min-h-screen bg-gradient-to-b from-base-200 to-base-100">

            <header className="bg-gradient-to-r from-primary to-accent text-primary-content py-8">
                <div className="container mx-auto px-2">
                    <div className="breadcrumbs text-sm">
                        <ul className=''>
                            <li className='text-lg mt-6 md:my-0'><a href="/">Home</a></li>
                        </ul>
                    </div>
                    <h1 className="text-5xl font-bold mb-4 animate-fade-in-up">
                        {playListName}
                    </h1>
                    <p className="text-xl opacity-90">Explore our curated collection of movies.</p>
                </div>
            </header>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {/* these section will shows to user if there are no movies and shows in playlist. */}
                    {
                        moviesFromPlayList &&
                        showsFromPlayList &&
                        moviesFromPlayList.length === 0 &&
                        showsFromPlayList.length === 0 && (
                            <div className="text-white text-center flex flex-col justify-center items-center font-serif">
                                <div className="text-3xl text-slate-300 my-4">
                                    No Movies or Shows Found!
                                </div>

                                <div className="text-xl my-2">
                                    Add them from here:
                                </div>

                                <div className="space-x-6 mt-4">
                                    <a
                                        href="/movies"
                                        className="hover:border-b hover:border-blue-500 hover:text-blue-500 transition duration-300 text-blue-300"
                                    >
                                        Movies
                                    </a>
                                    <a
                                        href="/shows"
                                        className="hover:border-b hover:border-blue-500 hover:text-blue-500 transition duration-300
                                        text-blue-300"
                                    >
                                        Shows
                                    </a>
                                </div>
                            </div>
                        )
                    }


                    {
                        moviesByIds && moviesByIds.length !== 0 &&
                        moviesByIds.map((item, index) => {

                            return (
                                <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700"
                                    key={index}
                                    onClick={() => handleMovieCardClick(item._id)}
                                >
                                    <a href="#">
                                        <img className="rounded-t-lg p-8" src={item.moviePoster} alt="product image" />
                                    </a>
                                    <div className="px-5 pb-5">
                                        <a href="#">
                                            <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">{item.movieName}</h3>
                                        </a>
                                        <div className="flex items-center mt-2.5 mb-5">
                                            <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                </path>
                                            </svg>
                                            <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                </path>
                                            </svg>
                                            <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                </path>
                                            </svg>
                                            <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                </path>
                                            </svg>
                                            <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                </path>
                                            </svg>
                                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{item.movieMovieBarosRating}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-3xl font-bold text-gray-900 dark:text-white">{`${item.movieRunTime} Mins ${item.movieVerdict}`}</span>
                                            <a href="#"
                                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    const type = "movie"
                                                    handleClickRemoveMovie(type, item._id);
                                                }
                                                }
                                            >Remove</a>
                                        </div>
                                    </div>
                                </div>
                            )

                        })
                    }

                    {
                        showsByIds && showsByIds.length > 0 &&
                        showsByIds.map((item, index) => {
                            return (
                                <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700"
                                    key={index}
                                    onClick={() => handleShowCardClick(item._id)}
                                >
                                    <a href="#">
                                        <img className="rounded-t-lg p-8" src="https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp" alt="product image" />
                                    </a>
                                    <div className="px-5 pb-5">
                                        <a href="#">
                                            <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">{item.showName}</h3>
                                        </a>
                                        <div className="flex items-center mt-2.5 mb-5">
                                            <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                </path>
                                            </svg>
                                            <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                </path>
                                            </svg>
                                            <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                </path>
                                            </svg>
                                            <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                </path>
                                            </svg>
                                            <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                </path>
                                            </svg>
                                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{item.showMovieBarosRating}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-3xl font-bold text-gray-900 dark:text-white">{`${item.showRunTime} mins ${item.showVerdict}`}</span>
                                            <a href="#"
                                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    const type = "show"
                                                    handleClickRemoveMovie(type, item._id);
                                                }
                                                }
                                            >Remove</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })

                    }

                </div>
            </div>
        </div>
    )
}

export default MoviesFromPlayList