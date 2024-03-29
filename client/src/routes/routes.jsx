import {  createHashRouter } from "react-router-dom";
import Login from "../pages/Login";
import Error404 from "../pages/Error404";
import TermsPage from "../pages/TermsPage";
import ForgotPassPage from "../pages/ForgotPassPage";
import LanguagesPage from "../pages/LanguagesPage";
import SupportPage from "../pages/SupportPage";
import ContactPage from "../pages/ContactPage";

export const routes = createHashRouter([
    {
        path: "/",
        element: <Login/>,
        errorElement: <Error404/>
        
    },
    {
        path: "/terms",
        element: <TermsPage/>,
        errorElement: <Error404/>
        
    },
    {
        path: "/forgotpass",
        element: <ForgotPassPage/>,
        errorElement: <Error404/>
        
    },
    {
        path: "/languages",
        element: <LanguagesPage/>,
        errorElement: <Error404/>
    },
    {
        path: "/support",
        element: <SupportPage/>,
        errorElement: <Error404/>
    },
    {
        path: "/contact",
        element: <ContactPage/>,
        errorElement: <Error404/>
    },
    {
        path: "*",
        element: <Error404/>
        
    }
]);
