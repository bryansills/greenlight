import React from "react"
import { ObstructionMap } from "../components/ObstructionMap"

export default () => {
    return (
        <div id={"map"}>
            <ObstructionMap position={[41.881832, -87.623177]} zoom={11} />
        </div>
    )
}
