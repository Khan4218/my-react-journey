// import React from "react"
// export default function Fetch(props) {
//   const [starWarsData, setStarWarsData] = React.useState(null)

//   /**
//     * Challenge:
//     * Instead of console logging the data, save it in state
//     * and display it to the page. (Just replace the hard-coded
//     * object inside the `<pre>` element with the data)
//     */
//   console.log("rendeered")

//   React.useEffect(function () {
//     console.log("useeffect rendered");

//     fetch("https://swapi.tech/api/people/1")
//       .then(res => res.json())
//     // .then(data => setStarWarsData(data))
//   })

//   //we stuck in a infinte loop because of state rendering and running the component
//   return (
//     <div>
//       <pre>{JSON.stringify({ starWarsData }, null, 2)}</pre>
//     </div>
//   )
// }

//useEffect syntax React.useEffect(setup,dependincies?)

// import React from "react"

// export default function Fetch() {
//   const [starWarsData, setStarWarsData] = React.useState({})
//   const [count, setCount] = React.useState(0)

//   console.log("Rendered!")

//   React.useEffect(function () {
//     console.log("Effect ran")
//     fetch("https://swapi.tech/api/people/1")
//       .then(res => res.json())
//       .then(data => setStarWarsData(data))
//   }, [count]) // applied dependencies if [count] does not changes the setup will not run if [count changes the setup will run]

//   return (
//     <div>
//       <h2>The count is {count}</h2>
//       <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
//       <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
//     </div>
//   )
// }


import React from "react"

export default function Fetch() {
  const [starWarsData, setStarWarsData] = React.useState({})
  const [count, setCount] = React.useState(0)

  console.log("Rendered!")

  /**
   * Challenge: re-write the useEffect
   * It should run any time `count` changes
   * For now, just console.log("Effect function ran")
   */
  React.useEffect(function () {
    return console.log("Effect function ran");

  }, [count])

  return (
    <div>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  )
}

