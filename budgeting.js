// Quiz questions and options
const quizData = [{
    question: "What is a budget?",
    a: "Estimated income and expenditure over a period of time",
    b: "How much you've spent",
    c: "Attitudes towards money",
    d: "How much savings you have",
    correct: "a",
  },
  {
    question: "What are the 3 biggest expenses?",
    a: "Food, stationery and toys",
    b: "Food, shelter and transport",
    c: "Shelter, clothing and food",
    d: "Food, electronics and cars",
    correct: "b",
  },
  {
    question: "Which is an example of income?",
    a: "Stationery",
    b: "Insurance",
    c: "Petrol",
    d: "Lunch money",
    correct: "d",
  },
  {
    question: "Which is an example of an expense?",
    a: "Dividends",
    b: "Gifts",
    c: "Repairs",
    d: "Wages",
    correct: "c",
  },


];

// Where the information for each constant will go into the html page
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const optionA = document.getElementById('optionA')
const optionB = document.getElementById('optionB')
const optionC = document.getElementById('optionC')
const optionD = document.getElementById('optionD')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question
  optionA.innerText = currentQuizData.a
  optionB.innerText = currentQuizData.b
  optionC.innerText = currentQuizData.c
  optionD.innerText = currentQuizData.d
}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
  let answer
  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })
  return answer
}

// Submit Button
submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++
    }

    currentQuiz++
    // Score
    if (currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

    <!-- Reload -->
           <button onclick="location.reload()">Reload</button>
           `
    }
  }
})
