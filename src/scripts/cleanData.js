// This file is a tool that cleans data so that we avoid sharing too much
// information on a public repo
const fs = require("fs")
const path = require("path")

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
                const obstruction = parts[2]
                const lat = parseFloat(parts[3].replace("\"", "").trim())
                const long = parseFloat(parts[4].replace("\"", "").trim())
                const timestamp = parts[5]

                return [
                    "",
                    obstruction,
                    lat,
                    long,
                    timestamp,
                    ...new Array(27).fill("")
                ].join(",")
            } else if (line) {
                console.log(`Unexpected data on line ${index + 1}: has ${parts.length} sections instead of 33`)
                console.log(line)
                console.log("-----")
                console.log("")
            }
        })
        .filter(Boolean)
        .join("\n")
}

// main

const inputFilename = process.argv[2]
const input = fs.readFileSync(path.resolve(".", inputFilename)).toString()
const processedText = processText(input)

const outputFilename = process.argv[3]
fs.writeFileSync(path.resolve(".", outputFilename), processedText)
