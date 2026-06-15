

let Name = document.getElementById("Name");
let startbtn = document.getElementById("startbtn");
let submitQuiz = document.getElementById("submitQuiz");
let message = document.getElementById("message");
let result = document.getElementById("result");
let Reset = document.getElementById("reset");
let quizQuestions = document.getElementById("quizQuestions");


let quizData = {
  questions: []
}
async function Load() {
  let Data = await fetch("Quiz.json");
  quizData = await Data.json();
  console.log(quizData);
};
async function Create() {
    if (Name.value=== ""){
        alert("Enter ur Name");
        return;
    }else{
        message.innerHTML="Welcome "+ Name.value + " to the Quiz";
    }
  quizQuestions.innerHTML = "";
  await Load();
  for (let i = 0; i < quizData.length; i++) {

    let QuestionTxt = document.createElement("p");
    quizQuestions.appendChild(QuestionTxt)
    QuestionTxt.innerHTML = quizData[i].question;
    for (let j = 0; j < quizData[i].options.length; j++) {
  let options = quizData[i].options[j];
  let input = document.createElement("input");
  input.type = "radio";
  input.name = "question_" + i;
  input.value = options;
  let label = document.createElement("label");
  label.innerHTML = options;
  quizQuestions.appendChild(input);
 quizQuestions.appendChild(label);
   quizQuestions.appendChild(document.createElement("br"));
    }
    // quizQuestions.innerHTML=quizData[i].question;
    // console.log(quizQuestions);
  }

};
startbtn.addEventListener('click', Create);
function checkquiz() {
  let answer = 0;
  for (let i = 0; i < quizData.length; i++) {
    let selectedInput = document.querySelector('input[name="question_' + i + '"]:checked');
   if(selectedInput===""){
    alert("attempt all questions")
   }else{ if ( selectedInput.value === quizData[i].answer) {
      answer++;
      console.log(answer);
    }}
  }
  result.innerHTML = "You scored " + answer + " out of " + quizData.length;
}
submitQuiz.addEventListener('click', checkquiz);
Reset.addEventListener('click', function () {
  quizQuestions.innerHTML = "";
  result.innerHTML = "";
  message.innerHTML = "";
  Name.value = "";
});