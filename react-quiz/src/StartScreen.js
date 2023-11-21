import React from "react";

export default function StartScreen({ X }) {
  return (
    <div className="start">
      <h2>Welcome to React Quiz</h2>
      <h3>{X} questions to test your React Mastery</h3>
      <button className="btn btn-ui">Let's Start</button>
    </div>
  );
}
