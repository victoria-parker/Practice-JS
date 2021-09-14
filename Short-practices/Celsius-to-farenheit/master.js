let yourTemperature=parseInt(prompt('Tell me a temperature in celsius so I change it to Farenheit'))

function convertToF(celsius) {
    let fahrenheit=(celsius*9/5)+32;
    return fahrenheit;
  }
  
  document.write(convertToF(yourTemperature));