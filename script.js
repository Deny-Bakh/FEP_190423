let previousLevel;

const generateList = (array, deep) => {
  const ul = document.createElement('ul');
  
  array.forEach((item) => {
    const li = document.createElement('li');
    if (Array.isArray(item)) {
      ul.append(generateList(item, previousLevel));
    } else {
      if (deep) {
        li.innerHTML = `${deep}.${item}`;
        previousLevel = `${deep}.${item}`;
      } else {
        li.innerHTML = item;
        previousLevel = item;
      }
      ul.append(li);
    }
  });

  return ul;
};

const array = [1, 2, [1, 2, [1, 2]], 3];
document.body.append(generateList(array));