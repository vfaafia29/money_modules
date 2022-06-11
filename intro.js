const quizData = [
    {
        question: "What is a money mindset?",
        a: "How we should spend our money",
        b: "Values and beliefs that influence our money choices",
        c: "Values and beleifs that influence our education",
        d: "Limiting our spending",
        correct: "b",
    },
    {
        question: "Why is understanding our money mindsets important?",
        a: "To identify what matters most and potential financial weaknesses",
        b: "To judge our spending habits",
        c: "To compare ourselves to others",
        d: "To spend more on unnecessary stuff",
        correct: "a",
    },
    {
        question: "What is financial independence?",
        a: "Being rich with no time",
        b: "Buying branded stuff",
        c: "To have lots of money but have poor health",
        d: "To have options",
        correct: "d",
    },
    {
        question: "What is important to consider when setting financial goals?",
        a: "Spend more than we earn",
        b: "We should cut down all spending unless it's necessary",
        c: "Financial independence is a long term journey",
        d: "Financial independence is a short term journey",
        correct: "c",
    },


];

const quiz= document.getElementById('quiz')
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
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})
