import {ConfigContext} from "../hoc/ConfigProvider";
import React, {useContext} from "react";

const useProjectConfig = () => {
    return useContext(ConfigContext)
}
export default useProjectConfig;
