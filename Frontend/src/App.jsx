import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Login from "../src/pages/Login"
import Signup from "../src/pages/Signup"
import Profile from "../src/pages/Profile"
import BasicHomePage from './pages/BasicHomePage'
import MoviesNShow from './pages/Movies'
import Favourites from './pages/Favourites'
import RegularHomePage from './pages/RegularHomePage'
import AddMovie from './pages/AddMovie'
import AddShow from './pages/AddShow'
import { Toaster } from 'react-hot-toast'
import MoviesDetails from './pages/MoviesDetails'
import GenreWiseMoviesNShows from './pages/GenreWiseMoviesNShows'
import ShowDetails from './pages/ShowDetails'
import Movies from './pages/Movies'
import Shows from './pages/Shows'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<BasicHomePage />} />
        <Route path="/addmovie" element={<AddMovie />} />
        <Route path="/addshow" element={<AddShow />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/moviesNShow" element={<MoviesNShow />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/shows" element={<Shows />} />
        <Route path='/movies/:genre' element={<GenreWiseMoviesNShows />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/moviedetails/:movieId" element={<MoviesDetails />} />
        <Route path="/showdetails/:showId" element={<ShowDetails />} />

      </Routes>
      <Toaster />

    </>
  )
}

export default App
