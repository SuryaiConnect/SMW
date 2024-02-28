/*********************************
*   Accrediation Slider
**********************************/

$(document).ready(function(){
    let $accrediationSlider = $('#accrediationSlider');
    if ($accrediationSlider.length > 0) {
        if ($(window).width() < 991) {
            $($accrediationSlider).owlCarousel({
                loop:true,
                margin:43,
                stagePadding: 2,
                nav:false,
                responsiveClass: true,        
                dots: false,
                responsive:{
                    0:{
                        items:1,
                        center: true,
                        dots: true,
                    },
                    567:{
                        items:3,
                        center: true,
                        dots: true,
                    },
                    768:{
                        items:5,
                        nav:false,
                        dots: true,
                        center: true,
                    },
                    991:{
                        items:6,
                        nav:false,
                        center: false, 
                        dots: false, 
                    }
                }
            })
        }else{
            $($accrediationSlider).trigger('destroy.owl.carousel').removeClass('owl-loaded');
            $($accrediationSlider).find('.owl-stage-outer').children().unwrap(); 
            // $($accrediationSlider).addClass('d-flex flex-column gap-49'); 
        }
    }
});