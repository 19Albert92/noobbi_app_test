import {IconSvg} from "../../index";
import React from "react";

const MenuItem = ({iconID, title, styles}) => {
    return (
        <li className={styles.menu__item}>
            <IconSvg id={'icon-home'} className={styles.menu__item_icon}/>
            <span className={styles.menu__item_text}>Главная</span>
        </li>
    )
}
export default MenuItem;
