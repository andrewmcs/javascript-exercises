function roundTo1DecPlace(number){
  return Math.round(number * 10) / 10;
}


const convertToCelsius = function(tempInFahrenheit) {
  // x °F ≘ (x − 32) × 5/9 °C
  let tempInCelsius=(tempInFahrenheit-32)*(5/9);
  let tempInCelsiusRounded=roundTo1DecPlace(tempInCelsius);
  return tempInCelsiusRounded;
};

const convertToFahrenheit = function(tempInCelsius) {
  // x °C ≘ (x × 9/5 + 32) °F
  // Math.round(number * 10) / 10
  let tempInFahrenheit=(tempInCelsius*(9/5))+32;
  let tempInFahrenheitRounded=roundTo1DecPlace(tempInFahrenheit);
  return tempInFahrenheitRounded; 
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
