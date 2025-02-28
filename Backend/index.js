import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./src/lib/db.js"
import authRouter from "./src/routes/auth.route.js"
import moviesRouter from "./src/routes/movies.route.js"
import showsRouter from "./src/routes/shows.route.js"
import cors from "cors"
import cookieParser from "cookie-parser"
// import { seedMovies } from "./src/seeds/movie.seed.js"
import searchRouter from "./src/routes/search.route.js"
import playListRouter from "./src/routes/playlist.route.js"
import adminRouter from "./src/routes/authAdmin.route.js"

//Middlewares 
dotenv.config()


const port = process.env.PORT
const app = express()

app.use(cors(
    {
        origin: 'https://movies-baros-project-frontend.onrender.com',
        credentials: true
    }
));
app.use(cookieParser())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        return res.status(200).json({});
    }
    next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use("/api/auth", authRouter);
app.use("/api/movies", moviesRouter);
app.use("/api/shows", showsRouter);
app.use("/api/search", searchRouter);
app.use("/api/playList", playListRouter);
app.use("/api/admin", adminRouter);


app.listen(port, () => {
    console.log("Server is listening at ", port)
    connectDB();
})