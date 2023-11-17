import React, {createContext, useState} from "react";

export const ConfigContext = createContext({
    lang: 'ru',
    theme: 'light'
});

export const ConfigProvider = ({children}) => {

    const [config, setConfig] = useState({
        lang: 'ru',
        theme: 'light'
    });

    const updateConfig = (field, value) => {
        setConfig(prevState => ({
            ...prevState,
            [field]: value
        }))
    }

    const value = {config, updateConfig};

    return (
        <ConfigContext.Provider value={value}>
            {children}
        </ConfigContext.Provider>
    )
}
