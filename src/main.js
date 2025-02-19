// Time Convertions

function minuteToSeconds(minute) {
    return (minute * 60)
}

function secondToMinute(second) {
    return (second / 60)
}

function hourtoSecond (hour) {
    return (hour * 60) * 60
}

function secondToHour (second) {
    return (second * 60) * 60
}

function hourToMinute(hour) {
    return (hour * 60)
}

function minuteToHour(minute) {
    return (minute / 60)
}

function dayToSecond(days) {
    return ((days * 24) * 60 ) * 60
}

function secondToDay(seconds) {
    return ((seconds / 60) / 60 ) / 24
}

function daysToMinute(days) {
    return (days * 24 ) * 60
}

function minuteToDay(minutes) {
    return (minutes * 60 ) * 24
}

function dayToHour(day) {
    return (day * 24)
}

function hourToDay(hour) {
    return (hour / 24)
}

// Temperature Convertions

function celsiusToKelvin(celsius) {
    return (celsius + 273.15)
}

function kelvinToCelsius(kelvin) {
    return (kelvin - 273.15)
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32)  * 5/9
}

// Byte Convertions

function byteToBit(byte) {
    return byte / 8
}

function bitToByte(bit) {
    return bit * 8
}

function kilobyteToBit(kilobyte) {
    return kilobyte * 8000
}

function bitToKilobyte (bit) {
    return bit / 8000
}

function kilobyteToByte (kilobyte) {
    return kilobyte * 1000
}

function byteToKilobyte (byte) {
    return byte / 1000
}

function megabyteToByte(megabyte) {
    return megabyte * 1000000
}

function byteToMegabyte(byte) {
    return byte / 1000000
}

function megabyteToKiloByte (megabyte) {
    return megabyte * 1000
}

function kilobyteToMegabyte (kilobyte) {
    return kilobyte / 1000
}

function megabyteToBit (megabyte) {
    return megabyte * 8000000
}

function bitToMegabyte (bit) {
    return bit / 8000000
}


module.exports = {
    minuteToSeconds,
    secondToMinute,
    hourtoSecond,
    dayToSecond,
    secondToDay,
    secondToHour,
    daysToMinute,
    hourToMinute,
    minuteToHour,
    dayToHour,
    byteToBit,
    kilobyteToBit,
    kilobyteToByte,
    megabyteToByte,
    byteToMegabyte,
    megabyteToKiloByte,
    kilobyteToMegabyte,
    byteToKilobyte,
    bitToKilobyte,
    bitToByte,
    fahrenheitToCelsius,
    kelvinToCelsius,
    celsiusToFahrenheit,
    celsiusToKelvin,
    hourToDay,
    minuteToDay,
    megabyteToBit,
    bitToMegabyte
}
