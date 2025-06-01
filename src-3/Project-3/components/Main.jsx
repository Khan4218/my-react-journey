
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
  return (
    <main>
      <form action={handleOnSubmit} className="add-ingredient-form">
        <input className="input" placeholder="e.g. oregano" aria-label="Add ingredient" name="ingredient" />
        <button className="button" >+ Add ingredient </button>
      </form>
      <ul>
        {ingredientsListItems}
      </ul>
    </main>
  )

}