import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
    movieName: {
        type: String,
        required: true,
    },
    movieReleaseDate: {
        type: Date,
        required: true,
    },
    movieDescription: {
        type: String,
        required: true,
    },
    movieVerdict: {
        type: String,
    },
    movieLanguage: {
        type: String,
        required: true,
    },
    movieDirector: {
        type: String,
        required: true,
    },
    movieStarCast: {
        member1: {
            type: String,
            required: true,
        },
        member2: {
            type: String,
            required: true,
        },
        member3: {
            type: String,
            required: true,
        },
        member4: {
            type: String,
            required: true,
        },
        member5: {
            type: String,
            required: true,
        }
    },
    movieCrewCast: {
        member1: {
            type: String,
            required: true,
        },
        member2: {
            type: String,
            required: true,
        },
        member3: {
            type: String,
            required: true,
        },
        member4: {
            type: String,
            required: true,
        },
        member5: {
            type: String,
            required: true,
        }
    },
    movieRunTime: {
        type: Number,
        required: true,
    },
    movieMovieBarosRating: {
        type: Number,
        required: true,
    },
    movieImdbRating: {
        type: Number,
        required: true,
    },
    movieRottenTomatoesRating: {
        type: Number,
        required: true,
    },
    movieAgeRating: {
        type: Number,
        required: true,
    },
    movieGenre: {
        genre1: {
            type: String,
            required: true,
        },
        genre2: {
            type: String,
            required: true,
        },
        genre3: {
            type: String,
            required: true,
        },
    },
    moviePoster: {
        type: String,
        required: true
    },
    movieTrailer: {
        type: String,
        required: true,
    },
    movieWatchLinks: {
        link1: {
            type: String,
            required: true,
        },
        link2: {
            type: String,
        },
        link3: {
            type: String,
        },
        link4: {
            type: String,
        },
    },
    movieBarosViews: {
        type: String,
    }
},

    { timestamps: true }

)

const Movie = mongoose.model("Movie", movieSchema)

export default Movie;




const animatedMoviesCollection = [
    {
      movieName: "Toy Story 3",
      movieReleaseDate: new Date('2010-06-18'),
      movieDescription: "Andy is now 17 years old, and his toys are left behind in a daycare center. As they try to return to their rightful owner, they discover a darker side to their new home.",
      movieVerdict: "blockbuster",
      movieLanguage: "English",
      movieDirector: "Lee Unkrich",
      movieStarCast: {
        member1: "Tom Hanks",
        member2: "Tim Allen",
        member3: "Joan Cusack",
        member4: "Ned Beatty",
        member5: "Michael Keaton"
      },
      movieCrewCast: {
        member1: "Randy Newman",
        member2: "Lee Unkrich",
        member3: "Darla K. Anderson",
        member4: "Josh Cooley",
        member5: "John Lasseter"
      },
      movieRunTime: 103,
      movieMovieBarosRating: 9.0,
      movieImdbRating: 8.3,
      movieRottenTomatoesRating: 98,
      movieAgeRating: 7,
      movieGenre: {
        genre1: "Animation",
        genre2: "Adventure",
        genre3: "Comedy"
      },
      moviePoster: "https://m.media-amazon.com/images/I/61GFXs8YqgL._AC_SY679_.jpg",
      movieTrailer: "https://www.youtube.com/watch?v=JcpWXaA2qHk",
      movieWatchLinks: {
        link1: "https://www.disneyplus.com/movies/toy-story-3/1d0xYjyopq7t",
        link2: "https://www.primevideo.com/dp/amzn1.dv.gti.f6ba59e0-a49a-d040-007c-ee33ba70ed79?autoplay=0&ref_=atv_cf_strg_wb",
        link3: "https://tv.apple.com/in/movie/toy-story-3/umc.cmc.5eyei47zjeao0u3wdwn5lv93c",
        link4: "NA"
      },
      movieBarosViews: "Before Andy leaves for college, his toys are mistakenly delivered to a day care centre. Woody convinces the other toys that they were not dumped and leads them on an expedition back home."
    },
    {
      movieName: "Frozen",
      movieReleaseDate: new Date('2013-11-27'),
      movieDescription: "When their kingdom is trapped in an eternal winter, two sisters must journey to find the mysterious Ice Queen, their estranged sister Elsa, to end the curse.",
      movieVerdict: "blockbuster",
      movieLanguage: "English",
      movieDirector: "Chris Buck, Jennifer Lee",
      movieStarCast: {
        member1: "Idina Menzel",
        member2: "Kristen Bell",
        member3: "Josh Gad",
        member4: "Santino Fontana",
        member5: "Alan Tudyk"
      },
      movieCrewCast: {
        member1: "Kristen Anderson-Lopez",
        member2: "Robert Lopez",
        member3: "Chris Buck",
        member4: "Jennifer Lee",
        member5: "Peter Del Vecho"
      },
      movieRunTime: 102,
      movieMovieBarosRating: 8.2,
      movieImdbRating: 7.4,
      movieRottenTomatoesRating: 90,
      movieAgeRating: 7,
      movieGenre: {
        genre1: "Animation",
        genre2: "Adventure",
        genre3: "Family"
      },
      moviePoster: "https://m.media-amazon.com/images/I/71IbOqV5vnL._AC_SY679_.jpg",
      movieTrailer: "https://www.youtube.com/watch?v=TbQm5doF_Uc",
      movieWatchLinks: {
        link1: "https://www.disneyplus.com/movies/frozen/4dfe857d-bc01-4b98-a85f-f2b0634317d6",
        link2: "https://www.youtube.com/watch?v=Pou4Yn3T1-I",
        link3: "https://www.primevideo.com/dp/amzn1.dv.gti.feb6eacb-c020-6fa5-103f-aaefeb78add2?autoplay=0&ref_=atv_cf_strg_wb",
        link4: "https://tv.apple.com/in/movie/frozen/umc.cmc.4b17gber8k76h90rzlulvrbcl"
      },
      movieBarosViews: "Snow Queen Elsa inadvertently uses her power to make her kingdom experience constant wintriness. Her sister Anna teams up with mountaineer Kristoff and his reindeer to demolish the snowy spell."
    },
    {
      movieName: "Zootopia",
      movieReleaseDate: new Date('2016-03-17'),
      movieDescription: "In a city inhabited by anthropomorphic animals, a bunny cop teams up with a con artist fox to solve a mystery, uncovering a plot that threatens the peace of the city.",
      movieVerdict: "hit",
      movieLanguage: "English",
      movieDirector: "Byron Howard, Rich Moore",
      movieStarCast: {
        member1: "Ginnifer Goodwin",
        member2: "Jason Bateman",
        member3: "Idris Elba",
        member4: "Jenny Slate",
        member5: "Shakira"
      },
      movieCrewCast: {
        member1: "Michael Giacchino",
        member2: "Byron Howard",
        member3: "Rich Moore",
        member4: "Clint Eastwood",
        member5: "Walt Disney"
      },
      movieRunTime: 108,
      movieMovieBarosRating: 8.0,
      movieImdbRating: 8.0,
      movieRottenTomatoesRating: 98,
      movieAgeRating: 7,
      movieGenre: {
        genre1: "Animation",
        genre2: "Adventure",
        genre3: "Comedy"
      },
      moviePoster: "https://m.media-amazon.com/images/I/91gY+k4fS9L._AC_SY679_.jpg",
      movieTrailer: "https://www.youtube.com/watch?v=RISE5txp0Vw",
      movieWatchLinks: {
        link1: "https://www.disneyplus.com/movies/zootopia/2e5d9db9-24b7-48d8-8d55-b0d86b3c8c62",
        link2: "https://tv.apple.com/in/movie/zootopia/umc.cmc.24f3dqmqxdcw4bmcv1c9zw9gj",
        link3: "https://www.primevideo.com/dp/amzn1.dv.gti.f4b77b1b-9632-9d5f-5556-ab448c4aaa7f?autoplay=0&ref_=atv_cf_strg_wb",
        link4: "NA"
      },
      movieBarosViews: "When Judy Hopps, a rookie officer in the Zootopia Police Department, sniffs out a sinister plot, she enlists the help of a con artist to solve the case in order to prove her abilities to Chief Bogo."
    },
    {
      "movieName": "Coco",
      "movieReleaseDate": "2017-11-22",
      "movieDescription": "A young boy named Miguel embarks on a journey to the Land of the Dead to uncover the story of his family and find his musical idol.",
      "movieVerdict": "superhit",
      "movieLanguage": "English",
      "movieDirector": "Lee Unkrich, Adrian Molina",
      "movieStarCast": {
        "member1": "Anthony Gonzalez",
        "member2": "Gael García Bernal",
        "member3": "Benjamin Bratt",
        "member4": "Renee Victor",
        "member5": "Alanna Ubach"
      },
      "movieCrewCast": {
        "member1": "Michael Giacchino",
        "member2": "Lee Unkrich",
        "member3": "Adrian Molina",
        "member4": "Mark Nielsen",
        "member5": "Darla K. Anderson"
      },
      "movieRunTime": 105,
      "movieMovieBarosRating": 8.6,
      "movieImdbRating": 8.4,
      "movieRottenTomatoesRating": 97,
      "movieAgeRating": 7,
      "movieGenre": {
        "genre1": "Animation",
        "genre2": "Adventure",
        "genre3": "Family"
      },
      "moviePoster": "https://m.media-amazon.com/images/I/71Bv1SmEq6L._AC_SY679_.jpg",
      "movieTrailer": "https://www.youtube.com/watch?v=IxE4sFf8Bf0",
      "movieWatchLinks": {
        "link1": "https://www.disneyplus.com/movies/coco/cc9278cc-e168-4fe7-8ff5-c0a6d1b07c9f",
        "link2": "https://play.google.com/store/movies/details?id=R6hCGSs_uKo",
        "link3": "https://www.primevideo.com/dp/amzn1.dv.gti.2cb835c2-4d35-a2d4-4a21-95dab190e89b?autoplay=0&ref_=atv_cf_strg_wb",
        "link4": "https://tv.apple.com/in/movie/coco-2017/umc.cmc.5y1554je00oslx5xtkxv9uk7s?action=play"
      },
      "movieBarosViews": "Despite his family's generations-old ban on music, young Miguel dreams of becoming an accomplished musician like his idol Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead. After meeting a charming trickster named Héctor, the two new friends embark on an extraordinary journey to unlock the real story behind Miguel's family history."
    }
  ];
  