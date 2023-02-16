import Blog from "../Pages/Blog/Blog";
import Dashboard from "../Pages/Dashboard/Dashboard";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: Home } = require("../Pages/Home/Home");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            }
        ]
    }
])

export default router;