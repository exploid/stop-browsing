function regexesToBlock() {
	var to_block = { }; // default
	
	if ( localStorage["to_block"] ) { // load config if available.
		to_block = JSON.parse( localStorage["to_block"] );
	}

	return to_block;
}

function stopBrowsingIsActive() {
	if ( typeof localStorage["active"] == "undefined" ) return true;
	if ( localStorage["active"] == "true" ) return true;
	return false;
}

function toggleStopBrowsingStatus() {
	if ( typeof localStorage["active"] == "undefined" ) {
		localStorage["active"] = "false";
		
	} else if ( localStorage["active"] == "true" ) {
		localStorage["active"] = "false";
		
	} else {
		localStorage["active"] = "true";
		
	}

	setBadge();
}

function addPatternToBlock(pattern) {
	var current = regexesToBlock();
	current[pattern] = true;
	localStorage["to_block"] = JSON.stringify(current);
	return true;
}

function removePatternToBlock(pattern) {
	var current = regexesToBlock();
	delete current[pattern];
	localStorage["to_block"] = JSON.stringify(current);
	return true;
}

function setBadge() {
	if ( stopBrowsingIsActive() ) {
		chrome.browserAction.setIcon({ "path": "icon-stop.png" });
	} else {
		chrome.browserAction.setIcon({ "path": "icon-go.png" });
	}
}
		
