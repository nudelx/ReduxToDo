import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {addTodoAction} from '../actions/add-new'


export default class TodoInput extends Component{
  constructor(props){

    // initial state of the component
    super(props);
    this.addNewTodo = this.addNewTodo.bind(this);
    // this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  render(){
    return (
      <div>
      <div className="row" >
        <div className="col-lg-6 col-lg-offset-3">
          <div className="input-group">
            <input type="text" className="form-control add-new-todo-input" placeholder="Add New Todo ... " />
            <span className="input-group-btn">
                <button className="btn btn-secondary" onClick={this.addNewTodo} type="button">ADD</button>
            </span>
          </div>
        </div>
      </div>
      </div>
      )
  }
  addNewTodo( event ){

    let inputValue = document.querySelector('input.add-new-todo-input').value;
    if(inputValue.length){
      this.props.addTodoAction(inputValue)
      document.querySelector('input.add-new-todo-input').value= ''
    }else{
      alert('set name for todo')
    }


  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({addTodoAction}, dispatch);
}

export default connect( null , mapDispatchToProps)(TodoInput)
