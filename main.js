function main (event) {
	console.log("Running autofollow");
	$("a[track_action=follow]")[0].click();
	console.log("clicked follow button");

}

$(main);
