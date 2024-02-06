/*********************************
*   Meet Our Team Slider
**********************************/
$(document).ready(function(){
    let $meetourTeamSlider = $('#meetourTeamSlider');
    if ($meetourTeamSlider.length > 0) {
        $('#meetourTeamSlider').owlCarousel({
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
                    dots: false,
                    nav: false
                },
                567:{
                    items:2,
                    nav:false,
                    dots: false,
                    center: true,
                },
                768:{
                    items:2,
                    nav:false, 
                    dots: false,
                    center: true,
                },
                991:{
                    items:3,
                    nav:true,
                    center: false, 
                    dots: false, 
                },
                1140:{
                    items:4,
                    nav:true,
                    center: false, 
                    dots: false, 
                }
            }
        });
    }
});