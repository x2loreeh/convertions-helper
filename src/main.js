function addEmojiConverter(value) {
    return {
        value: value,
        addEmoji: function(emoji) {
            return `${this.value} ${emoji}`;
        }
    };
}

// Time Convertions

// Time Convertions
function minuteToSeconds(minute) {
    return addEmojiConverter(minute * 60);
}

function secondToMinute(second) {
    return addEmojiConverter(second / 60);
}

function hourToSecond(hour) {
    return addEmojiConverter(hour * 3600);
}

function secondToHour(second) {
    return addEmojiConverter(second / 3600);
}

function hourToMinute(hour) {
    return addEmojiConverter(hour * 60);
}

function minuteToHour(minute) {
    return addEmojiConverter(minute / 60);
}

function dayToSecond(days) {
    return addEmojiConverter(days * 86400);
}

function secondToDay(seconds) {
    return addEmojiConverter(seconds / 86400);
}

function daysToMinute(days) {
    return addEmojiConverter(days * 1440);
}

function minuteToDay(minutes) {
    return addEmojiConverter(minutes / 1440);
}

function dayToHour(day) {
    return addEmojiConverter(day * 24);
}

function hourToDay(hour) {
    return addEmojiConverter(hour / 24);
}

// Temperature Convertions
function celsiusToKelvin(celsius) {
    return addEmojiConverter(celsius + 273.15);
}

function kelvinToCelsius(kelvin) {
    return addEmojiConverter(kelvin - 273.15);
}

function celsiusToFahrenheit(celsius) {
    return addEmojiConverter((celsius * 9/5) + 32);
}

function fahrenheitToCelsius(fahrenheit) {
    return addEmojiConverter((fahrenheit - 32) * 5/9);
}

function fahrenheitToKelvin(fahrenheit) {
    return addEmojiConverter((fahrenheit - 32) * 5/9 + 273.15);
}

function kelvinToFahrenheit(kelvin) {
    return addEmojiConverter((kelvin - 273.15) * 9/5 + 32);
}

// Byte Convertions
function byteToBit(byte) {
    return addEmojiConverter(byte * 8);
}

function bitToByte(bit) {
    return addEmojiConverter(bit / 8);
}

function kilobyteToBit(kilobyte) {
    return addEmojiConverter(kilobyte * 8000);
}

function bitToKilobyte(bit) {
    return addEmojiConverter(bit / 8000);
}

function kilobyteToByte(kilobyte) {
    return addEmojiConverter(kilobyte * 1000);
}

function byteToKilobyte(byte) {
    return addEmojiConverter(byte / 1000);
}

function megabyteToByte(megabyte) {
    return addEmojiConverter(megabyte * 1000000);
}

function byteToMegabyte(byte) {
    return addEmojiConverter(byte / 1000000);
}

function megabyteToKiloByte(megabyte) {
    return addEmojiConverter(megabyte * 1000);
}

function kilobyteToMegabyte(kilobyte) {
    return addEmojiConverter(kilobyte / 1000);
}

function megabyteToBit(megabyte) {
    return addEmojiConverter(megabyte * 8000000);
}

function bitToMegabyte(bit) {
    return addEmojiConverter(bit / 8000000);
}



module.exports = {
    minuteToSeconds,
    secondToMinute,
    hourToSecond,
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
    fahrenheitToKelvin,
    kelvinToFahrenheit,
    hourToDay,
    minuteToDay,
    megabyteToBit,
    bitToMegabyte
}
