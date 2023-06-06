/* index.js - Lab 16 JSON and APIs
* Author: Tyana Tran
*Date:6/5/23
*/
// Using the core $.ajax() method
// Retrieve data from API and process it

// Retrieve data from API and process it
$.ajax({
    // The URL for the request (using the CORS Anywhere proxy)
    url: "https://cors-anywhere.herokuapp.com/https://xkcd.com/614/info.0.json",
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType: "json",
    // What to do when the API call is successful
    success: function (comicObj) {
      // Process the parts and add them to the webpage
      var section = document.createElement("section");
      var title = document.createElement("h1");
      var image = document.createElement("img");
  
      title.textContent = comicObj.title;
      image.src = comicObj.img;
      image.alt = comicObj.alt;
      image.title = comicObj.alt;
  
      section.appendChild(title);
      section.appendChild(image);
  
      document.body.appendChild(section);
    },
    // What to do if the API call fails
    error: function (jqXHR, textStatus, errorThrown) {
      // Handle the error
      console.log("Error:", textStatus, errorThrown);
    },
  });
  