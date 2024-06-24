import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter , createRoutesFromElements, Route} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Github from "./components/Github/Github.jsx";
import {GitLoader} from "./components/Github/GitLoader.jsx";

import "./index.css";
 
//router provider is used to render child routes in the parent route
//create browser router is used to create routes

// // method 1: using createBrowserRouter
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { path: "", element: <Home /> },
//       { path: "about", element: <About /> },
//       { path: "contact", element: <Contact /> },
//       { path: "user/:userId", element: <User /> },

//     ],
//   },
// ]);


//method 2: using createRoutesFromElements
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userId' element={<User />} />
      <Route 
      path='github' element={<Github />}
      //loader is used to fetch data from API 
      //when the page is loaded, data is stored in data variable
      loader={GitLoader}
      />

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  //passing router to router provider to render child routes in the parent route
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
