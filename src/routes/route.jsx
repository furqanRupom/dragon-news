import { Navigate, createBrowserRouter } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/category/category";
import NewsLayouts from "../Layouts/NewsLayouts";
import News from "../pages/News/News/News";
import LoginLayouts from "../Layouts/LoginLayouts";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import PrivateRoutes from "./PrivateRoutes";
import Terms from "../pages/terms/terms";

const router = createBrowserRouter([

    {
        path:"/",
        element:<LoginLayouts />,
        children:[
            {
                path:"/",
                element:<Navigate to="/category/0"></Navigate>
            },
            {
                path:"login",
                element:<Login />
            },
            {
                path:"register",
                element:<Register />
            },
            {
                path:"terms",
                element:<Terms />
            }
        ]
    },
    {
        path:"category",
        element:<Main />,
        children:[
            {
                path:":Id",
                element:<Category />,
                loader:({params}) => fetch(`http://localhost:5000/categories/${params.Id}`)
            }
        ]
    },
    {
        path:"news",
        element:<NewsLayouts />,
        children:[
            {
                path:":id",
                element:<PrivateRoutes><News /></PrivateRoutes> ,
                loader:({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])

export default router;