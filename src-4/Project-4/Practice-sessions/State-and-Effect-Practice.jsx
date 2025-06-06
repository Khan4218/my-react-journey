import { useState, useEffect, } from "react"
export default function App() {
  /**
   * Challenge:
   * 1. Create state called `show`, default to `true`
   * 2. When the button is clicked, toggle `show`
   * 3. Only display `<WindowTracker>` if `show` is `true`
   */
  const [show, setShow] = useState(true)


  function handleClick() {
    setShow(prevValue => !prevValue)


  }
  return (
    <main className="container">
      <button onClick={handleClick}>
        Toggle WindowTracker
      </button>
      {show ? <WindowTracker /> : null}
    </main>
  )
}




function WindowTracker() {
  /**
   * Challenge:
   * 1. Create state called `windowWidth`, default to 
   *    `window.innerWidth`
   * 2. When the window width changes, update the state
   * 3. Display the window width in the h1 so it updates
   *    every time it changes
   */
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  console.log(windowWidth);
  function handleResize() {
    setWindowWidth(window.innerWidth)
  }
  useEffect(() => {

    window.addEventListener("resize", handleResize)

    return function () {
      console.log("cleaning up");

      window.removeEventListener("resize", handleResize);
    }
  }, [])


  return (
    <h1>Window width: {windowWidth}</h1>
  )
}
