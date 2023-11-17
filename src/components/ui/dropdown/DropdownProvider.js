import {createContext, useState} from "react";
import {Dropdown} from "../../index";

export const DropdownContext = createContext(false);

export const DropDownProvider = ({children, item}) => {
    const [isShow, setIsShow] = useState(false);

    const showDropDown = () => {
        setIsShow(true)
    }
    const hideDropDown = () => {
        setIsShow(false)
    }

    const value = {isShow, showDropDown, hideDropDown};

    return (
        <DropdownContext.Provider value={value}>
            <Dropdown item={item}>
                {children}
            </Dropdown>
        </DropdownContext.Provider>
    )
}
