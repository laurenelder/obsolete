// Devin "Lauren" Elder
// ASD Term 1303
// ASD Application
// 03/05/2013

$("#homepage").on("pageinit", function() {
	$("#allBikes").click(function() {
		getData("yes", "no");
		$('#addBikeForm').clearForm();
	});
	$("#addBike").click(function() {
		$('#addBikeForm').clearForm();
		$("#submit").data("key", "");
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
	$("#addBike").click(function() {
		clearFields();
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
	$("#addBike").click(function() {
		clearFields();
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
	$("#addBike").click(function() {
		clearFields();
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
	$("#addBike").click(function() {
		clearFields();
	});
});
$("#addBikePage").on("pageinit", function() {
	$("#allBikes").click(function() {
		getData("yes", "no");
	});
	$("#addBike").click(function() {
		clearFields();
	});
	$("#submit").click(function() {
		storeData();
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
	$(".edit").click(function() {
			var itemKey = $('.edit').data('key');
			var value = window.localStorage.getItem(itemKey);
			var item = JSON.parse(value);
			console.log(itemKey);
			$("#bType").val(item.bType[1]);
			$("#bMake").val(item.bMake[1]);
			$("#bModel").val(item.bModel[1]);
			$("#bYear").val(item.bYear[1]);
			$("#bEngine").val(item.bEngine[1]);
			$("#bPrice").val(item.bPrice[1]);
			$("#bLocation").val(item.bLocation[1]);
			$("#bNumber").val(item.bNumber[1]);
			if (item.bOwned[1] == "New") {
				$("#bOwned1").prop("checked", true);
			};
			if (item.bOwned[1] == "Pre-Owned") {
				$("#bOwned2").prop("checked", true);
			};
			if (item.has_lighting[1] == "Yes") {
				$("#has_lighting").prop("checked", true);
			};
			if (item.has_bars[1] == "Yes") {
				$("#has_bars").prop("checked", true);
			};
			if (item.has_seats[1] == "Yes") {
				$("#has_seats").prop("checked", true);
			};
			if (item.has_body_parts[1] == "Yes") {
				$("#has_body_parts").prop("checked", true);
			};
			if (item.has_intake[1] == "Yes") {
				$("#has_intake").prop("checked", true);
			};
			if (item.has_exhaust[1] == "Yes") {
				$("#has_exhaust").prop("checked", true);
			};
			if (item.has_wheels[1] == "Yes") {
				$("#has_wheels").prop("checked", true);
			};
			$("#interest").val(item.interest[1]);
			$("#notes").val(item.notes[1]);
			$("#submit").data("key", itemKey)
			$("#submit").click(function() {
			//$("#submit").attr("key", this.key);
				storeData(itemKey);
			});
	});
	$("#delete").click(function() {
		var ask = confirm("Are you sure you want to delete this bike?");
		if (ask) {
			alert("Bike has been deleted.");
			window.localStorage.removeItem(this.key);
		} else {
			alert("Bike was not deleted.");
		}
	});
	$("#allBikes").click(function() {
		getData("yes", "no");
	});
	$("#addBike").click(function() {
		clearFields();
	});
});

$("#aboutPage").on("pageinit", function() {
	$("#allBikes").click(function() {
		getData("yes", "no");
	});
	$("#addBike").click(function() {
		clearFields();
	});
});

// Reset Fields Function
	var resetFields = function() {
		$(":input").not(":button, :submit, :reset, :hidden").each(function () {
			this.value = this.defaultValue;
		});
	};

// Clear Fields Function
	var clearFields = function() {
		$("#addBikePage").find(':input').each(function() {
	        switch(this.type) {
	            case 'select-one':
	            case 'text':
	            case 'textarea':
	                $(this).val('');
	                break;
	            case 'checkbox':
	            case 'radio':
	                this.checked = false;
	        };
	    });
	};

// Clear Form Fields Function
$.fn.clearForm = function() {
  return this.each(function() {
    var type = this.type, tag = this.tagName.toLowerCase();
    if (tag == 'form') {
      return $(':input',this).clearForm();
	};
    if (type == 'text' || tag == 'textarea') {
      this.value = '';
	}
    else if (type == 'checkbox' || type == 'radio') {
      this.checked = false;
	}
    else if (tag == 'select') {
      this.value = "Choose Type";
	}
  });
};
//usage
// $('#flightsSearchForm').clearForm();

// Auto Fill Data Function
	var autoFillData = function() {
		var id = Math.floor(Math.random() * 1000001);
		$.ajax({
			type:"get",
			url:"json.js",
			format:"json",
			success:function(data){
				window.localStorage.setItem(id, JSON.stringify(data));
		}});
		$.ajax({
			type: "get",
			url:"data.xml",
			dataType:"xml",
			success:function(data) {
				xmlData = $(xml).find("url").each().text();
				window.localStorage.setItem(id, xmlData);
		}});
		

	};

// Display All Data function
	var getData = function(all, cat) {
		if (window.localStorage.length === 0) {
			alert("There is no data in local storage so default data has been entered.");
			autoFillData();
		}
		$("#item").attr("display", "block");
		$("#results").empty();
		for (var i = 1, j = window.localStorage.length; i <= j; i++) {
			$("#results").append("<li></li>");
			$("#results li").attr("id", "makeLi");
			var key = window.localStorage.key(i);
			var value = window.localStorage.getItem(key);
			var obj = JSON.parse(value);
			$("#makeLi").append("<ul></ul>");
			$("#makeLi ul").attr("id", "makeSubList");
			//var makeSubList = document.createElement("ul");
			//makeLi.appendChild(makeSubList);
			if (all == "yes" || obj.bType[1] == cat) {
				var content = "";
				for(var n in obj) {
					content += '<li>';
					content += obj[n][0] + " " + obj[n][1];
					content += '</li>'
				};
				$("#makeSubList").append(content);
				$("#makeSubList").append('<li class="linksLi"></li>');
				$(".linksLi:last").append('<a href="#addBikePage">Edit Bike</a>').addClass("edit");
				$(".edit:last").data("key", key);
				console.log($(".edit").data("key", key));
				$(".linksLi:last").append("<br/>");
				$(".linksLi:last").append('<a href="#homepage" class="delete">Delete Bike</a>');
				$(".delete:last").data("key", key);
			};
		};
	};

// Store Data Function
	var storeData = function(key) {
		if (!key) {
			var id 				= Math.floor(Math.random() * 1000001);
		} else {
			var id = key;
		}
		$("input:checkbox:checked").val("Yes");

		var item 				= {};
			item.bType			= ["Bike Type: ", $("#bType").val()];
			item.bMake			= ["Manufacturer: ", $("#bMake").val()];
			item.bModel			= ["Model: ", $("#bModel").val()];
			item.bYear			= ["Year: ", $("#bYear").val()];
			item.bEngine		= ["Engine Size (cc): ", $("#bEngine").val()];
			item.bPrice			= ["Price ($): ", $("#bPrice").val()];
			item.bLocation		= ["Location: ", $("#bLocation").val()];
			item.bNumber		= ["Contact Number: ", $("#bNumber").val()];
			item.bOwned			= ["New or Pre-Owned: ", $("input:radio[name=newOrUsed]:checked").val()];
			item.has_lighting	= ["Has Aftermarket Lighting: ", document.getElementById("has_lighting").value];
			item.has_bars 		= ["Has Aftermarket Handlebars: ", document.getElementById("has_bars").value];
			item.has_seats		= ["Has Aftermarket Seats: ", document.getElementById("has_seats").value];
			item.has_body_parts	= ["Has Aftermarket Body Parts: ", document.getElementById("has_body_parts").value];
			item.has_intake		= ["Has Aftermarket Intake: ", document.getElementById("has_intake").value];
			item.has_exhaust	= ["Has Aftermarket Exhaust: ", document.getElementById("has_exhaust").value];
			item.has_wheels		= ["Has Aftermarket Wheels: ", document.getElementById("has_wheels").value];
			item.interest		= ["Interest: ", $("#interest").val()];
			item.notes			= ["Notes: ", $("#notes").val()];
		window.localStorage.setItem(id, JSON.stringify(item));
		alert("Bike Saved!");
		clearFields();
	};
