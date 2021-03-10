import React from 'react';
import {FirebaseDatabaseNode} from '@react-firebase/database';
import {useParams, useLocation, withRouter, useHistory} from 'react-router-dom';
import queryString from 'query-string';
import Image from './image';

interface locationParams {
    id: string;
}

const updateDifficulty = (diff:string) => {
    switch (diff){
        case "2":
            return "1"
        case "3":
            return "2"
        case "4":
            return "3"
        default:
            return "1"
    }
}

const Location = () => {
    const distanceThreshold = 0.1;
    const { id } = useParams<locationParams>();
    const { search } = useLocation();
    const history = useHistory();
    const [difficulty, setDifficulty] = React.useState(queryString.parse(search).difficulty?.toString() || "");
    const [correctGuess, setCorrectGuess] = React.useState(0);  // 0 = no guess, -1 = wrong guess, 1 = correct guess
    const [error, setError] = React.useState<String | null>(null);
    localStorage.setItem("currentlyPlayingId", id);
    localStorage.setItem("currentDifficulty", difficulty);

    const getLocation = (targetLocation:{lat:number, lon:number}, locationThreshold:number) => {
        navigator.permissions.query({ name: 'geolocation' }).then(p=>{
            if (p.state === "denied"){
                setError("You must enable geolocation on your device");
            }
        });
        if (navigator.geolocation && !error){
            setError(null);
            navigator.geolocation.getCurrentPosition((p)=>{
                checkLocation(targetLocation, {lat:p.coords.latitude, lon:p.coords.longitude}) < locationThreshold ? correct() : setCorrectGuess(-1);
            });
        }
    }

    const correct = () => {
        setCorrectGuess(1);
        localStorage.removeItem("currentlyPlayingId");
        localStorage.removeItem("currentDifficulty");
        history.push(`/information/${id}`);
    };

    return (
        <div>
            <div>
                <h3>
                    Din oppgave er å finne dette stedet:
                </h3>
            </div>
            <FirebaseDatabaseNode
              path={`locations/${id}`}
              orderByKey={difficulty}
            >
              {d => {
                return (
                  <React.Fragment>
                      <div>
                          {!d.isLoading && d.value && <Image urls={d.value.images} difficulty={difficulty}/>}
                          <button onClick={()=>getLocation({lat:d.value.lat, lon: d.value.lon}, distanceThreshold)}>
                            Jeg er her!
                            </button>
                      </div>
                  </React.Fragment>
                );
              }}
            </FirebaseDatabaseNode>
            {error && <p style={{color:"red"}}> {error} </p>}
            {correctGuess === -1 && <button onClick={()=>{setDifficulty(updateDifficulty(difficulty)); setCorrectGuess(0);}}>Jeg trenger hjelp</button>}
            {correctGuess === -1 && difficulty === "1" && <p style={{color: "red"}}>Du kan dessverre ikke få mer hjelp :(</p>}
        </div>
    )
}

const checkLocation = (targetLocation:{lat:number, lon:number}, userLocation:{lat:number, lon:number}) => {
    const R = 6371; // Radius of the earth in km
    var dLat = deg2rad(userLocation.lat - targetLocation.lat);
    var dLon = deg2rad(userLocation.lon - targetLocation.lon);
    var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(targetLocation.lat)) * Math.cos(deg2rad(userLocation.lat)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
}

const deg2rad = (deg:number) => {
    return deg * (Math.PI/180)
  }

export default withRouter(Location);