/*********************************
*   Notable Cases Slider
**********************************/
$(document).ready(function(){

    let $notableCasesSlider = $('#notableCasesSlider');
    if ($notableCasesSlider.length > 0) {
        if ($(window).width() < 991) {
            $('#notableCasesSlider').owlCarousel({
                loop:true,
                margin:32,
                stagePadding: 2,
                nav:false,
                responsiveClass: true,        
                dots: false,
                responsive:{
                    0:{
                        items:1.2,
                        center: true,
                        dots: true,
                    },
                    768:{
                        items:2,
                        nav:false,
                        dots: true,
                        center: true,
                    },
                    991:{
                        items:3,
                        nav:false,
                        center: true, 
                        dots: false, 
                    }
                }
            })
        }
    }
});