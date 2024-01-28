$(document).ready(function(){
    /* Close Menu */
    function closeMenu(){
        $('.headerWrapper').removeClass('open');
        $('.row').removeClass('open');
        $('.mainNav__item-link').removeClass('active'); 
    }

    /* Open Menu */
    function openMenu(menuItemId){
        $('.headerWrapper ').addClass('open');
        $('#'+menuItem).addClass('open');
    }

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
});