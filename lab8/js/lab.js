/* index.js - Lab 8: Anon Functions and Callbacks
* Author: Tyana Tran
*Date:5/8/23
*/

function squarefunction(x) {
    return( x * x);
}
    
//test function 
console.log("9 squared is:", squarefunction(9));
console.log("2 squared is:", squarefunction(2));

array = [24, 3, 5, 17,9,10]
console.log("My array", array);

var results= array.map(squarefunction);
console.log("Testing square array:", results);

var results= array.map(function(x){
    return x + 11;
})
console.log("Array + 11 =", results);

var outputEl = document.getElementById("output"); 
outputEl.innerHTML = results; // put your results here
