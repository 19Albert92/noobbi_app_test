import { DropdownContext } from "./DropdownProvider";
import { useContext } from "react";

const useDropdown = () => {
    return useContext(DropdownContext)
}
export default useDropdown;
