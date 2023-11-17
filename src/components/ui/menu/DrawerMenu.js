import MenuItem from "./MenuItem";
import styles from './Menu.module.scss'

const DrawerMenu = () => {
    return(
        <ul className={styles.group_menu}>
            <MenuItem title={'Главная'} iconID={'icon-home'} styles={styles}/>
        </ul>
    )
}
export default DrawerMenu;
