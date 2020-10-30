/* eslint-disable eqeqeq */


export function getTheLatestObservations(_data) {
    const date = new Date(_data.reduce((initial, value) => (initial.time > value.time ? initial.time : value.time), 0))
    const ovservations = _data.filter(e => { const d = new Date(e.time); return d.getTime() == date.getTime() })
    return ovservations;
}
export function getDominant(wind) {
    const directions = wind.reduce((acc, item) => ({ ...acc, [item.direction]: acc[item.direction] + 1 }),
        { North: 0, Northeast: 0, East: 0, Southeast: 0, South: 0, Southwest: 0, West: 0, Northwest: 0 })
    const largest = Object.values(directions).reduce((prev, curr) => prev > curr ? prev : curr)
    return Object.keys(directions).find(key => directions[key] === largest)
}

