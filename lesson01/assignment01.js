const boxForm = document.querySelector('#boxes');

boxForm.addEventListener('submit', function(event){
event.preventDefault();

//Handling input
let box1 = document.querySelector('.input1').value;
let box2 = document.querySelector('.input2').value;
let box3 = document.querySelector('.input3').value;
let box4 = document.querySelector('.input4').value;


//Right now just working on box1

//split the user input number into individual pieces to insert in to the array
let box1Input = box1.split('');
let box1Array = [box1Input];
let howMany = box1Array.map(box1 => box1.length);

//use .reduce() here
let question = prompt("pick a number to square");
let newNumber = box1Input[1];
let sum = box1Input.reduce(function(newNumber){
	return newNumber * question;
})



//Handling output
let p = document.createElement('p');
let text = document.createTextNode(`There are ${howMany} numbers entered total`);

p.appendChild(text);
this.appendChild(p);


console.log(`Box 1 array: ${box1Array}`);
console.log(`Box 1, index 1: ${box1Input[1]}`)
console.log(`New number: ${newNumber}`)
console.log(`Double the first index of the array: ${sum}`)
console.log(`How many numbers: ${howMany}`);

})
