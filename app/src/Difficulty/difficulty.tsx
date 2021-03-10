import React from 'react';
import {
    Link
  } from "react-router-dom";
import firebase from 'firebase';

const Difficulty = () => {
    const [id, setId] = React.useState<number|null>(null);

    React.useEffect(()=>{
        const locationsRef = firebase.database().ref("/locations");
        locationsRef.on('value', snapshot => {
            let idList:any[] = [];
            snapshot.forEach(data => {
                idList.push(data.key);
            })
            setId(selectRandom(idList));
        })
    },[])

    return (
        <p>
            Velg vanskelighetsgrad
            <br/>
            <Link to={`/location/${id}?difficulty=1`}>Ny i byen</Link>
            <br/>
            <Link to={`/location/${id}?difficulty=2`}>Bodd her noen år</Link>
            <br/>
            <Link to={`/location/${id}?difficulty=3`}>Glad i karsk</Link>
            <br/>
            <Link to={`/location/${id}?difficulty=4`}>Stolt eier av skinnvest</Link>
        </p>
    )
}

const selectRandom = (input:any[]) => {
    return input[Math.floor(Math.random() * input.length)]
}

export default Difficulty;