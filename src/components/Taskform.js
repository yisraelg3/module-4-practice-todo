import React, { Component } from 'react'

export default class Taskform extends Component {
  
  state ={
    text: '',
    category: 'Food',

  }
  
  handleChange = (event) => {
    console.log(event.target.value)  
    this.setState({
          [event.target.name]: event.target.value
      })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addPokemon(this.state)
  }
  

    render() {
    return (
      <form className='new-task-form' onSubmit={this.handleSubmit}>
        <input type='text' placeholder='New task details' name='text' value={this.state.newTask} onChange={this.handleChange}></input>
        <select name='category' value={this.state.category} onChange={this.handleChange}>
            <option value='Code'>Code</option>
            <option value='Food'>Food</option>
            <option value='Money'>Money</option>
            <option value='Misc'>Misc</option>
        </select>
        <input type='submit' value='Add task'></input>
      </form>
    )
  }
}
