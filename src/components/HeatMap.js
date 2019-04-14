import React from "react"
import { TileLayer } from "react-leaflet"
import HeatmapLayer from "react-leaflet-heatmap-layer"
import { FullScreenMap } from "./FullScreenMap"
import mapStyle from "./map.module.css"

export class HeatMap extends React.Component {
    render() {
        const { position, zoom, points } = this.props

        return (
            <div className={mapStyle.map}>
                <FullScreenMap center={position} zoom={zoom}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                    { points && points.length > 0 && <HeatmapLayer
                        points={points}
                        latitudeExtractor={m => m[0]}
                        longitudeExtractor={m => m[1]}
                        intensityExtractor={m => parseFloat(m[2])}
                    /> }
                </FullScreenMap>
            </div>
        )
    }
}
