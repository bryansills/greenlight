import React from "react"
import { Map } from "react-leaflet"

export class FullScreenMap extends React.Component {
    state = {}

    componentDidMount() {
        if (typeof window !== 'undefined') {
            window.addEventListener("resize", this._updateDimensions)
            this._updateDimensions()
        }
    }

    componentWillUnmount() {
        if (typeof window !== 'undefined') {
            window.removeEventListener("resize", this._updateDimensions)
        }
    }

    _updateDimensions = () => {
        if (typeof window !== 'undefined') {
            const height = window.innerHeight
            this.setState({ height: height })
            this.forceUpdate()
        }
    }

    render() {
        const { children, ...rest } = this.props
        const height = this.state.height

        if (typeof window !== 'undefined' && height) {
            return (
                <Map style={{ height }} { ...rest }>
                    { children }
                </Map>
            )
        } else {
            return null
        }
    }
}
