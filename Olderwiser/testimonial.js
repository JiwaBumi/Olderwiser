// scripts.js
const container = document.getElementById('testimonials-container');
const scrollAmount = 1; // Adjust this value for faster or slower scroll
const scrollInterval = 20; // Adjust this value for faster or slower scroll speed
const scrollSpeed = 0.5; // Adjust this value to control scroll speed


function scrollTestimonials() {
    container.scrollLeft += scrollAmount;
    if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0;
    }
}

setInterval(scrollTestimonials, scrollInterval);