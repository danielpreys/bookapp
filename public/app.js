
$(document).ready(function() {

$("#search-btn").click(function(){
	
	var searchTerm = $("#searchField").val();
	var searchKey = "https://www.googleapis.com/books/v1/volumes?q=" + searchTerm;

	$("#results").empty();
	
	$.ajax({
      type:"GET",
      url:searchKey,
      dataType:"json",
      success:function(data){

      	for (var i = 0; i<=data.items.length; i++){
        $("#results").append('<h2>' + "Title: " + data["items"][i]["volumeInfo"]["title"] + '</h2>');
        $("#results").append('<img src' + '=' + data["items"][i]["volumeInfo"]["imageLinks"]["thumbnail"] + '>');
        $("#results").append('<p>' + "Author: " + data["items"][i]["volumeInfo"]["authors"] + '</p>');
        $("#results").append('<p>' + "Publisher: " + data["items"][i]["volumeInfo"]["publisher"] + '</p>');
       	$("#results").append('<br>');

       }     
      },
      error: function(showError){
        alert("nothing here");
      }
   });
	

    
});

        
	});
