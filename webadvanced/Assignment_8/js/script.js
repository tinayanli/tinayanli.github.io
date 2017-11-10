/*-----------------Cursor --------------------*/

$(document).on('mousemove', function (e) {
	$('#player').css({
		left: e.pageX - 270,
		top: e.pageY - 90,
	});
});

/*------------ Setting the Cookie -------------*/

var score = 0
console.log(Cookies.getJSON('oranges'));

if (Cookies.getJSON('oranges')) { // if the cookie already exists
	/*---- console.log("fetching cookie"); ----*/

	score = Cookies.getJSON('oranges');


} else { // if the cookie doesn't already exist
	/*----- console.log("setting cookie"); ------ */
	Cookies.set('oranges', score, {
		expires: 3 // expires in 3 days
	}); // set the cookie 'circles', define its value, and its expiration date

}
$("#score").text(score); // if I put it here, then the score stays on the page


/*----------------- Start Game & Falling Oranges-----------------*/

$(".startscreen").click(function () {
	$(".startscreen").hide();
	$("#container").show(function () {

		function fallingOrange() {

			var max = 5; // at most 5 at once
			var min = 1; // at least 1 orange 
			var orangeNumber = Math.floor(Math.random() * (max - min + 1)) + min;

			//randomize the orange number to be inside 
			// math.floor gets the real number, makes it into an integer

			for (var i = 0; i < orangeNumber; i++) {
				var orange = $('<div class="orange"></div>');
				$('#orangeZone').prepend(orange);
				orangeX = Math.floor(Math.random() * $('#container').width());
				orangeSpd = Math.floor(Math.random() + 6000);

				orange.css({
					'left': orangeX + 'px'
				});
				orange.animate({
					top: "500px",

				}, orangeSpd, function () {
					$(this).remove();

				});

			}
		}

		var timer = Math.floor(Math.random() + 3000);

		window.setInterval(function () {
			fallingOrange();
		}, timer);

	});


});

/*-------- Disappearing falling oranges upon click -------- */

$('body').on('click', '.orange', function () { // special case where you can target a pretending object

	$(this).remove();

	score += 1;

	$("#score").text(score);

	Cookies.set('oranges', score, {
		expires: 3
	}); // set the cookie 'circles', define its value, and its expiration date


});



/* ------------------ disappearing oranges ----------------*/

$(document).ready(function () {

	$(".apple, .twoapple, .threeapple, .fourapple, .fiveapple").click(function () {
		$(this).fadeOut('slow');
	});

});



/*-------------- Cloud Animation -----------------*/

setInterval(function () {
	$(".cloudone").stop(true, true).animate({
			left: 20
		}, 1000,
		function () {
			$(this).stop(true, true).animate({
				left: 0
			}, 1000);
		});
}, 2000);

setInterval(function () {
	$(".cloudtwo").stop(true, true).animate({
			left: 25
		}, 800,
		function () {
			$(this).stop(true, true).animate({
				left: 0
			}, 800);
		});
}, 1550);
