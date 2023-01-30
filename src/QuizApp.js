import React, { useState } from "react";

const QuizApp = () => {
  const quiz = {
    topic: "Javascript",
    level: "Beginner",
    totalQuestions: 10,
    perQuestionScore: 5,
    totalTime: 60, // in seconds
    questions: [
      {
        question:
          "Which function is used to serialize an object into a JSON string in Javascript?",
        choices: ["stringify()", "parse()", "convert()", "None of the above"],
        type: "MCQs",
        correctAnswer: "stringify()",
      },
      {
        question:
          "Which of the following keywords is used to define a variable in Javascript?",
        choices: ["var", "let", "var and let", "None of the above"],
        type: "MCQs",
        correctAnswer: "var and let",
      },
      {
        question:
          "Which of the following methods can be used to display data in some form using Javascript?",
        choices: [
          "document.write()",
          "console.log()",
          "window.alert",
          "All of the above",
        ],
        type: "MCQs",
        correctAnswer: "All of the above",
      },
      {
        question: "How can a datatype be declared to be a constant type?",
        choices: ["const", "var", "let", "constant"],
        type: "MCQs",
        correctAnswer: "const",
      },
      {
        question: "Which of the following is the markup language?",
        choices: ["HTML", "CSS", "JAVASCRIPT", "PHP"],
        type: "MCQs",
        correctAnswer: "HTML",
      },
      {
        question:
          "Which of the following methods is used to access HTML elements using Javascript?",
        choices: [
          "getElementById",
          "getElementsByClassName",
          "Both a & b",
          "NONE",
        ],
        type: "MCQs",
        correctAnswer: "Both a & b",
      },
      {
        question: "Which one is the HTML documents root tag?",
        choices: ["<head>", "<body>", "<title>", "<html>"],
        type: "MCQs",
        correctAnswer: "<html>",
      },
      {
        question:
          "Which HTML tag do we use to display text along with a scrolling effect?",
        choices: ["<div>", "<scroll>", "<marquee>", "NONE"],
        type: "MCQs",
        correctAnswer: "<marquee>",
      },
      {
        question:
          "Which of these elements in HTML can be used for making a text bold?",
        choices: ["<a>", "<br>", "<b>", "<pre>"],
        type: "MCQs",
        correctAnswer: "<b>",
      },
      {
        question: "Which tag do we use in HTML for inserting a line-break?",
        choices: ["<a>", "<br>", "<b>", "<pre>"],
        type: "MCQs",
        correctAnswer: "<br>",
      },
    ],
  };

  const [activeQuestion, setActiveQuestion] = useState(0); //keep track of current questions
  const [selectedAnswer, setSelectedAnswer] = useState(""); // which ans user had selected
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswer: 0,
    wrongAnswer: 0,
  });
  const { questions } = quiz;
  const { question, choices, correctAnswer } = questions[activeQuestion];
 
  const onClickNext = () => {
    setSelectedAnswerIndex((prev) => prev + 1);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswer: prev.correctAnswer + 1,
          }
        : { ...prev, wrongAnswer: prev.wrongAnswer + 1 }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };
  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };
  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <div className="quiz-container">
      {!showResult ? (
        <div>
          <div>
            <span className="'active-question-no">
              {addLeadingZero(activeQuestion + 1)}
            </span>
            <span className="total-question">
              /{addLeadingZero(questions.length)}
            </span>
          </div>
          {/* <h1>WEb DEVELOPMENT QUIZ</h1> */}
          <h2>{question}</h2>
          <ul>
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerSelected(answer, index)}
                key={answer}
                className={
                  selectedAnswerIndex === index ? "selected-answer" : null
                }
              >
                {answer}
              </li>
            ))}
          </ul>
          <div className="flex-right">
          <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
            {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
        </div>
      ) : (
        <div className="result">
          <h3>Result</h3>
          <p>
            Total Questions : <span>{questions.length}</span>
          </p>
          <p>
            Total Score : <span>{result.score}</span>
          </p>
          <p>
            Correct Answers : <span>{result.correctAnswer}</span>
          </p>
          <p>
            Wrong Answers : <span>{result.wrongAnswer}</span>
          </p>
        </div>
      )}
    </div>
  );
};
export default QuizApp;
