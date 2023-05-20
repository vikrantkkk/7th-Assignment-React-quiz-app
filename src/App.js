import React, { useState } from 'react';
import './style.css';
import { Data } from './Data';

export default function App() {
  const [showResult, setShowResult] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const currentQuestion = Data[currentIndex];

  const handleOptions = (item) => {
    if (item.isCorrect) {
      setScore(score + 1);
    }
    if (currentIndex < Data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setShowResult(false);
    setCurrentIndex(0);
    setScore(0);
  };
  return (
    <div className="container">
      <h2>Quiz total {Data.length} questions</h2>

      {showResult ? (
        <div>
          <h3>Score {score}</h3>
        </div>
      ) : (
        <div className="All">
          <h3 className="question">
            <span className="span">{currentIndex + 1}.</span>{' '}
            {currentQuestion.question}
          </h3>
          <div className="options">
            <ul>
              {currentQuestion.options.map((item) => {
                return (
                  <li onClick={() => handleOptions(item)} key={item.id}>
                    {item.text}
                  </li>
                );
              })}
            </ul>
            <button className="restart" onClick={handleRestart}>
              Restart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
