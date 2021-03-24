import React from 'react';
import firebase from 'firebase';
import {imageContainer, image} from './style';
import HashLoader from 'react-spinners/HashLoader';

interface IProps{
    loading: boolean;
    color: string;
    css?: any;
    children?: React.ReactNode;
    d: any;
    difficulty: string | string[] | null;
}

const Image:React.FC<IProps> = (props: IProps) => {
    const [downloadUrl, setUrl] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    React.useEffect(()=>{
        setLoading(true);
        if (props.loading || !props.d.value){ 
            return;
        }
        var url;
        switch (props.difficulty){
            case "1":
                url = props.d.value.images.full;
                break;
            case "2":
                url = props.d.value.images.large;
                break;
            case "3":
                url = props.d.value.images.medium;
                break;
            case "4":
                url = props.d.value.images.small;
                break;
            default:
                url = props.d.value.images.full;
                break;            
        }
        var storage = firebase.storage();
        storage.refFromURL(url).getDownloadURL().then(dUrl=> {
            setUrl(dUrl);
            setLoading(false);
        })
    },[props.loading, props.d.value]);

    return (
    <div className={imageContainer}>
        {loading ? 
        <HashLoader color={props.color}/>:
        <img className={image} src={downloadUrl} alt="Bilde"/>}
    </div>
    )
}

export default Image;