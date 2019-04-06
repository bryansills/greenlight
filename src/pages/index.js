import React from "react"
import { HeatMap } from "../components/HeatMap"
import points from "../data/all.json"

export default () => {
    return (
        <div id={"map"}>
            <HeatMap position={[41.881832, -87.623177]} zoom={11} points={points} />
        </div>
    )
}
