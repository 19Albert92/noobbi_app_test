import {createBrowserRouter} from "react-router-dom";
import {Profile, Todo} from "../pages";

const MainRouter = createBrowserRouter([
    {
        path: '/',
        Component: Profile,
    },
    {
        path: '/todos',
        Component: Todo
    },
])

export default MainRouter;
