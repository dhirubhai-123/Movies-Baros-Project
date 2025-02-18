import Movie from "../models/movies.model.js";
import Show from "../models/shows.model.js";

export const searchSuggestions = async (req, res) => {
    let searchInput = req.params.searchName;

    // Ensure searchInput is a string and trim whitespace
    if (typeof searchInput !== 'string') {
        return res.status(400).json({ message: 'Search input must be a string',searchInput });
    }

    searchInput = searchInput.trim(); // Remove any leading/trailing spaces

    // If the search input is empty after trimming, return an error
    if (searchInput === '') {
        return res.status(400).json({ message: 'Search input cannot be empty' });
    }

    try {
        // Find matching movies and shows using regex
        const moviesSearchSuggestions = await Movie.find({
            movieName: { $regex: searchInput, $options: 'i' },
        });

        const showSearchSuggestions = await Show.find({
            showName: { $regex: searchInput, $options: 'i' },
        });

        // Check if no movies or shows were found
        if (moviesSearchSuggestions.length === 0 && showSearchSuggestions.length === 0) {
            return res.status(400).json({ message: `No results found for "${searchInput}"` });
        }

        // Return the results
        return res.status(200).json({
            message: `Results found for search: "${searchInput}"`,
            moviesSearchSuggestions,
            showSearchSuggestions,
        });

    } catch (error) {
        // Handle unexpected errors
        console.error('Error occurred:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};
