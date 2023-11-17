import {useContext} from "react";
import {AuthContext} from "../hoc/LangProvider";

export function useLang() {
    return useContext(AuthContext)
}
