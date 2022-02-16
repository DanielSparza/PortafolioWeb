//Smooth scroll
$('.navbar a').on('click', function(e){
    if(this.hash !== ''){
        e.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800
        );
    }
});

//Cambio de estilo de navbar
 $(window).scroll(function()
 {
     if ($("#cabecera").offset().top > 80)
     {
         $("#cabecera").addClass("navbar-scroll");
     }
     else
     {
         $("#cabecera").removeClass("navbar-scroll");
     }
 });

