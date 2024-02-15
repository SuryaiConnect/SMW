/*********************************
*   Related Expertise Slider
**********************************/
$(document).ready(function(){

    let $relatedExpertiseSlider = $('.relatedExpertiseSlider');
    if ($relatedExpertiseSlider.length > 0) {
        if ($(window).width() >= 768) {
            $($relatedExpertiseSlider).owlCarousel({
                loop:true,
                margin:72,
                nav:true,
                responsiveClass: true,        
                dots: true,
                navText : ["<i class='smw-icon-button-left'></i>","<i class='smw-icon-button-right'></i>"],
                responsive:{
                    0:{
                        items:2,
                        center: false,
                        dots: false,
                        nav: true,
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
                    }
                }
            })
        }else{            
            // Destroy the Owl Carousel instance if it's in mobile view
            // On expertise page
            $($relatedExpertiseSlider).trigger('destroy.owl.carousel').removeClass('owl-loaded');
            $($relatedExpertiseSlider).find('.owl-stage-outer').children().unwrap(); 
            $($relatedExpertiseSlider).addClass('d-flex flex-column gap-49'); 
        }
    }
});