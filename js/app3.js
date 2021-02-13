'use strict';

let visitList = ['Oman', 'Qatar', 'America', 'China', 'Amman', 'Jordan'];
let chance= 4;
let userInput1 = prompt ('try to guess a place that i visit');


for (let i =0; i < chance; i++){
  for (let j=0; j < visitList.length; j++){
  if (userInput1===visitList[j]){
    alert ('right answer');
    
  } else {
    alert ('wrong answer');
    userInput1 = prompt ('try to guess a place that i visit');
  }
  
 }
 if (chance= 4){
  alert('final chance, the right answer ....' + visitList);
  break;
}
}




 let lanceList = ['Black', 'hazel', 'brown', 'blue', 'green', 'gray'];
 let userInput3 = prompt ('try to guess my lance color i like');


 for (let i =0; i < chance; i++){
  for (let j=0; j < lanceList.length; j++){
  if (lanceList[j]=== userInput3){
    alert ('right answer');
    
  } else {
    alert ('wrong answer');
    userInput3 = prompt ('try to guess my lance color i like');
  }
 }
 if (chance= 4){
  alert('final chance, the right answer ....' + lanceList);
  break;
}  
}






 let juiceList = ['Apple', 'orange', 'strawberry', 'lemon', 'pineapple', 'guava'];
 let userInput5 = prompt ('try to guess a juice i like');



 for (let i =0; i < chance; i++){
  for (let j=0; j < juiceList.length; j++){
  if (juiceList[j]=== userInput5){
    alert ('right answer');
    
  } else {
    alert ('wrong answer');
    userInput5 = prompt ('try to guess a juice i like');
  }
  
 }
  
 if (chance= 4){
  alert('final chance, the right answer ....' + juiceList);
  break;
}
}





 let movieList = ['Romantic', 'horror', 'action', 'sci-fi', 'animation', 'documentary'];
 let userInput6 = prompt ('try to guess a movie type i like');



 for (let i =0; i < chance; i++){
  for (let j=0; j < movieList.length; j++){
  if (movieList[j]=== userInput6){
    alert ('right answer');
    
  } else {
    alert ('wrong answer');
    userInput6 = prompt ('try to guess a movie type i like');
  }
  
 }
  
 if (chance= 4){
  alert('final chance, the right answer ....' + movieList);
  break;
}
}




 let colorList = ['Red', 'Green', 'Black', 'Blue', 'Pink', 'Indigo'];
 let userInput7 = prompt ('try to guess a colors that i like');



 for (let i =0; i < chance; i++){
  for (let j=0; j < colorList.length; j++){
  if (colorList[j]=== userInput7){
    alert ('right answer');
    
  } else {
    alert ('wrong answer');
    userInput7 = prompt ('try to guess a colors that i like');
  }
  
 }
  
 if (chance= 4){
  alert('final chance, the right answer ....' + colorList);
  break;
}
}
