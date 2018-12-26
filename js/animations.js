var elem = 'c-home';
var animation = false;

$(document).ready(function() {

    $('#c-home').animate({'opacity': "1"}, 1000);

    $('body').bind('mousewheel', function(e){
        if(!animation){

            var offset = e.originalEvent.wheelDelta /120;
            if(offset > 1) {
                animation = true;
                switchPage(elem, 'up');
            }
            if(offset < -1){
                animation = true;
                switchPage(elem, 'down');
            }
        }
    });

});

function switchPage(elem, scroll){
    switch(elem){
        case 'c-home':
            if(scroll === 'down'){
                switchs(elem, 'c-work', scroll);
            }else{
                animation = false;
            }
            break;
        case 'c-work':
            if(scroll === 'up'){
                switchs(elem, 'c-home', scroll);
            }else{
                animation = false;
            }
            break;
    }
}

function switchs(elememt, nextPage, scroll){
    var elementDirection;
    var nextDirection;
    if(scroll === 'down'){
        elementDirection = 'right',
        nextDirection = 'left';
    }
    else{
        elementDirection = 'left',
        nextDirection = 'right';
    }
    $('#' + elememt).hide("slide", {'direction': elementDirection, 'easing': "easeInOutExpo"}, function() {
        $('#' + nextPage).css("display", "flex")
        .hide()
        .show('slide', {'direction': nextDirection});
        elem = nextPage;
        animation = false;
    });


}
