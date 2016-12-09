const API_KEY = 'a9ab0355639c8c50c6fcd6a63ccb22d7';
//uses ES6 syntax with ${API_KEY} instead of + API_KEY
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather() {
  return {
    type: FETCH_WEATHER
  };
}