import React from "react"
export default function Main() {
  const [meme, setMeme] = React.useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg"

  })

  const [allMemes, setAllMemes] = React.useState([])
  /**
   * Challenge:
   * Get an array of memes from the imgflip API as soon as
   * this component renders for the first time.
   * Check the imgflip documentation for the correct URL.
   * Save the array of memes (not the whole response
   * data) to state. (For this app, we'll randomly choose
   * one of the memes from this array when the user clicks
   * the "Get a new meme image" button, but we'll do that in
   * a separate challenge.)
   * 
   * Hint: for now, don't try to use an async/await function.
   * Instead, use `.then()` to resolve the promises
   * from using `fetch`. We'll learn why after this challenge.
   */
  React.useEffect(function () {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
  }, [])


  function handleChange(event) {
    const { name, value } = event.currentTarget
    console.log(name);

    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))

    /**
     * Challenge: update the topText value in the meme state
     * object every time the topText input box is changed
     * 
     * Note: don't worry about bottomText at this point.
     */
  }

  return (
    <main>
      <div className="form">
        <label>Top Text
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            onChange={handleChange}
            value={meme.topText}
          />
        </label>

        <label>Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
          />
        </label>
        <button>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.imageUrl} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  )
}