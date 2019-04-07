import React from "react"
import axios from "axios"
import { HeatMap } from "../components/HeatMap"

export class ObstructionMap extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            points: []
        }

        axios.get("json/all/all.json")
            .then(res => this.setState({ points: res.data }))
            .catch(error => console.log({ error }))
    }

    render() {
        const { position, zoom } = this.props
        const { points } = this.state

        return(
            <HeatMap position={position} zoom={zoom} points={points} />
        )
    }
}
