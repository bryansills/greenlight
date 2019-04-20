const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === "CitiesJson") {
        const slug = createFilePath({ node, getNode, basePath: "pages" })
        createNodeField({
            node,
            name: "slug",
            value: slug,
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
                            slug
                        }
                    }
                }
            }
        }
    `).then(result => {
        result.data.allCitiesJson.edges.forEach(({ node }) => {
            createPage({
                path: node.fields.slug,
                component: path.resolve("./src/templates/CityMap.js"),
                context: {
                    slug: node.fields.slug,
                },
            })
        })
    })
}
