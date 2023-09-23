import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Practice from "./components/Practice"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./reducers/appStore";
import Cart from "./components/Cart";


const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Grocery = lazy(() => import("./components/Grocery"));


const AppLayout = () => {
    const [userName, setUserName] = useState();

    useEffect(() => {
        const getData = {
            name: "Rajat",
        };
        setUserName(getData.name);
    }, [])

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
                <div className="app">
                    {/* <Practice /> */}
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    )
}

const appRoute = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>,
            },
            {
                path: "/contact",
                element: <Suspense fallback={<h1>Loading...</h1>}><Contact /></Suspense>,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
            },
            {
                path: "/restaurantmenu/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/Cart",
                element: <Cart />
            },],
        errorElement: <Error />,
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRoute} />);
