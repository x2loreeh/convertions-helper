function celsiustoFahrenheit(celsius) {
    return (celsius * 9/5) + 32
}

function fahrenheittoCelsius(fahrenheit) {
    return (fahrenheit - 32)  * 5/9
}


module.exports = {
    celsiustoFahrenheit,
    fahrenheittoCelsius
};