/*
const isStudent = document.getElementById('isStudent');
const studentClass = document.getElementById('studentClass');
const mySubmit = document.getElementById('mySubmit');
const myText = document.getElementById('myText');
const user = document.getElementById('user');

mySubmit.onclick = function(event) {
    event.preventDefault(); // Evita o envio do formulário
    const userName = user.value;
    const isStudentValue = isStudent.value;
    const studentClassValue = studentClass.value;

    if (isStudentValue === 'yes') {
        myText.textContent = `${userName}, you are a good Student in ${studentClassValue}`;
    } else {
        myText.textContent = `${userName}, you are NOT a good Student in ${studentClassValue}`;
    }
}

*/

const mySubmit = document.getElementById('mySubmit');
const myText = document.getElementById('myText');

mySubmit.onclick = function(event) {
    event.preventDefault();

    const firstQuestionValue = document.querySelector('input[name="q1"]:checked');
    const secondQuestionValue = document.querySelector('input[name="q2"]:checked');
    const thirdQuestionValues = document.querySelectorAll('input[name="q3"]:checked');
    const fourthQuestionValue = document.getElementById('q4').value;
    const fifthQuestionValue = document.getElementById('q5').value.trim();

    const thirdQuestionCorrect = Array.from(thirdQuestionValues).map(el => el.value).sort().join('') === 'abc';

    if (firstQuestionValue && secondQuestionValue && thirdQuestionCorrect && fourthQuestionValue !== 'a' && fifthQuestionValue.length > 0 &&
        firstQuestionValue.value === 'a' && secondQuestionValue.value === 'c' && fourthQuestionValue === 'b') {
        myText.textContent = 'Well Done, you are a smart boy!';
    } else {
        myText.textContent = 'Maybe something wrong';
    }
}