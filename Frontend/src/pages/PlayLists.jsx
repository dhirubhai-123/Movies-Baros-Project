import React, { useEffect, useId, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../Store/useAuthStore.js';
import { PlusIcon } from "lucide-react"
import toast from 'react-hot-toast';
import LoaderComponent from "../components/LoaderComponent.jsx"

const PlayLists = () => {
    const { playLists, createPlayList, authUser, getAllPlayLists, getContentFromPlayList, moviesFromPlayList, showsFromPlayList } = useAuthStore();
    const navigate = useNavigate();
    const [playListName, updatePlayListName] = useState('');

    const [processing, updateProcessing] = useState(false);

    const handleChange = (e) => {
        updatePlayListName(e.target.value);
    };

    const handlePlayListClicked = (playListId, playListName) => {
        const func = async () => {
            if (authUser && playListName && playListId) {
                const userId = authUser._id;
                await getContentFromPlayList({ userId, playListId, playListName }).then(() => {
                    navigate(`/playlist/${playListName}`);
                })
                // console.log(userId, playListId, playListName);
            }
        }
        func();

    };

    const handleCreatePlaylist = (userId, playListName) => {
        const func = async () => {
            if (!userId || !playListName) {
                return toast.error(`UserId or PlayListName missing!`);
            }
            // console.log('Creating Playlist with:', { userId, playListName }); // Check values
            await createPlayList({ userId, playListName });

            const func = async () => {
                const userId = authUser._id;
                await getAllPlayLists({ userId });
            }
            func();
        }

        func();
    }

    useEffect(() => {

        try {
            updateProcessing(true);

            async function func() {
                if (authUser) {
                    const userId = authUser._id;
                    await getAllPlayLists({ userId })
                }
            }
            func();
        } catch (error) {
            toast.error(error.message);
        }
        finally {
            updateProcessing(false);
        }
    }, [])


    if (!playLists || playLists.length === 0) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                    <header className="mb-4">
                        <h1 className="text-3xl font-semibold text-gray-800">Your Playlists
                            <span className='text-sm text-blue-400 ml-2'>(No playlists found !! Create here)</span>
                        </h1>
                    </header>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label htmlFor="playlist-name" className="text-lg text-gray-700">
                                Enter PlayList Name:
                            </label>
                            <input
                                type="text"
                                id="playlist-name"
                                className="p-2 border rounded-md w-full md:w-3/4 text-gray-300"
                                placeholder="Enter Playlist Name"
                                value={playListName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button
                            className="w-full p-2 mt-4 bg-blue-500 text-white rounded-md disabled:opacity-50 hover:bg-blue-600 transition"
                            disabled={playListName.trim() === ''}
                            onClick={() => handleCreatePlaylist(authUser._id, playListName)}
                        >
                            Create Playlist
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // if (processing) {
    //     return <LoaderComponent />
    // }


    return (
        // <div>PlayLists</div>
        <div className="min-h-screen ">
            <header className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white">
                <h1 className="text-3xl font-bold">Your Playlists</h1>
            </header>
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {
                        playLists && playLists.length > 0 &&
                        playLists.map((playlist, index) => (
                            <div
                                key={playlist._id}
                                // key={index}
                                className="card bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                                onClick={
                                    () => {
                                        handlePlayListClicked(playlist._id, playlist.playListName)
                                        // console.log(playlist._id, playlist.playListName);
                                    }}
                            >
                                <figure className="relative">
                                    <img
                                        src="https://res.cloudinary.com/dzsvbfzti/image/upload/v1738873325/MoviesBaros%20Images/dzqml1dvqybfrj6ua6pm.jpg"
                                        alt={`Playlist ${index + 1}`}
                                        className="w-full h-56 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black opacity-30"></div>
                                </figure>
                                <div className="card-body p-4">
                                    <h2 className="text-lg font-semibold text-gray-800">{playlist.playListName}
                                    </h2>
                                </div>
                            </div>
                        ))
                    }

                    {/* Card which creates new Playlist */}
                    <div className="space-y-4 border border-gray-400 px-2 rounded-lg">
                        <div className="flex justify-center items-center flex-col min-h-[50%] gap-y-2">
                            <label htmlFor="playlist-name" className="text-lg text-gray-200">
                                Enter PlayList Name:
                            </label>
                            <input
                                type="text"
                                id="playlist-name"
                                className="p-2 border rounded-md w-full md:w-3/4 text-gray-300"
                                placeholder="Enter Playlist Name"
                                value={playListName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button
                            className="w-full p-2 mt-4 bg-blue-500 text-white rounded-md disabled:opacity-50 hover:bg-blue-600 transition"
                            disabled={playListName.trim() === ''}
                            onClick={() => handleCreatePlaylist(authUser._id, playListName)}
                        >
                            <span className='flex justify-center items-center'>
                                <PlusIcon />
                                {/* <span> */}
                                Create Playlist
                                {/* </span> */}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayLists;
