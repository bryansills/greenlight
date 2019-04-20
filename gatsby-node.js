const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === "CitiesJson") {
        const fileNode = getNode(node.parent)
        const { name } = fileNode
        createNodeField({
            node,
            name: "key",
            value: name,
        })
    }
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return graphql(`
        {
            allCitiesJson {
                edges {
                    node {
                        fields {
                            key
                        }
                    }
                }
            }
        }
    `).then(result => {
        result.data.allCitiesJson.edges.forEach(({ node }) => {
            const { key } = node.fields

            createPage({
                path: key,
                component: path.resolve("./src/templates/CityMap.js"),
                context: {
                    cityKey: key
                },
            })
        })
    })
}
