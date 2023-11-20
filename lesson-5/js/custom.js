// Custom JavaScript
// STEP 15: Call up the carousel using the id, and use the .carousel() method create the options object
const carouselCars = document.getElementById("carousel-cars");

const carousel = new bootstrap.Carousel(carouselCars, {
  interval: 3000,
  pause: false,
  touch: true,
  wrap: true
})
// STEP 16: Change the interval to 5 seconds (set in milliseconds)
// STEP 17: Try an event handler to zoom up the .carousel-caption after the slide completes sliding - by adding a class when the slide has finished animating, and removing it when it begins
carouselCars.addEventListener('slid.bs.carousel', event => {
    // add the .zoomit class for fun
    carouselCars.classList.add("zoomit");
}) 
carouselCars.addEventListener('slide.bs.carousel', event => {
    // remove the .zoomit class to get set up for the next zoomit!
    carouselCars.classList.remove("zoomit");
})
