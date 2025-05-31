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


// // Building again from scratch

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
// }    //done

//useState using a call back function
// import React from "react"

// export default function App() {
//   const [count, setCount] = React.useState(0)
//   /**
//    * Note: if you ever need the old value of state
//    * to help you determine the new value of state,
//    * you should pass a callback function to your
//    * state setter function instead of using
//    * state directly. This callback function will
//    * receive the old value of state as its parameter,
//    * which you can then use to determine your new
//    * value of state.
//    */
//   function add() {
//     setCount(prevCount => prevCount + 1)
//   }

//   function minus() {
//     //   setCount(function (prevCount) {
//     //     return prevCount - 1;
//     //   })
//     // using shorthand property of above fun
//     setCount(prevCount => prevCount - 1)
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

// Ternery Operator
// export default function App() {
//   /**
//    * Challenge: Replace the if/else below with a ternary
//    * to determine the text that should display on the page
//    */
//   const isGoingOut = true

//   const answer = isGoingOut ? "Yes" : "No"; // passing down into the button directly


//   👈 Use ternary here

//   Remove the code below 👇 once your ternary is done
//   if (isGoingOut === true) {
//     answer = "Yes"
//   } else {
//     answer = "No"
//   }

//   return (
//     <main>
//       <h1 className="title">Do I feel like going out tonight?</h1>
//       <button className="value">{isGoingOut ? "Yes" : "No"}</button>
//     </main>
//   )
// }

import React from "react"

export default function App() {
  /**
   * Challenge: 
   * - Initialize state for `isGoingOut` as a boolean
   * - Make it so clicking the button flips that
   *   boolean value (true -> false, false -> true)
   * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
   */
  const [isGoingOut, setIsGoingOut] = React.useState(0)
  function handleClick() {

    setIsGoingOut(prevBoolean => prevBoolean === false)
  }

  return (
    <main>
      <h1 className="title">Do I feel like going out tonight?</h1>
      <button
        className="value"
        onClick={handleClick}
        aria-label={`current answer is ${isGoingOut ? "Yes " : "No"}. click to change it`}

      >
        {isGoingOut ? "Yes " : "No"}
      </button>
    </main>
  )
}