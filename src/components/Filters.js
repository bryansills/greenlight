import React from "react"
import InputRange from 'react-input-range'
import "react-input-range/lib/css/index.css"
import styles from "./filters.module.css"

export class Filters extends React.Component {
    static defaultProps = {
        obstructions: []
    }

    _onChange = (event) => {
        this.props.onObstructionChange(event.target.value)
    }

    _formatLabel = (value, type) => {
        const { baseDate } = this.props

        if (type === "max") {
            return "Latest"
        } else if (type === "min") {
            return "Oldest"
        } else {
            return baseDate.clone().add(value, "days").format("MMM YYYY")
        }
    }

    _renderOptions = () => {
        const { obstructions } = this.props

        return obstructions.map(option => {
            return <option key={option.key} value={option.key}>{ option.spinner }</option>
        })
    }

    render() {
        const { selectedObstruction, minDate, maxDate, dateRange, onDateRangeChange } = this.props

        return(
            <div className={styles.filters_positioning}>
                <div className={styles.filters_border}>
                    <div className={styles.filters_fill}>
                        <select value={selectedObstruction} onChange={this._onChange}>
                            { this._renderOptions() }
                        </select>
                        <InputRange
                            minValue={minDate}
                            maxValue={maxDate}
                            value={dateRange}
                            formatLabel={this._formatLabel}
                            onChange={onDateRangeChange} />
                    </div>
                </div>
            </div>
        )
    }
}
