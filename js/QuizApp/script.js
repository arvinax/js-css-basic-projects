
const form = document.querySelector('#quiz-form');
const answers = Array.from(document.querySelectorAll('.answer'));
const questionItems = document.querySelectorAll('.question-item');
const alert = document.querySelector('#alert');




form.addEventListener('submit', e => {
  e.preventDefault();

  questionItems.forEach(que => {
    que.classList.add('incorrect');
    que.classList.remove('correct');
  });


  const checkedAnswers = answers.filter(answer => answer.checked);
  

  checkedAnswers.forEach(answer => {
    const isCorrect = answer.value === 'true';
   const questionItem = answer.closest('.question-item');

    if (isCorrect){
      questionItem.classList.add('correct');
      questionItem.classList.remove('incorrect');
    } else {
      questionItem.classList.add('incorrect');
      questionItem.classList.remove('correct');
    }
  });



  const allTrue = checkedAnswers.every(answer => answer.value === 'true');
  const all = checkedAnswers.length === questionItems.length;
  if (allTrue && all){
    alert.classList.add('active');
    setTimeout(() => {
      alert.classList.remove('active');
    }, 1000);
  }


});