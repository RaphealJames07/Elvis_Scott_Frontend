import {RouterProvider, createBrowserRouter} from "react-router-dom";

import ErrorPage from "./components/ErrorPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AppStructure from "./components/AppStructure";
import Cart from "./pages/Cart";
import HomeStructure from "./pages/home/HomeStructure";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "",
            errorElement: <ErrorPage />,
            element: <AppStructure />,
            children: [
                {
                    path: "",
                    element: <HomeStructure />,
                },
                {
                    path: "cart",
                    element: <Cart />,
                },
                {
                    path: "collections",
                    element: <Cart />,
                    children:[
                        {
                            path:"all-sneakers",
                            element: <AppStructure/>
                        },
                        {
                            path:"shoes",
                            element: <AppStructure/>
                        },
                        {
                            path:"streetwears",
                            element: <AppStructure/>
                        },
                        {
                            path:"accessories",
                            element: <AppStructure/>
                        },
                        {
                            path:"new",
                            element: <AppStructure/>
                        },
                        {
                            path:"quick-delivery",
                            element: <AppStructure/>
                        },
                    ]
                },
            ],
        },
        {
            path: "/register",
            errorElement: <ErrorPage />,
            element: <Register />,
        },
        {
            path: "/login",
            errorElement: <ErrorPage />,
            element: <Login />,
        },
    ]);
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;
