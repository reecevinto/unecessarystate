import "./styles.css";

import { useState } from "react";

export default function FeedbackForm() {
  //const [name, setName] = useState("");

  function handleClick() {
    const name = prompt(" What is your name?");
    //setName(prompt("what is your name?"));
    alert("Hello, ${name}!");
  }
  return <button onClick={handleClick}>Greet</button>;
}
