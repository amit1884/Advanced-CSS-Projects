$('.arrow').click(()=>{
    $('.home')
    .addClass('home-toggle')
    $('.all-menu')
    .removeClass('hide-menu')
})

$('.down-arrow').click(()=>{
    $('.home')
    .removeClass('home-toggle')
    $('.all-menu')
    .addClass('hide-menu')
})

$('.home').dblclick(function(){
    $('.taskbar').removeClass('taskbar-hide')
    $('.taskbar-top-area').show()
    $('.hi').addClass('hiding-icons')
    setTimeout(()=>{
        $('.taskbar-main-div').removeClass('toggle-taskbar')
    },100)
    
})

$('.taskbar').click(function(){
    $('.taskbar-main-div').addClass('toggle-taskbar')
    $('.taskbar-top-area').hide()
    $('.hi').removeClass('hiding-icons')
    setTimeout(()=>{
        $('.taskbar').addClass('taskbar-hide')
    },450)
})