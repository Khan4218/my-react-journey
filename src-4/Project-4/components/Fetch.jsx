import React from "react"
export default function Fetch(props) {
  const [starWarsData, setStarWarsData] = React.useState(null)

  /**
    * Challenge:
    * Instead of console logging the data, save it in state
    * and display it to the page. (Just replace the hard-coded
    * object inside the `<pre>` element with the data)
    */
  console.log("rendeered")

  React.useEffect(function () {
    console.log("useeffect rendered");

    fetch("https://swapi.tech/api/people/1")
      .then(res => res.json())
    // .then(data => setStarWarsData(data))
  })

  //we stuck in a infinte loop because of state rendering and running the component
  return (
    <div>
      <pre>{JSON.stringify({ starWarsData }, null, 2)}</pre>
    </div>
  )
}

