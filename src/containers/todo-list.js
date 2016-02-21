import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TodoItem from '../components/todo-item'

export default class TodoList extends Component {

  constructor(props){
     super(props);

  }

  render(){
    console.dir(this.props)
    return (
      <ul className="col-lg-6 col-lg-offset-3">
          {this.props.todo_list_reducer.map(this.buildTodo)}
      </ul>
      )

  }

  buildTodo(todo){
    console.log("TODO", todo)
    return ( <TodoItem key={todo.id} name={todo.todoName}/>)
  }



}

function mapStateToProps({todo_list_reducer}) {   /// root reducer
  console.dir(todo_list_reducer)
  return {todo_list_reducer};
}


export default connect( mapStateToProps )(TodoList);