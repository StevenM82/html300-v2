//ES6 methods used Array.from(); Array.length; Array.reduce(); Array.map();


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
  let sum = box1Array.reduce(function(sum, value) {
    return Number(sum) + Number(value);
  });

  //console.log things to help with troubleshooting
  console.log(`The array is ${box1Array}`);
  console.log(`The second digit in the array is ${box1Array[1]}`);
  console.log(`The length ${howMany}`);
  console.log(`The sum is ${sum}`);


  //Handling output
  const p = document.createElement('p');
  const text = document.createTextNode(`There are ${howMany} numbers entered. Their sum is ${sum}.`);

  p.appendChild(text);
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

  //Square each number in the array
  const box2Squared = box2Array.map(x => x ** 2);

  //Concatenate the string to allow mathematic manipulation of the whole array
  const box2AddUp = box2Array.reduce(function(sum, value) {
    return sum + value;
  })

  console.log(`${box2Array}`);
  console.log(box2Squared);
  console.log(box2AddUp ** 2);


  //Handling output
  const p = document.createElement('p');
  const text = document.createTextNode(`Here you have it ${box2Squared}. The square of the entire number is ${box2AddUp ** 2}`);

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
  console.log(box2Array);


  //Handling output
  const p3 = document.createElement('p');
  const text3 = document.createTextNode(`${box3Array}`);

  p3.appendChild(text3);
  this.appendChild(p3);
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


	const box4Array = Array.from(box1 + box2 + box3);

  //Consolidate all of the arrays into a single string array
	const inputString = box4Array.map(userNumbers => userNumbers);
  console.log("input string " + inputString);

  //Convert the input string array into an int array, remove all numbers smaller than 1
  //and then add up their total
  const userInputNumbers = inputString
  	.map((convertedInput) => Number(convertedInput))
    .filter((convertedInput) => convertedInput > 1)
    .reduce((convertedInput, sum) => convertedInput + sum, 0);


  console.log(`the sum of all the user input is ${userInputNumbers}`);



  /* const array3 = box1Array.concat(box2Array);
  console.log("I am array 3: " + array3);


   box1Array.forEach(function(numbered){
    let more = numbered;
    let moreNumbers = parseInt(more);
    console.log("I am a number: " + moreNumbers);
  })  */

  /* const newArrayNow.forEach(box1)
    const addsUp = parseInt(box1);

    console.log(addsUp); */

  //const box4Array = Array.from(newBoxValue);


  //Handling output
  /* const p4 = document.createElement('p');
  const text4 = document.createTextNode(`The sum of the first 3 boxes * 2 and ${box4} is ${totalSum}`);

  p4.appendChild(text4);
  this.appendChild(p4); */
})
 
