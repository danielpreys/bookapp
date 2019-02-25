
$(document).ready(function() {

$("#search-btn").click(function(e){
	e.preventDefault();
	var searchTerm = $("#searchField").val();
	var searchKey = "https://www.googleapis.com/books/v1/volumes?q=" + searchTerm;
	
	$.ajax({
      type:"GET",
      url:searchKey,
      dataType:"json",
      success:function(data){
      	var arr = JSON.stringify(data);
      	for (var i = 0; i<=data.items.length; i++){
        $("#results").append('<h1>' + data["items"][0]["volumeInfo"]["title"] + '</h1>');
       }     
      },
      error: function(showError){
        alert("nothing here");
      }
   });
	

    
});

        
	});
