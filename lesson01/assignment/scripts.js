/*-----Box 1-----*/

const boxForm1 = document.querySelector('#box-1');

boxForm1.addEventListener('submit', function(event) {
  event.preventDefault();

  //Handling input
  let box1 = document.querySelector('.input1').value;

  //Split the array into multiple items
  const box1Array = Array.from(box1);
  console.log(`The array is ${box1Array}`);
  console.log(`The second digit in the array is ${box1Array[1]}`);

  //Count the number of digits entered in to the array
  let howMany = box1Array.length;
  console.log(`The length ${howMany}`);



  //Sum the total of all the items in the array

  let sum = box1Array.reduce(function(sum, value) {
    return Number(sum) + Number(value);
  });

  console.log(`The sum is ${sum}`);


  //Handling output

  const p = document.createElement('p');
  const p2 = document.createElement('p');
  const text = document.createTextNode(`There are ${howMany} numbers entered total`);
  const text2 = document.createTextNode(`Their sum is ${sum}`)

  p.appendChild(text);
  p2.appendChild(text2);

  this.appendChild(p);
  this.appendChild(p2);
})


/*-----Box 2-----*/
const boxForm2 = document.querySelector('#box-2');
boxForm2.addEventListener('submit', function(event) {
  event.preventDefault();

  //Handling input
  let box2 = document.querySelector('.input2').value;

  const box2Array = Array.from(box2);
  console.log(`${box2Array}`);


  //Handling output
  const p2 = document.createElement('p');
  const text2 = document.createTextNode(`${box2Array}`);

  p2.appendChild(text2);
  this.appendChild(p2);
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
  let box4 = document.querySelector('.input4').value;

  const box4Array = Array.from(box2);
  console.log(box2Array);


  //Handling output
  const p4 = document.createElement('p');
  const text4 = document.createTextNode(`${box4Array}`);

  p4.appendChild(text4);
  this.appendChild(p4);
})
