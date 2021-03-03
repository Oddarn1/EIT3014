import React from 'react';
import {
    Link
  } from "react-router-dom";

const Difficulty = () => {
    return (
        <p>
            Velg vanskelighetsgrad
            <br/>
            <Link to={"/location/1?difficulty=1"}>Ny i byen</Link>
            <br/>
            <Link to={"/location/1?difficulty=2"}>Bodd her noen år</Link>
            <br/>
            <Link to={"/location/1?difficulty=3"}>Glad i karsk</Link>
            <br/>
            <Link to={"/location/1?difficulty=4"}>Stolt eier av skinnvest</Link>
        </p>
    )
}

export default Difficulty;