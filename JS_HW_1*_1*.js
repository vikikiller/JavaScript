// 1*
//Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст. Вывести в консоль результат работы функции с возрастами 17, 18, 61
 
function check(Age){
        let age_2 = 18
        let age_3 = 60
         
          if  (Age < age_2) {
            console.log("You don't have accesss cause your age is " + Age + " It's lees then");
        } else if (Age >= age_2 && Age < age_3) {
            console.log("Welcome !");
        } else if (Age > age_3) {
            console.log("Keep calm and look Culture channel");
        } else {
            console.log("Technical work")
        }
      }

    check(17)
    check(18)
    check(61)
   
    



    






  



