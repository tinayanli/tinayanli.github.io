$(document).ready(function() {
    $('.picture').click(function(){
     $(this).fadeOut('slow');           
    });
    
    $('#button').click(function(){
       $('#picture2').attr("src", "http://images.tastespotting.com/thumbnails/984425.jpg"); 
    });
      
});