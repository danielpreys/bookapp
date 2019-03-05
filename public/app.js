
$(document).ready(function() {

$("#search-btn").click(function(){
	
	var searchTerm = $("#searchField").val();
	var searchKey = "https://www.googleapis.com/books/v1/volumes?q=" + searchTerm;

	$("#spaces").empty();
	
	$.ajax({
      type:"GET",
      url:searchKey,
      dataType:"json",
      success:function(data){

      	
      	for (var i = 0; i<=data.items.length; i++){
      	
      	$("#spaces").append('<div class= "col-sm-3" id = "books">' + '<h2>' + data["items"][i]["volumeInfo"]["title"] + '</h2>' +
      		'<img src' + '=' + data["items"][i]["volumeInfo"]["imageLinks"]["thumbnail"] + '>' +
      		'<ul>' + '<li>' + "Author: " + data["items"][i]["volumeInfo"]["authors"] + '</li>' +
      		'<li>' + "Publisher: " + data["items"][i]["volumeInfo"]["publisher"] + '</p>' +
      		'<li>' + '<a href =' + data["items"][i]["volumeInfo"]["infoLink"] + "target='_blank'" + '>' + "Click for more Info" + '</li>'
         + '</ul>' + '</div>' );

      		
       
       	$("#results").append('<br>');
		

       	/*
		$("#spaces").append('<div class= "col">');
        $("#results").append('<h2>' + data["items"][i]["volumeInfo"]["title"] + '</h2>');
        $("#results").append('<img src' + '=' + data["items"][i]["volumeInfo"]["imageLinks"]["thumbnail"] + '>');
        $("#results").append('<li>' + "Author: " + data["items"][i]["volumeInfo"]["authors"] + '</li>');
        $("#results").append('<li>' + "Publisher: " + data["items"][i]["volumeInfo"]["publisher"] + '</p>');
        $("#results").append('<li>' + '<a href =' + data["items"][i]["volumeInfo"]["infoLink"] + "target='_blank'" + '>' + "Click for more Info" + '</li>');
         "Click for more Info: "  
         
         $("#spaces").append('</div">');

       	$("#results").append('<br>');
		*/
       	
       	
      	

       }     
      },
      error: function(showError){
        alert("nothing here");
      }
   });
	

    
});

        
	});
