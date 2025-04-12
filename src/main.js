const fs = require('fs').promises;
const yaml = require('js-yaml');

class Conversion {
    constructor(input, output) {
      this.input = input;
      this.output = output;
      this.emoji = '';
    }

    addEmoji(emoji) {
        this.emoji = emoji;
        return this;
    }

    async saveConversions(format) {
      const fileName = `conversions.${format}`;
      const dataObject = { initial: this.input,result: this.output, emoji: this.emoji };

      try {
        if (format === 'txt') {
          const datatxt = `${this.input} >> ${this.output} ${this.emoji} \n`;
          const data = `${this.initial} ${this.result} ${this.emoji}\n`;
          await fs.appendFile(fileName, datatxt);
        } else if (format === 'json') {
          let jsonData = [];
          try {
            const fileContent = await fs.readFile(fileName, 'utf8');
            jsonData = JSON.parse(fileContent);
          } catch (err) {
            if (err.code !== 'ENOENT') throw err;
          }
          jsonData.push(dataObject);
          await fs.writeFile(fileName, JSON.stringify(jsonData, null, 2));
        } else if (format === 'yml' || format === 'yaml') {
          let yamlData = [];
          try {
            const fileContent = await fs.readFile(fileName, 'utf8');
            yamlData = yaml.load(fileContent) || [];
          } catch (err) {
            if (err.code !== 'ENOENT') throw err;
          }
          yamlData.push(dataObject);
          await fs.writeFile(fileName, yaml.dump(yamlData));
        } else {
          console.error('Formato non supportato.');
          return;
        }
      } catch (err) {
        console.error(`Errore nel salvataggio: ${err.message}`);
      }
    }
}
// Funzioni di conversione

// Confronto conversioni
function compareConvertions(conv1, conv2) {
  return conv1.value > conv2.value ? "The first conversion is greater than the second" : "The second conversion is greater than the first";
}

// Conversione di multipli
function convertMultiple(conversionFunction, values) {
  return values.map(value => conversionFunction(value));
}

// Notazione Scientifica
function toScientificNotation(value) {
  return value.toExponential(2);
}

// Celsius to Fahrenheit and vice versa
function celsiusToFahrenheit(celsius) {
  const output = (celsius * 9/5) + 32;
  return new Conversion(`${celsius}°C`, `${output}°F`);
}
function fahrenheitToCelsius(fahrenheit) {
  const output = (fahrenheit - 32) * 5/9;
  return new Conversion(`${fahrenheit}°F`, `${output}°C`);
}

// Celsius to Kelvin and vice versa
function celsiusToKelvin(celsius) {
  const output = celsius + 273.15;
  return new Conversion(`${celsius}°C`, `${output} K`);
}
function kelvinToCelsius(kelvin) {
  const output = kelvin - 273.15;
  return new Conversion(`${kelvin} K`, `${output}°C`);
}

// Kelvin to Fahrenheit and vice versa
function kelvinToFahrenheit(kelvin) {
  const output = (kelvin - 273.15) * 9/5 + 32;
  return new Conversion(`${kelvin} K`, `${output}°F`);
}
function fahrenheitToKelvin(fahrenheit) {
  const output = (fahrenheit - 32) * 5/9 + 273.15;
  return new Conversion(`${fahrenheit}°F`, `${output} K`);
}

// Time conversions
function hourToMinute(hours) {
  const output = hours * 60;
  return new Conversion(`${hours} hours`, `${output} minutes`);
}
function minuteToHour(minutes) {
  const output = minutes / 60;
  return new Conversion(`${minutes} minutes`, `${output} hours`);
}
function minuteToSecond(minutes) {
  const output = minutes * 60;
  return new Conversion(`${minutes} minutes`, `${output} seconds`);
}
function secondToMinute(seconds) {
  const output = seconds / 60;
  return new Conversion(`${seconds} seconds`, `${output} minutes`);
}
function hourToSecond(hours) {
  const output = hours * 3600;
  return new Conversion(`${hours} hours`, `${output} seconds`);
}
function secondToHour(seconds) {
  const output = seconds / 3600;
  return new Conversion(`${seconds} seconds`, `${output} hours`);
}
function dayToHour(days) {
  const output = days * 24;
  return new Conversion(`${days} days`, `${output} hours`);
}
function hourToDay(hours) {
  const output = hours / 24;
  return new Conversion(`${hours} hours`, `${output} days`);
}
function dayToMinute(days) {
  const output = days * 1440;
  return new Conversion(`${days} days`, `${output} minutes`);
}
function minuteToDay(minutes) {
  const output = minutes / 1440;
  return new Conversion(`${minutes} minutes`, `${output} days`);
}
function dayToSecond(days) {
  const output = days * 86400;
  return new Conversion(`${days} days`, `${output} seconds`);
}
function secondToDay(seconds) {
  const output = seconds / 86400;
  return new Conversion(`${seconds} seconds`, `${output} days`);
}

// Weight conversions
function kgToPounds(kg) {
  if (typeof kg !== 'number' || isNaN(kg)) {
    throw new Error('Invalid input: expected a number');
  }
  return kg * 2.20462;
}

function poundsToKg(pounds) {
  if (typeof pounds !== 'number' || isNaN(pounds)) {
    throw new Error('Invalid input: expected a number');
  }
  return pounds / 2.20462;
}

function kgToOunces(kg) {
  if (typeof kg !== 'number' || isNaN(kg)) {
    throw new Error('Invalid input: expected a number');
  }
  return kg * 35.274;
}

function ouncesToKg(ounces) {
  if (typeof ounces !== 'number' || isNaN(ounces)) {
    throw new Error('Invalid input: expected a number');
  }
  return ounces / 35.274;
}

// Data storage conversions
function byteToBit(bytes) {
  const output = bytes * 8;
  return new Conversion(`${bytes} bytes`, `${output} bits`);
}
function bitToByte(bits) {
  const output = bits / 8;
  return new Conversion(`${bits} bits`, `${output} bytes`);
}
function kilobyteToBit(kilobytes) {
  const output = kilobytes * 1024 * 8;
  return new Conversion(`${kilobytes} kilobytes`, `${output} bits`);
}
function bitToKilobyte(bits) {
  const output = bits / (1024 * 8);
  return new Conversion(`${bits} bits`, `${output} kilobytes`);
}
function kilobyteToByte(kilobytes) {
  const output = kilobytes * 1024;
  return new Conversion(`${kilobytes} kilobytes`, `${output} bytes`);
}
function byteToKilobyte(bytes) {
  const output = bytes / 1024;
  return new Conversion(`${bytes} bytes`, `${output} kilobytes`);
}
function megabyteToBit(megabytes) {
  const output = megabytes * 1024 * 1024 * 8;
  return new Conversion(`${megabytes} megabytes`, `${output} bits`);
}
function bitToMegabyte(bits) {
  const output = bits / (1024 * 1024 * 8);
  return new Conversion(`${bits} bits`, `${output} megabytes`);
}
function megabyteToByte(megabytes) {
  const output = megabytes * 1024 * 1024;
  return new Conversion(`${megabytes} megabytes`, `${output} bytes`);
}
function byteToMegabyte(bytes) {
  const output = bytes / (1024 * 1024);
  return new Conversion(`${bytes} bytes`, `${output} megabytes`);
}
function megabyteToKilobyte(megabytes) {
  const output = megabytes * 1024;
  return new Conversion(`${megabytes} megabytes`, `${output} kilobytes`);
}
function kilobyteToMegabyte(kilobytes) {
  const output = kilobytes / 1024;
  return new Conversion(`${kilobytes} kilobytes`, `${output} megabytes`);
}

// Developer Convertions (tools you may need)
function stringToBase64(text) {
  if (typeof text !== 'string') {
    throw new Error('Invalid input: expected a string');
  }
  return Buffer.from(text).toString('base64');
}

function base64ToString(base64) {
  if (typeof base64 !== 'string') {
    throw new Error('Invalid input: expected a Base64 string');
  }
  return Buffer.from(base64, 'base64').toString('utf-8');
}

function stringToHex(text) {
  if (typeof text !== 'string') {
    throw new Error('Invalid input: expected a string');
  }
  return Buffer.from(text).toString('hex');
}

function hexToString(hex) {
  if (typeof hex !== 'string') {
    throw new Error('Invalid input: expected a hexadecimal string');
  }
  return Buffer.from(hex, 'hex').toString('utf-8');
}

function stringToBytes(text) {
  if (typeof text !== 'string') {
    throw new Error('Invalid input: expected a string');
  }
  return new Uint8Array(Buffer.from(text));
}

function bytesToString(bytes) {
  if (!(bytes instanceof Uint8Array)) {
    throw new Error('Invalid input: expected a Uint8Array');
  }
  return Buffer.from(bytes).toString('utf-8');
}

module.exports = {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  celsiusToKelvin,
  kelvinToCelsius,
  kelvinToFahrenheit,
  fahrenheitToKelvin,
  hourToMinute,
  minuteToHour,
  minuteToSecond,
  secondToMinute,
  hourToSecond,
  secondToHour,
  dayToHour,
  hourToDay,
  dayToMinute,
  minuteToDay,
  dayToSecond,
  secondToDay,
  byteToBit,
  bitToByte,
  kilobyteToBit,
  bitToKilobyte,
  kilobyteToByte,
  byteToKilobyte,
  megabyteToBit,
  bitToMegabyte,
  megabyteToByte,
  byteToMegabyte,
  megabyteToKilobyte,
  kilobyteToMegabyte,
  stringToBase64,
  base64ToString,
  stringToHex,
  hexToString,
  stringToBytes,
  bytesToString,
  kgToOunces,
  kgToPounds,
  ouncesToKg,
  poundsToKg,

  toScientificNotation

};
