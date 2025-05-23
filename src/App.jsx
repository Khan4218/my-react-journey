/*import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"))
const myElement = <h1>Come on, run it!</h1>;               //my first react code

root.render(
  myElement
);
console.log(myElement);*/
/*
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));  // yeah i did it

function MyElement() {
  return <h1>if this runs you are learning well</h1>
}                                                         
root.render(                                  //This code is using React
  <MyElement />
)
*/
/*
const root = document.getElementById('root');
const h1 = document.createElement('h1');          //This code is using javaScript
h1.textContent = 'i am a good learner';
root.appendChild(h1);*/


const newRoot = document.getElementById('root');
const h1 = document.createElement('h1');
h1.textContent = 'Hello, vanilla JavaScript!'
newRoot.appendChild(h1)
