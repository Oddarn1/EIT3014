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
        <div style={{display:"flex", flexDirection:"column", height:"calc(100vh - 125px)"}}>
            <h3>Velg vanskelighetsgrad</h3>
            <Link to={`/location/${id}?difficulty=1`}>
                <button style={{backgroundColor:"rgba(139,233,137,0.62)", color:"#000"}}>Ny i byen</button>
            </Link>
            <Link to={`/location/${id}?difficulty=2`}>
                <button style={{backgroundColor:"#CAE989", color:"#000"}}>Bodd her noen år</button>
            </Link>
            <Link to={`/location/${id}?difficulty=3`}>
                <button style={{backgroundColor:"#E9CE89", color:"#000"}}>Glad i karsk</button>
            </Link>
            <Link to={`/location/${id}?difficulty=4`}>
                <button style={{backgroundColor:"#E99A89", color:"#000"}}>Stolt eier av skinnvest</button>
            </Link>
        </div>
    )
}

const selectRandom = (input:any[]) => {
    return input[Math.floor(Math.random() * input.length)]
}

export default Difficulty;