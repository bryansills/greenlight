import React from "react"
import { HeatMap } from "../components/HeatMap"
import { Dropdown } from "./Dropdown"

export class ObstructionMap extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedOption: props.options[0].key
        }
    }

    _onChangeObstruction = (key) => this.setState({ selectedOption: key })

    render() {
        const { position, zoom, options, getGroupedPoints } = this.props
        const { selectedOption } = this.state
        const points = getGroupedPoints(selectedOption)

        return(
            <div>
                <HeatMap position={position} zoom={zoom} points={points} />
                <Dropdown options={options} selectedOption={selectedOption} onChange={this._onChangeObstruction} />
            </div>
        )
    }
}
