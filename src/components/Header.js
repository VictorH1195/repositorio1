import { Link } from "react-router-dom";
import styles from './header.module.css'
import { useSelector } from "react-redux";

export function Header(){

    const totalMovies = useSelector(state => state.favorito.movies.length);

    return(
        <div className={styles.containerHeader}>
            
                <Link className={styles.link1} to={"/"}>Home</Link>
                <Link className={styles.link2} to={"/movies"}>Movies</Link>
                <Link className={styles.link3} to={"/favorites"}>Favorites ({totalMovies})</Link>
        </div>
    )
}