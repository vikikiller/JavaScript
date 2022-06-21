//Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number 
function check(Age) {
  

  if ( typeof Age === 'string') { 
    Age = parseInt(Age.match(/\d+/)) }
      if (Age < 18) {
      console.log("You don't have accesss cause your age is " + Age + " It's lees then");
   }  else if (Age >= 18 && Age < 60) {
     console.log("Welcome !");
   } else if (Age > 60) {
     console.log("Keep calm and look Culture channel");
   }  else {
     console.log("Technical work!")
   } 
   
} 

check('19hello')
check('2')
check(18)
check(17)
check(61)
check('Hello')








