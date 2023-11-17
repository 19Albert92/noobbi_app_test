import {Sprite} from '../../../constance';

const IconSvg = ({id, color = 'black', size = 24, className, isPointer = false, handleClick}) =>
    (
        <svg
            onClick={handleClick}
            fill={color}
             width={size} height={size}
             className={className}
             style={isPointer ? {cursor: 'pointer'} : {}}>
            <use href={Sprite + '#' + id}></use>
        </svg>
    )

export default IconSvg;
