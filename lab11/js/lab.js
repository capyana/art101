/* index.js - Lab 11: Libraries and jQuery
* Author: Tyana Tran
*Date:5/18/23
*/

$(".minor-section").append("<button class='btn btn-secondary highlight-button'>Toggle Highlight</button>");

$(".highlight-button").click(function(){
    $(this).parent().toggleClass("special");
})
$("#challenge").click(function(){
    if ($("h2").hasClass("d1")) {
        $("h2").removeClass("d1");
        $("#challenge").html("d1");
      }
      else {
        $("h2").addClass("d1");
      }
    })
