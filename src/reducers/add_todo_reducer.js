import {ADD_NEW} from '../actions/add-new'
import initialState from './initialState'

export default function(state = initialState , action) {

  switch(action.type){

    case ADD_NEW:

      // return state.concat([ action.payload.data ]);
      return [ action.payload,  ...state ];

  }



  return state;

}