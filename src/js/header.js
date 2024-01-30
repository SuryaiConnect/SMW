$(document).ready(function(){
    /* Close Menu */
    function closeMenu(){
        $('.headerWrapper').removeClass('open');
        $('.mainNav__item-link').removeClass('active');        
    }

    /* Open Menu */
    function openMenu(menuItemId){
        // $('.headerWrapper ').addClass('open');
        $('#'+menuItem).addClass('open');
    }

    /* mainNav open-close */
    $('.mainNav__item-link').click(function(){
        
        menuItem = $(this).children('.p__small').text().toLowerCase();
        menuItem = menuItem.replace(/\s+/g, '-').trim();                

        if($("#" + menuItem).length != 0) {
            // Submenu Exist                    
            if($(this).hasClass('active')){
                $(this).removeClass('active');
                closeMenu();
            }else{
                closeMenu();
                $(this).addClass('active');
                openMenu(menuItem);
            }
        }else{
            closeMenu();                    
        }
    })

    /* 
    * Mobile
    */

    /* Open Main Nav */
    $('#m-burger').click(function(){
        $('.header').addClass('slide-open'); 
    })
    
    /* Close Main Nav */
    $('#close-mainNav').click(function(){
        $('.header').removeClass('slide-open'); 
    })
    
    /* submenu back */
    $('.submenu-back').click(function(){
        $('.headerWrapper').removeClass('open'); 
        $('.mainNav__item-link').removeClass('active'); 
    })

    /* close submenu - main menu (close all) */
    $('.close-subNav').click(function(){
        /* submenu close */
        $('.headerWrapper').removeClass('open');
        $('.mainNav__item-link').removeClass('active');
        /* mainNav mobile close */
        $('.header').removeClass('slide-open'); 
    });
    
});
