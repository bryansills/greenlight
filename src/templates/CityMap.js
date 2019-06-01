import React from "react"
import { graphql } from "gatsby"
import { ObstructionMap } from "../components/ObstructionMap"
import { getGroupedPoints } from "../utils/process"

export default ({ data }) => {
    const { cityConfig, obstructions, points } = data
    const { position, zoom } = cityConfig

    return (
        <div id={"map"}>
            <ObstructionMap
                position={position}
                zoom={zoom}
                options={obstructions.result}
                getGroupedPoints={getGroupedPoints(points.file.result)} />
        </div>
    )
}

export const query = graphql`
    query($cityKey: String!) {
        cityConfig: citiesJson(fields: { key: { eq: $cityKey } }) {
            name,
            position,
            zoom,
            heat_radius
        },
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
            name: { eq: $cityKey }
        ) {
            file: childPointsJson {
                result {
                    lat,
                    long,
                    obstruction,
                    timestamp
                }
            }
        }
    }
`
