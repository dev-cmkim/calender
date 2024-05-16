import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import App from "./App";
import Home from "./components/page/home";
import Calender from "./components/calender/calender";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "calender/:type",
                element: <Calender/>
            }
        ]
    }
])

export default router;