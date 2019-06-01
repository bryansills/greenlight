import React from "react"
import { HeatMap } from "../components/HeatMap"
import { Filters } from "./Filters"
import moment from "moment"

export class ObstructionMap extends React.Component {
    constructor(props) {
        super(props)

        const baseDate = moment("2017-08-29")
        const currentDate = moment()
        const rangeDiff = currentDate.diff(baseDate, "days")

        this.state = {
            selectedOption: props.options[0].key,
            baseDate,
            minDate: 0,
            maxDate: rangeDiff,
            dateRange: {
                min: 0,
                max: rangeDiff
            }
        }
    }

    _onObstructionChange = (selectedOption) => this.setState({ selectedOption })
    _onDateRangeChange = (dateRange) => this.setState({ dateRange })

    render() {
        const { position, zoom, options, getGroupedPoints } = this.props
        const { selectedOption, baseDate, minDate, maxDate, dateRange } = this.state
        const points = getGroupedPoints(selectedOption)

        return(
            <div>
                <HeatMap position={position} zoom={zoom} points={points} />
                <Filters
                    obstructions={options}
                    selectedObstruction={selectedOption}
                    onObstructionChange={this._onObstructionChange}
                    baseDate={baseDate}
                    minDate={minDate}
                    maxDate={maxDate}
                    dateRange={dateRange}
                    onDateRangeChange={this._onDateRangeChange} />
            </div>
        )
    }
}
