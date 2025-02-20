import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./views/RootLayout";
import { Home } from "./views/Home";
import { Movies } from "./views/Movies";
import { MovieDetail } from "./views/MovieDetail";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout></RootLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/movies',
                element: <Movies></Movies>
            },
            {
                path:'/movies/:id',
                element: <MovieDetail></MovieDetail>
            },
        ]
    }
])