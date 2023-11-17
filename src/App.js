import {Route, Routes} from 'react-router-dom';
import {NotFoundPage, Profile} from "./pages";
import {Body} from './components';
import {ConfigProvider} from "./hoc/ConfigProvider";


const App = () => {
    return (
        <ConfigProvider>
            <Routes>
                <Route path={'/'} element={<Body/>}>
                    <Route index path={'/'} element={<Profile/>}/>
                    {/*<Route path={'post/:id'} element={<Posts/>}/>*/}
                    {/*<Route path={'/post/:id'} element={<Navigate to={'/'} replace={true}/>}/>*/}
                    <Route path={'*'} Component={NotFoundPage}/>
                </Route>
            </Routes>
        </ConfigProvider>
    )
}
export default App;
