import React from 'react';

const Adressa = () => {
    const [sensorValue, setSensorValue] = React.useState(0);

    fetch("https://api.adressaparken.no/v1/sensorDataList?sensor=NOISE&limit=1&offset=0")
        .then(response => response.json())
        .then(data => setSensorValue(data[0]["value"]))
    return (
        <div>
            <p>
                {sensorValue}
            </p>
        </div>
    )
}

export default Adressa