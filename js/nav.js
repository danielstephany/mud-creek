var main = function() {
	$("#open-toggle").click(function(){
		$("#side-nav").animate({
			right: "0px"
		}, "slow");
		$("#open-toggle").hide();
	});
	$("#close-toggle").click(function(){
		$("#side-nav").animate({
			right: "-200px"
		}, "slow");
		$("#open-toggle").show();
	});
}

$("document").ready(main());