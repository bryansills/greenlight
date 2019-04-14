module.exports = {
    pathPrefix: "/greenlight",
    plugins: [
        "gatsby-plugin-react-leaflet",
        "gatsby-transformer-json",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "data",
                path: `${__dirname}/src/data/`
            }
        }
    ]
}
