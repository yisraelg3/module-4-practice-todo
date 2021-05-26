import React, { Component } from 'react'
import Task from './Task'
import Taskform from './Taskform'

export default class Mainbox extends Component {
    render() {
        const tasks = this.props.tasks.map((task, idx)=> {
            return <Task key={idx} task={task} delete={this.props.delete}/>
        })
        return (
        <div className='tasks'>
            <h5>Tasks</h5>
            <Taskform addPokemon={this.props.addPokemon}/>
            {tasks}
        </div>
    )
  }
}
