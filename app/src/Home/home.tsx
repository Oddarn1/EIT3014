import React from 'react';
import './home.css';
import {
    Link,
    withRouter
  } from "react-router-dom";

const Home = () => {
    const currentGame = localStorage.getItem("currentlyPlayingId");
    const currentDifficulty = localStorage.getItem("currentDifficulty");
    return (
        <div style={{display:"flex", flexDirection:"column", height:"calc(100vh - 125px)"}}>
            <div>
            <h1>
                TrondheimGuessr
            </h1>
            {homeText()}
            <Link to="/difficulty">
                <button>
                    Spill
                </button>
            </Link>
            {currentGame && 
            <p>
                Du spiller for øyeblikket et spill, fortsette på dette?
                <br/>
                <Link to={`/location/${currentGame}?difficulty=${currentDifficulty}`}>Fortsett</Link>
            </p>}
            </div>
        </div>
    )
}

export default withRouter(Home);

function homeText(){
    return <p>Velkommen til spillet hvor dine geografiske
        kunnskaper om bartebyen blir satt på prøve. Du vil
        få presentert et bilde av et sted i Trondheim by, 
        og oppgaven din er å finne dette stedet i den 
        virkelige verden. Når du trykker "Jeg er her", får
        du en mulighet til å lære mer om stedet. 
        <br />
        <br />
        Trykk "Spill" når du er klar!
        <br />
        <br />
    </p>;    
            
}