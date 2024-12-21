const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];
let answeredOptions = [];

const handleSubmit = (event) => {
  const selectedAnswer = document.querySelector(
    'input[name="option"]:checked'
  )?.value;
  if (answeredOptions.length == quizData.length) {
    answeredOptions = [];
    updateQuestion(0);
    return;
  }
  if (!selectedAnswer) {
    alert("none selected ❌");
    return;
  }
  // store choosen answer
  answeredOptions.push(selectedAnswer);
  const selectedInput = document.querySelector('input[name="option"]:checked');
  if (selectedInput) {
    selectedInput.checked = false;
  }
  // update dom with new question
  if (answeredOptions.length < quizData.length) {
    updateQuestion(answeredOptions.length);
  } else {
    moveToResult();
  }
};
const optionToIndexMap = {
  0: "a",
  1: "b",
  2: "c",
  3: "d",
};
const updateQuestion = (questionNumber) => {
  const options = document.querySelector(".options");
  if (!options || options.style.display === "none") {
    options.style.display = "block";
  }
  const questionData = quizData[questionNumber];
  const questionCnt = document.querySelector(".question");
  questionCnt.innerHTML = questionData.question;
  for (let i = 0; i < 4; i++) {
    const option = document.querySelector(`#op${i + 1}l`);
    option.innerHTML = quizData[questionNumber][optionToIndexMap[i]];
  }
};
const moveToResult = () => {
  const score = answeredOptions.reduce((acc, x, i) => {
    if (quizData[i].correct === x) {
      return acc + 1;
    }
    return acc;
  }, 0);
  const questionCnt = document.querySelector(".question");
  questionCnt.innerHTML = `You have scored ${score}/${quizData.length}`;
  const btn = document.querySelector(".footer");
  btn.innerHTML = "Reload";
  const options = document.querySelector(".options");
  options.style.display = "none";
};

updateQuestion(0);
