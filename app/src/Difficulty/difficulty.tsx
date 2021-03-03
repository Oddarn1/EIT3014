import React from 'react';
import {
    Link
  } from "react-router-dom";

const Difficulty = () => {
    return (
        <div>
            Difficulty
            <Link to={"/location/1?difficulty=3"}>Test</Link>
        </div>
    )
}

export default Difficulty;