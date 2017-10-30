$(document).ready(function(){
    $('.sidebar__btn').click(function(){
        $('.sidebar').toggleClass('active');
        $('.sidebar__btn').toggleClass('toggle');

    });
});