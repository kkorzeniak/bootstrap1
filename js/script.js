$(document).ready(function() {
    changeBackground();
});
//obsluga zaladowania (zaladowanego) dokumentu

$(window).scroll(function() {
    changeBackground();
});
//obsluga scrolla

function changeBackground() {
    let navHeight = $('#main-nav').outerHeight();
    let currentPosition = $(window).scrollTop();
    
    if(currentPosition >= navHeight){
        $('#main-nav').addClass('scrolled');
    } else {
        $('#main-nav').removeClass('scrolled');
    }
};