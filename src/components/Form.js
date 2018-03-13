import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super()

    this.state = {

    }
  }

  render() {
    return(
      <div className='FormContainer'>
        <form className='Form'>
          <h3>Add Your Recipe</h3>
          <label>Dish Title</label> 
          <input 
            className='recipe-form-input'
            type='text' 
            placeholder='Title'
          />

          <label>Instruction</label>
          <textarea
            style={{height:'150px'}}
            className='recipe-form-input'
            type='text'
            placeholder='Instructions'
          />
          <label>Ingredients</label>
          <input
            className='recipe-form-input' 
            type='text'
            placeholder='Ingredients'
          />
          <button className='button'>Save</button>
        </form>
      </div>
    )
  }
}

export default Form;