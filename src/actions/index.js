const API_KEY = 'a9ab0355639c8c50c6fcd6a63ccb22d7';

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather() {
  return {
    type: FETCH_WEATHER
  };
}