import React from "react"
import { graphql } from "gatsby"
import { ObstructionMap } from "../components/ObstructionMap"

export default ({ data }) => {
    return (
        <div id={"map"}>
            <ObstructionMap
                position={[41.881832, -87.623177]}
                zoom={11}
                options={data.file.childrenObstructionsJson} />
        </div>
    )
}

export const query = graphql`
    query {
        file {
            childrenObstructionsJson {
                key,
                spinner,
                data
            }
        }
    }
`
