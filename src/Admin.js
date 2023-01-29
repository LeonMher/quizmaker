import "./App.css";
import axios from "axios";
import React, { useState } from "react";

function Admin() {
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [option, setOption] = useState({
    firstOption: "",
    secondOption: "",
  });
  console.log(option, " option");
  const postData = {
    title: title,
    questions: [
      { question, options: [option.firstOption, option.secondOption] },
    ],
  };
  const handleSubmit = () => {
    axios
      .post("http://localhost:8081/submit-quiz", postData)
      .then((res) => console.log(res));
  };

  const handleOptions = (e) => {
    const val = e.target.value;
    setOption({
      ...option,
      [e.target.name]: val,
    });
  };

  return (
    <div>
      <h1>Quiz App</h1>
      <div className="form">
        <input
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <input
          placeholder="Question"
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
        />
        <input
          name="firstOption"
          placeholder="first option"
          value={option.firstOption}
          onChange={handleOptions}
        />
        <input
          name="secondOption"
          placeholder="second option"
          value={option.secondOption}
          onChange={handleOptions}
        />
        <button onClick={handleSubmit}>click</button>
      </div>
    </div>
  );
}
export default Admin;
