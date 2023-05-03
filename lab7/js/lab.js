// index.js - Lab 7: Functions
// Author: Tyana Tran
// Date:5/3/23
//function sortName takes user input then sorts the letters of their name

function sortName() {
    var userName= window.prompt("Please input your name.");
    console.log("Username=", userName);
    // //split string to array
    var nameArray=userName.split('');
    console.log("NameArray=",nameArray);
    // //sort the array
    var nameArraySort = nameArray.sort();
    console.log("NameArraySort=", nameArraySort);
    // //join array back to string
    var nameSorted= nameArraySort.join('');
    console.log("NameSorted=", nameSorted);
    
    
    // nameArray.toLowerCase().split("").sort().join();
    return nameSorted;

}
//output
document.writeln("I've fixed your name!: ",
    sortName(), "</br>"); 
