import { FETCH_WEATHER } from '../actions/index'; 

export default function(state = [], action){  
  switch (action.type) {
    case FETCH_WEATHER: 
      // returns new instance of state. do not just push
      return state.concat([action.payload.data]);
  }
  return state;
}