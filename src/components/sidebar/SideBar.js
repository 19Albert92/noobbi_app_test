import React, {useState} from "react";
import {IconSvg, Button} from "../index";
import styles from "./SideBar.module.scss";
import {Images} from "../../constance";
import {useTranslation} from "react-i18next";

const SideBar = () => {

    const [show, setShow] = useState(false);

    const {t} = useTranslation();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className={styles.burger_btn}>
                <IconSvg id={'icon-burger'} isPointer={true} handleClick={handleShow}/>
            </button>
            {show ?
                <>
                    <div onClick={handleClose} className={styles.sidebar_placeholder}></div>
                </> : null
            }
            <aside className={show ? styles.sidebar_show : styles.sidebar_hide}>
                <div className={styles.sidebar__header}>
                    <img src={Images.header_logo} alt="logo"/>
                    <div className={styles.header__body}>
                        <Button title={t("Home")} type={'menu-item-with-icon'} iconID={'home'}/>
                        <Button title={t("Video")} type={'menu-item-with-icon'} iconID={'video'}/>
                        <Button title={t("Music")} type={'menu-item-with-icon'} iconID={'music'}/>
                        <Button title={t("Marketplace")} type={'menu-item-with-icon'} iconID={'store'} counter={2}/>
                        <Button title={t('Works')} type={'menu-item-with-icon'} iconID={'case'}/>
                        <Button title={t("Companies")} type={'menu-item-with-icon'} iconID={'buildings'}/>
                        <Button title={t('Communities')} type={'menu-item-with-icon'} iconID={'group'}/>
                    </div>
                </div>
                <div className={styles.sidebar__footer}>
                    <Button title={t('New post')} type={'primary-item-with-icon'} iconID={'new-post'}/>
                </div>
            </aside>
        </>
    )
}

export default SideBar;
