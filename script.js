$(document).ready(function() {
    $('.show-div svg').click(function(){
        $('.head-sec').fadeIn();
        $('.show-div').hide()
    })
    $('.cross1').click(function(){
        $('.head-sec').fadeOut();
        $('.show-div').fadeIn();
    })
});
