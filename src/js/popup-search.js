$(document).ready(function(){
    const bodyEl = document.getElementsByTagName("body")[0];
    const backdrop = document.createElement('div');
    backdrop.setAttribute('class', 'popup-backdrop');

    $('.smw-icon-search').click(function(){
        $('#popup').addClass('open');
        bodyEl.classList.add('popup-open');
        bodyEl.appendChild(backdrop);
    });

    $('.popup__close').click(function(){
        $('#popup').removeClass('open');        
        bodyEl.classList.remove('popup-open');
        bodyEl.removeChild(backdrop);
    });
});