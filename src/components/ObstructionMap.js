import React from "react"
import { HeatMap } from "../components/HeatMap"
import points from "../data/all.json"

export class ObstructionMap extends React.Component {
    state = {
        points: points
    }

    render() {
        const { position, zoom } = this.props
        const { points } = this.state

        return(
            <HeatMap position={position} zoom={zoom} points={points} />
        )
    }
}
