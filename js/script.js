/* Author: Lukas Botsch

*/

$(document).ready(function() {
	function navigate(to, instant) {
		duration = instant ? 0 : "slow";
		$("article").fadeOut(0, function() {
			$("article#"+to).fadeIn(duration);
		});
	}

	var url = window.location.href;
	var hash = url.split("#")[1];
	if (!hash) hash = "main";
	navigate(hash, true);

	$(window.location).change(function() {
		return false;
	});
	
	$("header nav li a").click(function() {
		var target = this.href.split("#")[1];
		if (!target) target = "main";
		navigate(target);
		if (target == "main") {
			window.location.href = window.location.href.split("#")[0];
			return false;
		}
		return true;
	});
});





















