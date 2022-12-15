import { useState } from "react";
import "./App.css";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [quizFinished, setQuizFinished] = useState(false);
  // for score
  const [score, setScore] = useState(0);

  // const [answerColor, setAnswerColor] = useState("defaultColor");

  const questions = [
    {
      id: 1,
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      id: 2,
      questionText: "Who is the CEO of tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
      ],
    },
    {
      id: 3,
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      id: 4,
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "3", isCorrect: false },
        { answerText: "5", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
    {
      id: 5,
      questionText:
        "What is the degree of the differential equation, 4x3-6x2 y3+2y=0?",
      answerOptions: [
        { answerText: "3", isCorrect: false },
        { answerText: "5", isCorrect: true },
        { answerText: "1", isCorrect: false },
        { answerText: "8", isCorrect: false },
      ],
    },
  ];

  function handleAnswerClick(isCorrect) {
    if (isCorrect) {
      setScore((oldScore) => oldScore + 1);
      // setAnswerColor("greenTrue")
    }
    if (currentIndex === questions.length - 1) {
      setQuizFinished(true);
    } else {
      // setAnswerColor("redFalse")
      setCurrentIndex((value) => value + 1);
    }
  }

  return (
    <div className="quiz-container">
      {quizFinished ? (
        <div className="score-section">
          <h1>
            You scored {score} out of {questions.length}
          </h1>
          {/* {questions.map((question) => {
            return (
              <div>
                <h2>{question.questionText}</h2>
                <p>answer is {question.answerOptions[currentIndex].isCorrect}</p>
              </div>
            )
          })} */}
        </div>
      ) : (
        <div className="quiz-section">
          {/* heading */}
          <h1>Questions for the Quiz</h1>

          <div className="question-container">

            {/* looping questions */}
            {questions.map((question) => (
              <div className="question-section">
                <div className="question-text">{question.questionText}</div>
                <div className="answer-section">
                  
                  {/* looping  answer options */}
                  {question.answerOptions.map((answer) => (
                    <button
                      onClick={() => {
                        handleAnswerClick(answer.isCorrect);
                        if(answer.isCorrect) {

                        }
                      }}
                      // className={answerColor}
                    // style={{backgroundColor: answer.isCorrect ? "lightgreen" : "red"}}
                      key={answer.answerText}
                    >
                      {answer.answerText}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
