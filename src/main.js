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
    const dataObject = { initial: this.input, result: this.output, emoji: this.emoji };

    try {
      if (format === 'txt') {
        const datatxt = `${this.input} >> ${this.output} ${this.emoji} \n`;
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

function validateNumber(input) {
  return typeof input === 'number' && !isNaN(input);
}

function compareConvertions(conv1, conv2) {
  return conv1.value > conv2.value ? "The first conversion is greater than the second" : "The second conversion is greater than the first";
}

function convertMultiple(conversionFunction, values) {
  return values.map(value => conversionFunction(value));
}

function toScientificNotation(value) {
  if (!validateNumber(value)) return 'Error: input must be a valid number';
  return value.toExponential(2);
}

function celsiusToFahrenheit(celsius) {
  if (!validateNumber(celsius)) return 'Error: input must be a valid number';
  const output = (celsius * 9/5) + 32;
  return new Conversion(`${celsius}°C`, `${output}°F`);
}

function fahrenheitToCelsius(fahrenheit) {
  if (!validateNumber(fahrenheit)) return 'Error: input must be a valid number';
  const output = (fahrenheit - 32) * 5/9;
  return new Conversion(`${fahrenheit}°F`, `${output}°C`);
}

function celsiusToKelvin(celsius) {
  if (!validateNumber(celsius)) return 'Error: input must be a valid number';
  const output = celsius + 273.15;
  return new Conversion(`${celsius}°C`, `${output} K`);
}

function kelvinToCelsius(kelvin) {
  if (!validateNumber(kelvin)) return 'Error: input must be a valid number';
  const output = kelvin - 273.15;
  return new Conversion(`${kelvin} K`, `${output}°C`);
}

function kelvinToFahrenheit(kelvin) {
  if (!validateNumber(kelvin)) return 'Error: input must be a valid number';
  const output = (kelvin - 273.15) * 9/5 + 32;
  return new Conversion(`${kelvin} K`, `${output}°F`);
}

function fahrenheitToKelvin(fahrenheit) {
  if (!validateNumber(fahrenheit)) return 'Error: input must be a valid number';
  const output = (fahrenheit - 32) * 5/9 + 273.15;
  return new Conversion(`${fahrenheit}°F`, `${output} K`);
}

function hourToMinute(hours) {
  if (!validateNumber(hours)) return 'Error: input must be a valid number';
  const output = hours * 60;
  return new Conversion(`${hours} hours`, `${output} minutes`);
}

function minuteToHour(minutes) {
  if (!validateNumber(minutes)) return 'Error: input must be a valid number';
  const output = minutes / 60;
  return new Conversion(`${minutes} minutes`, `${output} hours`);
}

function minuteToSecond(minutes) {
  if (!validateNumber(minutes)) return 'Error: input must be a valid number';
  const output = minutes * 60;
  return new Conversion(`${minutes} minutes`, `${output} seconds`);
}

function secondToMinute(seconds) {
  if (!validateNumber(seconds)) return 'Error: input must be a valid number';
  const output = seconds / 60;
  return new Conversion(`${seconds} seconds`, `${output} minutes`);
}

function hourToSecond(hours) {
  if (!validateNumber(hours)) return 'Error: input must be a valid number';
  const output = hours * 3600;
  return new Conversion(`${hours} hours`, `${output} seconds`);
}

function secondToHour(seconds) {
  if (!validateNumber(seconds)) return 'Error: input must be a valid number';
  const output = seconds / 3600;
  return new Conversion(`${seconds} seconds`, `${output} hours`);
}

function dayToHour(days) {
  if (!validateNumber(days)) return 'Error: input must be a valid number';
  const output = days * 24;
  return new Conversion(`${days} days`, `${output} hours`);
}

function hourToDay(hours) {
  if (!validateNumber(hours)) return 'Error: input must be a valid number';
  const output = hours / 24;
  return new Conversion(`${hours} hours`, `${output} days`);
}

function dayToMinute(days) {
  if (!validateNumber(days)) return 'Error: input must be a valid number';
  const output = days * 1440;
  return new Conversion(`${days} days`, `${output} minutes`);
}

function minuteToDay(minutes) {
  if (!validateNumber(minutes)) return 'Error: input must be a valid number';
  const output = minutes / 1440;
  return new Conversion(`${minutes} minutes`, `${output} days`);
}

function dayToSecond(days) {
  if (!validateNumber(days)) return 'Error: input must be a valid number';
  const output = days * 86400;
  return new Conversion(`${days} days`, `${output} seconds`);
}

function secondToDay(seconds) {
  if (!validateNumber(seconds)) return 'Error: input must be a valid number';
  const output = seconds / 86400;
  return new Conversion(`${seconds} seconds`, `${output} days`);
}

function kgToPounds(kg) {
  if (!validateNumber(kg)) return 'Error: input must be a valid number';
  return kg * 2.20462;
}

function poundsToKg(pounds) {
  if (!validateNumber(pounds)) return 'Error: input must be a valid number';
  return pounds / 2.20462;
}

function kgToOunces(kg) {
  if (!validateNumber(kg)) return 'Error: input must be a valid number';
  return kg * 35.274;
}

function ouncesToKg(ounces) {
  if (!validateNumber(ounces)) return 'Error: input must be a valid number';
  return ounces / 35.274;
}

function byteToBit(bytes) {
  if (!validateNumber(bytes)) return 'Error: input must be a valid number';
  const output = bytes * 8;
  return new Conversion(`${bytes} bytes`, `${output} bits`);
}

function bitToByte(bits) {
  if (!validateNumber(bits)) return 'Error: input must be a valid number';
  const output = bits / 8;
  return new Conversion(`${bits} bits`, `${output} bytes`);
}

function kilobyteToBit(kilobytes) {
  if (!validateNumber(kilobytes)) return 'Error: input must be a valid number';
  const output = kilobytes * 1024 * 8;
  return new Conversion(`${kilobytes} kilobytes`, `${output} bits`);
}

function bitToKilobyte(bits) {
  if (!validateNumber(bits)) return 'Error: input must be a valid number';
  const output = bits / (1024 * 8);
  return new Conversion(`${bits} bits`, `${output} kilobytes`);
}

function kilobyteToByte(kilobytes) {
  if (!validateNumber(kilobytes)) return 'Error: input must be a valid number';
  const output = kilobytes * 1024;
  return new Conversion(`${kilobytes} kilobytes`, `${output} bytes`);
}

function byteToKilobyte(bytes) {
  if (!validateNumber(bytes)) return 'Error: input must be a valid number';
  const output = bytes / 1024;
  return new Conversion(`${bytes} bytes`, `${output} kilobytes`);
}

function megabyteToBit(megabytes) {
  if (!validateNumber(megabytes)) return 'Error: input must be a valid number';
  const output = megabytes * 1024 * 1024 * 8;
  return new Conversion(`${megabytes} megabytes`, `${output} bits`);
}

function bitToMegabyte(bits) {
  if (!validateNumber(bits)) return 'Error: input must be a valid number';
  const output = bits / (1024 * 1024 * 8);
  return new Conversion(`${bits} bits`, `${output} megabytes`);
}

function megabyteToByte(megabytes) {
  if (!validateNumber(megabytes)) return 'Error: input must be a valid number';
  const output = megabytes * 1024 * 1024;
  return new Conversion(`${megabytes} megabytes`, `${output} bytes`);
}

function byteToMegabyte(bytes) {
  if (!validateNumber(bytes)) return 'Error: input must be a valid number';
  const output = bytes / (1024 * 1024);
  return new Conversion(`${bytes} bytes`, `${output} megabytes`);
}

function megabyteToKilobyte(megabytes) {
  if (!validateNumber(megabytes)) return 'Error: input must be a valid number';
  const output = megabytes * 1024;
  return new Conversion(`${megabytes} megabytes`, `${output} kilobytes`);
}

function kilobyteToMegabyte(kilobytes) {
  if (!validateNumber(kilobytes)) return 'Error: input must be a valid number';
  const output = kilobytes / 1024;
  return new Conversion(`${kilobytes} kilobytes`, `${output} megabytes`);
}

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
  toScientificNotation,
  compareConvertions
};