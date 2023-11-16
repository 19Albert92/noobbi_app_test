import React from 'react';
import {useParams, useNavigate} from "react-router-dom";

const Posts = () => {
    const {id} = useParams();

    const navigation = useNavigate();

    console.log()

    const goBackItemHandler = () => {
        navigation(-1)
    }
    return (
        <div>
            <button
                className={'btn btn-outline-info'}
                onClick={goBackItemHandler}
            >Go Back</button>
            <h2>Posts number: {id}</h2>
        </div>
    )
};

export default Posts;
