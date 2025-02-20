import { Link } from "react-router-dom";
import styles from './header.module.css'

export function Header(){
    return(
        <div className={styles.containerHeader}>
            
                <Link className={styles.link1} to={"/"}>Home</Link>
                <Link className={styles.link2} to={"/movies"}>Movies</Link>
          
        </div>
    )
}