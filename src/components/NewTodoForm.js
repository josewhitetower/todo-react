import React, { Component } from 'react'

export default class NewTodoForm extends Component {

  state = {
    title: "",
    isDone: false
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({title:"", isDone: false})
  }

  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <div>
          <input required type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
        </div>
        <button>Add</button>
      </form>
    )
  }
}
