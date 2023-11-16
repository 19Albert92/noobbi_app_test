import {Sprite} from '../../../constance';

const IconSvg = ({id, color = 'black', size = 24}) =>
    (
        <svg fill={color} width={size} height={size}>
            <use href={Sprite + '#' + id}></use>
        </svg>
    )

export default IconSvg;
