
const Adressa = () => {
    const [sensorValue, setSensorValue] = React.useState(0);

    fetch(api.adressaparken.no/v1/sensorDataList?sensor=NOISE&limit=1&offset=0)
        .then(response => response.json())
        .then(setSensorValue(data.get("value")))
    return (
        <div>
            <p>
                {sensorValue}
            </p>
        </div>
    )
}