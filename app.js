/****************
 * Carousel
 * **************/

let slideIndex = 0;

carousel(slideIndex);

// Arrows on the carousel
const plusSlides = (element) => carousel(slideIndex += element);
const currentSlide = (element) => carousel(slideIndex += element);

function carousel(element) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (element > slides.length) slideIndex = 1;
    if (element < 1) slideIndex = slides.length;

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i= 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].className += ' active';
}

/****************
 * Tabs
 * **************/

function openTabs(event, roomNumber) {
    let i, tabContent, tabLinks;

    tabContent = document.getElementsByClassName('tabContent');

    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tabLinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(roomNumber).style.display = 'block';
    event.currentTarget.className += ' active';

}