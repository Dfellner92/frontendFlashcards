import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import questions from "./util/questions";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  let index = String(Math.floor(Math.random() * 4) + 1);

  console.log(index);
  useEffect(() => {
    setQuestion(questions[index]["question"]);
    setAnswer(questions[index]["answer"]);
  }, []);
  console.log(question);
  console.log(answer);

  const handleShowAnswer = () => {
    setQuestion(answer);
  };

  const handleNewCard = () => {
    setQuestion(questions[index]["question"]);
    setAnswer(questions[index]["answer"]);
  };

  return (
    <div className="App">
      <button onClick={() => handleNewCard()}>New Card</button>
      <button onClick={() => handleShowAnswer()}>show answer</button>
      <div className="card">
        <div id="text" className="card-text">
          {question}
        </div>
      </div>
    </div>
  );
}

export default App;
