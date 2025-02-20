import { useMovies } from "../hooks/useMovies"

export function Movies(){

    const movies = useMovies()
    return(
        <div>
            <h1>Página de filmes</h1>
            <ul>
                {movies.map((movie) => <li>{movie.title}</li>)}
            </ul>
        </div>
    )
}