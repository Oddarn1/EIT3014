import React from 'react';
import {FirebaseDatabaseNode} from '@react-firebase/database';
import {useParams, useLocation} from 'react-router-dom';
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
    const { id } = useParams<locationParams>();
    const { search } = useLocation();
    const [difficulty, setDifficulty] = React.useState(queryString.parse(search).difficulty?.toString() || "");
    const [correctGuess, setCorrectGuess] = React.useState(0);
    localStorage.setItem("currentlyPlayingId", id);
    localStorage.setItem("currentDifficulty", difficulty);
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
                      </div>
                  </React.Fragment>
                );
              }}
            </FirebaseDatabaseNode>
            <button onClick={()=>setCorrectGuess(1)}>
                Jeg er her!
            </button>
            {correctGuess === 1 && <button onClick={()=>{setDifficulty(updateDifficulty(difficulty)); setCorrectGuess(0);}}>Jeg trenger hjelp</button>}
            {correctGuess === 1 && difficulty === "1" && <p style={{color: "red"}}>Du kan dessverre ikke få mer hjelp :(</p>}
        </div>
    )
}

export default Location;