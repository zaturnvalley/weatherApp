import { FETCH_WEATHER } from '../actions/index'; 

export default function(state = [], action){  
  switch (action.type) {
    case FETCH_WEATHER: 
      // returns new instance of state. do not just push
      // es6 way to write same thing, flattens array
      // [city, city, city ] NOT [city,[city,[city]]]
      return [ action.payload.data, ...state ];
  }
  return state;
}