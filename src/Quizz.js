import { useState } from 'react'

const Quizz = () => {
    const quiz = {
        
        questions: [
          {
            question:
              'Which function is used to serialize an object into a JSON string in Javascript?',
            choices: ['stringify()', 'parse()', 'convert()', 'None of the above'],
            type: 'MCQs',
            correctAnswer: 'stringify()',
          },
          {
            question:
              'Which of the following keywords is used to define a variable in Javascript?',
            choices: ['var', 'let', 'var and let', 'None of the above'],
            type: 'MCQs',
            correctAnswer: 'var and let',
          },
          {
            question:
              'Which of the following methods can be used to display data in some form using Javascript?',
            choices: [
              'document.write()',
              'console.log()',
              'window.alert',
              'All of the above',
            ],
            type: 'MCQs',
            correctAnswer: 'All of the above',
          },
         
        ],
      }
      
  const [activeQuestion, setActiveQuestion] = useState(0)        // questions index
  const [selectedAnswer, setSelectedAnswer] = useState('')       //answers
  const [showResult, setShowResult] = useState(false)             //show result
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  })

const StartAgain = () => {
    setActiveQuestion(0)
    setSelectedAnswer('')
    setShowResult(false)
    setSelectedAnswerIndex(null)
    setResult({
     score : 0,
     correctAnswers : 0,
     wrongAnswers : 0,
    })
}

  const { questions } = quiz
  const { question, choices, correctAnswer } = questions[activeQuestion]

  const onClickNext = () => {
    setSelectedAnswerIndex(null)
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    )
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1)
    } else {
      setActiveQuestion(0)
      setShowResult(true)
    }
  }

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index)
    if (answer === correctAnswer) {
      setSelectedAnswer(true)
    } else {
      setSelectedAnswer(false)
    }
  }

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)

  return (
    <div className="quiz-container">
      {!showResult ? (
        <div>
          <div>
            <span className="active-question-no">
              {addLeadingZero(activeQuestion + 1)}
            </span>
            <span className="total-question">
              /{addLeadingZero(questions.length)}
            </span>
          </div>
          <h2>{question}</h2>
          <ul>
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerSelected(answer, index)}
                key={answer}
                className={
                  selectedAnswerIndex === index ? 'selected-answer' : null
                }>
                {answer}
              </li>
            ))}
          </ul>
          <div className="flex-right">
            <button
              onClick={onClickNext}
              disabled={selectedAnswerIndex === null}>
              {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
            <button className='btn1'>Previous</button>
          </div>
        </div>
      ) : (
        <div className="result">
          <h3>Result</h3>
          <p>
            Total Question: <span>{questions.length}</span>
          </p>
          <p>
            Total Score:<span> {result.score}</span>
          </p>
          <p>
            Correct Answers:<span> {result.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers:<span> {result.wrongAnswers}</span>
          </p>
          <button onClick={StartAgain} className='btn'>Start Again</button>
        </div>
      )}
    </div>
  )
}

export default Quizz




// {
//     question: 'How can a datatype be declared to be a constant type?',
//     choices: ['const', 'var', 'let', 'constant'],
//     type: 'MCQs',
//     correctAnswer: 'const',
//   },
//   {
//     question: 'Which of the following is the markup language?',
//     choices: ['HTML', 'CSS', 'JAVASCRIPT', 'PHP'],
//     type: 'MCQs',
//     correctAnswer: 'HTML',
//   },
//   {
//     question: 'Which of the following methods is used to access HTML elements using Javascript?',
//     choices: ['getElementById', 'getElementsByClassName', 'Both a & b', 'NONE'],
//     type: 'MCQs',
//     correctAnswer: 'Both a & b',
//   },
//   {
//     question: 'Which one is the HTML documents root tag?',
//     choices: ['<head>', '<body>', '<title>', '<html>'],
//     type: 'MCQs',
//     correctAnswer: '<html>',
//   },
//   {
//     question: 'Which HTML tag do we use to display text along with a scrolling effect?',
//     choices: ['<div>', '<scroll>', '<marquee>', 'NONE'],
//     type: 'MCQs',
//     correctAnswer: '<marquee>',
//   },
//   {
//     question: 'Which of these elements in HTML can be used for making a text bold?',
//     choices: ['<a>', '<br>', '<b>', '<pre>'],
//     type: 'MCQs',
//     correctAnswer: '<b>',
//   },
//   {
//     question: 'Which tag do we use in HTML for inserting a line-break?',
//     choices: ['<a>', '<br>', '<b>', '<pre>'],
//     type: 'MCQs',
//     correctAnswer: '<br>',
//   }