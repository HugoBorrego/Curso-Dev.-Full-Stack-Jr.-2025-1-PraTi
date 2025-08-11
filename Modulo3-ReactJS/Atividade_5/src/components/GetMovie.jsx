import { useEffect, useState, useRef } from "react"
import axios from 'axios'
import './GetMovie.css'

export default function GetMovie() {
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')
    const [erro, setErro] = useState(null)
    const [loading, setLoading] = useState(false)
    const carouselRef = useRef(null)
    const [selectedMovie, setSelectedMovie] = useState(null)
    const [favoriteMovie, setFavoriteMovie] = useState(null)

    const scrollLeft = () => {
        carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' })
    }

    const scrollRight = () => {
        carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }

    useEffect(() => {
        setLoading(true)
        setErro(null)
        getMovies()
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
            // console.log(response.data.results)
            setMovies(response.data.results)
            setLoading(false)
        }).catch(error => {
            setErro(error.message)
            setLoading(false)
        })
    }

    const handleSearch = () => {
        if (!search.trim()) return

        setLoading(true)
        setErro(null)

        axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/search/movie',
            params: {
                api_key: '6214d79d96730772f84a884a0fe2705a',
                language: 'pt-BR',
                query: search
            }
        }).then(response => {
            const result = response.data.results[0]
            if (result) {
                setSelectedMovie(result)
                search.innerHTML = ''
            } else {
                setErro("Filme não encontrado.")
            }
            setLoading(false)
        }).catch(error => {
            setErro(error.message)
            setLoading(false)
        })
    }

    const handleFavorite = () => {
        if (!selectedMovie) return

        const storedFavorites = JSON.parse(localStorage.getItem('favoriteMovies')) || []
        const isAlreadyFavorite = storedFavorites.some(movie => movie.id === selectedMovie.id)

        if (!isAlreadyFavorite) {
            const updatedFavorites = [...storedFavorites, selectedMovie]
            localStorage.setItem('favoriteMovies', JSON.stringify(updatedFavorites))
            setFavoriteMovie(selectedMovie)
        } else {
            const updatedFavorites = storedFavorites.filter(movie => movie.id !== selectedMovie.id)
            localStorage.setItem('favoriteMovies', JSON.stringify(updatedFavorites))
            setFavoriteMovie(null)
        }
    }


    return (
        <div>
            {loading && <p>Carregando filmes...</p>}
            {erro && <p>Erro ao carregar filmes: {erro}</p>}

            <div className="search-header">
                <input
                    type="text"
                    placeholder="Digite o nome do filme..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={handleSearch}>Buscar</button>
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
                            {/* <p><strong>Diretor</strong> - {selectedMovie.director}</p>
                            <p><strong>Elenco</strong> - {selectedMovie.cast}</p> */}
                            <p><strong>Sinopse</strong> - {selectedMovie.overview}</p>
                            <p><strong>Avaliação</strong> - {selectedMovie.vote_average}</p>
                            <button onClick={() => setSelectedMovie(null)}>Fechar</button>
                            <button
                                className={`favorite-button ${favoriteMovie?.id === selectedMovie?.id ? 'active' : ''}`} onClick={handleFavorite}>★</button>

                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}