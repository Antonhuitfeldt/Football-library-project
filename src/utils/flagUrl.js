export const getCountryFlag = (countryCode) => {
  //Special case for England as their Countrycode does not work
  if (countryCode === "EN") {
    return "https://flagcdn.com/w320/gb-eng.png";
  }
  
  return `https://flagcdn.com/w320/${countryCode.toLowerCase()}.png`
  
};