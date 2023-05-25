/* index.js - Lab 13 Loops
* Author: Tyana Tran
*Date:5/24/23
*/
var str;
function FizzBuzz(){
    for( var num= 1; i <=200; i++){
        str = "";

        if (i % 3 ==0){
            str += "Fizz"
        } 

        if(i % 5 == 0){
            str += "Buzz"
         } 

         if(i % 7 == 0){
            str += "Boom" 
        }

        if (str ==""){ 
            str = i}

        $("#output").append("<div>" + str);
    }
}
FizzBuzz()