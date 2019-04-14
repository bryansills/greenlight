import React from "react"
import { graphql } from "gatsby"
import { ObstructionMap } from "../components/ObstructionMap"

export default ({ data }) => {
    return (
        <div id={"map"}>
            <ObstructionMap
                position={[41.881832, -87.623177]}
                zoom={11}
                options={data.obstructions.result}
                points={data.points.result.points} />
        </div>
    )
}

export const query = graphql`
    query {
        obstructions: file {
            result: childrenObstructionsJson {
                key,
                spinner,
                data
            }
        },
        points: file(relativePath: { regex: "/all\/all/"}) {
            result: childAllJson {
                points: result
            }
        }
    }
`
