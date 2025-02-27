import { Routes, Route } from "react-router-dom"
import { Toaster } from 'react-hot-toast'

import AddMovie from './pages/AddMovie'
import AddShow from './pages/AddShow'
import AdminLogin from "./pages/AdminLogin"
import AdminSignup from "./pages/AdminSignup"
import AdminPanel from "./pages/AdminPanel"

import Login from "../src/pages/Login"
import Signup from "../src/pages/Signup"
import Profile from "../src/pages/Profile"
import BasicHomePage from './pages/BasicHomePage'
import MoviesDetails from './pages/MoviesDetails'
import GenreWiseMoviesNShows from './pages/GenreWiseMoviesNShows'
import ShowDetails from './pages/ShowDetails'
import Movies from './pages/Movies'
import Shows from './pages/Shows'
import MoviesFromPlayList from "./pages/MoviesFromPlayList"
import PlayLists from "./pages/PlayLists"
import { useAuthStore } from "./Store/useAuthStore"


function App() {
  const { isAuthenticated, isAdminAuthenticated } = useAuthStore();

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {
          isAuthenticated ? (
            <>
              <Route path="/" element={<BasicHomePage />} />
              <Route path="/addmovie" element={<AddMovie />} />
              <Route path="/addshow" element={<AddShow />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/shows" element={<Shows />} />
              <Route path='/movies/:genre' element={<GenreWiseMoviesNShows />} />
              <Route path="/moviedetails/:movieId" element={<MoviesDetails />} />
              <Route path="/showdetails/:showId" element={<ShowDetails />} />
              <Route path="/playlists" element={<PlayLists />} />
              <Route path="/playlist/:playListName" element={<MoviesFromPlayList />} />
            </>
          )
            : (
              <Route path="*" element={<Login />} /> // Redirect to login page for all protected routes
            )
        }

        <Route path="admin/admin-login" element={<AdminLogin />} />
        <Route path="admin/admin-signup" element={<AdminSignup />} />
        <Route path="admin/admin-panel" element={<AdminPanel />} />

        {
          isAdminAuthenticated && (
            <>
              <Route path="admin/add-movie" element={<AddMovie />} />
              <Route path="admin/add-show" element={<AddShow />} />
            </>
          )
        }

      </Routes>
      <Toaster />

    </>
  )
}

export default App
