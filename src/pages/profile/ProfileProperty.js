import {Button} from "../../components";
import React from "react";
import {useTranslation} from "react-i18next";

const ProfileProperty = () => {

    const {t} = useTranslation();
    const testFunction = () => {
        console.log(123)
    }
    return(
        <>
            <Button title={t("Change")} type={'menu-item-with-icon'} iconID={'profile'}
                    handleClick={testFunction}/>
        </>
    )
}
export default ProfileProperty;
