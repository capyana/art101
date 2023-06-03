/* index.js - Lab 15:AJAX
* Author: Tyana Tran
*Date:6/2/23
*/

$('#activate').click(function(){
    
    var randomId = Math.floor(Math.random() * 898) + 1
    
    $.ajax({
        url:"https://pokeapi.co/api/v2/pokemon/"+randomId,
        type: "GET",
        dataType: "json",
        success: function(data){
            var pokemonName = data.name;
            var pokemonImage= $("<img>").attr("src", data.sprites.front_default);
            
            $("#output").empty();

            $("#output").append("<p>"+pokemonName+ "</p>");
            $("#output").append(pokemonImage);
        },
        error:function(error){
            console.long("Error:", error);
        }

    });
});