 
// List of images to display
const images = [
    "./images/l1.jpeg",
    "./images/l3.png",
    "./images/l4.jpg",
    "./images/l23.jpg",
];

// Initialize variables
let currentIndex = 0;
const imageDisplay = document.getElementById("image-display");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

// Function to update the image source
function updateImage() {
    imageDisplay.src = images[currentIndex];
}

// Event listener for the "Next Image" button
nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length; // Loop to the start if at the end
    updateImage();
});

// Event listener for the "Previous Image" button
prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop to the end if at the start
    updateImage();
});

// Initialize the first image
updateImage();
