import React from 'react';
import './App.css';
import { CATEGORIES } from './data'
import Mainbox from './components/Mainbox'
import Buttons from './components/Buttons'

class App extends React.Component {

  state = {
    tasks: [
      {
        text: 'Buy rice',
        category: 'Food'
      },
      {
        text: 'Save a tenner',
        category: 'Money'
      },
      {
        text: 'Build a todo app',
        category: 'Code'
      },
      {
        text: 'Build todo API',
        category: 'Code'
      },
      {
        text: 'Get an ISA',
        category: 'Money'
      },
      {
        text: 'Cook rice',
        category: 'Food'
      },
      {
        text: 'Tidy house',
        category: 'Misc'
      }
    ],
    selection: 'All'
  }

  addPokemon = (newPokemon) => {
    // console.log(newPokemon)
    this.setState({
      tasks: [...this.state.tasks, newPokemon]
    })
  }

  delete = (toDelete) => {
    this.setState({
      tasks: this.state.tasks.filter(task => {
        return task.text !== toDelete})
    })
    
  }
  
  buttonClick = (buttonClicked) => {
    this.setState({
      selection: buttonClicked
    })
  }

  render() {
    console.log(this.state)
    let taskList = this.state.tasks.filter(task => task.category === this.state.selection)
    if (this.state.selection === 'All') taskList = this.state.tasks

    return (
      <div className="App">
        <h2>My tasks</h2>
        <div>
          <Buttons CATEGORIES={CATEGORIES} buttonClick={this.buttonClick} selection={this.state.selection}/>
          <Mainbox tasks={taskList} selection={this.state.selection} delete={this.delete} addPokemon={this.addPokemon}/>
        </div>
          
        
      </div>
    );
  }
}


export default App;
