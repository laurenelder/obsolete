// Devin "Lauren" Elder
// ASD Term 1303
// ASD Application
// 03/05/2013

$("#homepage").on("pageinit", function() {
	$("#allBikes").click(function() {
		getData("yes", "no");
	});

});

$("#sportCatPage").on("pageinit", function() {
	$("#browseSportBike").click(function() {
		getData("no", "Sport Bike");
	});
	$("#browseSportTouring").click(function() {
		getData("no", "Sport Touring");
	});
	$("#allBikes").click(function() {
		getData("yes", "no");
	});
});

$("#cruiserCatPage").on("pageinit", function() {
	$("#browseCruiser").click(function() {
		getData("no", "Cruiser");
	});
	$("#browseStandard").click(function() {
		getData("no", "Standard");
	});
	$("#browseTouring").click(function() {
		getData("no", "Touring");
	});
	$("#allBikes").click(function() {
		getData("yes", "no");
	});
});

$("#dirtCatPage").on("pageinit", function() {
	$("#browseDirt").click(function() {
		getData("no", "Dirt Bike");
	});
	$("#browseMX").click(function() {
		getData("no", "MX");
	});
	$("#browseDualSport").click(function() {
		getData("no", "Dual Sport");
	});
	$("#allBikes").click(function() {
		getData("yes", "no");
	});
});

$("#otherCatPage").on("pageinit", function() {
	$("#browseCustom").click(function() {
		getData("no", "Custom");
	});
	$("#browseTrike").click(function() {
		getData("no", "Trike");
	});
	$("#browseScooter").click(function() {
		getData("no", "Scooter");
	});
	$("#browseMoped").click(function() {
		getData("no", "Moped");
	});
	$("#allBikes").click(function() {
		getData("yes", "no");
	});
});

$("#addBikePage").on("pageinit", function() {
	$("#allBikes").click(function() {
		getData("yes", "no");
	});
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
	$("#delete").click(function() {
		var ask = confirm("Are you sure you want to delete this bike?");
		if (ask) {
			window.localStorage.removeItem(this.key);
			alert("Bike has been deleted.");
			$.mobile.reloadPage();
		} else {
			alert("Bike was not deleted.");
		}
	});
	$("#allBikes").click(function() {
		getData("yes", "no");
	});
});

$("#aboutPage").on("pageinit", function() {
	$("#allBikes").click(function() {
		getData("yes", "no");
	});
});

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
		editLink.href = "#addBikePage";
		editLink.key = key;
		editLink.id = "edit";
		var editText = "Edit Bike"
//		editLink.addEventListener("click", editItem);
		editLink.innerHTML = editText;
		linksLi.appendChild(editLink);

		// Break Tag
		var breakTag = document.createElement("br");
		linksLi.appendChild(breakTag);

		// Delete Link
		var deleteLink = document.createElement("a");
		deleteLink.href = "#resultsPage";
		deleteLink.key = key;
		deleteLink.setAttribute("id:", "delete");
		var deleteText = "Delete Bike";
//		deleteLink.addEventListener("click", deleteItem);
		deleteLink.innerHTML = deleteText;
		linksLi.appendChild(deleteLink);
	};

// Display All Data function
	var getData = function(all, cat) {
		if (window.localStorage.length === 0) {
			alert("There is no data in local storage so default data has been entered.");
			autoFillData();
		}
		$("#item").attr("display", "block");
		$("#results").empty();
		for (var i = 0, j = window.localStorage.length; i < j; i ++) {
			var makeLi = document.createElement("li");
			var linksLi = document.createElement("li");
			$("#results").append(makeLi);
			var key = window.localStorage.key(i);
			var value = window.localStorage.getItem(key);
			var obj = JSON.parse(value);
			var makeSubList = document.createElement("ul");
			makeLi.appendChild(makeSubList);
			if (all == "yes" || obj.bType[1] == cat) {
				for(var n in obj) {
					var makeSubLi = document.createElement("li");
					makeSubList.appendChild(makeSubLi);
					var optSubText = obj[n][0] + " " + obj[n][1];
					makeSubLi.innerHTML = optSubText;
					makeSubList.appendChild(linksLi);
				};
			makeItemLinks(window.localStorage.key(i), linksLi);
			};
		};
	};

