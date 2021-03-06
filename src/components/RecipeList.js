import React from 'react';
import Recipe from './Recipe';

const RecipeList = ({ recipesList }) => {
  return(
    <div>
      <h2>Enjoy Our Recipes</h2>
      <div className='RecipeList'>
        {recipesList.map((recipe, index) => <Recipe individualRecipe={recipe} key ={index}/> )}
      </div>
    </div>
   
  )
}

export default RecipeList;