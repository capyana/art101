// index.js - Lab 6: Arrays and Objects
// Author: Tyana Tran
// Date:5/1/23

// Define variables
myTransport = ['Bus', 'car', 'walking']

// Functions
myMainRide={
  make:'Hyundai',
  model:'Elantra',
  color:'black',
  year:'2018',
  age: function() {
      return 2023 - this.year;
  }
}

//output
document.writeln("How I get around: " + myTransport + "<br>");
//output of object
document.writeln("My main ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");

