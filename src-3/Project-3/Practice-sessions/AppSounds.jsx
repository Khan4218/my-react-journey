import React from "react"
import padsData from "./pads"
import Pad from "./Pad.jsx"

export default function App({ darkMode }) {

  const [pads, setPads] = React.useState(padsData)
  const styles = {
    backgroundColor: darkMode ? "#222222" : "#cccccc"
  }


  const buttonElements = pads.map(pad => (
    <Pad key={pad.id} color={pad.color} on={pad.on} />
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

