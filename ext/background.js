setBadge();

chrome.browserAction.onClicked.addListener(function(tab) {
	toggleStopBrowsingStatus();
});


chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	if ( !stopBrowsingIsActive() ) return;

	var loaded_url = sender.tab.url;
	var to_block = regexesToBlock(); // Read config from localStorage

	for (var pattern in to_block) {
		var status = to_block[pattern];

		if ( to_block[pattern] ) {
			var regex = new RegExp(pattern, "i");

			if ( loaded_url.match(regex) ) {
				sendResponse({ block: true });
				return;
			}
		}
	}

	sendResponse({ block: false });
});
