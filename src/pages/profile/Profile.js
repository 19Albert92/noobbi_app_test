import styles from './Profile.module.scss';
import {NavLink} from "react-router-dom";

const Profile = () => {
    return (
        <div className={styles.profile}>
            <h1>Hello world!</h1>

            <NavLink to={'post/1'}>Go to Posts page</NavLink>
        </div>
    )
}

export default Profile
