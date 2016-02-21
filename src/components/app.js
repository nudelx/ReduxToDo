import React from 'react';
import { Component } from 'react';
import TodoInput from '../containers/todo-input';
import TodoList from '../containers/todo-list';

export default class App extends Component {
  render() {
    return (
      <div>
        <TodoInput />
        <TodoList />
      </div>
    );
  }
}
