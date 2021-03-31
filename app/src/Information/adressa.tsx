import React from 'react';

type Dictionary<T> = { [key: string]: T };

const sensors:Dictionary<sensorType> = {
    temperature: {
        sensor: "TC",
        unit: "\u00B0C",
        name: "Temperaturen"
    },
    humidity: {
        sensor: "HUM",
        unit: "%",
        name: "Luftfuktigheten"
    },
    lumination: {
        sensor: "LUX",
        unit: "lx",
        name: "Lysstyrken"
    }, 
    pressure: {
        sensor: "PRES",
        unit: "Pa",
        name: "Lufttrykket"
    }
}

interface sensorType {
    sensor: string,
    unit: string,
    name: string
}

var randomSensor = ():sensorType => {
    var keys = Object.keys(sensors);
    const randomKey = keys[ keys.length * Math.random() << 0];
    return sensors[randomKey];
};

const apiBase = (sensor:sensorType) => {
    return `https://api.adressaparken.no/v1/sensorDataList?sensor=${sensor.sensor}&limit=1&offset=0`
}

const Adressa = (props:{setLoading:(e:boolean)=>void}) => {
    const [sensorValue, setSensorValue] = React.useState(0);
    const [sensor, setSensor] = React.useState<sensorType | null>(null);

    React.useEffect(()=>{
        props.setLoading(true);
        const sensor = randomSensor();
        fetch(apiBase(sensor))
        .then(response => response.json())
        .then(data => {
            setSensorValue(data[0]["value"]);
            setSensor(sensor);
            props.setLoading(false);
        })
    },[]);

    return (
        <div>
            {sensor && <p>
                {sensor?.name} i Adressaparken er for øyeblikket {sensorValue}{sensor?.unit}
            </p>}
        </div>
    )
}

export default Adressa