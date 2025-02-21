import { useSelector } from "react-redux"
import { MovieItem } from "../components/MovieItem";
import styles from './favorites.module.css'

export function Favorites(){

    const movies = useSelector(state => state.favorito.movies);
    console.log('Valor de movies em favorites: ' + movies)

    return(
        <div className={styles.containerFavorites}>
            <h1>Filmes favoritos</h1>
            <div className={styles.favorites}>
                {movies.map((movie) => <MovieItem key={movie.id} movie={movie}></MovieItem>)}
            </div>
        </div>
    )
}