import moment from "moment"

export const getGroupedPoints = (points) => (selectedOption, minDate, maxDate) => {
    const groupedMap = points
        .filter(({obstruction}) => {
            return obstruction === selectedOption || selectedOption === "all"
        })
        .filter(({timestamp}) => {
            const timestampMoment = moment(timestamp)
            return timestampMoment.isBetween(minDate, maxDate, "day", "[]")
        })
        .reduce((acc, {lat, long}) => {
            const key = `${lat},${long}`
            const value = acc[key]
            const count = value ? value.count : 0
            return {
                ...acc,
                [key]: {
                    lat,
                    long,
                    count: count + 1
                }
            }
        }, {})

    return Object.values(groupedMap)
        .sort((left, right) => right.count - left.count)
        .map(({ lat, long, count }) => [lat, long, count])
}
