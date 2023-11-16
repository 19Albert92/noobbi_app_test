import {Header} from "../index";
import {Outlet} from "react-router-dom";
import Footer from "../footer/Footer";

const Body = () => {
    return(
        <div className={'body'}>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
export default Body;
