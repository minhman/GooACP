$(document).ready(function(){
    $('#nav-iconOne,#nav-iconTwo,#nav-iconThr').click(function(){
        $(this).toggleClass('open');
    });
    console.log('Hamburger');
});