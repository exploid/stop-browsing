$(document).ready(function() {
	
	$("#active").attr( "checked", stopBrowsingIsActive() );
	$("#active").change( toggleStopBrowsingStatus );

	showRegexesToBlock();

	function showRegexesToBlock() {
		var to_block = regexesToBlock();
	
		var count = 0;
		for (var pattern in to_block) count += 1;
		if ( count == 0 ) {
			$("#patterns").html("No pattern saved yet.");
			return;
		}

		$("#patterns").html("");
		for (var pattern in to_block) {
			if ( to_block[pattern] ) {
				var new_pattern = $(".pattern_template").clone().removeClass("pattern_template").addClass("pattern").show();
				new_pattern.find(".pattern_value").val(pattern);
				$("#patterns").append(new_pattern);
			}
		}
	}

	$(".add").live("click", function() {
		var input = $(this).parent().find(".pattern_value");
		var pattern = input.val();

		addPatternToBlock(pattern);
		showRegexesToBlock();

		input.val("");
	});

	$(".remove").live("click", function() {
		var input = $(this).parent().find(".pattern_value");
		var pattern = input.val();

		removePatternToBlock(pattern);
		showRegexesToBlock();
	});
	
});
