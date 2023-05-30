// Define an array of country-capital pairs
const countries = [
  { country: "United States", capital: "Washington, D.C." },
  { country: "United Kingdom", capital: "London" },
  { country: "France", capital: "Paris" },
  // Add more country-capital pairs here
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const submitButton = document.getElementById("submit");
const resultElement = document.getElementById("result");

// Display the current question
function displayQuestion() {
  if (currentQuestion < countries.length) {
    const country = countries[currentQuestion].country;
    questionElement.textContent = `What is the capital of ${country}?`;
  } else {
    // All questions have been answered
    endQuiz();
  }
}

// Check the answer and update the score
function checkAnswer() {
  const answer = answerElement.value.trim();
  const capital = countries[currentQuestion].capital;
  if (answer.toLowerCase() === capital.toLowerCase()) {
    score++;
    resultElement.textContent = "Correct!";
  } else {
    resultElement.textContent = `Incorrect. The correct answer is ${capital}.`;
  }

  // Clear the input field
  answerElement.value = "";

  // Move to the next question
  currentQuestion++;
  displayQuestion();
}

// End the quiz and display the final score
function endQuiz() {
  questionElement.textContent = `Quiz ended. Your score is ${score} out of ${countries.length}.`;
  answerElement.style.display = "none";
  submitButton.style.display = "none";
  resultElement.style.display = "none";
}

// Add event listener to the submit button
submitButton.addEventListener("click", checkAnswer);

// Start the quiz
displayQuestion();
