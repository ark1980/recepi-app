import React, { Component } from 'react';
import './style.css';
import Navbar from './Navbar';
import RecipeList from './RecipeList';
import recipes from '../DummyData';
import Form from './Form';

class App extends Component {
  constructor() {
    super()

    this.state = {
      recipes: [
        {
          id: 0,
          title: "Spaghetti",
          instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
          ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
          img: "https://de.rc-cdn.community.thermomix.com/recipeimage/5ip58672-658a1-584620-cfcd2-gz8xg48b/332f3f88-d48f-4c58-a0e2-11f82ecfaf24/main/spaghetti-bolognese.jpg"
        },
        {
          id: 1,
          title: "Milkshake",
          instructions: "Combine ice cream and milk.  Blend until creamy",
          ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
          img: "https://amandascookin.com/wp-content/uploads/2017/02/nice-cream-milkshakes-H.jpg"
        },
        { 
          id: 2,
          title: "Avocado Toast",
          instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
          ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
          img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/12/11/0/FNK_All-the-Avocado-Toast_s4x3.jpg.rend.hgtvcom.616.462.suffix/1450059496131.jpeg"
        }
      ],
      nextId: 3,
      showForm: false
    }

    this.handleSaveForm = this.handleSaveForm.bind(this);

  }

  handleSaveForm(recipe) {
    this.setState((prevState, props) => {
      const newState = {...recipe, id: this.state.nextId};
      return {
        nextId: prevState.nextId + 1,
        recipes: [...recipes, newState],
        showForm: false
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Form onSave={this.handleSaveForm}/>
        <RecipeList recipesList={this.state.recipes}/>
      </div>
    );
  }
}

export default App;
