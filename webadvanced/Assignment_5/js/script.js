var counter = 0;

var timer = 0;

var blocks = ['⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️', '⬜️🔳⬜️🔳⬜️🔳⬜️🔳⬜️🔳⬜️', '⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️', '⬜️🔳⬜️🔳⬜️🔳⬜️🔳⬜️🔳⬜️', '⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️', '⬜️🔳⬜️🔳⬜️🔳⬜️🔳⬜️🔳⬜️', '⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️', '⬜️🔳⬜️🔳⬜️🔳⬜️🔳⬜️🔳⬜️', '⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️', '⬜️🔳⬜️🔳⬜️🔳⬜️🔳⬜️🔳⬜️', '⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️⬜️', '⬜️🔳⬜️⬜️⬛️⬛️⬛️⬜️⬜️🔳⬜️', '⬜️⬜️⬜️⬜️⬛️⬛️⬛️⬜️⬜️⬜️⬜️'];

for (var line = 0; line < blocks.length; line++) {
	setTimeout(function () {

		console.log(blocks[counter]); 
		
		counter++;
		
	}, timer);
	timer += 70;

}

/*---------------------jQuery-----------------------*/

$(document).ready(function(){
	$(".two").hover(
	function(){
	$(this).animate({top: "+=500px"}, 8000);
	});
});

$(document).ready(function(){
	$(".three").hover(
	function(){
	$(this).animate({left: "+=550px"}, 7000);		
	});	
});

$(document).ready(function(){
    $(".four").hover(
	function(){
	$(this).animate({bottom: "+=500px"}, 6000);	
	});
});

$(document).ready(function(){
	$(".five").hover(
	function(){
	$(this).animate({right: "+=800px"}, 9000);
	});			  
});

$(document).ready(function(){
	$(".six").hover(
	function(){
	$(this).animate({right: "+=400"}, 7000);	
	});
});