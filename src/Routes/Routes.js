import Dashboard from "../layout/Dashboard/Dashboard";
import AddPost from "../Pages/Dashboard/PostList/AddPost";
import Postlist from "../Pages/Dashboard/PostList/Postlist";
import SinglePost from "../Pages/SinglePost/SinglePost";

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
                path: '/post/:id',
                loader: ({params})=> fetch(`http://localhost:5000/posts/${params.id}`),
                element: <SinglePost></SinglePost>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
                children: [
                    {
                      path: "/dashboard",
                      element: <Postlist></Postlist>
                    },
                    {
                      path: "add-post",
                      element: <AddPost></AddPost>
                    },
                ]
            }
        ]
    }
])

export default router;