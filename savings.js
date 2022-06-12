const quizData = [{
    question: "Which is NOT an example of fa'alavelave?",
    a: "Wedding",
    b: "Funeral",
    c: "Birthday",
    d: "Hanging out with friends",
    correct: "d",
  },
  {
    question: "What is mainly asocciated with fa'alavelave due to our giving culture?",
    a: "Money donations",
    b: "Giving up time",
    c: "Gift vouchers",
    d: "Flowers",
    correct: "a",
  },
  {
    question: "When do fa'alavelave usually occur (in particular funerals)?",
    a: "Weekly",
    b: "Unexpectedly",
    c: "Monthly",
    d: "Annually",
    correct: "b",
  },
  {
    question: "What is the best way of dealing with a fa'alavelave?",
    a: "Loan",
    b: "Borrow from others",
    c: "Emergency fund",
    d: "Sacrifice school lunch for the week",
    correct: "c",
  },


];

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


submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++
    }

    currentQuiz++

    if (currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
    }
  }
})
