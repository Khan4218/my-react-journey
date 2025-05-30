export default function Main() {
  return (
    <main>
      <div className="container">
        <input className="input" placeholder="e.g. oregano" />
        <button className="button">+ Add ingredient </button>
      </div>
      <div className="items">
        <h1 className="about-list">Ingredients on hand:</h1>
        <ul className="list">
          <li>chicken</li>
          <li>all the main spices</li>
          <li>corn</li>
          <li>heavy cream</li>
          <li>pasta</li>
        </ul>
        <div className="card">
          <h1>Ready for a recipe?</h1>
          <p>Generate a recipe from our list of ingredients.</p>
          <div className="card-button">
            <button>
              Get a recipe
            </button>
          </div>


        </div>
      </div>
    </main>
  )
}
