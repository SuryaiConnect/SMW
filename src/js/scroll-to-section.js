function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId),
        target = section.getBoundingClientRect().top + window.scrollY || window.pageYOffset;     
    window.scrollTo(0, target);
}