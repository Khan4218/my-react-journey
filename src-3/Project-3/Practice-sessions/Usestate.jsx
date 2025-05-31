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

export default function App() {
  const [result, func] = React.useState("Yes")
  console.log(result);

  return (
    <main>
      <h1 className="title">Is state important to know?</h1>
      {/* //here we dont need to give a index to result */}
      <button className="value">{result}</button>
    </main>
  )
}