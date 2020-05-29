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

function openTabs(e, roomNumber) {
    let i, tabContent, tabLinks;

    tabContent = document.getElementsByClassName('tabContent');

    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(roomNumber).style.display = 'block';
    e.currentTarget.className += ' active';
}

document.getElementById('defaultOpen').click();

/****************
 * Counting visitors
 * **************/

let start;
const elementNeeded = document.getElementById('count');
const final = parseInt(elementNeeded.textContent, 10); // parse out the final number
const duration = 100000;

const step = ts => {
    if (!start) {
        start = ts;
    }

    // get the time passed as a fraction of total duration
    let progress = (ts - start) / duration

    elementNeeded.textContent = Math.floor(progress * final) // set the text
    if (progress < 1) {
        requestAnimationFrame(step)
    }
}

requestAnimationFrame(step);

// number of visitors
function random(min, max)
{
    return Math.floor(Math.random() * (max-min+1) + min);
}

var initial = random(500, 2000);
var count = initial;
document.getElementById('visitors');

setInterval(function() {
    var variation = random(-5,5);

    count += variation
    console.log('You currently have ' + count + ' visitors')

}, 2000)