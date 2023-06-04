import "./Match.css"
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import React from "react";
const center = {
    lat: -3.745,
    lng: -38.523
};
const containerStyle = {
    width: "100%",
    height: "100%"
}

function Match() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDgmlgJNh3bbFMxC9tBsX9XgVMVqM1dpis"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])


    return (
        <div id="match-page">
            
            <div id="match-header">
                <h1>Home team VS. Away team</h1>
            </div>
            <div id="match-big-grid">
                <div id="match-grid-left-side">
                    <div className="match-info" id="match-date">Date: yyyy-mm-dd</div>
                    <div className="match-info" id="match-stadium">Stadium: this stadium.</div>
                    <div className="match-info" id="match-seats">Seats available: Seats/random number</div>
                    <div className="match-info" id="match-teams">Home team:home team <br />
                        Away team: away team</div>
                    <div className="match-info" id="match-buttons">
                        <button className="match-buttons">To home team</button>
                        <button className="match-buttons">Buy tickets</button>
                    </div>
                    <div className="match-info" id="match-api">
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={10}
                            onLoad={onLoad}
                            onUnmount={onUnmount}>
                        </GoogleMap>
                    </div>

                </div>
                <div id="match-grid-right-side">
                    left
                </div>
            </div>

        </div>
    );
};
export default Match;