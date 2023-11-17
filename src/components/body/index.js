import {Header} from "../index";
import {Outlet} from "react-router-dom";
import {Suspense} from "react";
import i18next from "./../../lib/trans";

const Loading = () => {
    return(
        <>Loading...</>
    )
}

const Body = () => {
    return (
        <div className={'body'}>
            <Suspense fallback={<Loading/>}>
                <Header/>
                <Outlet/>
                {/*<Footer/>*/}
            </Suspense>
        </div>
    )
}
export default Body;
