import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5000" : "/";


export const useAuthStore = create(
    persist(
        (set, get) => ({

            authUser: null,
            isSigningUp: false,
            isLoggingIn: false,
            isLoggingOut: false,
            isProcessing: false,

            moviesForHome: [],
            dramaMovies: [],
            actionMovies: [],
            horrorMovies: [],
            romanticMovies: [],
            fantasyMovies: [],
            mysteryMovies: [],
            animatedMovies: [],
            scifiMovies: [],

            showsForHome: [],
            dramaShows: [],
            actionShows: [],
            horrorShows: [],
            romanticShows: [],
            fantasyShows: [],
            mysteryShows: [],
            animatedShows: [],
            scifiShows: [],

            BaseURL: BASE_URL,
            detailsOfMovie: null,
            detailsOfShow: null,
            relatedYoutubeVideos: null,
            genreWiseMovies: null,
            genreWiseShows: null,

            movieSearchSuggestions: null,
            showSearchSuggestions: null,

            playLists: null,
            moviesFromPlayList: null,
            showsFromPlayList: null,

            moviesByIds: null,
            showsByIds: null,

            // sortFilter: null,

            // setSortFilter: (value) => {
            //     set({ sortFilter: value });
            // },

            signup: async (data, funct) => {
                // console.log(BASE_URL)
                set({ isSigningUp: true });
                try {
                    console.log(data)
                    const res = await axios.post(`${BASE_URL}/api/auth/signup`, data, { withCredentials: true });
                    console.log(res.data);
                    set({ authUser: res.data });

                    toast.success("Account created successfully", res.data);
                    funct('/login')
                } catch (error) {
                    toast.error(error.response.data.message);
                } finally {
                    set({ isSigningUp: false });
                }
            },

            login: async (data, funct) => {
                set({ isLoggingIn: true });
                try {
                    const res = await axios.post(`${BASE_URL}/api/auth/login`, data, { withCredentials: true });
                    console.log(res.data);
                    set({ authUser: res.data });
                    toast.success(`${res.data.fullName} logged in successfully`);
                    funct('/')
                } catch (error) {
                    toast.error(error.response.data.message);
                    // console.log(error)
                } finally {
                    set({ isLoggingIn: false });
                }
            },

            logout: async () => {
                set({ isLoggingOut: true })
                try {
                    const res = await axios.get(`${BASE_URL}/api/auth/logout`, { withCredentials: true });
                    // console.log(res.data);
                    toast.success("Logged Out Successfully", res.data);
                    set({ authUser: null });
                    set({ playLists: null })
                    // Handle logout UI updates here
                } catch (error) {
                    console.error(error.response.data.message);
                } finally {
                    set({ isLoggingIn: false });
                }
            },

            addMovie: async (data) => {
                set({ isProcessing: true })
                try {
                    const res = await axios.post(`${BASE_URL}/api/movies/addmovie`, data, { withCredentials: true });
                    if (!res.data) {
                        toast.error("No Response is generated !!");
                    }

                    console.log(res.data?.data, "from res.data addMovie useAuthStore")
                    toast.success(`${res.data && data?.movieName} is added into the database :)`);
                } catch (error) {
                    toast.error(error.response.data.message);
                    console.log(error)
                } finally {
                    set({ isProcessing: false })
                }
            },

            addShow: async (data) => {
                set({ isProcessing: true })
                try {
                    const res = await axios.post(`${BASE_URL}/api/shows/addshow`, data, { withCredentials: true });
                    if (!res.data) {
                        toast.error("No Response is generated !!");
                    }

                    console.log(res.data?.data, "from res.data addMovie useAuthStore")
                    toast.success(`${res.data && data?.showName} is added into the database :)`);
                } catch (error) {
                    toast.error(error.response.data.message);
                    console.log(error)
                } finally {
                    set({ isProcessing: false })
                }
            },

            getMoviesForHome: async () => {
                try {
                    const res = await axios.get(`${BASE_URL}/api/movies/getmoviesforhome`, { withCredentials: true });
                    if (!res.data) {
                        toast.error("No data found for Home Page");
                    }

                    // toast.success("data found for Home page");
                    // console.log(res.data?.allMovies);
                    set({ moviesForHome: res.data.allMovies });

                    set({ dramaMovies: res.data.dramaMovies });
                    set({ actionMovies: res.data.actionMovies });
                    set({ horrorMovies: res.data.horrorMovies });
                    set({ romanticMovies: res.data.romanticMovies });
                    set({ fantasyMovies: res.data.fantasyMovies });
                    set({ mysteryMovies: res.data.mysteryMovies });
                    set({ animatedMovies: res.data.animatedMovies });
                    set({ scifiMovies: res.data.scifiMovies });


                } catch (error) {
                    console.log("Something went wrong in getMoviesForHome, useAuthStore")
                    toast.error(error.response.data.message);
                }
            },

            getMoviesByIds: async (data) => {
                try {
                    const res = await axios.post(`${BASE_URL}/api/movies/getMoviesByIds`, data, { withCredentials: true });

                    if (res.data.moviesByIds) {
                        toast.success(res.data.message);
                        set({ moviesByIds: res.data.moviesByIds })
                    }

                } catch (error) {
                    console.log("Something went wrong adding to playlist", error);
                    toast.error(error.message);
                }
            },

            getShowsByIds: async (data) => {
                try {
                    const res = await axios.post(`${BASE_URL}/api/shows/getShowsByIds`, data, { withCredentials: true });

                    if (res.data.showsByIds) {
                        toast.success(res.data.message);
                        set({ showsByIds: res.data.showsByIds })
                    }

                } catch (error) {
                    console.log("Something went wrong adding to playlist", error);
                    toast.error(error.message);
                }
            },

            getGenreWiseMovies: async (genreName) => {

                try {
                    const res = await axios.get(`${BASE_URL}/api/movies/${genreName}`, { withCredentials: true });

                    if (!res) {
                        toast.error("No response found with ", genreName);
                    }

                    set({ genreWiseMovies: res.data.genreMovies })

                } catch (error) {
                    console.log("Something went wrong in getGenreWiseMovies, useAuthStore", error)
                    toast.error(error.response.data.message);
                }
            },

            getMovieDetails: async (movieId) => {
                try {
                    const res = await axios.get(`${BASE_URL}/api/movies/moviedetails/${movieId}`);
                    if (res) {
                        console.log(res.data.relatedYoutubeVideos)
                        set({ detailsOfMovie: res.data.movieDetails });
                    }

                    try {
                        const resRelated = await axios.post(`${BASE_URL}/api/movies/getRelatedYoutubeVideos/`, res.data.movieName, { withCredentials: true });

                        if (resRelated) {
                            set({ relatedYoutubeVideos: res.data });
                        }
                    } catch (error) {
                        console.log(error);
                        toast.error(error.message);
                    }

                } catch (error) {
                    toast.error(error.response.data.message);
                    console.log(error);
                }
            },

            getShowsForHome: async () => {
                try {
                    const res = await axios.get(`${BASE_URL}/api/shows/getshowsforhome`, { withCredentials: true });
                    if (res.data) {
                        set({ showsForHome: res.data.allShows });
                    }
                } catch (error) {
                    console.log(error);
                    toast.error(error.message);
                }
            },

            getGenreWiseShows: async (genreName) => {
                try {
                    const res = await axios.get(`${BASE_URL}/api/shows/${genreName}`, { withCredentials: true });

                    if (res.data) {
                        set({ genreWiseShows: res.data.genreShows })
                    }
                } catch (error) {
                    console.log("Something went wrong in getGenreWiseShows, useAuthStore", error)
                    toast.error(error.response.data.message);
                }

            },

            getShowDetails: async (showId) => {
                try {
                    const res = await axios.get(`${BASE_URL}/api/shows/showdetails/${showId}`);
                    if (res) {
                        console.log(res.data.relatedYoutubeVideos)
                        set({ detailsOfShow: res.data.showDetails });
                    }

                    try {
                        const resRelated = await axios.post(`${BASE_URL}/api/shows/getRelatedYoutubeVideos/`, res.data.showName, { withCredentials: true });

                        if (resRelated) {
                            set({ relatedYoutubeVideos: res.data });
                        }
                    } catch (error) {
                        console.log(error);
                        toast.error(error.message);
                    }

                } catch (error) {
                    toast.error(error.response.data.message);
                    console.log(error);
                }

            },

            serachSuggestionFunction: async (inputText) => {
                try {
                    const res = await axios.get(`${BASE_URL}/api/search/searchSuggestions/${inputText}`, { withCredentials: true });

                    set({ movieSearchSuggestions: res.data.moviesSearchSuggestions });
                    set({ showSearchSuggestions: res.data.showSearchSuggestions });

                } catch (error) {
                    toast.error(error.response.data.message);
                    console.log(error);
                }
            },

            createPlayList: async (data) => {
                try {
                    const res = await axios.post(`${BASE_URL}/api/playList/create-playlist`, data, { withCredentials: true });

                    if (!res.data.newPlayList) {
                        return toast.error(res.data.message);
                    }

                    // set({ playLists: res.data.newPlayList });

                    toast.success(res.data.message);

                } catch (error) {
                    console.log("Something went wrong in creating playlist", error);
                    toast.error(error.message);
                }
            },

            removePlayList: async (data) => {

                try {
                    const res = await axios.delete(`${BASE_URL}/api/playList/delete-playlist`, data, { withCredentials: true });

                    if (res.data?.success) {
                        toast.success(res.data.message);
                    }

                } catch (error) {
                    console.log("Something went wrong in removing playlist", error);
                    toast.error(error.message);
                }

            },

            getAllPlayLists: async (data) => {

                try {
                    const res = await axios.post(`${BASE_URL}/api/playList/all-playlists`, data, { withCredentials: true });

                    if (res.data.allPlayLists) {
                        set({ playLists: res.data.allPlayLists });
                        // toast.success(res.data.message);
                    }

                } catch (error) {
                    console.log("Something went wrong in getting playlist", error);
                    toast.error(error.message);
                }

            },

            getContentFromPlayList: async (data) => {

                try {
                    const { playListName } = data;
                    const res = await axios.post(`${BASE_URL}/api/playList/showPlayList/${playListName}`, data, { withCredentials: true });

                    if (res.data?.showsInPlayList && res.data?.moviesInPlayList) {
                        set({ moviesFromPlayList: res.data.moviesInPlayList })
                        set({ showsFromPlayList: res.data.showsInPlayList })
                    }

                } catch (error) {
                    console.log("Something went wrong in getting playlist", error);
                    toast.error(error.message);
                }

            },

            addToPlayList: async (data) => {

                try {
                    const res = await axios.post(`${BASE_URL}/api/playList/add-to-playlist`, data, { withCredentials: true });

                    if (res.data.playList) {
                        toast.success(res.data.message);
                        // set({playList})
                    }

                } catch (error) {
                    console.log("Something went wrong adding to playlist", error);
                    toast.error(error.message);
                }
            },

            removeFromPlayList: async (data) => {
                try {
                    const res = await axios.post(`${BASE_URL}/api/playList/remove-from-playlist`, data, { withCredentials: true });

                    if (res.data.playList) {
                        toast.success(res.data.message);
                    }

                } catch (error) {
                    console.log("Something went wrong in removing from playlist", error);
                    toast.error(error.message);
                }
            }

        }),

        {
            name: "authUser", // Persist only the authUser key
            getStorage: () => createJSONStorage(() => localStorage), // Use localStorage
            partialize: (state) => ({ authUser: state.authUser, playLists: state.playLists, showsByIds: state.showsByIds, moviesByIds: state.moviesByIds }), // Only persist `authUser` key and playlists
            migrate: (persistedState) => {
                // If there's no persisted state, return the initial state
                if (!persistedState) return { authUser: null, playLists: null, moviesByIds: null, showsByIds: null };

                // If there is a persisted state, you can add any migration logic here.
                return persistedState;
            }
        },


    )

)