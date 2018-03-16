import React from 'react';
import './style.css';

const Recipe = ({ individualRecipe }) => {
  return(
    <div className='recipe-card'>
      <div className='recipe-card-image'>
        <img src={individualRecipe.img} alt={individualRecipe.title}/>
      </div>
      <div className='recipe-card-content'>
        <h2>{individualRecipe.title}</h2>
        <h4 className='recipe-title'>Ingredients: </h4>
          <ul>
            {
              individualRecipe.ingredients.map((ingredient, index) => {
                return <li key={index}>{ingredient}</li>
              })
            }
          </ul>
        <h4 className='recipe-title'>instructions: </h4>
        <p>{individualRecipe.instructions}</p>
      </div>
    </div>
  )
}

export default Recipe;