/* index.js - Lab 12 Conditionals
* Author: Tyana Tran
*Date:5/22/23
*/

function sortingHat(str) {
    var length = str.length;
    var mod = length%4;
    if (mod== 0){
        return "Gryffindor";
    }
    else if (mod==1){
        return "Ravenclaw";
    }
    else if (mod==2){
        return "Syltherin";
    }
    else {
        return "Hufflepuff";
    }
}

var input = document.getElementById("button");
input.addEventListener("click", function(){
    inputValue= document.getElementById("input").value;
    var sortedHouse=sortingHat(inputValue);
    var text = "<p>The Sorting Hat has sorted you into " + sortedHouse +"<p>"
    document.getElementById("output").innerHTML= text;

});