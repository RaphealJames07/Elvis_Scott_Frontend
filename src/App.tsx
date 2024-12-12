import {RouterProvider, createBrowserRouter} from "react-router-dom";

import ErrorPage from "./components/ErrorPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AppStructure from "./components/AppStructure";
import Cart from "./pages/Cart";
import HomeStructure from "./pages/home/HomeStructure";
import DynamicCollectionsHome from "./pages/collections/DynamicCollectionsHome";
import Profile from "./pages/profile/Profile";
import MyOrders from "./pages/profile/MyOrders";
import MyInfo from "./pages/profile/MyInfo";
import Wishlist from "./pages/Wishlist";
import Search from "./pages/Search";
import DeliveryAddress from "./pages/profile/DeliveryAddress";
import LoyaltyProgramm from "./pages/profile/LoyaltyProgramm";
import GiftCards from "./pages/profile/GiftCards";

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
                    path: "wishlist",
                    element: <Wishlist />,
                },
                {
                    path: "search/:q?",
                    element: <Search />,
                },
                {
                    path: "collections/:slug",
                    element: <DynamicCollectionsHome />,
                },
                {
                    path: "account",
                    element: <Profile />,
                    children: [
                        {
                            path: "my-orders",
                            element: <MyOrders />,
                        },
                        {
                            path: "my-profile",
                            element: <MyInfo />,
                        },
                        {
                            path: "my-delivery-address",
                            element: <DeliveryAddress />,
                        },
                        {
                            path: "loyalty-program",
                            element: <LoyaltyProgramm />,
                        },
                        {
                            path: "gift-card",
                            element: <GiftCards />,
                        },
                    ],
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
