'use strict';

let visitList = ['Riyadh', 'Qatar', 'America', 'China', 'Amman', 'Jordan'];
let chance= 0;
let userInput1 = prompt ('try to guess a place that i visit');


while (chance<5){
  for (let i=0; i < visitList.length; i++){
  if (visitList[i]===userInput1){
    alert ('right answer');
  } else  {
    alert ('wrong answer, try again');
    userInput1 = prompt ('try to guess a place that i visit');
  }
 }
  
  chance++;
  alert('final chance, the right answer ....' + visitList);
  break;
}



let jobList = ['Nurse', 'teacher', 'athletic', 'engineer', 'nutritionist', 'doctor'];
let userInput2 = prompt ('try to guess my job filed');

while (chance<5){
  for (let i=0; i < jobList.length; i++){
  if (jobList[i]===userInput2){
    alert ('right answer');
  } else  {
    alert ('wrong answer, try again');
    userInput2 = prompt ('try to guess my job filed');
  }

 }

  chance++;
  alert('final chance, the right answer ....' + jobList);
  break;
  
}




let lanceList = ['Black', 'hazel', 'brown', 'blue', 'green', 'gray'];
let userInput3 = prompt ('try to guess my lance color i like');

while (chance<5){
  for (let i=0; i < lanceList.length; i++){
  if (lanceList[i]===userInput3){
    alert ('right answer');
  } else  {
    alert ('wrong answer, try again');
    userInput3 = prompt ('try to guess my lance color i like');
  }

 }
  
  chance++;
  alert('final chance, the right answer ....' + lanceList);
  break;
}




let petList = ['cat', 'puppy', 'dog',​'​hamster', 'bird', 'squirrel'];
let userInput4 = prompt ('try to guess a pet i like');

while (chance<5){
  for (let i=0; i < petList.length; i++){
  if (petList[i]===userInput4){
    alert ('right answer');
  } else  {
    alert ('wrong answer, try again');
    userInput4 = prompt ('try to guess a pet i like');
  }

 }
  
  chance++;
  alert('final chance, the right answer ....' + petList);
  break;

}




let juiceList = ['Apple', 'orange', 'strawberry', 'lemon', 'pineapple', 'guava'];
let userInput5 = prompt ('try to guess a juice i like');

while (chance<5){
  for (let i=0; i < juiceList.length; i++){
  if (juiceList[i]===userInput5){
    alert ('right answer');
  } else  {
    alert ('wrong answer, try again');
    userInput5 = prompt ('try to guess a juice i like');
  }

 }
  
  chance++;
  alert('final chance, the right answer ....' + juiceList);
  break;

}




let movieList = ['Romantic', 'horror', 'action', 'sci-fi', 'animation', 'documentary'];
let userInput6 = prompt ('try to guess a movie type i like');

while (chance<5){
  for (let i=0; i < movieList.length; i++){
  if (movieList[i]===userInput6){
    alert ('right answer');
  } else  {
    alert ('wrong answer, try again');
    userInput6 = prompt ('try to guess a movie type i like');
  }

 }
  
  chance++;
  alert('final chance, the right answer ....' + movieList);
  break;

}






let colorList = ['Red', 'Green', 'Black', 'Blue', 'Pink', 'Indigo'];
let userInput7 = prompt ('try to guess a colors that i like');

while (chance<5){
  for (let i=0; i < colorList.length; i++){
  if (colorList[i]===userInput7){
    alert ('right answer');
  } else  {
    alert ('wrong answer, try again');
    userInput7 = prompt ('try to guess a colors that i like');
  }

 }

  
  chance++;
  alert('final chance, the right answer ....' + colorList);
  break;

}
