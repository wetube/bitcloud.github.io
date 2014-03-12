// vars

var menuClicked = false;
var OS;

$( document ).ready(function() {
	$("nav #case #subnav-icon").click(function() {
		if(menuClicked == true) {
			$("nav #case #subnav").show(0);
			menuClicked = false;
		}
		else {
			$("nav #case #subnav").hide(0);
			menuClicked = false;
		}
	});
	
	// LINUX MOZ TEST
	if (navigator.appVersion.indexOf("Linux")!=-1) {
		$("#clouds").hide();
	}
});