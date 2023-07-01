let images = 9;

let randomIndex = Math.floor(Math.random() * images) + 1;
// randomIndex++;
let imgElement = document.createElement('img');
imgElement.classList.add('image_properties');
imgElement.setAttribute('src', `images/${randomIndex}.jpg`);
// imgElement.src = `images/${randomIndex}.jpg`;
document.body.append(imgElement);

// ******************************************************************************************************

// let images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"];

// function getRandomImageIndex() {
//   return Math.floor(Math.random() * images.length);
// }

// let imgElement = document.createElement('img');
// imgElement.classList.add('image_properties');

// function changeImage() {
//   let imgIndex = getRandomImageIndex();
//   let randomImage = images[imgIndex];
//   imgElement.src = "images/" + randomImage;
// }

// document.body.append(imgElement);

// setInterval(changeImage, 1000);