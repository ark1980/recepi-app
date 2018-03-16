import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      instructions: "",
      ingredients: [''],
      img: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSave({...this.state})
    this.setState({
      title: '',
      instructions: '',
      ingredients: [''],
      img: ''   
    })
  }

  render() {
    const {title, instructions, img, ingredients} = this.state;
    return(
      <div className='FormContainer'>
        <form className='Form' onSubmit={this.handleSubmit}>
          <h3>Add Your Recipe</h3>
          <label>Dish Title</label> 
          <input
            value={title}
            className='recipe-form-input'
            type='text' 
            placeholder='Title'
            name='title'
            onChange={this.handleChange}
          />

          <label>Instruction</label>
          <textarea
            value={instructions}
            style={{height:'150px'}}
            className='recipe-form-input'
            type='text'
            placeholder='Instructions'
            name='instructions'
            autoComplete='off'
            onChange={this.handleChange}
          />
          <label>Ingredients</label>
          <input
            value={ingredients}
            className='recipe-form-input'
            type='text'
            placeholder='Ingredients'
            name='ingredients'
            onChange={this.handleChange}
          />
          <label>Image URL</label>
          <input
            value={img}
            name='img'
            placeholder='URL'
            type='text'
            autoComplete='off'
            className='recipe-form-input'
            onChange={this.handleChange}
          />
          <button className='button'>Save</button>
        </form>
      </div>
    )
  }
}

export default Form;