import React from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";
export default function Main() {
  const [ingredients, setIngredients] = React.useState(["all the main spices", "pasta", "ground beef", "tomato paste"])

  const [recipeShown, setRecipeShown] = React.useState(false)
  function toggleRecipeShown() {
    setRecipeShown(prev => !prev)

  }

  //  * 1. Move the entire recipe <section> into its own
  //    *    ClaudeRecipe component
  //    * 2. Move the list of ingredients <section> into its
  //    *    own IngredientsList component.
  //    * 
  //    * While you're considering how to structure things, consider
  //    * where state is, think about if it makes sense or not to
  //    * move it somewhere else, how you'll communicate between
  //    * the parent/child components, etc.
  //    * 
  //    * The app should function as it currently does when you're
  //    * done, so there will likely be some extra work to be done
  //    * beyond what I've listed above.
  //    */



  function handleOnSubmit(formData) {
    const newIngredient = formData.get("ingredient")
    setIngredients((prevIngredients) => {
      return [...prevIngredients, newIngredient]
    })
  }
  function renderRecipeSection() {
    if (ingredients.length > 3) {
      return (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={toggleRecipeShown}>Get a recipe</button>
        </div>)
    }
  }
  return (
    <main>
      <form action={handleOnSubmit} className="add-ingredient-form">
        <input
          className="input"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient" />
        <button className="button" >+ Add ingredient </button>
      </form>

      {ingredients.length > 0 && <IngredientsList ingredients={ingredients} />}
      {renderRecipeSection()}
      {recipeShown && <ClaudeRecipe />}
    </main>
  )

}