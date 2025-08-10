import { useEffect, useState } from "react";
import axios from 'axios'

export default function GetMovie() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMovies();
    }, [])

    const getMovies = () => {
        axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: '6214d79d96730772f84a884a0fe2705a',
                language: 'pt-Br'
            }
        }).then(response => {
            setMovies(response.data.results)
            console.log(response.data.results)
        })
    }

    return (
        <ul className="movie-list">
            {movies.map((movie) =>
                <li className="movie-card"> 
                    <p>
                        {movie.title}
                    </p>
                    <p>
                        {movie.overview}
                    </p>
                    <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="" />
                </li>
            )}
        </ul>
    )
}
