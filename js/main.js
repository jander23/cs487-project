/*$(".tooltip-bot, .tooltip-bot a, .nav-social-links a").tooltip({
    placement: "bottom"
});*/

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    // This shit doesn't work at all yet. But someday it will
    //
    var fs = require('fs');
    var array = fs.readFileSync('file.txt').toString().replace(/\r\n/g, '\n').split("\n");
    var area_seg;
    var name, s_name, coords, css;
    for (i in array) {
        console.log(array[i]);
        if (i == 0) name = array[i];
        switch (i % 5) {
            case 4:
                name = array[i];
                break;
            case 3:
                s_name = array[i];
                break;
            case 2:
                coords = array[i];
                break;
            case 1:
                css = array[i];
                break;
            case 0:
                area_seg = "<area alt=\"" + name + "\" title=\"" + name + "\" href=\"building/" + s_name + ".html\" data-toggle=\"tooltip\" data-placement=\"bottom\" shape=\"rect\" coords=\"" + coords + "\" style=\"outline:none;\" id=\"" + css + "\" target=\"_self\">";
                $('ImageMapsCom-process-map').append(area_seg);
        }
    }
});

$(document).mousemove(function (e) {
    var mouseX = e.pageX - $('#Image-Maps-Com-process-img').offset().left - 25;
    var mouseY = e.pageY - $('#Image-Maps-Com-process-img').offset().top + 20;
    $('.tooltip').css({ 'top': mouseY, 'left': mouseX }).fadeIn('slow');
});
