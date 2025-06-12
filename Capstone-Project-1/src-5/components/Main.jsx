export default function Main() {
  return (<main>
    <div className="container">
      <div className="card">
        <h1>Tenzies</h1>
        <p1>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p1>
        <div className="numbers-button">
          <button>1</button>
          <button>2</button>
          <button>1</button>
          <button>4</button>
          <button>5</button>
          <button>3</button>
          <button>3</button>
          <button>5</button>
          <button>6</button>
          <button>1</button>
        </div>
        <button className="roll-button"> Roll</button>
      </div>
    </div>
  </main>)


}