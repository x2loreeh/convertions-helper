function celsiustoKelvin(celsius) {
    return (celsius + 273.15)
}

function kelvinToCelsius(kelvin) {
    return (kelvin - 273.15)
}

module.exports = {
    celsiustoKelvin,
    kelvinToCelsius
};