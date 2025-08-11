import { useEffect, useState, useRef } from "react";
import axios from 'axios'
import './GetMovie.css'

export default function GetMovie() {
    const [movies, setMovies] = useState([])
    const [erro, setErro] = useState(null)
    const [loading, setLoading] = useState(false)
    const carouselRef = useRef(null);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const scrollLeft = () => {
        carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };


    useEffect(() => {
        setLoading(true)
        setErro(null)
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
            setMovies(response.data.results);
            setLoading(false);
        }).catch(error => {
            setErro(error.message);
            setLoading(false);
        })
    }

    return (
        <div>
            {loading && <p>Carregando filmes...</p>}
            {erro && <p>Erro ao carregar filmes: {erro}</p>}

            <div className="search-movie">
                
            </div>

            <div className="carousel-wrapper">
                <button className="nav-button left" onClick={scrollLeft}>‹</button>

                <ul className="movie-carousel" ref={carouselRef}>
                    {movies.map((movie) => (
                        <li className="movie-card" key={movie.id}>
                            <div className="movie-poster">
                                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
                                <p><strong>{movie.title}</strong></p>
                                <p>{movie.release_date}</p>
                            </div>
                            <button onClick={() => setSelectedMovie(movie)}>Saiba mais</button>
                        </li>
                    ))}
                </ul>

                <button className="nav-button right" onClick={scrollRight}>›</button>

                {selectedMovie && (
                    <div className="movie-modal" onClick={() => setSelectedMovie(null)}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <img src={`https://image.tmdb.org/t/p/w300/${selectedMovie.poster_path}`} alt={selectedMovie.title} />
                            <h2>{selectedMovie.title}</h2>
                            <p>{selectedMovie.overview}</p>
                            <button onClick={() => setSelectedMovie(null)}>Fechar</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
