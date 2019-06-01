import React from "react"
import { HeatMap } from "../components/HeatMap"
import { Dropdown } from "./Dropdown"
import moment from "moment"

export class ObstructionMap extends React.Component {
    constructor(props) {
        super(props)

        const startDate = moment("2017-08-29")
        const currentDate = moment()
        const rangeDiff = currentDate.diff(startDate, "days")

        this.state = {
            selectedOption: props.options[0].key,
            minDate: 0,
            maxDate: rangeDiff,
            dateRange: {
                min: 0,
                max: rangeDiff
            }
        }
    }

    _onChangeObstruction = (selectedOption) => this.setState({ selectedOption })
    _onDateRangeChange = (dateRange) => this.setState({ dateRange })

    render() {
        const { position, zoom, options, getGroupedPoints } = this.props
        const { selectedOption, minDate, maxDate, dateRange } = this.state
        const points = getGroupedPoints(selectedOption)

        return(
            <div>
                <HeatMap position={position} zoom={zoom} points={points} />
                <Dropdown
                    options={options}
                    selectedOption={selectedOption}
                    onChange={this._onChangeObstruction}
                    minDate={minDate}
                    maxDate={maxDate}
                    dateRange={dateRange}
                    onDateRangeChange={this._onDateRangeChange} />
            </div>
        )
    }
}
