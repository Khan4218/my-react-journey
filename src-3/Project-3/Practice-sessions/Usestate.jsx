// import React from "react"

// export default function App() {
//   const result = React.useState("Yes")


//   return (
//     <main>
//       <h1 className="title">Is state important to know?</h1>
//       <button className="value">{result[0]}</button>
//     </main>
//   )
// }

//Use state array destructuring
// import React from "react"
// /**
//  * Challenge: 
//  * 1. Create a function called `handleClick` that runs
//  *    setIsImportant("Definitely")
//  * 2. Add a click event listener to the button
//  *    that runs `handleClick` when the button is clicked.
//  */
// export default function App() {
//   let [isImportant, setIsImportant] = React.useState("Yes")
//   function handleClick() {
//     setIsImportant("Definitely")
//   }

//   return (
//     <main>
//       <h1 className="title">Is state important to know?</h1>
//       {/* //here we dont need to give a index to result */}
//       <button className="value" onClick={handleClick}>{isImportant}</button>
//     </main>
//   )
// }

//state practice
/**
 * Challenge: 
 * Create state to track our count value (initial value is 0)
 * Don't forget to replace the hard-coded "0" with your new state
 */
//challenge part 2
/**
   * Challenge: 
   * Create a function called `add` that runs
   * when the + button is clicked. (Can just console.log("add") for now)
   */
/**
  * Challenge: part 3
  * See if you can think of a way to add 1 to the count
  * every time the + button is clicked
  */
/**
  * Challenge:  last part 
  * Add functionality to the minus button
  */
// import React from "react"

// export default function App() {
//   const [count, setCount] = React.useState(0)

//   function add() {
//     setCount(count + 1)

//   }

//   function minus() {
//     setCount(count - 1)
//   }

//   return (
//     <main className="container">
//       <h1>How many times will Bob say "state" in this section?</h1>
//       <div className="counter">
//         <button className="minus" aria-label="Decrease count" onClick={minus}>–</button>
//         <h2 className="count" >{count}</h2>
//         <button className="plus" aria-label="Increase count" onClick={add} >+</button>
//       </div>
//     </main>
//   )
// }


// Building again from scratch

import React from "react"

export default function App() {
  const [count, setCount] = React.useState(0)

  function add() {
    setCount(count + 1)
  }

  function minus() {
    setCount(count - 1)
  }
  return (
    <main className="container">
      <h1>How many times will Bob say "state" in this section?</h1>
      <div className="counter">
        <button className="minus" aria-label="Decrease count" onClick={minus}>–</button>
        <h2 className="count" >{count}</h2>
        <button className="plus" aria-label="Increase count" onClick={add} >+</button>
      </div>
    </main>

  )
}    //done