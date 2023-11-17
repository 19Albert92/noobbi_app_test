import React from "react";
import styles from './Dropdown.module.scss';
import useDropdown from "./useDropdown";

const Dropdown = ({children, item}) => {

    const {isShow, showDropDown, hideDropDown} = useDropdown();

    const handleClose = () => hideDropDown(false);
    const handleShow = () => showDropDown(true);

    return (
        <>
            {isShow ?
                <>
                    <div onClick={handleClose} className={styles.dropdown__placeholder}></div>
                </> : null
            }
            <div style={{
                position: 'relative'
            }}>

                <>
                    <div className={isShow ? styles.dropdown_show : styles.dropdown_hide}>
                        {children}
                    </div>
                </>

                <div onClick={handleShow}>
                    {item}
                </div>
            </div>
        </>
    )
}
export default Dropdown;
