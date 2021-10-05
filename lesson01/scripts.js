/*-----Box 1-----*/

const boxForm1 = document.querySelector('#box-1');

boxForm1.addEventListener('submit', function(event) {
  event.preventDefault();

  //Handling input
  let box1 = document.querySelector('.input1').value;

  //Split the array into multiple items
  const box1Array = Array.from(box1);

  //Count the number of digits entered in to the array
  let howMany = box1Array.length;

  //Sum the total of all the numbers in the array
  let sum = box1Array.reduce((sum, value) => (Number(sum) + Number(value)));


  //Handling output
  const p = document.createElement('p');
  const text = document.createTextNode(`There are ${howMany} numbers entered in box 1. The sum is ${sum}.`);

  p.appendChild(text);
  p.classList.add('p');
  this.appendChild(p);
})


/*-----Box 2-----*/
const boxForm2 = document.querySelector('#box-2');
boxForm2.addEventListener('submit', function(event) {
  event.preventDefault();

  //Handling input
  let box2 = document.querySelector('.input2').value;

  //Create the array from user input
  const box2Array = Array.from(box2);

  //Square each individual number in the array
  const box2Squared = box2Array.map(x => x ** 2);

  //Concatenate the string in order to square it as a number later
  const box2AddUp = box2Array.reduce(function(sum, value) {
    return sum + value;
  })
  console.log(box2AddUp);
  //Squaring the string turns it into a number.
	const addUpSquared = box2AddUp ** 2;



  //Handling output
  const p = document.createElement('p');
  p.classList.add('p');
  const text = document.createTextNode(`The square of each digit is ${box2Squared}. The square of the entire number is ${addUpSquared}`);

  p.appendChild(text);
  this.appendChild(p);
})


/*-----Box 3-----*/
const boxForm3 = document.querySelector('#box-3');

boxForm3.addEventListener('submit', function(event) {
  event.preventDefault();

  //Handling input
  let box3 = document.querySelector('.input3').value;

  const box3Array = Array.from(box3);

  const box3ArraySort = box3Array.sort(function(a1, a2){
  	if(a1 > a2) {
    	return 1;
    } else {
    	return -1;
    }
  })

  //Handling output
  const p = document.createElement('p');
  p.classList.add('p');
  const text = document.createTextNode(`${box3Array}`);

  p.appendChild(text);
  this.appendChild(p);
})


/*-----Box 4-----*/
const boxForm4 = document.querySelector('#box-4');

boxForm4.addEventListener('submit', function(event) {
  event.preventDefault();

  //Handling input
  let box1 = document.querySelector('.input1').value;
  let box2 = document.querySelector('.input2').value;
  let box3 = document.querySelector('.input3').value;
  let box4 = document.querySelector('.input4').value;


  const box4Array = Array.from(box1 + box2 + box3 + box4);

  //Consolidate all of the arrays into a single string array
  const inputString = box4Array.map(userNumbers => userNumbers);

  //Convert the input string array into an integer array then sum their total
  const userInputNumbers = inputString
    .map((convertedInput) => Number(convertedInput))
    .reduce((convertedInput, sum) => convertedInput + sum, 0);

  const userInputSquared = userInputNumbers ** 2;


  //Handling output
  const p = document.createElement('p');
  p.classList.add('p');
  const text = document.createTextNode(`The sum all of the boxes together is ${userInputNumbers}. The square is ${userInputSquared}`);

  p.appendChild(text);
  this.appendChild(p);
})