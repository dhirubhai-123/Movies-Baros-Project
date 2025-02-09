import dotenv from "dotenv"
import Movies from "../models/admin.model.js"

// dotenv.config();

const movieSeeds = [
    {
        movieName: "The Shawshank Redemption",
        movieReleaseDate: new Date("1994-09-22"),
        movieDescription: "An inspiring tale of hope and friendship between two imprisoned men over several years.",
        movieVerdict: "Excellent",
        movieLanguage: "English",
        movieDirector: "Frank Darabont",
        movieStarCast: {
            member1: "Tim Robbins",
            member2: "Morgan Freeman",
            member3: "Bob Gunton",
            member4: "William Sadler",
            member5: "Clancy Brown",
        },
        movieCrewCast: {
            member1: "Frank Darabont",
            member2: "Niki Marvin",
            member3: "Roger Deakins",
            member4: "Richard Francis-Bruce",
            member5: "Thomas Newman",
        },
        movieRunTime: 142,
        movieMovieBarosRating: 9.7,
        movieImdbRating: 9.3,
        movieRottenTomatoesRating: 91,
        movieAgeRating: 16,
        movieGenre: {
            genre1: "Drama",
            genre2: "Crime",
            genre3: "NA",
        },
        moviePoster: "https://drive.google.com/file/d/18nRCf76ncV89c5Oj1SxHWCmRpUWmtSeI/view",
        movieTrailer: "https://youtu.be/PLl99DlL6b4?si=zzxjpstSKdRhazQB",
        movieWatchLinks: {
            link1: "https://www.primevideo.com/dp/amzn1.dv.gti.20b4c3cf-b703-aebb-41bd-0dc683f8c0c8?autoplay=0&ref_=atv_cf_strg_wb",
            link2: "https://tv.apple.com/in/movie/the-shawshank-redemption/umc.cmc.459n4f98t82t8ommdoa7ebnny",
            link3: "https://play.google.com/store/movies/details?id=z-PKXi6W4cU.P",
            link4: "NA",
        },
        movieBarosViews: "One of the highest rated movies on MoviesBaros as well as Imdb",
    },
    {
        movieName: "Inception",
        movieReleaseDate: new Date("2010-07-16"),
        movieDescription: "A skilled thief is given a chance at redemption if he can successfully perform an impossible task.",
        movieVerdict: "Amazing",
        movieLanguage: "English",
        movieDirector: "Christopher Nolan",
        movieStarCast: {
            member1: "Leonardo DiCaprio",
            member2: "Joseph Gordon-Levitt",
            member3: "Elliot Page",
            member4: "Tom Hardy",
            member5: "Ken Watanabe",
        },
        movieCrewCast: {
            member1: "Christopher Nolan",
            member2: "Emma Thomas",
            member3: "Hans Zimmer",
            member4: "Wally Pfister",
            member5: "Lee Smith",
        },
        movieRunTime: 148,
        movieMovieBarosRating: 8.8,
        movieImdbRating: 8.8,
        movieRottenTomatoesRating: 87,
        movieAgeRating: 13,
        movieGenre: {
            genre1: "Action",
            genre2: "Adventure",
            genre3: "Sci-Fi",
        },
        moviePoster: "https://drive.google.com/file/d/18t22ukqQm8AcLvii6Qlv4sXQleM1blVV/view?usp=drive_link",
        movieTrailer: "https://youtu.be/YoHD9XEInc0?si=9EFeWXxxkKmEI-E1",
        movieWatchLinks: {
            link1: "https://www.jiocinema.com/movies/inception/3757045/watch?utm_source=WatchAction&utm_medium=MovieWatchAction&utm_campaign=inception",
            link2: "https://www.primevideo.com/dp/amzn1.dv.gti.5ca9f69c-796e-2320-e56f-f758fa5957b5?autoplay=0&ref_=atv_cf_strg_wb",
            link3: "https://www.youtube.com/watch?v=ArRqeBKBsEU",
            link4: "https://tv.apple.com/in/movie/inception/umc.cmc.6loas01ow0w4lkatxxloz7a6e",
        },
        movieBarosViews: "Cobb steals information from his targets by entering their dreams. He is wanted for his alleged role in his wife's murder and his only chance at redemption is to perform a nearly impossible task.",
    },
    {
        movieName: "The Dark Knight",
        movieReleaseDate: new Date("2008-07-18"),
        movieDescription: "A vigilante fights crime in a city plagued by a chaotic mastermind.",
        movieVerdict: "Brilliant",
        movieLanguage: "English",
        movieDirector: "Christopher Nolan",
        movieStarCast: {
            member1: "Christian Bale",
            member2: "Heath Ledger",
            member3: "Aaron Eckhart",
            member4: "Michael Caine",
            member5: "Maggie Gyllenhaal",
        },
        movieCrewCast: {
            member1: "Christopher Nolan",
            member2: "Emma Thomas",
            member3: "Hans Zimmer",
            member4: "Wally Pfister",
            member5: "Lee Smith",
        },
        movieRunTime: 152,
        movieMovieBarosRating: 9.0,
        movieImdbRating: 9.0,
        movieRottenTomatoesRating: 94,
        movieAgeRating: 13,
        movieGenre: {
            genre1: "Action",
            genre2: "Crime",
            genre3: "Drama",
        },
        moviePoster: "https://drive.google.com/file/d/190O06-vTn0XXcO--4zNDp6l3SbgCI_cO/view?usp=drive_link",
        movieTrailer: "https://youtu.be/EXeTwQWrcwY?si=qgnlBr18IGtHf88Q",
        movieWatchLinks: {
            link1: "https://www.primevideo.com/dp/amzn1.dv.gti.c4b2f313-10cd-7644-696f-f1327ac44dba?autoplay=0&ref_=atv_cf_strg_wb",
            link2: "https://www.jiocinema.com/movies/the-dark-knight/3745136/watch?utm_source=WatchAction&utm_medium=MovieWatchAction&utm_campaign=the-dark-knight",
            link3: "https://play.google.com/store/movies/details?id=MgMqKR6Y54I.P",
            link4: "https://tv.apple.com/in/movie/the-dark-knight/umc.cmc.1uf4c3neuc9yxhnjv7t4rd5wa",
        },
        movieBarosViews: "Batman has a new foe, the Joker, who is an accomplished criminal hell-bent on decimating Gotham City. Together with Gordon and Harvey Dent, Batman struggles to thwart the Joker before it is too late.",
    },
    // Movie 4
    {
        movieName: "Forrest Gump",
        movieReleaseDate: new Date("1994-07-06"),
        movieDescription: "The life journey of a man with a unique perspective on historical events.",
        movieVerdict: "Heartwarming",
        movieLanguage: "English",
        movieDirector: "Robert Zemeckis",
        movieStarCast: {
            member1: "Tom Hanks",
            member2: "Robin Wright",
            member3: "Gary Sinise",
            member4: "Mykelti Williamson",
            member5: "Sally Field",
        },
        movieCrewCast: {
            member1: "Robert Zemeckis",
            member2: "Wendy Finerman",
            member3: "Alan Silvestri",
            member4: "Don Burgess",
            member5: "Arthur Schmidt",
        },
        movieRunTime: 142,
        movieMovieBarosRating: 8.8,
        movieImdbRating: 8.8,
        movieRottenTomatoesRating: 71,
        movieAgeRating: 13,
        movieGenre: {
            genre1: "Drama",
            genre2: "Romance",
            genre3: "NA",
        },
        moviePoster: "https://drive.google.com/file/d/18vQcSYr1Z9aJD79RE0Ose4mtDtJxyH8K/view?usp=drive_link",
        movieTrailer: "https://youtu.be/XHhAG-YLdk8?si=PLoWi9lnQ_lnDEaH",
        movieWatchLinks: {
            link1: "https://www.primevideo.com/dp/amzn1.dv.gti.d2a9f65f-019a-dc2a-9f03-e9b342352bac?autoplay=0&ref_=atv_cf_strg_wb",
            link2: "https://play.google.com/store/movies/details?id=EI8XoNmBAkE",
            link3: "https://tv.apple.com/in/movie/forrest-gump/umc.cmc.5ov9f55aw8qvmd5pumhgnwu3e",
            link4: "NA",
        },
        movieBarosViews: "Forrest, a man with low IQ, recounts the early years of his life when he found himself in the middle of key historical events. All he wants now is to be reunited with his childhood sweetheart, Jenny.",
    },
    // Movie 5
    {
        movieName: "The Matrix",
        movieReleaseDate: new Date("1999-03-31"),
        movieDescription: "A hacker discovers the reality he lives in is a simulated illusion.",
        movieVerdict: "Groundbreaking",
        movieLanguage: "English",
        movieDirector: "Lana Wachowski, Lilly Wachowski",
        movieStarCast: {
            member1: "Keanu Reeves",
            member2: "Laurence Fishburne",
            member3: "Carrie-Anne Moss",
            member4: "Hugo Weaving",
            member5: "Joe Pantoliano",
        },
        movieCrewCast: {
            member1: "Wachowski Sisters",
            member2: "Joel Silver",
            member3: "Don Davis",
            member4: "Bill Pope",
            member5: "Zach Staenberg",
        },
        movieRunTime: 136,
        movieMovieBarosRating: 8.7,
        movieImdbRating: 8.7,
        movieRottenTomatoesRating: 88,
        movieAgeRating: 16,
        movieGenre: {
            genre1: "Action",
            genre2: "Sci-Fi",
            genre3: "NA",
        },
        moviePoster: "https://drive.google.com/file/d/19EO6TkopkcLlip6BwYkm6_uS2Bkrf2ZI/view?usp=drive_link",
        movieTrailer: "https://youtu.be/vKQi3bBA1y8?si=PSyvLOmwfMu2iijY",
        movieWatchLinks: {
            link1: "https://www.jiocinema.com/movies/the-matrix/3761069/watch?utm_source=WatchAction&utm_medium=MovieWatchAction&utm_campaign=the-matrix",
            link2: "https://tv.apple.com/in/movie/the-matrix/umc.cmc.af8k9kcq9r1s1qmmdxpq4itn",
            link3: "https://play.google.com/store/movies/details?id=ZLdFEQoY78E",
            link4: "https://www.primevideo.com/dp/amzn1.dv.gti.dea9f6b7-e0a0-38c9-7467-d6079c6fb4f0?autoplay=0&ref_=atv_cf_strg_wb",
        },
        movieBarosViews: "Neo, a computer programmer and hacker, has always questioned the reality of the world around him. His suspicions are confirmed when Morpheus, a rebel leader, contacts him and reveals the truth to him.",
    },
    // Movie 6
    {
        movieName: "The Godfather",
        movieReleaseDate: new Date("1972-03-24"),
        movieDescription: "An organized crime dynasty's aging patriarch transfers control to his reluctant son.",
        movieVerdict: "Classic",
        movieLanguage: "English",
        movieDirector: "Francis Ford Coppola",
        movieStarCast: {
            member1: "Marlon Brando",
            member2: "Al Pacino",
            member3: "James Caan",
            member4: "Richard S. Castellano",
            member5: "Robert Duvall",
        },
        movieCrewCast: {
            member1: "Francis Ford Coppola",
            member2: "Albert S. Ruddy",
            member3: "Nino Rota",
            member4: "Gordon Willis",
            member5: "William Reynolds",
        },
        movieRunTime: 175,
        movieMovieBarosRating: 9.2,
        movieImdbRating: 9.2,
        movieRottenTomatoesRating: 97,
        movieAgeRating: 17,
        movieGenre: {
            genre1: "Crime",
            genre2: "Drama",
            genre3: "NA",
        },
        moviePoster: "https://drive.google.com/file/d/19JEZJhD9O20TSh5BrjT6KypvwWE4lRAa/view?usp=drive_link",
        movieTrailer: "https://youtu.be/UaVTIH8mujA?si=3XJ_gcCGef9n6evK",
        movieWatchLinks: {
            link1: "https://tv.apple.com/in/movie/the-godfather/umc.cmc.3ew9fykdnpfaq9t2jq5da011c",
            link2: "https://play.google.com/store/movies/details?id=fVVLR2u1nSk",
            link3: "https://www.primevideo.com/dp/amzn1.dv.gti.64a9f786-efb1-28d3-bf27-6038d12cc53a?autoplay=0&ref_=atv_cf_strg_wb",
            link4: "https://www.netflix.com/in/title/60011152?source=35",
        },
        movieBarosViews: "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son, Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
    },
    // Movie 7
    {
        movieName: "Pulp Fiction",
        movieReleaseDate: new Date("1994-10-14"),
        movieDescription: "A series of interconnected stories featuring criminals in Los Angeles.",
        movieVerdict: "Iconic",
        movieLanguage: "English",
        movieDirector: "Quentin Tarantino",
        movieStarCast: {
            member1: "John Travolta",
            member2: "Uma Thurman",
            member3: "Samuel L. Jackson",
            member4: "Bruce Willis",
            member5: "Ving Rhames",
        },
        movieCrewCast: {
            member1: "Quentin Tarantino",
            member2: "Lawrence Bender",
            member3: "Karyn Rachtman",
            member4: "Andrzej Sekula",
            member5: "Sally Menke",
        },
        movieRunTime: 154,
        movieMovieBarosRating: 8.9,
        movieImdbRating: 8.9,
        movieRottenTomatoesRating: 92,
        movieAgeRating: 17,
        movieGenre: {
            genre1: "Crime",
            genre2: "Drama",
            genre3: "NA",
        },
        moviePoster: "https://drive.google.com/file/d/19O5RXn0KkDQAbSjMnwdH8kGPYogdzb2g/view?usp=drive_link",
        movieTrailer: "https://youtu.be/5ZAhzsi1ybM?si=u7zuuexK-I-cNwDY",
        movieWatchLinks: {
            link1: "https://tv.apple.com/in/movie/pulp-fiction/umc.cmc.1hfvw2p79f9qdeydow8nmrn7t",
            link2: "https://www.primevideo.com/dp/amzn1.dv.gti.b850d802-224f-403d-80a5-a3f64abb2b79?autoplay=0&ref_=atv_cf_strg_wb",
            link3: "https://www.netflix.com/in/title/880640?source=35",
            link4: "NA",
        },
        movieBarosViews: "In the realm of underworld, a series of incidents intertwines the lives of two Los Angeles mobsters, a gangster's wife, a boxer and two small-time criminals.",
    },
    // Movie 8
    {
        movieName: "Fight Club",
        movieReleaseDate: new Date("1999-10-15"),
        movieDescription: "An insomniac office worker forms an underground club with a soap maker.",
        movieVerdict: "Cult Classic",
        movieLanguage: "English",
        movieDirector: "David Fincher",
        movieStarCast: {
            member1: "Brad Pitt",
            member2: "Edward Norton",
            member3: "Helena Bonham Carter",
            member4: "Meat Loaf",
            member5: "Jared Leto",
        },
        movieCrewCast: {
            member1: "David Fincher",
            member2: "Art Linson",
            member3: "Dust Brothers",
            member4: "Jeff Cronenweth",
            member5: "James Haygood",
        },
        movieRunTime: 139,
        movieMovieBarosRating: 8.8,
        movieImdbRating: 8.8,
        movieRottenTomatoesRating: 79,
        movieAgeRating: 17,
        movieGenre: {
            genre1: "Drama",
            genre2: "Thriller",
            genre3: "NA",
        },
        moviePoster: "https://drive.google.com/file/d/18vQcSYr1Z9aJD79RE0Ose4mtDtJxyH8K/view?usp=drive_link",
        movieTrailer: "https://youtu.be/qtRKdVHc-cE?si=zb6_wF1fIU37jrgj",
        movieWatchLinks: {
            link1: "https://www.youtube.com/watch?v=nHY0sjIK94k",
            link2: "https://tv.apple.com/in/movie/fight-club/umc.cmc.70dbl3043tb6ealg0u12k1pih",
            link3: "https://www.primevideo.com/dp/amzn1.dv.gti.84aa074e-d217-477f-9242-3e62c961c14b?autoplay=0&ref_=atv_cf_strg_wb",
            link4: "https://www.jiocinema.com/movies/fight-club/4047586/watch?utm_source=WatchAction&utm_medium=MovieWatchAction&utm_campaign=fight-club",
        },
        movieBarosViews: "Unhappy with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. Soon, their venture spirals down into something sinister.",
    },
    // Movie 9
    {
        movieName: "Interstellar",
        movieReleaseDate: new Date("2014-11-07"),
        movieDescription: "A team travels through a wormhole in space in search of a new home for humanity.",
        movieVerdict: "Epic",
        movieLanguage: "English",
        movieDirector: "Christopher Nolan",
        movieStarCast: {
            member1: "Matthew McConaughey",
            member2: "Anne Hathaway",
            member3: "Jessica Chastain",
            member4: "Bill Irwin",
            member5: "Ellen Burstyn",
        },
        movieCrewCast: {
            member1: "Christopher Nolan",
            member2: "Emma Thomas",
            member3: "Hans Zimmer",
            member4: "Hoyte van Hoytema",
            member5: "Lee Smith",
        },
        movieRunTime: 169,
        movieMovieBarosRating: 8.6,
        movieImdbRating: 8.6,
        movieRottenTomatoesRating: 72,
        movieAgeRating: 13,
        movieGenre: {
            genre1: "Adventure",
            genre2: "Drama",
            genre3: "Sci-Fi",
        },
        moviePoster: "https://drive.google.com/file/d/18noHjXH2MlUSEWHz5gncaAbd9NurmYWS/view?usp=drive_link",
        movieTrailer: "https://youtu.be/zSWdZVtXT7E?si=DdOcO8SMvUsYgQqZ",
        movieWatchLinks: {
            link1: "https://tv.apple.com/in/movie/interstellar-2014/umc.cmc.1vrwat5k1ucm5k42q97ioqyq3",
            link2: "https://www.primevideo.com/dp/amzn1.dv.gti.b4a9f7c6-5def-7e63-9aa7-df38a479333e?autoplay=0&ref_=atv_cf_strg_wb",
            link3: "https://www.jiocinema.com/movies/interstellar/3757043/watch?utm_source=WatchAction&utm_medium=MovieWatchAction&utm_campaign=interstellar",
            link4: "https://www.netflix.com/in/title/70305903?source=35",
        },
        movieBarosViews: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    },
    // Movie 10
    {
        movieName: "Parasite",
        movieReleaseDate: new Date("2019-05-30"),
        movieDescription: "A poor family schemes to become employed by a wealthy family by infiltrating their household.",
        movieVerdict: "Masterpiece",
        movieLanguage: "Korean",
        movieDirector: "Bong Joon Ho",
        movieStarCast: {
            member1: "Song Kang-ho",
            member2: "Lee Sun-kyun",
            member3: "Cho Yeo-jeong",
            member4: "Choi Woo-shik",
            member5: "Park So-dam",
        },
        movieCrewCast: {
            member1: "Bong Joon Ho",
            member2: "Kwak Sin-ae",
            member3: "Jung Jae-il",
            member4: "Hong Kyung-pyo",
            member5: "Yang Jin-mo",
        },
        movieRunTime: 132,
        movieMovieBarosRating: 8.6,
        movieImdbRating: 8.6,
        movieRottenTomatoesRating: 98,
        movieAgeRating: 16,
        movieGenre: {
            genre1: "Comedy",
            genre2: "Drama",
            genre3: "Thriller",
        },
        moviePoster: "https://drive.google.com/file/d/19OD8e20uBehviDlpIrWNoQw86jDEE2Dd/view?usp=drive_link",
        movieTrailer: "https://youtu.be/5xH0HfJHsaY?si=_78tV8fdlJXLYkyD",
        movieWatchLinks: {
            link1: "https://www.sonyliv.com/movies/parasite-korean-1000230983?utm_source=Google&utm_medium=WatchNow&utm_campaign=1000230983",
            link2: "NA",
            link3: "NA",
            link4: "NA",
        },
        movieBarosViews: "Thriller, Mystery, Drama about life and thoughts about pleasure of human mindset is revealed in parasite. Won Oscar(Acadamy Award) for best movie for year 2019.",
    },
    // Movie 11
    {
        movieName: "Spirited Away",
        movieReleaseDate: new Date("2001-07-20"),
        movieDescription: "A young girl enters a magical world of spirits and must find a way to free herself and her parents.",
        movieVerdict: "Enchanting",
        movieLanguage: "Japanese",
        movieDirector: "Hayao Miyazaki",
        movieStarCast: {
            member1: "Rumi Hiiragi",
            member2: "Miyu Irino",
            member3: "Mari Natsuki",
            member4: "Takashi Naitō",
            member5: "Yasuko Sawaguchi",
        },
        movieCrewCast: {
            member1: "Hayao Miyazaki",
            member2: "Toshio Suzuki",
            member3: "Joe Hisaishi",
            member4: "Atsushi Okui",
            member5: "Takeshi Seyama",
        },
        movieRunTime: 125,
        movieMovieBarosRating: 8.6,
        movieImdbRating: 8.6,
        movieRottenTomatoesRating: 97,
        movieAgeRating: 10,
        movieGenre: {
            genre1: "Animation",
            genre2: "Adventure",
            genre3: "Family",
        },
        moviePoster: "https://drive.google.com/file/d/19PAp_ooX67w2VZUttPBDhTbZjW3wltm-/view?usp=drive_link",
        movieTrailer: "https://youtu.be/ByXuk9QqQkk?si=vPBw9M8EHGYOdWyN",
        movieWatchLinks: {
            link1: "https://www.netflix.com/in/title/60023642?source=35",
            link2: "NA",
            link3: "NA",
            link4: "NA",
        },
        movieBarosViews: "Quality animated movie one of the best movies released in 2001.",
    },
    // Movie 12
    {
        movieName: "The Lord of the Rings: The Return of the King",
        movieReleaseDate: new Date("2003-12-17"),
        movieDescription: "The final confrontation between the forces of good and evil fighting for control of Middle-earth.",
        movieVerdict: "Epic Finale",
        movieLanguage: "English",
        movieDirector: "Peter Jackson",
        movieStarCast: {
            member1: "Elijah Wood",
            member2: "Viggo Mortensen",
            member3: "Ian McKellen",
            member4: "Orlando Bloom",
            member5: "Liv Tyler",
        },
        movieCrewCast: {
            member1: "Peter Jackson",
            member2: "Fran Walsh",
            member3: "Howard Shore",
            member4: "Andrew Lesnie",
            member5: "Jamie Selkirk",
        },
        movieRunTime: 201,
        movieMovieBarosRating: 8.9,
        movieImdbRating: 8.9,
        movieRottenTomatoesRating: 93,
        movieAgeRating: 13,
        movieGenre: {
            genre1: "Adventure",
            genre2: "Drama",
            genre3: "Fantasy",
        },
        moviePoster: "https://drive.google.com/file/d/19SvQoMLSUMTtL8oDqhTAU_PRqlnAhC-j/view?usp=drive_link",
        movieTrailer: "https://youtu.be/r5X-hFf6Bwo?si=29GHHO_nkuEIiuFs",
        movieWatchLinks: {
            link1: "https://www.primevideo.com/dp/amzn1.dv.gti.91d91081-a2e1-4004-af7d-4efb31e99e27?autoplay=0&ref_=atv_cf_strg_wb",
            link2: "https://tv.apple.com/in/movie/the-lord-of-the-rings-the-return-of-the-king/umc.cmc.57s6i23z9ry0zsgwwc2mxjqi6",
            link3: "NA",
            link4: "NA",
        },
        movieBarosViews: "The former Fellowship of the Ring prepares for the final battle. While Frodo and Sam approach Mount Doom to destroy the One Ring, they follow Gollum, unaware of the path he is leading them on.",
    },
    // Movie 13
    {
        movieName: "Joker",
        movieReleaseDate: new Date("2019-10-04"),
        movieDescription: "An origin story of a troubled comedian who becomes a notorious criminal mastermind.",
        movieVerdict: "Dark",
        movieLanguage: "English",
        movieDirector: "Todd Phillips",
        movieStarCast: {
            member1: "Joaquin Phoenix",
            member2: "Robert De Niro",
            member3: "Zazie Beetz",
            member4: "Frances Conroy",
            member5: "Brett Cullen",
        },
        movieCrewCast: {
            member1: "Todd Phillips",
            member2: "Bradley Cooper",
            member3: "Hildur Guðnadóttir",
            member4: "Lawrence Sher",
            member5: "Jeff Groth",
        },
        movieRunTime: 122,
        movieMovieBarosRating: 8.5,
        movieImdbRating: 8.5,
        movieRottenTomatoesRating: 68,
        movieAgeRating: 17,
        movieGenre: {
            genre1: "Crime",
            genre2: "Drama",
            genre3: "Thriller",
        },
        moviePoster: "https://drive.google.com/file/d/19Q32uVIGiA9tV9JEtr3fzJl-gFbx7rQQ/view?usp=drive_link",
        movieTrailer: "https://drive.google.com/file/d/190O06-vTn0XXcO--4zNDp6l3SbgCI_cO/view?usp=drive_link",
        movieWatchLinks: {
            link1: "https://www.primevideo.com/dp/amzn1.dv.gti.c4b6ca92-491f-bc5b-9da4-30916bb6e8a0?autoplay=0&ref_=atv_cf_strg_wb",
            link2: "https://www.jiocinema.com/movies/joker/3744591/watch?utm_source=WatchAction&utm_medium=MovieWatchAction&utm_campaign=joker",
            link3: "https://play.google.com/store/movies/details?id=FW6FfeyPGVs.P",
            link4: "https://tv.apple.com/in/movie/joker/umc.cmc.3xaju2323jxib2du70d9ey4b4",
        },
        movieBarosViews: "High Quality Cinematic Experience. Gets thriller by thriller after moment by moment after interval",
    },
    // Movie 14
    {
        movieName: "Avengers: Endgame",
        movieReleaseDate: new Date("2019-04-26"),
        movieDescription: "The Avengers assemble once more to reverse Thanos' actions and restore balance.",
        movieVerdict: "Spectacular",
        movieLanguage: "English",
        movieDirector: "Anthony Russo, Joe Russo",
        movieStarCast: {
            member1: "Robert Downey Jr.",
            member2: "Chris Evans",
            member3: "Mark Ruffalo",
            member4: "Chris Hemsworth",
            member5: "Scarlett Johansson",
        },
        movieCrewCast: {
            member1: "Kevin Feige",
            member2: "Alan Silvestri",
            member3: "Trent Opaloch",
            member4: "Jeffrey Ford",
            member5: "Matthew Schmidt",
        },
        movieRunTime: 181,
        movieMovieBarosRating: 8.4,
        movieImdbRating: 8.4,
        movieRottenTomatoesRating: 94,
        movieAgeRating: 13,
        movieGenre: {
            genre1: "Action",
            genre2: "Adventure",
            genre3: "Sci-Fi",
        },
        moviePoster: "https://drive.google.com/file/d/19YiGXrVUySI8GEyJ7b1LMrtfvh-fQ7L1/view?usp=drive_link",
        movieTrailer: "https://youtu.be/TcMBFSGVi1c?si=XMcP8k4W0FvNJHCE",
        movieWatchLinks: {
            link1: "https://www.hotstar.com/in/movies/avengers-endgame/1260013556?utm_source=gwa",
            link2: "https://www.youtube.com/watch?v=X7G1soqzaRA",
            link3: "https://www.primevideo.com/dp/amzn1.dv.gti.9dd673ef-7207-45df-8f6d-164643bc2750?autoplay=0&ref_=atv_cf_strg_wb",
            link4: "https://tv.apple.com/in/movie/marvel-studios-avengers-endgame/umc.cmc.4ao9tm6b6rz4sy7yj5v13ltf8",
        },
        movieBarosViews: "One of the Worlds most box office collecing movies of all time, ranks at the second.",
    },

];

export const seedMovies = async () => {
    try {
        await Movies.insertMany(movieSeeds);
        console.log("Movies seeded successfully");
    } catch (error) {
        console.log("Error seeding movies:", error);
    }
};