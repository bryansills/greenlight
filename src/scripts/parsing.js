// These are some tools to parse the .CSV files into something that the mapping tools can use
const fs = require("fs")
const path = require("path")
const cities = require("../data/cities")
const obstructions = require("../data/obstructions")

const processText = (text) => {
    const lines = text.split("\n")
    lines.splice(0,1) // Remove column names

    return lines.map((line, index) => {
            // Split into sections with the delimiter of a comma, but
            // recombine any sections within quotation marks
            // ie. "this string, should, be, split, "like, this""
            // turns into
            // [ "this string", "should", "be", "split", ""like, this""]
            const parts = line.split(",").reduce((acc, current) => {
                const [ lastPart = "" ] = acc.splice(-1, 1)

                if (lastPart.startsWith("\"") && !lastPart.endsWith("\"")) {
                    return [ ...acc, `${lastPart},${current}`]
                } else {
                    return [ ...acc, lastPart, current ]
                }
            }, [])

            if (parts.length === 33) {
                const obstruction = getObstructionKey(parts[2])
                const lat = parseFloat(parts[3].replace("\"", "").trim())
                const long = parseFloat(parts[4].replace("\"", "").trim())

                return {
                    lat,
                    long,
                    obstruction,
                }
            } else if (line) {
                console.log(`Unexpected data on line ${index + 1}: has ${parts.length} sections instead of 33`)
                console.log(line)
                console.log("-----")
                console.log("")
            }
        })
        .filter(Boolean)
}

const getObstructionKey = (csvName) => {
    const match = obstructions.find(obstruction => obstruction.data === csvName)
    return match ? match.key : "other"
}

const outputFiles = (cityName, points) => {
    const directory = path.resolve(".", "points/")
    !fs.existsSync(directory) && fs.mkdirSync(directory, { recursive: true })
    fs.writeFileSync(path.resolve(".", `points/${cityName}.json`), formatOutput(points))
}

const formatOutput = (output) => {
    return JSON.stringify({ result: output }, null, 4)
}

// main

const inputFilename = process.argv[2]
const input = fs.readFileSync(path.resolve(".", inputFilename)).toString()
const processedText = processText(input)

cities.map(city => {
    const { key, bounds } = city
    const filtered = processedText.filter(({lat, long}) => {
        if (bounds) {
            const { min_lat, max_lat, min_long, max_long } = bounds
            return min_lat < lat && lat < max_lat && min_long < long && long < max_long
        } else {
            return true
        }
    })

    outputFiles(key, filtered)
})
