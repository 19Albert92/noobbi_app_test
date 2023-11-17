import {Link, useMatch} from "react-router-dom";

const CustomNavItem = ({title, to, className, toClassName, ...props}) => {

    const match = useMatch(to);

    let resultClass = className;

    if (match) {
        resultClass = toClassName
    }

    return (
        <Link
            className={resultClass}
            to={to}
            {...props}
        >
            {title}
        </Link>
    )
}
export default CustomNavItem;
