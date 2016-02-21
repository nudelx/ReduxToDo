import todoFactory from './index.js'

export const ADD_NEW = 'ADD_NEW';

export function addTodoAction(text){



  return {
    type: ADD_NEW,
    payload: todoFactory(text)

  }

}