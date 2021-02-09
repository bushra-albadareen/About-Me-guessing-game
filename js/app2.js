'use strict';


let age = prompt('how older I am?');

let output= '',

if (age === 30){
  output= 'right answer';
}
else if (age < 30) {
  output= 'wrong answer (too low)';
}
else if (age > 30) {
  output= 'wrong answer (too high)';
}

let attempt = 4;
result='';


for (i=0; i<= attempt; i++){
  result= age + output;
}


document.write(result)












let weight = prompt('how much do I weight?');
let hight = prompt('how much do i hight?');
let placeVisit = prompt('how many countries have I traveled to');
let studyYear = prompt('how many years of my study?');
let bookRead = prompt('how many books have i read?');