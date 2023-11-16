//https://www.figma.com/file/qrh4kmBMvTIENqxSddZMe6/01-qwerty-noobbi?node-id=13748%3A1935&mode=dev

import styles from './Header.module.scss';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__nav}>
                <li>
                    <NavLink to={'/'} className={({isActive}) =>
                        isActive ? 'btn btn-primary' : 'btn btn-outline-primary'
                    }>Profile</NavLink>
                </li>
                <li>
                    <NavLink to={'/todos'} className={({isActive}) =>
                        isActive ? 'btn btn-primary' : 'btn btn-outline-primary'
                    }>Todos</NavLink>
                </li>
            </div>
        </div>
    )
}

export default Header;
