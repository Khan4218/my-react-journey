
// export default function App() {
//   function handleSubmit(event) {
//     event.preventDefault();
//     const formEl = event.currentTarget
//     const formData = new FormData(formEl)
//     const email = formData.get("email")
//     // Gather the info from the form
//     // Submit it to a backend
//     formEl.reset();
//   }
//   return (
//     <section>
//       <form onSubmit={handleSubmit} method="post">
//         <h1>Signup form</h1>
//         <label htmlFor="email" >Email:</label>
//         <input id="email" type="email" name="email" placeholder="example@email.com" />
//         <br />
//         <label htmlFor="password">Password:</label>
//         <input id="password" type="password" name="password" />
//         <br />
//         <button>Submit</button>
//       </form>
//     </section>

//   )
// }

// with form action the form submission is simple
export default function App() {
  function signUp(formData) {
    const email = formData.get("email")
    // Gather the info from the form
    // Submit it to a backend 
    /**
   * Challenge: get the password from the form too and log
   * it to the console to be sure it came in correctly.
   */
    const password = formData.get("password")
    const description = formData.get("description")
    const employmentStatus = formData.get("employmentStatus")
    console.log(email)
    console.log(password);
    console.log(description);
    console.log(employmentStatus);


  }
  /**
   * Challenge: get the password from the form too and log
   * it to the console to be sure it came in correctly.
   */
  return (
    <section>
      <form action={signUp}>
        <h1>Signup form</h1>
        <label htmlFor="email" >Email:</label>
        <input id="email" type="email" name="email" placeholder="example@email.com" defaultValue="Akbar@4218" />
        <br />
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" defaultValue={"123"} />
        <br />
        <label htmlFor="description">Description:</label>
        <textarea name="description" defaultValue={"This is Akbar"}></textarea>
        <br />
        <fieldset>
          <legend>Employment Status:</legend>
          <label>
            <input type="radio" name="employmentStatus" value={"Unemployed"} />
            Unemployed
          </label>
          <label>
            <input type="radio" name="employmentStatus" value={"Part-time"} />
            Part-time
          </label>
          <label>
            <input type="radio" name="employmentStatus" defaultChecked={true} value={"Full-time"} />
            Full-time
          </label>
        </fieldset>


        <button>Submit</button>
      </form>
    </section>

  )
}