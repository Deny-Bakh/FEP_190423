let images = ['cute', 'happy', 'laugh', 'love', 'smile'];
let currentIndex = 0;

const sliderWrapper = document.createElement('div');
sliderWrapper.classList.add('slide_wrapper')
const prevButton = document.createElement('button');
const nextButton = document.createElement('button');

prevButton.innerText = 'Prev';
nextButton.innerText = 'Next';

const imageElement = document.createElement('img');
imageElement.classList.add('image_slider');
sliderWrapper.append(prevButton, imageElement, nextButton);

function updateImage() {
  imageElement.src = `./images/${images[currentIndex]}.png`;
  prevButton.classList.toggle('hidden', currentIndex === 0);
  nextButton.classList.toggle('hidden', currentIndex === images.length - 1);
}

// function updateImage() {
//   imageElement.src = `./images/${images[currentIndex]}.png`;
//   prevButton.disabled = currentIndex === 0;
//   nextButton.disabled = currentIndex === images.length - 1;
// }

// function updateImage() {
//   imageElement.src = `./images/${images[currentIndex]}.png`;

//   if (currentIndex === 0) {
//     prevButton.style.visibility = 'hidden';
//   } else {
//     prevButton.style.visibility = 'visible';
//   }

//   if (currentIndex === images.length - 1) {
//     nextButton.style.visibility = 'hidden';
//   } else {
//     nextButton.style.visibility = 'visible';
//   }
// }

function showNextImage() {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateImage();
  }
}

function showPrevImage() {
  if (currentIndex > 0) {
    currentIndex--;
    updateImage();
  }
}

prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);

document.body.append(sliderWrapper);

updateImage();

