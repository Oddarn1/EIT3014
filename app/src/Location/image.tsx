import React from 'react';
import firebase from 'firebase';

interface imageInterface {
    small: string;
    medium: string;
    large: string;
    full: string;
}

const Image = (props: {urls: imageInterface, difficulty: string | string[] | null}) => {
    const [downloadUrl, setUrl] = React.useState("");
    var url;
    switch (props.difficulty){
        case "1":
            url = props.urls.full;
            break;
        case "2":
            url = props.urls.large;
            break;
        case "3":
            url = props.urls.medium;
            break;
        case "4":
            url = props.urls.small;
            break;
        default:
            url = props.urls.full;
            break;            
    }
    var storage = firebase.storage();
    storage.refFromURL(url).getDownloadURL().then(dUrl=> setUrl(dUrl))
    return <img src={downloadUrl} alt="Bilde"/>
}

export default Image;