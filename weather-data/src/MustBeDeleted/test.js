// const wd = require('./weatherData')
// const we = require('./weatherElements')
// const wh = require('./weatherHistory')
// const wep = require('./weatherPrediction')
// const di = require('./dateInterval')
// const util = require('./util')
// const ev = require('./eventType')

// //.................................................................................
// // DateInterval Test

// const date = di.DateInterval('2015-04-20T00:00:00.000Z', '2030-04-26T00:00:00.000Z')
// console.log(date.from())
// console.log(date.to())
// console.log(date.contains('2017-04-26T00:00:00.000Z'))
// console.log()

// //.................................................................................
// // EventType Test

// const eventTypeObj = {
//     date: '2020-04-26T00:00:00.000Z',
//     place: 'Horsens',
// }

// const TypeObj = {
//     type: 'Temp',
//     unit: 'C',
// }

// const event = ev.event(eventTypeObj)
// console.log(event.getDate())
// console.log(event.getplace())
// event.date = 'invalid date' // no effect (isolation)
// console.log()
// const dataType = ev.dataType(TypeObj)
// console.log(dataType.getUnit())
// console.log(dataType.getType())
// dataType.unit = 'invalid' // has no effect
// console.log(dataType.getUnit())
// console.log()

// // temperature test
// //.................................................................................

// const tempObj = {
//     value: 10,
//     type: 'Temp',
//     unit: 'C',
//     date: '2019-04-26T00:00:00.000Z',
//     place: 'Horsens',
// }

// const temp = we.temperature(tempObj)
// console.log('before')
// console.log(temp.getDate())
// console.log(temp.getUnit())
// console.log(temp.getValue())
// const tempF = temp.convertToF()
// console.log('after')
// console.log(temp.getUnit())
// console.log(temp.getValue())
// console.log('the converted object to F')
// console.log(tempF.getUnit())
// console.log(tempF.getValue())
// console.log('the converted object from F to C')
// const tempC = tempF.convertToC()
// console.log(tempC.getUnit())
// console.log(tempC.getValue())
// console.log()

// //.................................................................................
// // precipitation TEST

// const preObj = {
//     value: 1,
//     type: 'Pre',
//     unit: 'MM',
//     date: '2018-04-26T00:00:00.000Z',
//     place: 'Horsens',
//     precipitationType: 'Rain'
// }

// const pre = we.precipitation(preObj)
// // ......getters
// console.log(pre.getDate())
// console.log(pre.getType())
// console.log(pre.getUnit())
// console.log(pre.getValue())
// console.log(pre.getUnit())
// console.log(pre.getValue())
// // ...converter
// const preInc = pre.convertToInches()
// console.log(pre.getUnit())
// console.log(pre.getValue())
// console.log(preInc.getUnit())
// console.log(preInc.getValue())
// console.log(pre.getUnit())
// console.log(pre.getValue())
// console.log()
// const preMM = preInc.convertToMM()
// console.log(preMM.getUnit())
// console.log(preMM.getValue())
// console.log()

// //.................................................................................
// // array Test

// const windObj = {
//     value: 1,
//     type: 'Wind',
//     unit: 'MS',
//     date: '2016-04-26T00:00:00.000Z',
//     place: 'Horsens',
//     direction: 'north'
// }

// const win = we.wind(windObj)
// // console.log(win.getDirection())
// console.log(win.getUnit())
// console.log(win.getValue())
// const winMPH = win.convertToMPH(win.args)
// console.log(win.getUnit())
// console.log(win.getValue())
// console.log()
// console.log(winMPH.getValue())
// console.log(winMPH.getUnit())
// const winMS = winMPH.convertToMS(win.args)
// console.log(winMS.getValue())
// console.log(winMS.getUnit())
// console.log()
// console.log()

// // .................................................................................
// //  Cloud Coverage Test

// const cloudObj = {
//     value: 1,
//     type: 'Cloud',
//     unit: 'percentage',
//     date: '2015-04-26T00:00:00.000Z',
//     place: 'Horsens',
//     status: 'clear'
// }

// const cloud = we.cloudCoverage(cloudObj)
// //...getters
// console.log(cloud.getDate())
// console.log(cloud.getType())
// console.log(cloud.getUnit())
// console.log(cloud.getValue())
// console.log(cloud.getplace())
// console.log(cloud.getStatus())

// //................................................................................
// //weather History Test

// const objTemp1 = {
//     unit: 'C',
//     type: 'Temp',
//     date: '2015-04-20T00:00:00.000Z',
//     place: 'Horsens',
//     value: 10,
// }
// const objTemp2 = {
//     unit: 'F',
//     type: 'Temp',
//     date: '2015-04-20T00:00:00.000Z',
//     place: 'Aarhus',
//     value: 1,
// }
// const objTemp3 = {
//     unit: 'F',
//     type: 'Temp',
//     date: '2015-04-20T00:00:00.000Z',
//     place: 'Aarhus',
//     value: 12,
// }

// const objTemp4 = {
//     unit: 'F',
//     type: 'Temp',
//     date: '2015-04-20T00:00:00.000Z',
//     place: 'Horsens',
//     value: 26,
// }
// const objPerci1 = {
//     unit: 'Inches',
//     type: 'Percipitation',
//     date: '2013-04-20T00:00:00.000Z',
//     place: 'Aarhus',
//     value: 1,
//     precipitationType: 'Rain'
// }

// const objPerci2 = {
//     unit: 'MM',
//     type: 'Percipitation',
//     date: '2015-04-20T00:00:00.000Z',
//     place: 'Horsnes',
//     value: 1,
//     precipitationType: 'Rain'
// }

// const objWind1 = {
//     unit: 'MPH',
//     type: 'Wind',
//     date: '2010-04-20T00:00:00.000Z',
//     place: 'Aarhus',
//     value: 1,
//     precipitationType: 'Rain'
// }
// const objWind2 = {
//     unit: 'MS',
//     type: 'Wind',
//     date: '2015-04-20T00:00:00.000Z',
//     place: 'Horsens',
//     value: 1,
//     precipitationType: 'Rain'
// }
// const objCloud1 = {
//     unit: '%',
//     type: 'Cloud',
//     date: '2015-04-20T00:00:00.000Z',
//     place: 'Horsens',
//     value: 100,
//     status: 'Clear'
// }

// const objCloud2 = {
//     unit: '%',
//     type: 'Cloud',
//     date: '2015-04-20T00:00:00.000Z',
//     place: 'Aarhus',
//     value: 100,
//     status: 'Not Clear'
// }
// const newTestObject1 = {
//     unit: 'tttt',
//     type: 'tttt',
//     date: '2015-04-20T00:00:00.000Z',
//     place: 'ttttt',
//     value: 00,
//     status: 'ttt'
// }
// const newTestObject2 = {
//     unit: 'zzz',
//     type: 'zzzz',
//     date: '2015-04-20T00:00:00.000Z',
//     place: 'zzzz',
//     value: 00,
//     status: 'zzz'
// }

// const dateTest = di.DateInterval('2014-04-20T00:00:00.000Z', '2030-04-26T00:00:00.000Z')
// const wHistory = wh.WeatherHistory([objTemp1, objTemp2, objTemp3, objTemp4, objPerci1, objPerci1, objPerci2, objWind1, objWind2, objCloud1, objCloud2])

// //......data 
// console.log(wHistory.data())
// console.log()

// //....... for place 
// const horsensData = wHistory.forPlace('Horsens')
// console.log(horsensData.data())
// console.log()
// console.log(wHistory.data())

// // ........add new observations 
// newAddedObservations = wHistory.addImmutable(newTestObject1, newTestObject2)
// console.log(newAddedObservations.data())

// //.........for type 
// const tempData = wHistory.forType('Temp')
// console.log(tempData.data())

// //.... for period
// const dateData = wHistory.forPeriod(dateTest)
// console.log(dateData.data())

// //....converters
// const internationalUnit = tempData.convertToInternationalUnits()
// console.log(internationalUnit.data())
// const usUnit = tempData.convertToUSUnits()
// console.log(usUnit.data())

// //....lowestValue
// console.log()
// console.log(tempData.lowestValue())
