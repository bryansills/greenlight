import React from "react"
import axios from "axios"
import { HeatMap } from "../components/HeatMap"
import { Dropdown } from "./Dropdown"
import options from "../data/obstructions"

export class ObstructionMap extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            points: [],
            selectedOption: options[0].key
        }

        axios.get("json/all/all.json")
            .then(res => this.setState({ points: res.data }))
            .catch(error => console.log({ error }))
    }

    _onChangeObstruction = (key) => this.setState({ selectedOption: key })

    render() {
        const { position, zoom } = this.props
        const { points, selectedOption } = this.state

        return(
            <div>
                <HeatMap position={position} zoom={zoom} points={points} />
                <Dropdown options={options} selectedOption={selectedOption} onChange={this._onChangeObstruction} />
            </div>
        )
    }
}
