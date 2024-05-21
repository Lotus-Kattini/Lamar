(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });



    
    
})(jQuery);

let home=document.getElementById('homelink')
let about=document.getElementById('aboutlink')
let contact=document.getElementById('contactlink')
let discover=document.getElementById('discoverlink')


home.addEventListener('click',()=>{
    home.classList.add('active')
    about.classList.remove('active')
    contact.classList.remove('active')
    discover.classList.remove('active')
})

about.addEventListener('click',()=>{
    home.classList.remove('active')
    about.classList.add('active')
    contact.classList.remove('active')
    discover.classList.remove('active')

})

contact.addEventListener('click',()=>{
    home.classList.remove('active')
    about.classList.remove('active')
    contact.classList.add('active')
    discover.classList.remove('active')
})


discover.addEventListener('click',()=>{
    home.classList.remove('active')
    about.classList.remove('active')
    contact.classList.remove('active')
    discover.classList.add('active')
})



