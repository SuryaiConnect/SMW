/*********************************
*   Related Expertise Slider
**********************************/
$(document).ready(function(){

    let $relatedExpertiseSlider = $('.relatedExpertiseSlider');
    if ($relatedExpertiseSlider.length > 0) {
        $($relatedExpertiseSlider).owlCarousel({
            loop:true,
            margin:72,
            // stagePadding: 2,
            nav:true,
            responsiveClass: true,        
            dots: true,
            navText : ["<i class='smw-icon-button-left'></i>","<i class='smw-icon-button-right'></i>"],
            responsive:{
                0:{
                    items:1.2,
                    center: true,
                    dots: true,
                    nav: true,
                },
                768:{
                    items:2,
                    nav:true,
                    dots: true,
                    center: true,
                },
                991:{
                    items:3,
                    nav:true,
                    center: true, 
                    dots: false, 
                }
            }
        })
    }
});