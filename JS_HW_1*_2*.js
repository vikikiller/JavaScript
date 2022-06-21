//Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

function check(Age) {
    let age_2 = 18
    let age_3 = 60
    
    if ( typeof Age !== 'number' ) { 
      console.log("Error!")
}  if (typeof Age === 'number') {
    if (Age < age_2) {
    console.log("You don't have accesss cause your age is " + Age + " It's lees then");
 }  else if (Age >= age_2 && Age < age_3) {
   console.log("Welcome !");
 } else if (Age > age_3) {
   console.log("Keep calm and look Culture channel");
 } }  
} 

check(17)
check(18)
check(61)
check("Hello")
check()







