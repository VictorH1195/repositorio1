import axios from "axios";

export const moviesApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxM2VmYjRiNWQ3ZjM0MGE3YmI0YmFmOWFmYzliNzZlZCIsIm5iZiI6MTczNzQ5MTU0Ni42NDcsInN1YiI6IjY3OTAwNDVhZjg3ZjQxMTllNmFhYzVhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2SPd_EIdHImfWcjnGXppxl2OTRdN7lcqSsJZnJMv8BM'
    }
})