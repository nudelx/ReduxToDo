import { combineReducers } from 'redux';
import addTodoReducer from './add_todo_reducer'


const rootReducer = combineReducers({
  todo_list_reducer: addTodoReducer
});

export default rootReducer;
