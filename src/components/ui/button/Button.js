import styles from './Button.module.scss';
import {IconSvg} from "../../index";
import React from "react";
import useDropdown from "../dropdown/useDropdown";

const Button = ({title, type, iconID = '', counter = 0, handleClick}) => {

    const {hideDropDown} = useDropdown();

    const clickListener = () => {

        if (typeof hideDropDown === 'function') {
            hideDropDown()
        }
        if (typeof handleClick === 'function') {
            handleClick();
        }
    }

    return (
        <div className={styles.base_button}>
            <button className={styles[type]} onClick={clickListener}>
                {iconID !== '' ?
                    <IconSvg id={'icon-' + iconID}/> : null
                }
                {title}
            </button>
            {counter > 0 ?
                <span className={styles.helper_counter}>{counter}</span> : null
            }
        </div>
    )
}
export default Button;
