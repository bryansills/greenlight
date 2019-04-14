import React from "react"

export class Dropdown extends React.Component {
    static defaultProps = {
        options: []
    }

    _onChange = (event) => {
        this.props.onChange(event.target.value)
    }

    _renderOptions = () => {
        const { options } = this.props

        return options.map(option => {
            return <option key={option.key} value={option.key}>{ option.spinner }</option>
        })
    }

    render() {
        const { selectedOption } = this.props

        return(
            <div id="spinner_container">
                <select value={selectedOption} onChange={this._onChange}>
                    { this._renderOptions() }
                </select>
            </div>
        )
    }
}
