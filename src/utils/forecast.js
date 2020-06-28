const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=7ae68682b72aaa1570aa1ae07f10cbf8&query=${latitude},${longitude}`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, `Currently the weather is ${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degress out. There is a ${body.current.precip} % chance of rain.`)
        }
    })
}

module.exports = forecast