import React from 'react';
import HashLoader from 'react-spinners/HashLoader';
import Image from './image';

interface Iprops{
    loading: boolean;
    color: string;
    css?: any;
    children?: React.ReactNode;
    d: any;
    difficulty: string | string[] | null;
}

const ImageSpinner = (props:Iprops) => {
    return (
        <React.Fragment>
            {props.loading || !props.d.value ? 
            <HashLoader color={props.color}/>:
            <></>}
        </React.Fragment>
    )
}

export default ImageSpinner;