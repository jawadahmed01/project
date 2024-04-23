const detailsApp = document.querySelector("#details-btn")

const quiz = [
  {
    question: "What is the most used programming language in 2021?",
    ans1text: "Java",
    ans2text: "C++",
    ans3text: "Python",
    ans4text: "JavaScript",
    answer: "JavaScript",
  },
  {
    question: "Who is the President of US?",
    ans1text: "Joe Biden",
    ans2text: "Donald Trump",
    ans3text: "Barack Obama",
    ans4text: "George Bush",
    answer: "Joe Biden",
  },
  {
    question: "What does HTML stand for?",
    ans1text: "Hypertext Markup Language",
    ans2text: "Cascading Style Sheet",
    ans3text: "Jason Object Notation",
    ans4text: "Helicopters Terminals Motorboats Lamborginis",
    answer: "Hypertext Markup Language",
  },
  {
    question: "What year was JavaScript launched?",
    ans1text: "1996",
    ans2text: "1995",
    ans3text: "1994",
    ans4text: "none of the above",
    answer: "1995",
  },
]

const showName = document.querySelector("#showName")
const showRollNo = document.querySelector("#showRollNo")
const showBatch = document.querySelector("#showBatch")
const showsection = document.querySelector("#showsection")
const showMark = document.querySelector("#showMark")

const name = document.querySelector("#name")
const rollNo = document.querySelector("#roll-no")
const batch = document.querySelector("#batch")
const section = document.querySelector("#section")

const container3 = document.querySelector(".container3")
const container2 = document.querySelector(".container2")
const detailsBtn = document.querySelector("#details-btn")
const container = document.querySelector(".container")

const question = document.getElementById("question")
const optionA = document.getElementById("input-option-a")
const optionB = document.getElementById("input-option-b")
const optionC = document.getElementById("input-option-c")
const optionD = document.getElementById("input-option-d")
const submitBtn = document.getElementById("submit-btn")

let currentQuestion = 0
let score = 0

question.textContent = quiz[currentQuestion].question
optionA.nextElementSibling.textContent = quiz[currentQuestion].ans1text
optionB.nextElementSibling.textContent = quiz[currentQuestion].ans2text
optionC.nextElementSibling.textContent = quiz[currentQuestion].ans3text
optionD.nextElementSibling.textContent = quiz[currentQuestion].ans4text

submitBtn.addEventListener("click", () => {
  const checkAnswer = document.querySelector('input[type="radio"]:checked')
  if (checkAnswer === null) {
    alert("Please slect one option")
  } else if (
    checkAnswer.nextElementSibling.textContent === quiz[currentQuestion].answer
  ) {
    score++
  }
  currentQuestion++
  if (currentQuestion < quiz.length) {
    question.textContent = quiz[currentQuestion].question
    optionA.nextElementSibling.textContent = quiz[currentQuestion].ans1text
    optionB.nextElementSibling.textContent = quiz[currentQuestion].ans2text
    optionC.nextElementSibling.textContent = quiz[currentQuestion].ans3text
    optionD.nextElementSibling.textContent = quiz[currentQuestion].ans4text
    checkAnswer.checked = false
  } else {
    // alert("Your score is " + score + " out of " + quiz.length)

    const namedata = name.value
    const rollNodata = rollNo.value
    const batchdata = batch.value
    const sectiondata = section.value

    showName.textContent = namedata
    showRollNo.textContent = rollNodata
    showBatch.textContent = batchdata
    showsection.textContent = sectiondata

    container3.classList.add("showDiv")
    container2.classList.add("hideDiv")
    showMark.textContent = "Your score is " + score + " out of " + quiz.length

    container2.classList.add("hideDiv")
  }
})

detailsBtn.addEventListener("click", () => {
  container.classList.add("showDiv")
  container2.classList.add("hideDiv")
})
