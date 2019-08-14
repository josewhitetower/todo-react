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
      <form className="NewTodoForm flex justify-center p-4 mt-6" onSubmit={this.handleSubmit}>
        <div>
          <input required className="focus:outline-none h-12 text-black px-2  rounded-sm" placeholder="New Todo..." type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
        </div>
        <button className="border border-2 px-4 py-2 ml-2 rounded-sm hover:bg-red-400 uppercase focus:outline-none">Add todo</button>
      </form>
    )
  }
}
