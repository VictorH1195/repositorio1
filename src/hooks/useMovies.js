import { useEffect, useState } from "react"
import { getPopularMovies } from "../services/movies.services"

export function useMovies(){

    const [movies, setMovies] = useState([])

    useEffect(() => { //chama useEffect para que não entre em um loop pois o setPersons vai fazer o componente ser renderizado novamente, então o código iria ser executado do começo e entrar em umu loop, com o useEffect com parametro vazio ele só executa o código dentro dele na primeira renderização do componente
        getPopularMovies().then(({data}) => {
            setMovies(data.results)
            console.log(data.results)
        })
    }, [])

    return movies
}