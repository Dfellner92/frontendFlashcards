import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import questions from './util/questions';

function App() {
  const [question, setQuestion] = useState();

  let index = String(Math.floor(Math.random() * 2) + 1);

  console.log(index);
  useEffect(() => {
    setQuestion(questions[index]["question"])
  })
  console.log(question);
  return (
    <div className="App">
      <div>{question}</div>
    </div>
  );
}

export default App;
