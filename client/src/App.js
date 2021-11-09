import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import questions from "./util/questions";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  let index = String(Math.floor(Math.random() * 2) + 1);

  console.log(index);
  useEffect(() => {
    setQuestion(questions[index]["question"]);
    setAnswer(questions[index]["answer"]);
  }, [setQuestion, setAnswer, questions]);
  console.log(question);
  console.log(answer);

  const handleShowAnswer = () => {
    setQuestion(answer);
  };

  return (
    <div className="App">
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
