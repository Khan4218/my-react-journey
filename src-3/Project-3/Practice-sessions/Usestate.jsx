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
import React from "react"
/**
 * Challenge: 
 * 1. Create a function called `handleClick` that runs
 *    setIsImportant("Definitely")
 * 2. Add a click event listener to the button
 *    that runs `handleClick` when the button is clicked.
 */
export default function App() {
  let [isImportant, setIsImportant] = React.useState("Yes")
  function handleClick() {
    setIsImportant("Definitely")
  }

  return (
    <main>
      <h1 className="title">Is state important to know?</h1>
      {/* //here we dont need to give a index to result */}
      <button className="value" onClick={handleClick}>{isImportant}</button>
    </main>
  )
}