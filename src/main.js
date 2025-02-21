const fs = require('fs');

// Emoji Converter + fileSaving
function addEmojiConverter(value, input, unitFrom, unitTo) {
    return {
        value: value,
        addEmoji: function(emoji) {
            this.emoji = emoji;
            return this;
        },
        saveConversions: function(filename = 'conversions.txt') {
            const conversionText = `${input} ${unitFrom} -> ${value} ${unitTo} ${this.emoji || ""}\n`;
            fs.appendFileSync(filename, conversionText, 'utf8');
            console.log(`Conversion saved: ${conversionText.trim()}`);
        }
    };
}

// Time Conversions
function minuteToSeconds(minute) {
    return addEmojiConverter(minute * 60, minute, "min", "sec");
}

function secondToMinute(second) {
    return addEmojiConverter(second / 60, second, "sec", "min");
}

function hourToSecond(hour) {
    return addEmojiConverter(hour * 3600, hour, "hour", "sec");
}

function secondToHour(second) {
    return addEmojiConverter(second / 3600, second, "sec", "hour");
}

function hourToMinute(hour) {
    return addEmojiConverter(hour * 60, hour, "hour", "min");
}

function minuteToHour(minute) {
    return addEmojiConverter(minute / 60, minute, "min", "hour");
}

function dayToSecond(days) {
    return addEmojiConverter(days * 86400, days, "day", "sec");
}

function secondToDay(seconds) {
    return addEmojiConverter(seconds / 86400, seconds, "sec", "day");
}

function daysToMinute(days) {
    return addEmojiConverter(days * 1440, days, "day", "min");
}

function minuteToDay(minutes) {
    return addEmojiConverter(minutes / 1440, minutes, "min", "day");
}

function dayToHour(day) {
    return addEmojiConverter(day * 24, day, "day", "hour");
}

function hourToDay(hour) {
    return addEmojiConverter(hour / 24, hour, "hour", "day");
}

// Temperature Conversions
function celsiusToKelvin(celsius) {
    return addEmojiConverter(celsius + 273.15, celsius, "°C", "K");
}

function kelvinToCelsius(kelvin) {
    return addEmojiConverter(kelvin - 273.15, kelvin, "K", "°C");
}

function celsiusToFahrenheit(celsius) {
    return addEmojiConverter((celsius * 9/5) + 32, celsius, "°C", "°F");
}

function fahrenheitToCelsius(fahrenheit) {
    return addEmojiConverter((fahrenheit - 32) * 5/9, fahrenheit, "°F", "°C");
}

function fahrenheitToKelvin(fahrenheit) {
    return addEmojiConverter((fahrenheit - 32) * 5/9 + 273.15, fahrenheit, "°F", "K");
}

function kelvinToFahrenheit(kelvin) {
    return addEmojiConverter((kelvin - 273.15) * 9/5 + 32, kelvin, "K", "°F");
}

// Byte Conversions
function byteToBit(byte) {
    return addEmojiConverter(byte * 8, byte, "B", "bit");
}

function bitToByte(bit) {
    return addEmojiConverter(bit / 8, bit, "bit", "B");
}

function kilobyteToBit(kilobyte) {
    return addEmojiConverter(kilobyte * 8000, kilobyte, "KB", "bit");
}

function bitToKilobyte(bit) {
    return addEmojiConverter(bit / 8000, bit, "bit", "KB");
}

function kilobyteToByte(kilobyte) {
    return addEmojiConverter(kilobyte * 1000, kilobyte, "KB", "B");
}

function byteToKilobyte(byte) {
    return addEmojiConverter(byte / 1000, byte, "B", "KB");
}

function megabyteToByte(megabyte) {
    return addEmojiConverter(megabyte * 1000000, megabyte, "MB", "B");
}

function byteToMegabyte(byte) {
    return addEmojiConverter(byte / 1000000, byte, "B", "MB");
}

function megabyteToKiloByte(megabyte) {
    return addEmojiConverter(megabyte * 1000, megabyte, "MB", "KB");
}

function kilobyteToMegabyte(kilobyte) {
    return addEmojiConverter(kilobyte / 1000, kilobyte, "KB", "MB");
}

function megabyteToBit(megabyte) {
    return addEmojiConverter(megabyte * 8000000, megabyte, "MB", "bit");
}

function bitToMegabyte(bit) {
    return addEmojiConverter(bit / 8000000, bit, "bit", "MB");
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
};