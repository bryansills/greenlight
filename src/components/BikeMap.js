import React from "react"
import { Map, TileLayer } from "react-leaflet"
import HeatmapLayer from "react-leaflet-heatmap-layer"
import data from "../data/all.json"

export class BikeMap extends React.Component {
    constructor() {
        super()
        this.state = {
            lat: 41.881832,
            lng: -87.623177,
            zoom: 11
        }
    }

    render() {
        const position = [this.state.lat, this.state.lng]
        const points = data

        if (typeof window !== 'undefined') {
            return (
                <Map center={position} zoom={this.state.zoom} style={{height: 800}}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                    <HeatmapLayer
                        points={points}
                        longitudeExtractor={m => m[1]}
                        latitudeExtractor={m => m[0]}
                        intensityExtractor={m => parseFloat(m[2])}
                  />
                </Map>
            )
        } else {
            return null
        }
    }
}
