// Elements
var score = document.getElementsByClassName('scores');
var time = document.getElementById('time');
var start = document.getElementById('start');
var submit = document.getElementById('submit');
var questionDiv = document.getElementById('questions');
var questionTitle = document.getElementById('question-title');
var questionChoices = document.getElementById('choices');
var startMenu = document.getElementById('start-screen');
var endScreen = document.getElementById('end-screen');
var submitHighscore = document.getElementById('submit');
var feedback = document.getElementById('feedback');
var finalScore = document.getElementById('final-score');
var initialsInput = document.getElementById('initials');
// Variable to track players score
var scoreCount = 0;
// Variable to track on which question my player is
var questionCount = 0;
// Variable that will be a setInterval()
var timer = 0;
// Variable that will track seconds
var timerCount = 0;
// Audio files
var audioCorrect = new Audio('./assets/sfx/correct.wav');
var audioWrong = new Audio('./assets/sfx/incorrect.wav');

// Function that starts our timer, also it will show endScreen when timer gets to 0s or less seconds.
function startTimer() {
  timerCount = 75;
  timer = setInterval(function() {
    // Set span text to timer count
    time.textContent = timerCount;
    // Decrement after 1000ms which is 1s
    timerCount--;
    // Game over if timer hits 0 or is less than that
    if(timerCount < 0) {
      clearInterval(timer);
      showEndScreen();
    }
  }, 1000);
}

// Function that shows EndScreen
function showEndScreen() {
  toggleHide(questionDiv, endScreen);
  finalScore.textContent = scoreCount;
}

// Function that initializes quiz
function startQuiz() {
  toggleHide(startMenu, questionDiv);
  createQuiz();
  startTimer();
}

// Function that hides one element and shows the other one
function toggleHide(elementHidden, elementShown) {
  elementHidden.classList.add('hide');
  elementShown.classList.remove('hide');
}

//Function that creates our quiz
function createQuiz() {
  var sortedArray = questionsArray.sort()
  questionPopulate(sortedArray[questionCount])
}

//Function that creates elements of our quiz - questions and answers
function questionPopulate(question) {

  // Set title text to questionsArray element text 
  questionTitle.textContent = question.question;

    // Create an answer Button for each questionsArray answer (4)
    question.answers.forEach(answer => {
      // Create a button
      var answerButton = document.createElement('button');
      // Set button text to answer text
      answerButton.textContent = answer.answerText;
      // Check if answer property correct is true, if it does create a dataset for that element
      if (answer.correct){
        // Add dataset to that button
        answerButton.dataset.correct = answer.correct;
      }
      // Add event listener that listens for click
      answerButton.addEventListener("click" , selectedbuttonTrue);
      // Append button to choices Div
      questionChoices.appendChild(answerButton);
    });
}

// Function that runs on each answer and checks if it's true
function selectedbuttonTrue(event) {
  // Prevent default event behaviour
  event.preventDefault();
  // Create a variable that checks if target element has my data attribute 'data-correct'
  var targetTrue = event.target.getAttribute("data-correct");
  // If my target has 'data-correct' attribute so it means it's true answer
  if(targetTrue) {
    // Increment score
    scoreCount++;
    // Increment question count so we can show next question
    questionCount++;
    // Create feedback for correct answer
    createFeedback("Correct!");
    // Play sound for correct answer
    playSound(audioCorrect);
    // Delete Quiz elements: title and answer buttons
    deleteChildren(questionChoices);
    // If target doesn't have 'data-correct' attribute which means it's false answer
    } else {
      // Increment question count so we can show next question
      questionCount++;
      // Deduct 10s from timer
      timerCount = timerCount - 10;
      // Create feedback for wrong answer
      createFeedback("Wrong!");
      // Play sound for wrong answer
      playSound(audioWrong);
      // Delete Quiz elements: title and answer buttons
      deleteChildren(questionChoices);
    }
    // Check if it's last question
    checklastQuestion();
};

// Function that checks if it's last element of questions Array
function checklastQuestion() {
  // Check if question count is equal to length of our questions Array
  if(questionCount === questionsArray.length) {
    // Show end screen
    showEndScreen();
    // clear timer
    clearInterval(timer);
    // if it's not generate quiz title and answers
  } else {
    questionPopulate(questionsArray[questionCount]);
  }
}

// Function that plays sound and remove feedback after playing that sound
function playSound(sound) {
  setTimeout(function(){
    sound.play();
    removeFeedback();
  }, 400);
}

// Function that removes feedback element
function removeFeedback () {
  // Remove feedback element
  feedback.firstChild.remove();
  // Hide feedback element
  feedback.classList.add('hide');
}

// Function that creates feedback
function createFeedback(text) {
  // Show feedback element
  feedback.classList.remove('hide');
  // Create feedback <p> element
  var feedbacktextElement = document.createElement("p");
  // Change it's text value to function argument value
  feedbacktextElement.textContent = text;
  // Append our new element to feedback div
  feedback.append(feedbacktextElement);
}

// Function that takes parent element and then it will delete it's children elements from the DOM
function deleteChildren(parent) {
  // Loop through and delete it's first children until there's none
  while (parent.firstChild) 
    parent.firstChild.remove();
}

// Function that sets player score to localStorage
function pushtolocalStorage() {
  // Set my variable to inputs value
  var name = initialsInput.value;
  // Create my object that we push to localStorage
  var playerObject = { initials: name, score: scoreCount }
  // If localStorage is empty create new localStorage
  if(localStorage.getItem("score") === null) {
    // Create an array of objects
    var scoreArray = [];
    // Push my object to that array
    scoreArray.push(playerObject);
    // Set localStorage to my array
    localStorage.setItem('score', JSON.stringify(scoreArray));
    // If it exists
  } else {
    // Create an array
    var scoreArray = [];
    // Get my localStorage which must be parsed 
    scoreArray = JSON.parse(localStorage.getItem('score'));
    // Push my object to newly created array which is a mirror of localStorage
    scoreArray.push(playerObject);
    // Push my Array of objects to localStorage
    localStorage.setItem('score', JSON.stringify(scoreArray));
  }  
}

// Event listener to start a game
start.addEventListener("click", startQuiz);
// Event listener to submit initials and score to localStorage
submitHighscore.addEventListener("click", function(){
  //If initials input has no value show player an alert that he needs to put his initials
  if (!initials.value) {
    alert("Please add your initials.");
  // Push to localStorae and send player to highscores.html page
  } else {
    pushtolocalStorage();
    location.href = "highscores.html";
  }
});
