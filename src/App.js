import { useState } from "react";
import "./App.css";

const emojiDictionary = {
  "🙂": "Smiling",
  "🤩": "Star-Struck",
  "😋": "Yummy-Face",
  "🤫": "Shushing-Face",
  "😐": "Neutral-Face",
  "😏": "Smirking-Face",
};
const emojiWeKonw = Object.keys(emojiDictionary);

function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we dont't have this in our database";
    }
    setMeaning(meaning);
  }
function emojiClickHandler(emoji) {
  var meaning = emojiDictionary[emoji];
  setMeaning(meaning); 
}
  return (
    <div className="App">
      <h1>Emoji Tranlator</h1>
      <input onChange={emojiInputHandler}></input>
      <h2> {meaning}</h2>
      <h3>Emoji We Know </h3>
      {emojiWeKonw.map(function (emoji) {
        return (
          <span
          onClick={() => emojiClickHandler(emoji)} 
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}>{emoji}</span>
        );
      })}
    </div>
  );
}

export default App;
