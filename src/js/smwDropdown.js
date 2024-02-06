/*********************************
*   Filter Dropdown  
**********************************/
$(document).ready(function() {
    $('.smwFilter .dropdown-menu a').on('click', function(){
        var selectedText = $(this).text();
        $(this).closest('.dropdown').find('.smwdropdown__text').text(selectedText);
    });
});