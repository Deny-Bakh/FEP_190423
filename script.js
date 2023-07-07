const imagesArray = ['cute', 'happy', 'love', 'smile', 'laugh'];

let containerDiv = document.createElement('div');
containerDiv.classList.add('container');

imagesArray.forEach((image) => {
  let wrapperDiv = document.createElement('div');
  wrapperDiv.classList.add('wrapper');

  let emojiImg = document.createElement('img');
  emojiImg.classList.add('emoji_pic')
  emojiImg.setAttribute('src', `images/${image}.png`);

  let countPar = document.createElement('p');
  countPar.classList.add('result');
  countPar.innerText = 0;

  wrapperDiv.append(emojiImg, countPar);

  containerDiv.append(wrapperDiv);
})

document.body.append(containerDiv);

let smileDivs = document.querySelectorAll('.wrapper');

smileDivs.forEach((item) => {
  let count = 0;
  console.log(item);
  const image = item.querySelector('.emoji_pic');
  const result = item.querySelector('.result');
  
  image.addEventListener('click', () =>  {
    count++;
    result.innerText = count;
  });
})

