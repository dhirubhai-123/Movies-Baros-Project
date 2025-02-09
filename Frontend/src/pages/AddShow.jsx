import React, { useEffect, useState } from 'react';
import { useAuthStore } from '../Store/useAuthStore';
import toast from 'react-hot-toast';

const AddShow = () => {
    const { addShow } = useAuthStore();

    const [form, setForm] = useState({
        showName: '',
        showReleaseDate: '',
        showEndDate: '',
        showDescription: '',
        showVerdict: '',
        showLanguage: '',
        showDirector: '',
        showStarCast: { member1: '', member2: '', member3: '', member4: '', member5: '' },
        showCrewCast: { member1: '', member2: '', member3: '', member4: '', member5: '' },
        showNoOfSeasons: '',
        showNoOfEpisodes: '',
        showRunTime: '',
        showMovieBarosRating: '',
        showImdbRating: '',
        showRottenTomatoesRating: '',
        showAgeRating: '',
        showGenre: { genre1: '', genre2: '', genre3: '' },
        showPoster: '',
        showTrailer: '',
        showWatchLinks: { link1: '', link2: '', link3: '', link4: '' },
        movieBarosViews: '',
    });

    const validateForm = (form) => {

        if (form.showDescription.trim().length < 20 || form.showDescription.trim().length > 300) return toast.error("Description length shuold be in 20 to 300 chars.");
        if (form.showName.trim().length > 70) return toast.error("Movie Name should be under 70 chars.");
        if (form.showVerdict.trim().length > 20) return toast.error("Movie Verdict should be under 20 chars.");
        if (form.showDirector.trim().length > 50) return toast.error("Movie Director should be under 50 chars.");

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
            await addShow(form);
        }
    };


    // useEffect(() => {
    //     console.log();
    // }, [])

    return (
        <div className="max-w-3xl mx-auto p-4 ">
            <div className="absolute w-60 h-60 rounded-xl bg-purple-300 -top-5 -left-16 z-0 transform rotate-45 hidden lg:block"></div>
            <div className="absolute w-48 h-48 rounded-xl bg-purple-300 -bottom-6 -right-10 transform rotate-12 hidden lg:block"></div>
            <h2 className="text-2xl font-bold mb-4 relative z-50 text-center">Add Show Details</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 relative z-50">

                <div>
                    <label className="block text-gray-500" htmlFor='showName'>Show Name</label>
                    <input type="text" name="showName" id='showName' value={form.showName} onChange={handleChange} className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="block text-gray-500" htmlFor='showReleaseDate' >Show Release Date</label>
                    <input type="date" name="showReleaseDate" id='showReleaseDate' value={form.showReleaseDate} onChange={handleChange} className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="block text-gray-500" htmlFor='showEndDate' >Show Release Date</label>
                    <input type="date" name="showEndDate" id='showEndDate' value={form.showEndDate} onChange={handleChange} className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="block text-gray-500" htmlFor='showDescription'>Show Description</label>
                    <textarea name="showDescription" id='showDescription' value={form.showDescription} onChange={handleChange} className="textarea textarea-bordered w-full" required></textarea>
                </div>

                <div>
                    <label className="block text-gray-500" htmlFor='showVerdict'>Show Verdict</label>
                    <input type="text" name="showVerdict" id='showVerdict' value={form.showVerdict} onChange={handleChange} className="input input-bordered w-full" />
                </div>

                <div>
                    <label className="block text-gray-500" htmlFor='showLanguage'>Show Language</label>
                    <input type="text" name="showLanguage" id='showLanguage' value={form.showLanguage} onChange={handleChange} className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="block text-gray-500" htmlFor='showDirector'>Show Director</label>
                    <input type="text" name="showDirector" id='showDirector' value={form.showDirector} onChange={handleChange} className="input input-bordered w-full" required />
                </div>

                {/* Show Star Cast */}
                <div>
                    <label className="block text-gray-500" >Show Star Cast</label>
                    {['member1', 'member2', 'member3', 'member4', 'member5'].map((member) => (
                        <input
                            key={member}
                            type="text"
                            name={member}
                            placeholder={`Member ${member.slice(-1)}`}
                            value={form.showStarCast[member]}
                            onChange={(e) => handleNestedChange(e, 'showStarCast', member)}
                            className="input input-bordered w-full mt-1"
                            required
                        />
                    ))}
                </div>

                {/* Show Crew Cast */}
                <div>
                    <label className="block text-gray-500" >Show Crew Cast</label>
                    {['member1', 'member2', 'member3', 'member4', 'member5'].map((member) => (
                        <input
                            key={member}
                            type="text"
                            name={member}
                            placeholder={`Member ${member.slice(-1)}`}
                            value={form.showCrewCast[member]}
                            onChange={(e) => handleNestedChange(e, 'showCrewCast', member)}
                            className="input input-bordered w-full mt-1"
                            required
                        />
                    ))}
                </div>

                <div>
                    <label className="block text-gray-500" htmlFor='showNoOfSeasons'>Show No of Seasons</label>
                    <input type="number" name="showNoOfSeasons" id='showNoOfSeasons' value={form.showNoOfSeasons} onChange={handleChange} className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="block text-gray-500" htmlFor='showNoOfEpisodes'>Show No of Episodes</label>
                    <input type="number" name="showNoOfEpisodes" id='showNoOfEpisodes' value={form.showNoOfEpisodes} onChange={handleChange} className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="block text-gray-500" htmlFor='showRunTime'>Show Run Time</label>
                    <input type="number" name="showRunTime" id='showRunTime' value={form.showRunTime} onChange={handleChange} className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="block text-gray-500" htmlFor='showShowBarosRating'>Show Baros Rating</label>
                    <input type="number" name="showMovieBarosRating" id='showMovieBarosRating' value={form.showMovieBarosRating} onChange={handleChange} className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="block text-gray-500" htmlFor='showImdbRating'>Show IMDB Rating</label>
                    <input type="number" name="showImdbRating" id='showImdbRating' value={form.showImdbRating} onChange={handleChange} className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="block text-gray-500" htmlFor='showRottenTomatoesRating'>Show Rotten Tomatoes Rating</label>
                    <input type="number" name="showRottenTomatoesRating" id='showRottenTomatoesRating' value={form.showRottenTomatoesRating} onChange={handleChange} className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="block text-gray-500" htmlFor='showAgeRating'>Show Age Rating</label>
                    <input type="number" name="showAgeRating" id='showAgeRating' value={form.showAgeRating} onChange={handleChange} className="input input-bordered w-full" required />
                </div>

                {/* Show Genre */}
                <div>
                    <label className="block text-gray-500" >Show Genre</label>
                    {['genre1', 'genre2', 'genre3'].map((genre) => (
                        <input
                            key={genre}
                            type="text"
                            name={genre}
                            placeholder={`Genre ${genre.slice(-1)}`}
                            value={form.showGenre[genre]}
                            onChange={(e) => handleNestedChange(e, 'showGenre', genre)}
                            className="input input-bordered w-full mt-1"
                            required
                        />
                    ))}
                </div>

                <div>
                    <label className="block text-gray-500" htmlFor='showPoster'>Show Poster URL</label>
                    <input type="text" name="showPoster" id='showPoster' value={form.showPoster} onChange={handleChange} className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="block text-gray-500" htmlFor='showTrailer'>Show Trailer URL</label>
                    <input type="text" name="showTrailer" id='showTrailer' value={form.showTrailer} onChange={handleChange} className="input input-bordered w-full" required />
                </div>

                {/* Show Watch Links */}
                <div>
                    <label className="block text-gray-500" >Show Watch Links</label>
                    {['link1', 'link2', 'link3', 'link4'].map((link) => (
                        <input
                            key={link}
                            type="text"
                            name={link}
                            placeholder={`Link ${link.slice(-1)}`}
                            value={form.showWatchLinks[link]}
                            onChange={(e) => handleNestedChange(e, 'showWatchLinks', link)}
                            className="input input-bordered w-full mt-1"
                            required={link === 'link1'}
                        />
                    ))}
                </div>

                <div>
                    <label className="block text-gray-500" htmlFor='movieBarosViews'>Show Baros Views</label>
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

export default AddShow;
