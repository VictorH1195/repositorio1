import { useParams } from "react-router-dom"
import { useMovie } from "../hooks/useMovies"
import styles from './movieDetail.module.css'

export function MovieDetail(){
    const {id} = useParams()
    const movie = useMovie(id)

    return(
        <div className={styles.containerMovieDetail}>
            {movie.poster_path && <img src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} alt="" />}
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
        </div>
    )
}