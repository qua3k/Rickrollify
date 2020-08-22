$(document).ready(function() {
	var chance = Math.floor(Math.random() * 100);
	if(chance == 69) {
		rickrollify();
	}
});

var generateHTML = function() {
	var html = "<video autoplay loop style='height: 100vh; width: 100vw'><source src='https://raw.githubusercontent.com/youreabot/Rickrollify/master/rick.webm' type='video/webm'><source src='https://raw.githubusercontent.com/youreabot/Rickrollify/master/rick.mp4' type='video/mp4'></video>";
	return html;
};

var rickrollify = function() {
	setTimeout(function() { // Wait 3 seconds before rickrolling
		var html = generateHTML();
		$('body').html(html);
		document.body.style.backgroundColor = "black";
		setTimeout(function() { // Wait 60 seconds for rickroll to finish
			window.location.replace(document.URL);
		}, 60000);
	}, 3000);
};
