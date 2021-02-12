'use strict';

let visitList = ['Oman', 'Qatar', 'America', 'China', 'Amman', 'Jordan'];
let chance= 4;
let userInput1 = prompt ('try to guess a place that i visit');


for (let i =0; i < chance; i++){
  for (let j=0; ij < visitList.length; j++){
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
  for (let i=0; i < lanceList.length; i++){
  if (lanceList[i]=== userInput3){
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
  for (let i=0; i < juiceList.length; i++){
  if (juiceList[i]=== userInput5){
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
  for (let i=0; i < movieList.length; i++){
  if (movieList[i]=== userInput6){
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
  for (let i=0; i < colorList.length; i++){
  if (colorList[i]=== userInput7){
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
