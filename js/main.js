/*$(".tooltip-bot, .tooltip-bot a, .nav-social-links a").tooltip({
    placement: "bottom"
});*/

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

$(document).mousemove(function (e) {
    var mouseX = e.pageX - $('#Image-Maps-Com-process-map').offset().left - 25;
    var mouseY = e.pageY - $('#Image-Maps-Com-process-map').offset().top + 20;
    console.log(mouseX);
    console.log(mouseY);
    $('.tooltip').css({ 'top': mouseY, 'left': mouseX }).fadeIn('slow');
});