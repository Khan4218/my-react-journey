import React from "react"
export default function App() {
  return (
    <>
      <Jokes
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
        Upvotes={10} // non string and it is a number to props
        isPun={true} // adding boolean value to props
        comments={[{ author: "", text: "", title: "" }]} // adding array to props
      />
      <Jokes
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!" />
      <Jokes
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy."
      />
      <Jokes
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm."
      />
      <Jokes
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"

      />


    </>
  )
}



function Jokes(props) {
  const [isShown, setIsShown] = React.useState(false)

  function toggleShown() {
    setIsShown(prevShown => !prevShown)
  }

  console.log(isShown)
  return (

    <div>
      {props.setup && <h3>{props.setup}</h3>}
      {/* <p>{isShown ? props.punchline : false}</p> */}
      {isShown && <p>{props.punchline}</p>} {/*Using conditional rendering*/}
      <button onClick={toggleShown}>Show punchline</button>
      <hr />
    </div>
  )
}

