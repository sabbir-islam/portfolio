import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from '../Pages/Home';
import Root from '../Root/Root';
import AboutMe from '../Pages/AboutMe';
import Works from '../Pages/Works';
import Contact from '../Pages/Contact';
import ContactMe from '../Pages/ContactMe';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            path: "/",
            Component: Home
        },
        {
          path: "/about",
          Component: AboutMe
        },
        {
          path: "/works",
          Component: Works
        },
        {
          path: "/contact",
          Component: ContactMe
        }
    ]
  },
]);