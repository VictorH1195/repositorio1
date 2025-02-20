import { Link } from 'react-router-dom'
import styles from './movieItem.module.css'

export function MovieItem({movie}){
    return(
       <div className={styles.itemContainer}>
            {movie.poster_path && <img src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} alt="" />}
            <h3>{movie.title}</h3>
            <p><Link to={`/movies/${movie.id}`}>Ver detalhes</Link></p>
        </div>
    )
}