import React from 'react';
import {FirebaseDatabaseNode} from '@react-firebase/database';
import {useParams} from 'react-router-dom';
import firebase from 'firebase';

interface locationParams {
    id: string;
}

interface imageInterface {
    small: string;
    medium: string;
}

const LocationMap = (location:imageInterface) =>{
    return(
        <GetImage url={location.medium}/>
    )
}

const GetImage = (props: {url: string}) => {
    const [downloadUrl, setUrl] = React.useState("");
    var storage = firebase.storage();
    storage.refFromURL(props.url).getDownloadURL().then(dUrl=> setUrl(dUrl))
    return <img src={downloadUrl} alt="Bilde"/>
}

const Location = () => {
    const { id } = useParams<locationParams>()
    return (
        <div>
            <div>
                <h3>
                    Din oppgave er å finne dette stedet:
                </h3>
            </div>
            <FirebaseDatabaseNode
              path={`locations/${id}/images`}
            >
              {d => {
                return (
                  <React.Fragment>
                      <div>
                          {!d.isLoading && d.value && <LocationMap {...d.value}/>}
                      </div>
                  </React.Fragment>
                );
              }}
            </FirebaseDatabaseNode>
        </div>
    )
}

export default Location;