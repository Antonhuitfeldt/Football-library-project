export const getCountryFlag = async (countryCode) => {
  try {
    //Special case for England as their Countrycode does not work
    if (countryCode === "EN") {
    return "https://flagcdn.com/w320/gb-eng.png";
    }

    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${countryCode}`
    );

    const data = await response.json();
    return data[0].flags.png;

  } catch (error) {
      console.error("Error fetching flag:", error);
      return null;
    }
};