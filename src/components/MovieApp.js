import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

const MovieApp = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [movies, setMovies] = useState([]);



    //fetch the movie
    const fetchMovies = async (searchTerm) => {
        setLoading(true);
        setError(null);

        console.log('valor = ' + process.env.REACT_APP_API_KEY_PAULODM);

        try {

            //const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY_PAULODM}&s=${searchTerm}`);

            //

            const response=await axios.get(`https://www.omdbapi.com/?apikey=6ed7a431&s=${searchTerm}`);



            if (response.data.Response === "True") {
                //console.log(response.data);
                setMovies(response.data.Search);
            } else {
                setError(response.data.Error);
            }
        } catch (error) {
            setError('An Error Occured While Fetching the Data:', error);
        } finally {
            setLoading(false);
        }
    }


    return (
        <div>

            <h3>Search for your favorite video</h3>

            <SearchBar onSearch={fetchMovies} />
            <br />
            <br />

            {loading && <p>Loading....</p>}
            {error && <p>{error}</p>}

            <MovieList movies={movies} />
        </div>);
}

export default MovieApp;