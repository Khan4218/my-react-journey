import React from "react"
import padsData from "./pads"
import Pad from "./Pad.jsx"

export default function App({ darkMode }) {

  const [pads, setPads] = React.useState(padsData)
  /**
    * Challenge: Create a toggle() function that logs
    * "clicked!" to the console
    * 
    * Pass that function down to each of the Pad components
    * and set it up so when they get clicked, the function runs
    */
  function toggle() {
    return console.log("clicked");

  }

  const buttonElements = pads.map(pad => (
    <Pad toggle={toggle} key={pad.id} color={pad.color} on={pad.on} />
  ))

  console.log(buttonElements)

  return (
    <main>
      <div className="pad-container">
        {buttonElements}
      </div>
    </main>
  )
}

