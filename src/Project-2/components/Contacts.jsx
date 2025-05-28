// A small Article project to learn props and reuseability
import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <div className="contacts">

      <Contact
        img="./images/mr-whiskerson.png"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"

      />
      <Contact
        img="./images/fluffykins.png"
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact
        img="./images/felix.png"
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Contact
        img="./images/pumpkin.png"
        name="(0800) CAT KING"
        phone="(212) 555-4567"
        email="pumpkin@scrimba.com"

      />
    </div>
  </>
)

function Contact() {
  return (
    <article className="contact-card">
      <img
        src="./images/mr-whiskerson.png"
        alt="Photo of Mr. Whiskerson"
      />
      <h3>Mr. Whiskerson</h3>
      <div className="info-group">
        <img
          src="./images/phone-icon.png"
          alt="phone icon"
        />
        <p>(212) 555-1234</p>
      </div>
      <div className="info-group">
        <img
          src="./images/mail-icon.png"
          alt="mail icon"
        />
        <p>mr.whiskaz@catnap.meow</p>
      </div>
    </article>
  )
};



