/* index.js - Lab 9: JavaScript for the Web
* Author: Tyana Tran
*Date:5/10/23
*/

var outputEl = document.getElementById("output");
console.log("outputEl: ", outputEl);

var new1El = document.createElement("p");

new1El.innerHTML = "something new.";

var new2El = document.createElement("p");

new2El.innerHTML = "Something else.";

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
//changed css elements
new1El.style.color = "orange";
new2El.style.color = "yellow";
outputEl.style.border = "dashed 2px pink";
