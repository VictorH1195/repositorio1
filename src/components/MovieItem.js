import { Link } from 'react-router-dom'
import styles from './movieItem.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {addMovie, removeMovie} from '../store/reducers/favorito'

export function MovieItem({movie}){

    const dispatch = useDispatch()

    function handleAddOnClick(){
        dispatch(addMovie(movie))
    }

    function handleRemoveOnClick(){
        dispatch(removeMovie(movie))
    }

    const moviesGlobal = useSelector(state => state.favorito.movies);

    function renderButton(){
        if(moviesGlobal.find(m=> m.id === movie.id)){
            return <button onClick={handleRemoveOnClick}>Remover dos favoritos</button>
        }else{
            return <button onClick={handleAddOnClick}>Adicionar aos favoritos</button>
        }
    }

    return(
       <div className={styles.itemContainer}>
            {movie.poster_path && <img src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} alt="" />}
            <h3>{movie.title}</h3>
            <p><Link to={`/movies/${movie.id}`}>Ver detalhes</Link></p>
            {renderButton()}
        </div>
    )
}