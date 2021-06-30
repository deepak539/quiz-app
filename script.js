const quizData = [
  {
    ques : 'Translator which is used to convert codes of assembly language into machine language is termed as ?',
    a : 'Assembler',
    b : 'Attempter',
    c : 'Compiler',
    d : 'Debugger',
    correct : 'a'
  },
  {
    ques : 'Diagram which shows relationship between classes is termed as ?',
    a : 'Use case diagram',
    b : 'Sequential diagram',
    c : 'Class diagram',
    d : 'Communication diagram',
    correct : 'c'
  },
  {
    ques : 'Higher-order functions are not built into the ?',
    a : 'Structural language',
    b : 'Object oriented programming',
    c : 'Java',
    d : 'C++',
    correct : 'a' 
  },
  {
    ques : 'Animations and interactivity with the user on web pages can be done by ?',
    a : 'PHP',
    b : 'JavsScript',
    c : 'Visual Basic',
    d : 'Visual C#',
    correct : 'b'
  },
  {
    ques : 'Diagram which shows how objects communicate with each other regarding a sequence of messages is caaled ?',
    a : 'Object daigram',
    b : 'Sequential diagram',
    c : 'Use case diagram',
    d : 'Comunication diagram',
    correct : 'd'
  }
]

const answers = document.querySelectorAll('.input-choice');

let index = 0;
let score = 0;

change();

function change(){
  deselect();
  document.getElementById('que').innerText= quizData[index].ques;
  document.getElementById('a_choice').innerText = quizData[index].a;
  document.getElementById('b_choice').innerText = quizData[index].b;
  document.getElementById('c_choice').innerText = quizData[index].c;
  document.getElementById('d_choice').innerText = quizData[index].d;
}


function getSelected(){
  let ans = undefined;

  answers.forEach((answer) => {
    if(answer.checked){
      ans = answer.id;
    }
  });

  return ans;
}


function deselect(){
  answers.forEach((answer) => {
    answer.checked = false;
  })
}

document.getElementById('btn').addEventListener('click', () => {

  const ans = getSelected();
    if(ans){
      if(ans === quizData[index].correct){
        score++;
      }
      index++;
      if(index < quizData.length){
        change();
      }
      else{
        document.getElementById('quiz').innerHTML = `<h1>You scored ${score}/${quizData.length}</h1>`
      }
    }
});