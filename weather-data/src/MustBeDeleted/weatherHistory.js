// const util = require('./util')
// const self = module.exports = {
//     WeatherHistory: (wheatherData) => {

//         const array = [...wheatherData]

//         const forPlace = _place => self.WeatherHistory([...array].filter(x => x.place === _place))

//         const forType = _type => self.WeatherHistory([...array].filter(x => x.type === _type))

//         const forPeriod = _date => self.WeatherHistory([...array].filter(x => _date.contains(x.date)))

//         const addImmutable = (...newItems) => self.WeatherHistory([...array, ...newItems])

//         const data = () => [...array]

//         const convertToUSUnits = () => self.WeatherHistory(util.USConverter([...array]))

//         const convertToInternationalUnits = () => self.WeatherHistory(util.InternationalConverter([...array]))

//         function lowestValue() {
//             if (array.length === 0) return undefined
//             else {
//                 return array.reduce((a, b) => a.value < b.value ? a : b).value
//             }
//         }

//         return {
//             data,
//             forPlace,
//             forType,
//             forPeriod,
//             addImmutable,
//             convertToUSUnits,
//             convertToInternationalUnits,
//             lowestValue,
//             array

//         }
//     }
// }