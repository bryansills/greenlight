import React from "react"
import { Map } from "react-leaflet"

export class FullScreenMap extends React.Component {

    componentWillMount() {
        this._updateDimensions()
    }

    componentDidMount() {
        window.addEventListener("resize", this._updateDimensions)
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this._updateDimensions)
    }

    _updateDimensions = () => {
        const height = window.innerHeight
        this.setState({ height: height })
    }

    render() {
        const { children, ...rest } = this.props
        return (
            <Map style={{ height: this.state.height }} { ...rest }>
                { children }
            </Map>
        )
    }
}
