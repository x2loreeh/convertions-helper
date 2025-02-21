const fs = require('fs');

// Emoji Converter + Salvataggio su file
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

// ⏳ Time Conversions
function weekToDay(week) {
    return addEmojiConverter(week * 7, week, "week", "day");
}

function dayToWeek(day) {
    return addEmojiConverter(day / 7, day, "day", "week");
}

function monthToDay(month) {
    return addEmojiConverter(month * 30, month, "month", "day"); // Approximation
}

function dayToMonth(day) {
    return addEmojiConverter(day / 30, day, "day", "month"); // Approximation
}

function yearToDay(year) {
    return addEmojiConverter(year * 365, year, "year", "day"); // Approximation
}

function dayToYear(day) {
    return addEmojiConverter(day / 365, day, "day", "year"); // Approximation
}

// 💾 Byte Conversions
function gigabyteToMegabyte(gb) {
    return addEmojiConverter(gb * 1000, gb, "GB", "MB");
}

function megabyteToGigabyte(mb) {
    return addEmojiConverter(mb / 1000, mb, "MB", "GB");
}

function terabyteToGigabyte(tb) {
    return addEmojiConverter(tb * 1000, tb, "TB", "GB");
}

function gigabyteToTerabyte(gb) {
    return addEmojiConverter(gb / 1000, gb, "GB", "TB");
}

function petabyteToTerabyte(pb) {
    return addEmojiConverter(pb * 1000, pb, "PB", "TB");
}

function terabyteToPetabyte(tb) {
    return addEmojiConverter(tb / 1000, tb, "TB", "PB");
}

// 📏 Length Conversions
function meterToKilometer(m) {
    return addEmojiConverter(m / 1000, m, "m", "km");
}

function kilometerToMeter(km) {
    return addEmojiConverter(km * 1000, km, "km", "m");
}

function centimeterToMeter(cm) {
    return addEmojiConverter(cm / 100, cm, "cm", "m");
}

function meterToCentimeter(m) {
    return addEmojiConverter(m * 100, m, "m", "cm");
}

function millimeterToCentimeter(mm) {
    return addEmojiConverter(mm / 10, mm, "mm", "cm");
}

function centimeterToMillimeter(cm) {
    return addEmojiConverter(cm * 10, cm, "cm", "mm");
}

function inchToCentimeter(inch) {
    return addEmojiConverter(inch * 2.54, inch, "inch", "cm");
}

function centimeterToInch(cm) {
    return addEmojiConverter(cm / 2.54, cm, "cm", "inch");
}

function footToMeter(ft) {
    return addEmojiConverter(ft * 0.3048, ft, "ft", "m");
}

function meterToFoot(m) {
    return addEmojiConverter(m / 0.3048, m, "m", "ft");
}

function mileToKilometer(mile) {
    return addEmojiConverter(mile * 1.60934, mile, "mile", "km");
}

function kilometerToMile(km) {
    return addEmojiConverter(km / 1.60934, km, "km", "mile");
}

// 🔥 Temperature Conversions
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

module.exports = {
    weekToDay,
    dayToWeek,
    monthToDay,
    dayToMonth,
    yearToDay,
    dayToYear,
    gigabyteToMegabyte,
    megabyteToGigabyte,
    terabyteToGigabyte,
    gigabyteToTerabyte,
    petabyteToTerabyte,
    terabyteToPetabyte,
    meterToKilometer,
    kilometerToMeter,
    centimeterToMeter,
    meterToCentimeter,
    millimeterToCentimeter,
    centimeterToMillimeter,
    inchToCentimeter,
    centimeterToInch,
    footToMeter,
    meterToFoot,
    mileToKilometer,
    kilometerToMile,
    celsiusToKelvin,
    kelvinToCelsius,
    celsiusToFahrenheit,
    fahrenheitToCelsius,
    fahrenheitToKelvin,
    kelvinToFahrenheit
};
