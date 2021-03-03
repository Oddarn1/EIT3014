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
    const [correctGuess, setCorrectGuess] = React.useState<boolean|null>(null);
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
              path={`locations/${id}/images`}
              orderByKey={difficulty}
            >
              {d => {
                return (
                  <React.Fragment>
                      <div>
                          {!d.isLoading && d.value && <Image urls={d.value} difficulty={difficulty}/>}
                      </div>
                  </React.Fragment>
                );
              }}
            </FirebaseDatabaseNode>
            <button onClick={()=>setCorrectGuess(false)}>
                Jeg er her!
            </button>
            {correctGuess === false && <button onClick={()=>setDifficulty(updateDifficulty(difficulty))}>Jeg trenger hjelp</button>}
            {correctGuess === false && difficulty === "1" && <p style={{color: "red"}}>Du kan dessverre ikke få mer hjelp :(</p>}
        </div>
    )
}

export default Location;