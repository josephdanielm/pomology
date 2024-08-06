import App from "./App";
import Home from "./pages/Home"
import ErrorPage from "./pages/ErrorPage";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/shop',
                element: <Shop />
            },
            {
                path: '/checkout',
                element: <Checkout />
            },
        ],
    },
]

export default routes;