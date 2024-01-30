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







/* Open Popup */
popupBtn.forEach((item) => {
    item.addEventListener('click', function () {
        popup.classList.add('open');
        bodyEl.classList.add('popup-open');
        bodyEl.appendChild(backdrop);
    })
})

// popupBtn.addEventListener('click', function () {
//     popup.classList.add('open');
//     bodyEl.classList.add('popup-open');
//     bodyEl.appendChild(backdrop);
// })

/* Open Close */
closeIcon.addEventListener('click', function () {
    popup.classList.remove('open');
    bodyEl.classList.remove('popup-open');
    bodyEl.removeChild(backdrop);
})