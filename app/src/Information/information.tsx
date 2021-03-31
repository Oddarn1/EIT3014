import React from 'react';
import {FirebaseDatabaseNode} from '@react-firebase/database';
import {Link, useParams} from 'react-router-dom';
import { SyncLoader } from 'react-spinners';
import Adressa from "./adressa"

interface informationParams {
    id: string;
}

const Information = () => {
    const { id } = useParams<informationParams>();
    return (
        <div style={{display:"flex", flexDirection:"column", height:"calc(100vh - 125px)"}}>
            <FirebaseDatabaseNode
              path={`locations/${id}`}
            >
              {d => {
                return (
                  <React.Fragment>
                      <div>
                          {d.isLoading || !d.value ? 
                          <div style={{display:"flex", justifyContent:"center", marginTop: "25px"}}>
                            <SyncLoader color={"#C4C4C4"}/>
                          </div>:
                          <div>
                            <h3>Gratulerer, du fant {d.value.name}!</h3>
                            <p> {d.value.desc}</p>
                            </div>}
                      </div>
                  </React.Fragment>
                );
              }}
            </FirebaseDatabaseNode>
            <strong style={{marginTop: "16px", justifyContent:"center", display: "flex"}}>Vil du spille igjen?</strong>
            <Link to="/difficulty"> 
              <button style={{backgroundColor:"rgba(139,233,137,0.62)", color:"#000"}}>Ja</button>
            </Link>
            <Link to="/"> 
              <button style={{backgroundColor:"#C6F5FF", color: "#000"}}>Nei</button>
            </Link>
            {id === "3" && <Adressa/> }
        </div>
    )
}

export default Information;