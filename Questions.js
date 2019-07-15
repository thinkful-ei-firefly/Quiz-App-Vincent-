'use strict'

const STORE= [
  {
    question: 'What is the capital of Japan?',
    answers: [
      'Osaka',
      'Kyoto',
      'Fukuoka',
      'Tokyo'
    ],
  correctAnswer: 'Tokyo',
    icon: 'https://www.google.com/search?q=japan+flag&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjjnfvlkbfjAhWEX80KHbp6BY8Q_AUIECgB&biw=1119&bih=618#imgrc=diLipGTk7RAccM:',
    alt: 'Japanese flag'
  },
  {
    question: 'What is the capital of Japan?',
    answers: [
      'Hsinchu',
      'Taipei',
      'Kaohsiung',
      'Tainan'
    ],
  correctAnswer: 'Taipei',
    icon: 'https://www.google.com/search?q=taiwan+flag&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiExrjgkbfjAhVKB50JHbztBQ0Q_AUIECgB&biw=1119&bih=618#imgrc=xA4B0bEO-JaNRM:',
    alt: 'Taiwan flag'
  },
  {
    question: 'What is the capital of China?',
    answers: [
      'Beijing',
      'Shanghai',
      'Shenzhen',
      'Nanjing'
    ],
    correctAnswer: "Beijing",
    icon: 'https://www.google.com/search?q=china+flag&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiQ99DWkbfjAhUXOs0KHTFzAlMQ_AUIECgB&biw=1119&bih=618#imgrc=GeCanEo9fwa3RM:',
    alt: 'China flag'
  },
  {
    question: 'What is the capital of South Korea?',
    answers: [
      'Busan',
      'Incheon',
      'Seoul',
      'Gimpo',
    ],
    correctAnswer: 'Seoul',
    icon: 'https://www.google.com/search?q=south+korea+flag&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjxsvbJkbfjAhVJVc0KHSlfD_oQ_AUIECgB&biw=1119&bih=618#imgrc=0qMmZI1yU3orzM:',
    alt: 'South Korea flag'
  },
  {
    question: 'What is the capital of Canada?',
    answers: [
      'Ottawa',
      'Toronto',
      'Montreal',
      'Ontario'
    ],
    icon: 'https://www.google.com/search?q=canada+flag&source=lnms&tbm=isch&sa=X&ved=0ahUKEwj0q-_CkbfjAhUXHc0KHYzMBr0Q_AUIECgB&biw=1119&bih=618#imgrc=8BbVkRiS5q_auM:',
    alt: 'Canda flag'
  },
  {
    question: 'What is the capital of Australia?',
    answers: [
      'Canberra',
      'Sydney',
      'Melbourne',
      'Perth',
    ],
    correctAnswer: 'Canberra',
    icon: 'https://www.google.com/search?q=australia+flag&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi3hJS6kbfjAhVFHc0KHZKLC-4Q_AUIECgB&biw=1119&bih=618#imgrc=gRsR_oXneAtsCM:',
    alt: 'Australia Flag'
  },
  {
    question: 'What is the capital of Mexico?',
    answers: [
      'Guadalajara',
      'Puebla',
      'Cancún',
      'Mexico City'
    ],
    correctAnswer: 'Mexico City',
    icon: 'https://www.google.com/search?q=mexico+flag&source=lnms&tbm=isch&sa=X&ved=0ahUKEwio56uxkbfjAhXQZc0KHV08AGYQ_AUIECgB&biw=1119&bih=618#imgrc=s-kixUN_bpy9zM:',
    alt: 'Mexico flag'
  },
  {
    question: 'What is the capital of the United Kingdom?',
    answers: [
      'Liverpool',
      'Bristol',
      'London',
      'Glasgow'
    ],
    correctAnswer: 'London',
    icon: 'https://www.google.com/search?q=uk+flag&source=lnms&tbm=isch&sa=X&ved=0ahUKEwimxZSpkbfjAhXaLc0KHcmcCocQ_AUIECgB&biw=1119&bih=618#imgrc=loDVUIgaAvTIPM:',
    alt: 'United Kingdom Flag'
  },
  {
    question: 'What is the capital of France?',
    answers: [
      'Nice',
      'Paris',
      'Lyon',
      'Toulouse',
    ],
    correctAnswer: 'Paris',
    icon: 'https://www.google.com/search?q=france+flag&source=lnms&tbm=isch&sa=X&ved=0ahUKEwioipqbkbfjAhWVUs0KHRERDtAQ_AUIECgB&biw=1119&bih=618#imgrc=bAY4pm1ktOuMLM:',
    alt: 'French Flag'
  },
  {
    question: 'What is the capital of Italy?',
    answers: [
      'Florence',
      'Venice',
      'Milan',
      'Rome'
    ],
    correctAnswer: 'Rome',
    icon: 'https://www.google.com/search?q=italian+flag&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi7r_2OkbfjAhWJG80KHcxMDsEQ_AUIECgB&biw=1119&bih=618#imgrc=hDjjQN_rnzImoM:',
    alt: 'Italian flag'
  }
];

let questionNumber = 0;
let score = 0;

//generate question html
function generateQuestion() {
  if (questionNumber < STORE.length) {
    return `<div class="question-${questionNumber}">
    <h2>${STORE[questionNumber].question}</h2>
    <form>
    <fieldset>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[0]}" name="answer" required>
    <span>${STORE[questionNumber].answers[0]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[1]}" name="answer" required>
    <span>${STORE[questionNumber].answers[1]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[2]}" name="answer" required>
    <span>${STORE[questionNumber].answers[2]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[3]}" name="answer" required>
    <span>${STORE[questionNumber].answers[3]}</span>
    </label>
    <button type="submit" class="submitButton">Submit</button>
    </fieldset>
    </form>
    </div>`;
  } else {
    renderResults();
    restartQuiz();
    $('.questionNumber').text(10)
  }
}

//increment question number
function changeQuestionNumber() {
  //if (questionNumber < STORE.length) {
  questionNumber++;
  //}
  $('.questionNumber').text(questionNumber + 1);
}

//increment score
function changeScore() {
  score++;
}

//start quiz
//on startQuizButton click hide start div
//unhide quiz form div
function startQuiz() {
  $('.quizStart').on('click', '.startButton', function (event) {
    $('.quizStart').remove();
    $('.questionAnswerForm').css('display', 'block');
    $('.questionNumber').text(1);
  });
}

// render question in DOM
function renderQuestion() {
  $('.questionAnswerForm').html(generateQuestion());
}

//user selects answer on submit run user feedback
function userSelectAnswer() {
  $('form').on('submit', function (event) {
    event.preventDefault();
    let selected = $('input:checked');
    let answer = selected.val();
    let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
    if (answer === correctAnswer) {
      selected.parent().addClass('correct');
      ifAnswerIsCorrect();
    } else {
      selected.parent().addClass('wrong');
      ifAnswerIsWrong();
    }
  });
}

function ifAnswerIsCorrect() {
  userAnswerFeedbackCorrect();
  updateScore();
}

function ifAnswerIsWrong() {
  userAnswerFeedbackWrong();
}

//user feedback for correct answer
function userAnswerFeedbackCorrect() {
  let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
  $('.questionAnswerForm').html(`<div class="correctFeedback"><div class="icon"><img src="${STORE[questionNumber].icon}" alt="${STORE[questionNumber].alt}"/></div><p><b>You got it right!</b></p><button type=button class="nextButton">Next</button></div>`);
}

//user feedback for wrong answer
function userAnswerFeedbackWrong() {
  let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
  // let iconImage = `${STORE[questionNumber].icon}`;
  $('.questionAnswerForm').html(`<div class="correctFeedback"><div class="icon"><img src="${STORE[questionNumber].icon}" alt="${STORE[questionNumber].alt}"/></div><p><b>You got it wrong</b><br>the correct answer is <span>"${correctAnswer}"</span></p><button type=button class="nextButton">Next</button></div>`);
}

//update score text
function updateScore() {
  changeScore();
  $('.score').text(score);
}

//when quiz is over this is the html for the page
function renderResults() {
  if (score >= 8) {
    $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>You're on fire!</h3><img src="https://i.imgur.com/OPODnDn.gif" alt="campfire animated icon"/><p>You got ${score} / 10</p><p>You're ready to plan your backpacking trip!</p><button class="restartButton">Restart Quiz</button></div>`);
  } else if (score < 8 && score >= 5) {
    $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>Almost there!</h3><img src="https://i.imgur.com/41Jnnxk.gif" alt="raccoona animated icon"/><p>You got ${score} / 10</p><p>Bone up on your backpacking knowledge a little more and you'll be ready to go!</p><button class="restartButton">Restart Quiz</button></div>`);
  } else {
    $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>You might want to stick with car camping</h3><img src="https://i.imgur.com/iGqoVcM.gif" alt="car animcated icon"/><p>You got ${score} / 10</p><p>With more camping and outdoor experience you'll be able to pass this quiz in no time</p><button class="restartButton">Restart Quiz</button></div>`);
  }
}

//what happens when the user clicks next
function renderNextQuestion() {
  $('main').on('click', '.nextButton', function (event) {
    changeQuestionNumber();
    renderQuestion();
    userSelectAnswer();
  });
}

//restart quiz function - reloads page to start quiz over
function restartQuiz() {
  $('main').on('click', '.restartButton', function (event) {
    location.reload();
  });
}

//run quiz functions
function createQuiz() {
  startQuiz();
  renderQuestion();
  userSelectAnswer();
  renderNextQuestion();
}

$(createQuiz);
