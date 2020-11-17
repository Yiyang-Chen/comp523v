import React, { useState, Component } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import * as plantData from '../data/plants.json';
import Data from './data';
require('dotenv').config();

class Map extends Component {
    state = { 
        target_date: Date.parse('01/01/1900'),
        viewport: {
            width: "100vw",
            height: "80vh",
            latitude: 37.7577,
            longitude: -122.4376,
            zoom: 3
          },
        selectedPlant: null,
     }

     handleChangeTime = () => {
         this.setState({ target_date: Date.parse('01/01/2019')})
     }

     handleReset = () => {
        this.setState({ target_date: Date.parse('01/01/1900')})
     }

    render() { 
        console.log(this.state.selectedPlant)
        const {selectedPlant} = this.state;
        return (
            <div>
                <ReactMapGL
                    {...this.state.viewport}
                    mapboxApiAccessToken = {process.env.REACT_APP_MAPBOX_TOKEN}
                    onViewportChange={(viewport) => this.setState({viewport})}
                >
                {plantData.plants.filter(plant=>Date.parse(plant.accessDate)>this.state.target_date).
                map(plant => (
                    <Marker key = {plant.occid}
                            latitude={plant.decimalLatitude}
                            longitude={plant.decimalLongitude}
                    >   
                    <button className="btn-primary btn-sm sm-2"
                            onClick={()=>{this.setState({selectedPlant: plant})}}>Here</button>
                    </Marker>
                ))}

                {selectedPlant && <Popup
                        latitude={selectedPlant.decimalLatitude}
                        longitude={selectedPlant.decimalLongitude}
                        closeButton={true}
                        closeOnClick={false}
                        onClose={() => this.setState({selectedPlant: false})}
                        anchor="top" >
                            <div>
                                <h5>occid: {selectedPlant.occid} </h5>
                                <h5>Catalog Number: {selectedPlant.catalogNumber}</h5>
                                <h5>{selectedPlant.county}, {selectedPlant.stateProvince}, {selectedPlant.country}</h5>
                            </div>
                        </Popup>}

                </ReactMapGL>
                <button onClick = {this.handleChangeTime} className="btn-secondary btn-sm sm-2">Change Time</button>
                <button onClick = {this.handleReset} className="btn-secondary btn-sm sm-2">Reset</button>
            </div>
        )
    }
}
 
export default Map;