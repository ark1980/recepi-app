import React, { Component } from 'react';
import './style.css';
import Navbar from './Navbar';
import RecipeList from './RecipeList';
import recipes from '../DummyData';

class App extends Component {
  constructor() {
    super()

    this.state = { recipes }
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <RecipeList recipesList={this.state.recipes}/>
      </div>
    );
  }
}

export default App;
