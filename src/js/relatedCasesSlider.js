$(document).ready(function(){
    /* -----------------------------------------
    Related Cases Slider
    ----------------------------------------- */

    let $relatedCasesSlider = $('#relatedCasesSlider');
    if ($relatedCasesSlider.length > 0) {
        $('#relatedCasesSlider').owlCarousel({
            loop:true,
            margin:32,
            stagePadding: 2,
            nav:true,
            responsiveClass: true,        
            dots: false,
            navText : ["<i class='smw-icon-button-left'></i>","<i class='smw-icon-button-right'></i>"],
            responsive:{
                0:{
                    items:1.2,
                    center: true,
                    dots: true,
                    nav: false
                },
                567:{
                    items:2,
                    nav:false,
                    dots: true,
                    center: true,
                },
                768:{
                    items:2,
                    nav:true, 
                    dots: false,
                    center: false,
                },
                991:{
                    items:3,
                    nav:true,
                    center: false, 
                    dots: false, 
                },
                1140:{
                    items:3,
                    nav:true,
                    center: false, 
                    dots: false, 
                }
            }
        });
    }
});