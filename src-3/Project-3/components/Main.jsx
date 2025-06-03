
import React from "react";
export default function Main() {
  const [ingredients, setIngredients] = React.useState([])
  const ingredientsListItems = ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>
  })
  function handleOnSubmit(formData) {
    const newIngredient = formData.get("ingredient")
    setIngredients((prevIngredients) => {
      return [...prevIngredients, newIngredient]
    })
  }
  function renderRecipeSection() {
    if (ingredientsListItems.length > 0) {
      return (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button>Get a recipe</button>
        </div>)
    }
  }
  return (
    <main>
      <form action={handleOnSubmit} className="add-ingredient-form">
        <input className="input" placeholder="e.g. oregano" aria-label="Add ingredient" name="ingredient" />
        <button className="button" >+ Add ingredient </button>
      </form>
      <section >
        <h2>Ingredients on hand:</h2>
        <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
        {renderRecipeSection()}
      </section>
    </main>
  )

}