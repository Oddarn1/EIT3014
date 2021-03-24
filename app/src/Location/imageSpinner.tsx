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
            {props.loading ? 
            <HashLoader color={props.color}/>:
            (props.d.value && <Image urls={props.d.value.images} difficulty={props.difficulty}/>)}
        </React.Fragment>
    )
}

export default ImageSpinner;