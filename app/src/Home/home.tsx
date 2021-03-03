import React from 'react';
import './home.css';
import {
    Link
  } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>
                TrondheimGuessr
            </h1>
            {homeText()}
            <Link to="/Difficulty">
                <button>
                    Spill
                </button>
            </Link>
        </div>
    )
}

export default Home;

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