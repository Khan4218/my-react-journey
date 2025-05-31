export default function Main() {
  const ingredients = ['chicken', 'all the main spices', 'corn',]
  const ingredientsListItems = ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>
  })


  function handleOnSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    const newIngredient = formData.get("ingredient")
    ingredients.push(newIngredient);
    console.log(ingredients)
  }

  return (
    <main>
      <form onSubmit={handleOnSubmit} className="add-ingredient-form">
        <input className="input" placeholder="e.g. oregano" aria-label="Add ingredient" name="ingredient" />
        <button className="button">+ Add ingredient </button>
      </form>
      <ul>
        {ingredientsListItems}
      </ul>
    </main>
  )
}
