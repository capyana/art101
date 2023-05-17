/* index.js - Lab 10: JavaScript Events and Forums
* Author: Tyana Tran
*Date:5/16/23
*/

function sort(userName){
    console.log("User Name= ", userName);

    var nameArray = userName.split('');
    console.log("Name Array =", nameArray);

    var nameArraySort = nameArray.sort();
    console.log("Sorted Array =", nameArraySort);

    var nameSorted = nameArraySort.join('');
    console.log("Name Sorted =", nameSorted);

    return nameSorted;
}

var input = document.getElementById("submit");
input.addEventListener("click", function(){
    inputValue = document.getElementById('user-name').value;
    var sortedName= sort(inputValue);
    document.getElementById("output").innerHTML = sortedName

});