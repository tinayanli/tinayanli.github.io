var player = document.getElementById('player');
var container = document.getElementById('container');
	
var playerLeft = 0;	
	
function move(e){
	
	if(e.keyCode == 39){
		playerLeft +=6;
		player.style.left = playerLeft + 'px';
	}
	
	if (e.keyCode == 37){
		playerLeft -=6;
		player.style.left = playerLeft + 'px';
	}
	
	
}
	
document.onkeydown = move;