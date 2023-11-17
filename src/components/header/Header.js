//https://www.figma.com/file/qrh4kmBMvTIENqxSddZMe6/01-qwerty-noobbi?node-id=13748%3A1935&mode=dev

import styles from './Header.module.scss';
import {Button, IconSvg} from "../index";
import {Images} from "../../constance";
import React from "react";
import {Col} from "react-bootstrap";
import SideBar from "../sidebar/SideBar";
import {DropDownProvider} from "../ui/dropdown/DropdownProvider";
import useProjectConfig from "../../hook/useProjectConfig";
import {useTranslation} from "react-i18next";

const Header = () => {

    const {t, i18n} = useTranslation();

    const testFunction = () => {
        console.log(123)
    }

    const {updateConfig, lang} = useProjectConfig()

    const changeLang = (selectLang) => {
        updateConfig('lang', selectLang);
        i18n.changeLanguage(selectLang)
    }

    return (
        <div className={styles.header}>
            <div className={styles.header__nav}>
                <Col className={styles.nav__left}>
                    <div className={styles.burger_menu}>
                        <SideBar/>
                    </div>
                    <img src={Images.header_logo} alt="logo"/>
                </Col>
                <Col xs={10} className={styles.nav__search}>
                    <input type="search" placeholder={t("Search")} className={'header-search-input px-3'}/>
                    <IconSvg id={'icon-bottom-outline-arrow'} size={26} className={styles.header_menu_arrow}
                             isPointer={true}/>
                    <IconSvg id={'icon-header-search'} className={styles.header_search_submit} isPointer={true}/>
                </Col>
                <Col className={styles.nav__right + ' d-flex align-items-center justify-content-between'}>
                    <IconSvg id={'icon-header-messenger'} isPointer={true}/>
                    <IconSvg id={'icon-header-bell'} isPointer={true}/>
                    <div className={styles.avatar_menu}>
                        <DropDownProvider item={<img src={Images.logo_default} alt={'logo'}/>}>
                            <Button title={t("My page")} type={'menu-item-with-icon'} iconID={'profile'}
                                    handleClick={testFunction}/>
                            <Button title={t("My friends")} type={'menu-item-with-icon'} iconID={'friends'}
                                    handleClick={testFunction}/>
                            <Button title={t("My subscribers")} type={'menu-item-with-icon'} iconID={'subscriptions'}
                                    handleClick={testFunction}/>
                            <Button title={t("Settings")} type={'menu-item-with-icon'} iconID={'settings'}
                                    handleClick={testFunction}/>
                            <hr/>
                            <Button title={t("Exit")} type={'menu-item-with-icon'} iconID={'logout'}/>
                        </DropDownProvider>
                    </div>
                    <div className={styles.local_menu}>
                        <DropDownProvider item={
                            <IconSvg id={'icon-flag-'+i18n.language} isPointer={true}/>
                        }>
                            <Button title={'English'} type={'menu-item-with-icon'} iconID={'flag-en'}
                                    handleClick={() => changeLang('en')}/>
                            <Button title={'Русский'} type={'menu-item-with-icon'} iconID={'flag-ru'}
                                    handleClick={() => changeLang('ru')}/>
                        </DropDownProvider>

                    </div>
                </Col>
            </div>
        </div>
    )
}

export default Header;
