import {Route, Routes, Navigate} from 'react-router-dom';
import {NotFoundPage, Profile, Posts, Todo} from "./pages";
import {Body} from './components'


const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Body/>}>
                    <Route index path={'/'} element={<Profile/>}/>
                    <Route path={'/todos'} element={<Todo/>}/>
                    {/*<Route path={'/post/:id'} element={<Posts/>}/>*/}
                    <Route path={'/post/:id'} element={<Navigate to={'/'} replace={true}/>}/>
                    <Route path={'*'} Component={NotFoundPage}/>
                </Route>
            </Routes>
        </div>
    )
}
export default App;
