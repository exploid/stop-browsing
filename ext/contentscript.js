chrome.extension.sendRequest({}, function(data) {
	if (data.block) {
		var str = "Stop Browsing!";

		var div = $("<h1>"+str+"</h1>").css({
			"position": "absolute",
			"top": "25px",
			"left": "25px"
		});

		$("body").html(div).css({ "background": "white" });
		$("title").html(str);
	}
});

