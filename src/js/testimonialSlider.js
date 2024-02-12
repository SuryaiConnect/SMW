/*********************************
*   Testimonial Slider  
**********************************/
$(document).ready(function(){
    
    let $testimonialSlider = $('#testimonialSlider');
    if ($testimonialSlider.length > 0) {
        $('#testimonialSlider').owlCarousel({
            loop:true,
            margin:0,
            nav:false,
            dots: false,
            navText : ["<i class='smw-icon-button-left'></i>","<i class='smw-icon-button-right'></i>"],
            responsive:{
                0:{
                    items:1,
                    nav:true,
                },
                768:{
                    items:1,
                    nav:true,
                },
                1000:{
                    items:1,
                    nav:true,
                }
            }
        })
    }
}); 