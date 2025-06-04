import React from "react"
import padsData from "./pads"
import Pad from "./Pad.jsx"

export default function App({ darkMode }) {
  /**
    * Challenge part 2:
    * 1. Create a separate component called "Pad" and
    *    replace the `button` above with our <Pad /> component
    * 2. Pass the Pad component a prop called `color` with the
    *    value of the same name from the `padsData` objects
    * 3. In the Pad component, apply an inline style to the <button>
    *    to set the backgroundColor of the button.
    * 
    * (We'll deal with the "on" property soon)
    */
  const [pads, setPads] = React.useState(padsData)
  const styles = {
    backgroundColor: darkMode ? "#222222" : "#cccccc"
  }


  const buttonElements = pads.map(pad => (
    <Pad key={pad.id} color={pad.color} />
  ))

  return (
    <main>
      <div className="pad-container">
        {buttonElements}
      </div>
    </main>
  )
}

