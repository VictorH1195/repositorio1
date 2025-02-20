import { MovieItem } from "../components/MovieItem"
import { useMovies } from "../hooks/useMovies"
import styles from './movies.module.css'

export function Movies(){

    const movies = useMovies()
    return(
        <div className={styles.moviesContainer}>
            <h1 className={styles.title}>Filmes populares</h1>
            <div className={styles.moviesList}>
                {movies.map((movie) => <MovieItem movie={movie}></MovieItem>)}
            </div>
        </div>
    )
}