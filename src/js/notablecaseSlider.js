/*********************************
*   Notable Cases Slider
**********************************/
$(document).ready(function(){
    let $notableCasesSlider = $('.notableCasesSlider');
    if ($notableCasesSlider.length > 0) {
        $($notableCasesSlider).owlCarousel({
            loop:true,
            margin:32,
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

/********************************* 
*   Notable Cases Slider Homepage
*   Desktop - Deactivate Slider
*   Mobile  - Activate Slider 
**********************************/
$(document).ready(function(){
    var dynamicClasses = 'row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-0 smw-row justify-content-between';
    var owl = $('#notableCasesSlider-homepage');
    var owlOptions = {
            loop:true,
            margin:32,
            nav:true,
            responsiveClass: true,        
            dots: true,
            navText : ["<i class='smw-icon-button-left'></i>","<i class='smw-icon-button-right'></i>"],
            responsive:{
                0:{
                    items:1.2,
                    center: true,
                    margin:26,  
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
        }

        if ($(window).width() > 990) {
            notableCasesSliderHomeDeactivate();
        } else {
            notableCasesSliderHomeActivate();
        }

        $(window).resize(function() {
            if (owl.length > 0) {
                if ( $(window).width() > 990 ) {
                    notableCasesSliderHomeDeactivate();
                } else {
                    notableCasesSliderHomeActivate();
                }
            }
        });

        /* Activate Slider */
        function notableCasesSliderHomeActivate(){
            var owlActive = owl.owlCarousel(owlOptions);
            owl.removeClass(dynamicClasses);
        }

        /* Deactivate Slider */
        function notableCasesSliderHomeDeactivate(){
            owl.trigger('destroy.owl.carousel');
            owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
            owl.addClass(dynamicClasses);
            var wrapped = $('.caseItem').wrap('<div class="col"></div>');
        }
});