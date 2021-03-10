import React from 'react';
import {useParams} from 'react-router-dom';

interface informationParams {
    id: string;
}

const Information = () => {
    const { id } = useParams<informationParams>();
    return (
        <div>
            Test
        </div>
    )
}

export default Information;