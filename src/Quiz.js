import React, { useState, useEffect } from "react";
import axios from "axios";

const Quiz = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8081/get").then((res) => {
      setQuizzes(res);
    });
  }, []);

  console.log(quizzes.data?.[0].questions[0].question, "hey");
  //   console.log(quizzes.data?.[0].questions[0].options);
  console.log(quizzes.data?.length);
  const handleClick = (isTrue) => {
    if (isTrue) {
      setScore(score + 1);
    }

    const currentCount = count + 1;
    if (currentCount < quizzes.data?.length) {
      console.log(quizzes.data?.length, "in if cond");
      setCount(currentCount);
    } else {
      console.log(quizzes.data?.length, "in else cond");
      setShowScore(true);
    }
  };

  return (
    <div className="App">
      <h1>Quiz App</h1>
      {showScore ? (
        <h1>You've scored SOME SCORE</h1>
      ) : (
        <div className="container">
          {quizzes.data?.[count].questions[0].question}
          <h1>
            {count + 1}/{quizzes.data?.length}
          </h1>
          {quizzes.data?.[count].questions[0].options.map((option) => {
            return (
              <div>
                <button onClick={() => handleClick()}>{option}</button>
              </div>
            );
          })}

          <p>score</p>
          {score}
        </div>
      )}
    </div>
  );
};

export default Quiz;
