import React, { Component } from 'react'

export default class Task extends Component {

    handleClick = (event) =>  {
        this.props.delete(this.props.task.text)
    } 
  
    render() {
    return (
      <div className='task'>
        <span className='label'>{this.props.task.category}</span>
        <span className='text'>{this.props.task.text}</span>
        <button className='delete' onClick={this.handleClick}>X</button>
      </div>
    )
  }
}
