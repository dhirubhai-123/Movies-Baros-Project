import React, { useEffect, useState } from 'react'
import { useAuthStore } from '../Store/useAuthStore';
import LoaderComponent from '../components/LoaderComponent';
import { PlayCircle, Heart, Star } from 'lucide-react';

const Shows = () => {

    const { getShowsForHome, showsForHome, authUser, getAllPlayLists, addToPlayList, playLists } = useAuthStore();

    const [loading, updateLoading] = useState(false);

    const [showPlayLists, updateShowPlayLists] = useState(false);
    const [userSelectedPlayListName, updateUserSelectedPlayListName] = useState('');
    const [showId, updateShowId] = useState(null);

    useEffect(() => {

        try {
            updateLoading(true);
            if (authUser) {
                const userId = authUser._id;
                async function func() {
                    await getShowsForHome({ userId });
                    await getAllPlayLists({ userId });
                }
                func();
            }
        } catch (error) {
            toast.error(error.message);
        }
        finally {
            updateLoading(false);
        }
    }, [])

    const handleAddToPlayList = (showId, userSelectedPlayListName) => {
        const type = "show";
        if (showPlayLists && userSelectedPlayListName.trim() !== '') { // Fixed condition here
            const func = async () => {
                if (authUser) {
                    const userId = authUser._id;
                    
                    await addToPlayList({ userId, type, mediaId: showId, playListName: userSelectedPlayListName });
                    // console.log("Adding to Playlist:", userId, type, showId, userSelectedPlayListName);
                }
            };
            func();
        } else {
            console.error("Playlist name is empty or invalid.");
        }
    };

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

                    {showPlayLists && (
                        <div
                            data-dialog-backdrop="web-3-modal"
                            data-dialog-backdrop-close="true"
                            className="fixed inset-0 z-[999] grid h-full w-full place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300 overflow-scroll"
                        >
                            <div
                                className="relative m-4 rounded-lg bg-white shadow-sm"
                                data-dialog="web-3-modal"
                            >
                                <div className="flex items-start justify-between p-4">
                                    <div>
                                        <h5 className="text-xl font-medium text-slate-800">
                                            Select Playlist
                                        </h5>
                                    </div>
                                    <button
                                        data-ripple-dark="true"
                                        data-dialog-close="true"
                                        className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        type="button"
                                    >
                                        <span
                                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
                                            onClick={() => updateShowPlayLists(false)}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                className="h-5 w-5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6 18L18 6M6 6l12 12"
                                                ></path>
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                                <div className="relative px-4">
                                    <div className="mb-6 grid grid-cols-1 md:grid-col-2 lg:grid-cols-3">
                                        {
                                            playLists && playLists.map((item, index) => {
                                                return (
                                                    <button
                                                        className="w-full mt-3 rounded-md flex items-center justify-center border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                                        type="button"
                                                        key={index}
                                                        onClick={() => {
                                                            updateShowPlayLists(false);
                                                            updateUserSelectedPlayListName(item.playListName);
                                                            if (showId) {
                                                                // console.log("From playLists button", movieId, authUser._id, item.playListName, "movie");
                                                                handleAddToPlayList(showId, item.playListName);
                                                            }
                                                        }}
                                                    >
                                                        {item.playListName}
                                                    </button>

                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

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
                                        <button className="btn btn-ghost btn-sm"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                updateShowPlayLists(true);
                                                updateShowId(item._id);
                                            }}>
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