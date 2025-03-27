# Convertions Helper
A blazing fast utility for converting data 

![badge1](https://img.shields.io/github/stars/x2loreeh/convertions-helper?style=flat)
![badge2](https://img.shields.io/github/contributors/x2loreeh/convertions-helper)
![badge3](https://img.shields.io/github/license/x2loreeh/convertions-helper)
![badge4](https://img.shields.io/github/forks/x2loreeh/convertions-helper?style=flat)


## Why should you switch to Convertions Helper?
You should switch to Convertions Helper because it is simple and fast!  Instead of using ```console.log(num + num)``` you can simply use a function like ```celsiusToFahrenheit(num)``` and it will automatically convert this into your selected measure.  Also it is a little bit faster tha the normal console.log() 

Proofs:

![test1](/images/test1.png)  Using Convertions Helper

![testconsolelog](/images/testconsolelog.png) Using ```console.log()```

**All these test were made on the same file, on the same machine, and runned at the same time**


## Requirements
For using Convertions Helper you will need the following requirements:
- NodeJS (Minimum v22)
- An IDE, or a program that lets you create and modify javascript files
- A terminal and the "jest" package if you want to have also the timings


## Usage
For now Convertions Helper is not avaiable/working on npmjs, so the only method to make it running is downloading this repository and importing in in your project, like i wrote in [Example](#Example)


## Avaviable Convertions
- ✔️ Celsius to Fahrenheit (and viceversa)
- ✔️ Celsius to Kelvin (and viceversa)
- ✔️ Kelvin to Fahrenheit (and viceversa)
- ✔️ Hour to Minute (and viceversa)
- ✔️ Minute to Second (and viceversa)
- ✔️ Hour to Second (and viceversa)
- ✔️ Second to Hour (and viceversa)
- ✔️ Day to Hour (and viceversa)
- ✔️ Day to Minute (and viceversa)
- ✔️ Minute to Day (and viceversa)
- ✔️ Day to Seconds (and viceversa)
- ✔️ Byte to Bit (and viceversa)
- ✔️ Kilobyte to Bit (and viceversa)
- ✔️ KiloByte to Byte (and viceversa)
- ✔️ MegaByte to Bit (and viceversa)
- ✔️ MegaByte to Byte (and viceversa)
- ✔️ MegaByte to Kilobyte (and viceversa)
- ✔️ Kilobyte to Megabyte (and viceversa)
- ✔️ Bit to Kilobyte (and viceversa)
- ✔️ Bit to Megabyte (and viceversa)
- ✔️ String to Base64 (and viceversa)

### Other Features
- You can also add an emoji to your convertions to make them cooler using the function ```.addEmoji(emoji)```
- You can save your convertions in a txt (or text) file using ```.saveConvertions()```
  - #### Avaiable formats
    - Text File (.txt)
    - JSON File (.json)
    - YAML File (.yml)
- You can compare now two convertions using ```compareConvertions(conv1, conv2)``` and see which is the bigger one
- You can convert the items in a array using ```convertMultiples(convertion, values)```, following the example below
  ```
  const results = convertMultiple(hourToMinute, [1, 2, 3, 4]);
  console.log(results.map(r => r.value));
  ```

### Example 


Before trying to convert data using the example below, your project structure would look like this:
```
my-project/
│
├── src/
│   └── main.js      // Main.js need to be here
│          
├── testing/
│   └── test.js      // Test files needs to be in a different folder
│
├── package.json     
└── node_modules/
```

``` 
const convertions = require('../src/main');

test('test1', () => {
convertions.celsiusToFahrenheit(20)
  .addEmoji('🔥')
  .saveConversions('json');

convertions.kilobyteToBit(1)
  .addEmoji('💻')
  .saveConversions('txt');

convertions.megabyteToKilobyte(5)
  .addEmoji('📦')
  .saveConversions('yml');
});
```
