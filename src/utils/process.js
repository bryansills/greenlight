export const getGroupedPoints = (points) => (selectedOption) => {
    const groupedMap = points
        .filter(({obstruction}) => {
            return obstruction === selectedOption || selectedOption === "all"
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
