
export default function App() {
  function handleSubmit(event) {
    event.preventDefault();
    const formEl = event.currentTarget
    const formData = new FormData(formEl)
    const email = formData.get("email")
    // Gather the info from the form
    // Submit it to a backend
    formEl.reset();
  }
  return (
    <section>
      <form onSubmit={handleSubmit} method="post">
        <h1>Signup form</h1>
        <label htmlFor="email" >Email:</label>
        <input id="email" type="email" name="email" placeholder="example@email.com" />
        <br />
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />
        <button>Submit</button>
      </form>
    </section>

  )
}