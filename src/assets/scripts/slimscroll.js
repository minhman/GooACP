$(document).ready(function(){
    const logoMainHeight = $('.logo-main').innerHeight();
    const userDetailHeight = $('.user-detail').innerHeight();
    const windowsHeight = $(window).innerHeight();
    const elementHeight  = windowsHeight - logoMainHeight - userDetailHeight;
    console.log(elementHeight);

    $('#main-menu').slimScroll({
        height: elementHeight,
        size: '5px',
        position: 'right',
        color: '#2eb42c',
        alwaysVisible: false,
        distance: '5px',
        railVisible: true,
        railColor: 'rgba(51, 51, 51, 0.08)',
        railOpacity: 1,
        opacity:1,
        wheelStep: 10,
        allowPageScroll: false,
        disableFadeOut: false
    });
    console.log('slimScroll');
});