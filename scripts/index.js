function getSpreadsheet(){
	
	const prefix = "https://spreadsheets.google.com/feeds/list/";
	const sheetId = "1K96Um2uKOu03ILVPHs_DkTzZ-41XSVabbULXDVQciRE";
	const postfix = "/od6/public/values?alt=json";
	const spreadsheetURL = prefix + sheetId + postfix;
	
	$.ajax({
		type: "GET",
		dataType: 'jsonp',
		url: spreadsheetURL,
		success: function(data){
			
			var contentList = document.getElementById("contentList");
			let itemList = data.feed.entry;
			
			contentList.innerHTML += '<div id="notfound" class="item"><p>No results found.</p></div>';
			
			for(let i = 0; i < itemList.length; i++){
				contentList.innerHTML += '<div></div>';
			}
			
			$("#loader").css("opacity", "0");

			setTimeout(function(){
				$("#loader").css("display", "none");
			}, 500);
			
		},
		error: function(){
			
			$("#text").text("Error Getting Database...");
			
		}
	});
	
}

/* ####################
	Run once at start
#################### */

getSpreadsheet();