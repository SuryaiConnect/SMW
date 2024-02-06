/*********************************
*   Scroll To Action Script
**********************************/
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId),
        target = section.getBoundingClientRect().top + window.scrollY || window.pageYOffset;     
    window.scrollTo(0, target);
}