import React, { Component } from 'react'

export default class Buttons extends Component {
  
    handleClick = (event) => {
        // console.log(event)
        this.props.buttonClick(event.target.innerText)
    }

    
    

    render() {
        const buttonBar = this.props.CATEGORIES.map(category => {
            const className = (category === this.props.selection ? 'selected' : '')
            return <button key={category} onClick={this.handleClick} className={className}>{category}</button>
            })

        return (
        <div className='categories'>
            <h5>Category filters</h5>
            {buttonBar}
        </div>
        )
  }
}
