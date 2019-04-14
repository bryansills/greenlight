import React from "react"
import { graphql } from "gatsby"
import { ObstructionMap } from "../components/ObstructionMap"
import { getGroupedPoints } from "../utils/process"

export default ({ data }) => {
    return (
        <div id={"map"}>
            <ObstructionMap
                position={[41.881832, -87.623177]}
                zoom={11}
                options={data.obstructions.result}
                getGroupedPoints={getGroupedPoints(data.points.file.result)} />
        </div>
    )
}

export const query = graphql`
    query {
        obstructions: file(
            sourceInstanceName: { eq: "data" },
            relativePath: { eq: "obstructions.json" }
        ) {
            result: childrenObstructionsJson {
                key,
                spinner,
                data
            }
        },
        points: file(
            sourceInstanceName: { eq: "points" },
            relativePath: { eq: "all.json" }
        ) {
            file: childPointsJson {
                result {
                    lat,
                    long,
                    obstruction
                }
            }
        }
    }
`
