import React, { act, useEffect, useRef, useState, } from 'react'
import { useAuthStore } from '../Store/useAuthStore.js';
import LoaderComponent from "../components/LoaderComponent.jsx"
import Navbar from '../components/Navbar.jsx';
import Genre_Card_Home from '../components/Genre_Card_Home.jsx';
import FNQs from '../components/FNQs.jsx';
import Footer from '../components/Footer.jsx';
import RecomendedCard from "../components/RecomendedCard.jsx"
import ScrollableCarousel from '../components/ScrollableCarousel.jsx';
import toast from 'react-hot-toast';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import GenreWiseMoviesSortedForHome from '../components/GenreWiseMoviesSortedForHome.jsx';

// const BASE_URL = import.meta.env.NODE_ENV === "development" ? "http://localhost:5000" : "/";

const BasicHomePage = () => {

  const { authUser, getMoviesForHome, moviesForHome,
    dramaMovies,
    actionMovies,
    horrorMovies,
    romanticMovies,
    fantasyMovies,
    mysteryMovies,
    animatedMovies,
    scifiMovies,
  } = useAuthStore();

  const [recomendedMovies, updateRecomendedMovies] = useState([]);
  const [mostRatedGoats, updateMostRatedGoats] = useState([]);

  const navigate = useNavigate();

  const [loading, updateLoading] = useState(true);

  const scrollRef = useRef(null);


  const handleCardClick = (movieId) => {
    window.open(`/moviedetails/${movieId}`, '_blank');
  }

  const handleGenreCardClick = (genreName) => {
    navigate(`/movies/${genreName}`);
  }


  useEffect(() => {

    if (!authUser) {
      updateLoading(true);
      setTimeout(() => {
        navigate("/signup");
        updateLoading(false);
      }, 500)
    }
    // console.log(authUser)
  }, [authUser])

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

  useEffect(() => {
    try {
      updateLoading(true);
      // if (moviesForHome.length > 0) {
      const updatedMovies = new Set(recomendedMovies.map(movie => movie.movieName));
      const newRecomendedMovies = recomendedMovies.slice();

      const updatedMostRatedGoats = new Set(mostRatedGoats.map(movie => movie.movieName));
      const newMostRatedGoats = mostRatedGoats.slice();

      moviesForHome.forEach((item) => {
        //       //   // Debugging: Log the genres to verify the data
        //       //   // console.log('Genres for movie:', item.movieName, item.movieGenre);

        if (item.movieImdbRating > 7 && item.movieImdbRating <= 8.5 && !updatedMovies.has(item.movieName) && newRecomendedMovies.length < 9) {
          updatedMovies.add(item.movieName);
          newRecomendedMovies.push(item);
        }
        if (item.movieImdbRating > 8 && item.movieMovieBarosRating > 8 && newMostRatedGoats.length < 8) {
          updatedMostRatedGoats.add(item);
          newMostRatedGoats.push(item);
        }

      });

      // Update the state with the new categorized movies
      updateRecomendedMovies(newRecomendedMovies);
      updateMostRatedGoats(newMostRatedGoats);

    } catch (error) {
      toast.error("Sorry, something went wrong!!", error.message)
    } finally {
      updateLoading(false);
    }
  }, [moviesForHome]);


  if (loading) {
    return <LoaderComponent />
  }

  return (
    <div>
      <Navbar />

      {/* Carousel Section */}
      <div className="carousel relative max-h-[70%] w-full">
        <div id="item1" className="carousel-item w-full relative">
          <img src="https://res.cloudinary.com/dzsvbfzti/image/upload/v1738771379/MoviesBaros%20Images/Carousel%20Posters/jdtumetorp8a9863phks.jpg" className="w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/0 to-transparent"></div>
        </div>
        <div id="item2" className="carousel-item w-full relative">
          <img src="https://res.cloudinary.com/dzsvbfzti/image/upload/v1738771379/MoviesBaros%20Images/Carousel%20Posters/eceyu4c37kwvx5ntovas.jpg" className="w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/0 to-transparent"></div>
        </div>
        <div id="item3" className="carousel-item w-full relative">
          <img src="https://res.cloudinary.com/dzsvbfzti/image/upload/v1738771379/MoviesBaros%20Images/Carousel%20Posters/x8xdq3fsdhrayji4st9s.jpg" className="w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/0 to-transparent"></div>
        </div>
        <div id="item4" className="carousel-item w-full relative">
          <img src="https://res.cloudinary.com/dzsvbfzti/image/upload/v1738771379/MoviesBaros%20Images/Carousel%20Posters/oqs8cwkk3nndnielw2wd.jpg" className="w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/0 to-transparent"></div>
        </div>
      </div>

      {/* Heading Starts here */}
      <div className='relative z-0 text-white bg-gradient-to-tr bottom-10 md:12 mx-auto opacity-100 '>
        <h2 className='text-2xl md:text-3xl lg:text-5xl font-bold text-center'>The Best Streaming Experience</h2>
        <p className='text-slate-300 text-center text-sm md:text-lg'>
          StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere.
          <span className='hidden lg:block text-center text-wrap'>
            With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.
          </span>
        </p>

        <div className="flex justify-center items-center py-2 relative z-10">
          <button className="p-2 px-3 text-xl md:text-2xl font-semibold text-white rounded-md bg-red-600 text-center flex justify-center items-center hover:bg-red-700"
            onClick={() => navigate('/movies')}
          >
            Start Watching
          </button>
        </div>

      </div>
      {/* Heading Ends here */}

      {/* Recomendations  */}

      <div className='mx-4 mb-6'>
        <h4 className="text-2xl font-semibold pl-2">Recommended Movies</h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-x-2">

          {
            recomendedMovies.map((item) => (
              <RecomendedCard
                key={item._id}  // Use the unique movie ID here
                imgUrl={`${item.moviePoster}`}
                name={`${item.movieName}`}
                verdict={`${item.movieVerdict}`}
                length={`${item.movieRunTime}`}
                rating={`${item.movieImdbRating}`}
                onClick={() => handleCardClick(item._id)}
              />
            ))
          }


        </div>

      </div>

      {/* Recomendations  */}


      {/* Generes Starts Here  */}
      <div className='w-full px-2'>
        <div className='text-xl sm:text-lg md:text-2xl lg:text-3xl px-4 text-white font-semibold text-center flex justify-between items-center'>
          Exlore Our Wide Range of Variety

          {/* <div className='flex justify-between items-center space-x-2'>
            <div className="hover:animate-pulse cursor-pointer">
              <ArrowLeft size={32} className="text-blue-500" onClick={scrollLeft} />
            </div>
            <div className="hover:animate-pulse cursor-pointer">
              <ArrowRight size={32} className="text-blue-500" onClick={scrollRight} />
            </div>
          </div> */}
        </div>


        <div
          className="flex overflow-x-auto space-x-4 p-4 scrollbar-hide"
          ref={scrollRef}
          style={{ scrollbarWidth: 'none' }} // Hide scrollbar
        >
          {/* <Genre_Card_Home genreTitle={"Thriller"} genrePoster={''} /> */}
          <Genre_Card_Home movieName={"Crime"} genrePoster={'https://res.cloudinary.com/dzsvbfzti/image/upload/v1738697744/MoviesBaros%20Images/MoviesBaros%20Genre%20Posters/kexgp4dheirctwv1zbdf.jpg'}
            onClick={() => handleGenreCardClick("Crime")} />
          <Genre_Card_Home movieName={"Drama"} genrePoster={'https://res.cloudinary.com/dzsvbfzti/image/upload/v1738697745/MoviesBaros%20Images/MoviesBaros%20Genre%20Posters/r44esiqclgasaam8z5k9.jpg'}
            onClick={() => handleGenreCardClick("Drama")} />
          <Genre_Card_Home movieName={"Romantics"} genrePoster={'https://res.cloudinary.com/dzsvbfzti/image/upload/v1738697744/MoviesBaros%20Images/MoviesBaros%20Genre%20Posters/ogongmbi7yuywkosi909.jpg'}
            onClick={() => handleGenreCardClick("Romance")} />
          <Genre_Card_Home movieName={"Sci-Fi"} genrePoster={'https://res.cloudinary.com/dzsvbfzti/image/upload/v1738697745/MoviesBaros%20Images/MoviesBaros%20Genre%20Posters/k2ftqfjtq8sadlejgyku.jpg'}
            onClick={() => handleGenreCardClick("Sci-Fi")} />
          <Genre_Card_Home movieName={"Action"} genrePoster={'https://res.cloudinary.com/dzsvbfzti/image/upload/v1738697744/MoviesBaros%20Images/MoviesBaros%20Genre%20Posters/qjwpsjibjqmilv3er6rd.jpg'}
            onClick={() => handleGenreCardClick("Action")} />
          <Genre_Card_Home movieName={"Animated"} genrePoster={'https://res.cloudinary.com/dzsvbfzti/image/upload/v1738698223/MoviesBaros%20Images/MoviesBaros%20Genre%20Posters/vdlavgcbuwesyubq5ac0.jpg'}
            onClick={() => handleGenreCardClick("Animation")} />
          <Genre_Card_Home movieName={"Mystery"} genrePoster={'https://res.cloudinary.com/dzsvbfzti/image/upload/v1738697745/MoviesBaros%20Images/MoviesBaros%20Genre%20Posters/euybgnngfl12wl3it184.jpg'}
            onClick={() => handleGenreCardClick("Mystery")} />
          <Genre_Card_Home movieName={"Documentry"} genrePoster={'https://res.cloudinary.com/dzsvbfzti/image/upload/v1738697744/MoviesBaros%20Images/MoviesBaros%20Genre%20Posters/pmids64xw4gqprgh7nnl.jpg'}
            onClick={() => handleGenreCardClick("Documentry")} />
          <Genre_Card_Home movieName={"History"} genrePoster={'https://res.cloudinary.com/dzsvbfzti/image/upload/v1738697745/MoviesBaros%20Images/MoviesBaros%20Genre%20Posters/nnqtczoi1brcgj2wq5vt.jpg'}
            onClick={() => handleGenreCardClick("History")} />
          <Genre_Card_Home movieName={"Horror"} genrePoster={'https://res.cloudinary.com/dzsvbfzti/image/upload/v1738699345/MoviesBaros%20Images/MoviesBaros%20Genre%20Posters/u7kdqvgjtsfqammask9y.jpg'}
            onClick={() => handleGenreCardClick("Horror")} />
          <Genre_Card_Home movieName={"Fantasy"} genrePoster={'https://res.cloudinary.com/dzsvbfzti/image/upload/v1738697745/MoviesBaros%20Images/MoviesBaros%20Genre%20Posters/hnrlh5lvcvsh0m2x25em.jpg'}
            onClick={() => handleGenreCardClick("Fantasy")} />
          <Genre_Card_Home movieName={"Super-Hero"} genrePoster={'https://res.cloudinary.com/dzsvbfzti/image/upload/v1738697745/MoviesBaros%20Images/MoviesBaros%20Genre%20Posters/rai2p7o2ia1kkakd6hnf.jpg'}
            onClick={() => handleGenreCardClick("Super-Hero")} />

        </div>
      </div>
      {/* Generes Ends Here  */}

      {/* Scrollable Carousel Starts here */}
      <ScrollableCarousel mostRatedGoats={mostRatedGoats} handleCardClick={handleCardClick} />
      {/* Scrollable Carousel Starts here */}

      {/* Cards which shows quotes start here  */}

      {/* card 1 */}
      <div className="px-4 bg-slate-900 mb-8 py-8 rounded-3xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
          <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">

              <h2 className="font-sans text-3xl sm:mt-0 mt-6 font-medium tracking-tight text-primary/200 sm:text-4xl sm:leading-none max-w-lg mb-6">
                Quality Movies
              </h2>
              <p className="text-primary text-base md:text-lg">Watch One Movie A Day Keeps Stress Away !!
              </p>
            </div>
            <div className='space-x-4'>
              <button className="relative text-primary-800  text-lg font-medium inline-flex items-center hover:text-yellow-200 hover:left-2 duration-300">
                <span onClick={() => navigate('/movies')}> Watch Movies →</span>
              </button>
            </div>
          </div>
          <img alt="logo" width="420" height="120" src="https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFuaW1lfGVufDB8fDB8fHww" className='rounded-md ' />
        </div>
      </div>

      {/* card 2 */}
      <div className="px-4 bg-slate-900 mb-8 py-8 rounded-3xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">

          <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">

              <h2 className="font-sans text-3xl sm:mt-0 mt-6 font-medium tracking-tight text-primary/200 sm:text-4xl sm:leading-none max-w-lg mb-6">
                Quality TV Shows
              </h2>
              <p className="text-primary text-base md:text-lg">Watch Most Rated TV Show's
              </p>
            </div>
            <div className='space-x-4'>
              <button className="relative text-primary-800  text-lg font-medium inline-flex items-center hover:text-yellow-200 hover:left-2 duration-300">
                <span onClick={() => navigate('/shows')}> Watch Shows →</span>
              </button>
            </div>
          </div>
          <img alt="logo" width="420" height="120" src="https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFuaW1lfGVufDB8fDB8fHww" className='rounded-md ' />
        </div>
      </div>

      {/* Cards which shows quotes ends here */}

      {/* Action Thrillers */}

      <GenreWiseMoviesSortedForHome movies={actionMovies}
        handleCardClick={handleCardClick} genreName={`Action Thriller`} />

      <GenreWiseMoviesSortedForHome movies={dramaMovies}
        handleCardClick={handleCardClick} genreName={`Drama`} />

      <GenreWiseMoviesSortedForHome movies={romanticMovies}
        handleCardClick={handleCardClick} genreName={`Romance`} />

      <GenreWiseMoviesSortedForHome movies={horrorMovies}
        handleCardClick={handleCardClick} genreName={`Horror`} />

      <GenreWiseMoviesSortedForHome movies={fantasyMovies}
        handleCardClick={handleCardClick} genreName={`Fantacy`} />

      <GenreWiseMoviesSortedForHome movies={scifiMovies}
        handleCardClick={handleCardClick} genreName={`Sci-Fi`} />

      <GenreWiseMoviesSortedForHome movies={mysteryMovies}
        handleCardClick={handleCardClick} genreName={`Mystery`} />

      <GenreWiseMoviesSortedForHome movies={animatedMovies}
        handleCardClick={handleCardClick} genreName={`Animation`} />


      {/* Frequently Asked Starts Qustions */}
      <FNQs />
      {/* Frequently Asked Ends Qustions */}

      {/* footer starts here */}
      <Footer />
      {/* footer ends here */}
    </div >

  )
}

export default BasicHomePage;