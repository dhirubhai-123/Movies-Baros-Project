import React, { useState } from 'react';
import { useAuthStore } from '../Store/useAuthStore';
import toast from 'react-hot-toast';

const AddMovie = () => {
    const { addMovie } = useAuthStore();
    const [form, setForm] = useState({
        movieName: '',
        movieReleaseDate: '',
        movieDescription: '',
        movieVerdict: '',
        movieLanguage: '',
        movieDirector: '',
        movieStarCast: { member1: '', member2: '', member3: '', member4: '', member5: '' },
        movieCrewCast: { member1: '', member2: '', member3: '', member4: '', member5: '' },
        movieRunTime: '',
        movieMovieBarosRating: '',
        movieImdbRating: '',
        movieRottenTomatoesRating: '',
        movieAgeRating: '',
        movieGenre: { genre1: '', genre2: '', genre3: '' },
        moviePoster: '',
        movieTrailer: '',
        movieWatchLinks: { link1: '', link2: '', link3: '', link4: '' },
        movieBarosViews: '',
    });

    const validateForm = (form) => {

        if (form.movieDescription.trim().length < 20 || form.movieDescription.trim().length > 300) return toast.error("Description length shuold be in 20 to 300 chars.");
        if (form.movieName.trim().length > 70) return toast.error("Movie Name should be under 70 chars.");
        if (form.movieVerdict.trim().length > 20) return toast.error("Movie Verdict should be under 20 chars.");
        if (form.movieDirector.trim().length > 50) return toast.error("Movie Director should be under 50 chars.");

        return true;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleNestedChange = (e, category, field) => {
        const { value } = e.target;
        setForm({ ...form, [category]: { ...form[category], [field]: value } });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // console.log(form);
        const success = validateForm(form);
        if (success) {
            await addMovie(form);
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-4 ">
            <div className="absolute w-60 h-60 rounded-xl bg-purple-300 -top-5 -left-16 z-0 transform rotate-45 hidden lg:block"></div>
            <div className="absolute w-48 h-48 rounded-xl bg-purple-300 -bottom-6 -right-10 transform rotate-12 hidden lg:block"></div>
            <h2 className="text-2xl font-bold mb-4 relative z-50 text-center">Add Movie Details</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 relative z-50">

                <div>
                    <label className="block text-gray-500" htmlFor='movieName'>Movie Name</label>
                    <input type="text" name="movieName" id='movieName' value={form.movieName} onChange={handleChange} className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="block text-gray-500" htmlFor='movieReleaseDate' >Movie Release Date</label>
                    <input type="date" name="movieReleaseDate" id='movieReleaseDate' value={form.movieReleaseDate} onChange={handleChange} className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="block text-gray-500" htmlFor='movieDescription'>Movie Description</label>
                    <textarea name="movieDescription" id='movieDescription' value={form.movieDescription} onChange={handleChange} className="textarea textarea-bordered w-full" required></textarea>
                </div>

                <div>
                    <label className="block text-gray-500" htmlFor='movieVerdict'>Movie Verdict</label>
                    <input type="text" name="movieVerdict" id='movieVerdict' value={form.movieVerdict} onChange={handleChange} className="input input-bordered w-full" />
                </div>

                <div>
                    <label className="block text-gray-500" htmlFor='movieLanguage'>Movie Language</label>
                    <input type="text" name="movieLanguage" id='movieLanguage' value={form.movieLanguage} onChange={handleChange} className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="block text-gray-500" htmlFor='movieDirector'>Movie Director</label>
                    <input type="text" name="movieDirector" id='movieDirector' value={form.movieDirector} onChange={handleChange} className="input input-bordered w-full" required />
                </div>

                {/* Movie Star Cast */}
                <div>
                    <label className="block text-gray-500" >Movie Star Cast</label>
                    {['member1', 'member2', 'member3', 'member4', 'member5'].map((member) => (
                        <input
                            key={member}
                            type="text"
                            name={member}
                            placeholder={`Member ${member.slice(-1)}`}
                            value={form.movieStarCast[member]}
                            onChange={(e) => handleNestedChange(e, 'movieStarCast', member)}
                            className="input input-bordered w-full mt-1"
                            required
                        />
                    ))}
                </div>

                {/* Movie Crew Cast */}
                <div>
                    <label className="block text-gray-500" >Movie Crew Cast</label>
                    {['member1', 'member2', 'member3', 'member4', 'member5'].map((member) => (
                        <input
                            key={member}
                            type="text"
                            name={member}
                            placeholder={`Member ${member.slice(-1)}`}
                            value={form.movieCrewCast[member]}
                            onChange={(e) => handleNestedChange(e, 'movieCrewCast', member)}
                            className="input input-bordered w-full mt-1"
                            required
                        />
                    ))}
                </div>

                <div>
                    <label className="block text-gray-500" htmlFor='movieRunTime'>Movie Run Time</label>
                    <input type="number" name="movieRunTime" id='movieRunTime' value={form.movieRunTime} onChange={handleChange} className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="block text-gray-500" htmlFor='movieMovieBarosRating'>Movie Baros Rating</label>
                    <input type="number" name="movieMovieBarosRating" id='movieMovieBarosRating' value={form.movieMovieBarosRating} onChange={handleChange} className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="block text-gray-500" htmlFor='movieImdbRating'>Movie IMDB Rating</label>
                    <input type="number" name="movieImdbRating" id='movieImdbRating' value={form.movieImdbRating} onChange={handleChange} className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="block text-gray-500" htmlFor='movieRottenTomatoesRating'>Movie Rotten Tomatoes Rating</label>
                    <input type="number" name="movieRottenTomatoesRating" id='movieRottenTomatoesRating' value={form.movieRottenTomatoesRating} onChange={handleChange} className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="block text-gray-500" htmlFor='movieAgeRating'>Movie Age Rating</label>
                    <input type="number" name="movieAgeRating" id='movieAgeRating' value={form.movieAgeRating} onChange={handleChange} className="input input-bordered w-full" required />
                </div>

                {/* Movie Genre */}
                <div>
                    <label className="block text-gray-500" >Movie Genre</label>
                    {['genre1', 'genre2', 'genre3'].map((genre) => (
                        <input
                            key={genre}
                            type="text"
                            name={genre}
                            placeholder={`Genre ${genre.slice(-1)}`}
                            value={form.movieGenre[genre]}
                            onChange={(e) => handleNestedChange(e, 'movieGenre', genre)}
                            className="input input-bordered w-full mt-1"
                            required
                        />
                    ))}
                </div>

                <div>
                    <label className="block text-gray-500" htmlFor='moviePoster'>Movie Poster URL</label>
                    <input type="text" name="moviePoster" id='moviePoster' value={form.moviePoster} onChange={handleChange} className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="block text-gray-500" htmlFor='movieTrailer'>Movie Trailer URL</label>
                    <input type="text" name="movieTrailer" id='movieTrailer' value={form.movieTrailer} onChange={handleChange} className="input input-bordered w-full" required />
                </div>

                {/* Movie Watch Links */}
                <div>
                    <label className="block text-gray-500" >Movie Watch Links</label>
                    {['link1', 'link2', 'link3', 'link4'].map((link) => (
                        <input
                            key={link}
                            type="text"
                            name={link}
                            placeholder={`Link ${link.slice(-1)}`}
                            value={form.movieWatchLinks[link]}
                            onChange={(e) => handleNestedChange(e, 'movieWatchLinks', link)}
                            className="input input-bordered w-full mt-1"
                            required={link === 'link1'}
                        />
                    ))}
                </div>

                <div>
                    <label className="block text-gray-500" htmlFor='movieBarosViews'>Movie Baros Views</label>
                    <input type="text" name="movieBarosViews" id='movieBarosViews' value={form.movieBarosViews} onChange={handleChange} className="input input-bordered w-full" />
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
            <div className="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden lg:block"></div>
            <div className="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden lg:block"></div>
        </div>
    );
};

export default AddMovie;
