// Devin "Lauren" Elder
// ASD Term 1303
// ASD Application
// 03/05/2013

$("#homepage").on("pageinit", function() {
// Auto Fill Data Function
	var autoFillData = function() {
		for (var n in json) {
			var id = Math.floor(Math.random() * 1000001);
			window.localStorage.setItem(id, JSON.stringify(json[n]));
		};
	};

// Make Links Function
	var makeItemLinks = function(key, linksLi) {

		// Edit Link
		var editLink = document.createElement("a");
		editLink.href = "#";
		editLink.key = key;
		var editText = "Edit User"
		editLink.addEventListener("click", editItem);
		editLink.innerHTML = editText;
		linksLi.appendChild(editLink);

		// Break Tag
		var breakTag = document.createElement("br");
		linksLi.appendChild(breakTag);

		// Delete Link
		var deleteLink = document.createElement("a");
		deleteLink.href = "#";
		deleteLink.key = key;
		var deleteText = "Delete User"
		deleteLink.addEventListener("click", deleteItem);
		deleteLink.innerHTML = deleteText;
		linksLi.appendChild(deleteLink);
	};

// Display All Data function
	$("#allBikes").click(function () {
		if (window.localStorage.length === 0) {
			alert("There is no data in local storage so default data has been entered.");
			autoFillData()
		}
		$("#item").attr("display", "block");
		for (var i = 0, j = window.localStorage.length; i < j; i ++) {
			var makeLi = document.createElement("li");
			var linksLi = document.createElement("li");
			$("#results").append(makeLi);
			var key = window.localStorage.key(i);
			var value = window.localStorage.getItem(key);
			var obj = JSON.parse(value);
			var makeSubList = document.createElement("ul");
			makeLi.appendChild(makeSubList);
			for(var n in obj) {
				var makeSubLi = document.createElement("li");
				makeSubList.appendChild(makeSubLi);
				var optSubText = obj[n][0] + " " + obj[n][1];
				makeSubLi.innerHTML = optSubText;
				makeSubList.appendChild(linksLi)
			};
		//makeItemLinks(window.localStorage.key(i), linksLi);
		};
	});

});

$("#sportCatPage").on("pageinit", function() {
	
});

$("#cruiserCatPage").on("pageinit", function() {

});

$("#dirtCatPage").on("pageinit", function() {

});

$("#otherCatPage").on("pageinit", function() {

});

$("#addBikePage").on("pageinit", function() {

});

$("#resultsPage").on("pageinit", function() {
	var clearLocal = function() {
		window.localStorage.clear();
		alert("All bikes deleted.");
		return false;	
	};
	$("#clearAllBikes").click(function() {
		if (window.localStorage.length === 0) {
			alert("There is no data to clear.");
		} else {
			var ask = confirm("Delete all bikes?");
			if (ask) {
				clearLocal();
			} else {
				alert("Bikes not deleted.");
			}
		}
	});
});

$("#aboutPage").on("pageinit", function() {

});
$("#").click(function () {
        alert("Hello");
    });
