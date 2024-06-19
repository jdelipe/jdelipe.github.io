/*

console.log(`Hello`);
console.log(`I liek pizza`);



let forSale = true;


// VARIAVEIS //

let x = 50;


console.log(`I have ${x} dogs `);
console.log(`This car for sale: ${forSale}`);


// arithmetic operators = operands (values, variables, etc.)
//     operators (+ - * /)
//     ex. 11 = x + 5;


    let students = 30;

    //students = students + 1;
    //students = students - 1;
    //students = students * 2;
    //students = students / 2;
    //students = students ** 2;

    students += 3;


    console.log(students);

    let result = 3 + 2 * 5 + (6 ** 2);

    console.log(result);
     
    
    

    // How to accept user input

// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY = HTML textbox





//HTML

let username;

document.getElementById("mysubmit").onclick = function(){
    username = document.getElementById("mytext").value;
    document.getElementById("myh1").textContent = `Hi ${username}`
    console.log(username);
}


    
// type conversion = change the datatype of a value to another
//                                 (strings, numbers, booleans)

// --------------- EXAMPLE 1 ---------------


// --------------- EXAMPLE 2 ---------------
let x = "10";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);



// const = a variable that can't be changed

const pi = 3.14159;
let radius;
let circumference;


radius = Number(radius);

circumference = 2 * pi * radius;


document.getElementById("mysubmit").onclick = function(){
    radius = document.getElementById("mytext").value;
    radius = Number(radius);
    circumference = 2 * pi * radius;
    document.getElementById("myh3").textContent = circumference;

    console.log(circumference);
}




const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countnumber = document.getElementById("countnumber");
let count = 0;



increaseBtn.onclick = function(){
   count = count + 1; 
   countnumber.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countnumber.textContent = count;
 }
 resetBtn.onclick = function(){
    count = 0;
    countnumber.textContent = count;
 }
 


 // NUMERO PAR E IMPAR 
 let k;
 let par;
 
 
 k = Number(k);
 
 par = 2 * k;
 
 
 document.getElementById("par-submite").onclick = function(){
     k = document.getElementById("par-input").value;
     k = Number(k);
     par = 2 * k;
     document.getElementById("par-result").textContent = par;
 
     console.log(par);
 }

 document.getElementById("impar-submite").onclick = function(){
    k = document.getElementById("impar-input").value;
    k = Number(k);
    par = 2 * k + 1;
    document.getElementById("impar-result").textContent = par;

    console.log(par);
}

// TROCA DE IMAGEM COM BUTTON

document.getElementById("ren-button").onclick = function(){
    var img = document.getElementById("img-ren");
    var currentSrc = img.src;
    if (currentSrc.includes("jim.png")) {
        img.src = "baixados.jpg"; // Substitua pelo caminho da primeira nova imagem
    } else if (currentSrc.includes("baixados.jpg")) {
        img.src = "Dwight.png"; // Substitua pelo caminho da segunda nova imagem
    } else {
        img.src = "jim.png"; // Volte para 'jim.png'
    }
}



//Matemática



//z = Math.ceil(x);
//z = Math.round(x);
//z = Math.floor(x);
//z = Math.sin(x);
//z = Math.cos(x);
//z = Math.sqrt(z);
//z = Math.log(x);
//z = Math.abs(x);
//z = Math.sign(x);



//RAMDON NUMBER GENERATOR


//let randomNum = Math.floor(Math.random() * 6) + 1;

//console.log(randomNum);


//Random number beetween 30 and 50

const max = 50;
const min = 30;

let = randomNum = Math.floor(Math.random() * (max - min)) + min;

console.log(randomNum);

document.getElementById('mybotton').onclick = function(){

randomNum = Math.floor(Math.random() * (max - min)) + min;

document.getElementById('Number-gerate').textContent = randomNum;

}


// IF STATEMENTS = if a condition is true, execute some code
//                                   if not, do something else




const Mytext = document.getElementById("Mytext");
    const mybutton = document.getElementById("mybutton");
    const Agetext = document.getElementById("Agetext");
    let age;


mybutton.onclick = function(){
    
    

age = Agetext.value;
age = Number(age);

if(age >= 18){
    
    Mytext.textContent = `You can enter!!`
}

else{
    
    Mytext.textContent = `You can NOT enter!!`
}
}




// .checked = property that determines the checked state of an 
//                     HTML checkbox or radio button element

const myCheckBox = document.getElementById('myCheckBox');
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = `You are Subscribe!`;
    }
    else{
        subResult.textContent = `You are NOT Subscribe!`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You credit card is VISA.`;

    }
    
    else if(masterCardBtn.checked){
        paymentResult.textContent = `You credit card is a Master.`;
    }

    else if(paypalBtn.checked){
        paymentResult.textContent = `You credit card is a Paypal.`;
    }

    else {
        paymentResult.textContent = `Select a Card.`;
    }
}   



// ternary operator = a shortcut to if{} and else{} statements
//                                  helps to assign a variable based on a condition
//                                  condition ? codeIfTrue : codeIfFalse;

//let time = 13;
//let greeting = time < 12 ? "Good morning!" : "Good afternoon!";
//console.log(greeting);

//let isStudent = true;
//let message = isStudent ? "You are a student" : "You are NOT a student";
//console.log(message);

//let purchaseAmount = 90;
//let discount = purchaseAmount >= 100 ? 10 : 0;
//console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);


*/


document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript is working!")
    let currentIndex = 0;
    const albumContents = document.querySelectorAll('.album-content');
    
    // Initially show the first album content
    albumContents[currentIndex].classList.add('active');
    
    document.getElementById('left-arrow').addEventListener('click', function() {
        albumContents[currentIndex].classList.remove('active');
        currentIndex = (currentIndex === 0) ? albumContents.length - 1 : currentIndex - 1;
        albumContents[currentIndex].classList.add('active');
    });
    
    document.getElementById('right-arrow').addEventListener('click', function() {
        albumContents[currentIndex].classList.remove('active');
        currentIndex = (currentIndex === albumContents.length - 1) ? 0 : currentIndex + 1;
        albumContents[currentIndex].classList.add('active');
    });
});