const productsArray = [
  {
    category: "Electronics",
    products: [
      {
        name: "Laptop",
        price: 999,
        description: "Powerful laptop for all your computing needs",
        image: "laptop.jpg"
      },
      {
        name: "Smartphone",
        price: 699,
        description: "Feature-rich smartphone with high-quality camera",
        image: "smartphone.jpg"
      },
      {
        name: "Tablet",
        price: 399,
        description: "Lightweight tablet for entertainment and productivity",
        image: "tablet.jpg"
      }
    ]
  },
  {
    category: "Clothing",
    products: [
      {
        name: "Shirt",
        price: 29,
        description: "Comfortable cotton shirt in various colors",
        image: "shirt.jpg"
      },
      {
        name: "Pants",
        price: 49,
        description: "Stylish pants made from durable fabric",
        image: "pants.jpg"
      },
      {
        name: "Shoes",
        price: 79,
        description: "Trendy shoes for any occasion",
        image: "shoes.jpg"
      }
    ]
  },
  {
    category: "Books",
    products: [
      {
        name: "Fiction",
        price: 19,
        description: "Engaging fictional stories by popular authors",
        image: "fiction.jpg"
      },
      {
        name: "Non-fiction",
        price: 25,
        description: "Informative non-fiction books on various subjects",
        image: "nonfiction.jpg"
      },
      {
        name: "Science",
        price: 32,
        description: "Books exploring scientific concepts and discoveries",
        image: "science.jpg"
      }
    ]
  }
];

const createElements = (tag, className, text) => {
  const element = document.createElement(tag);
  if (Array.isArray(className)) {
    element.classList.add(...className);
  } else {
    element.classList.add(className);
  }
  if (text) {
    element.innerText = text;  
  }

  return element;
}

const bodyContainer = createElements('div', 'body_container');
const categoryWrapper = createElements('div', 'category_wrapper');
const productsWrapper = createElements('div', 'wrapper');

const createCategories = () => {
  productsArray.forEach((product) => {
    const category = createElements('div', 'category', product.category);
    
    category.addEventListener('click', () => {
      checkProductVisible(product.category, '.category_products');
    });

    categoryWrapper.append(category);
  });
};

const checkProductVisible = (itemName, className) => {
  const categoryName = document.querySelectorAll(className);
  categoryName.forEach((item) => {
    const hasVisible = item.classList.contains('visible');
    const hasName = item.classList.contains(itemName);
    if (hasName) {
      item.classList.add('visible');
    }
    if (hasVisible) {
      item.classList.remove('visible');
    }
  })
}

const removeAllVisible = () => {
  const visibleElements = document.querySelectorAll('.visible');
  visibleElements.forEach((item) => item.classList.remove('visible'));
}

const createProducts = () => {
  productsArray.forEach((item) => {
    const categoryProducts = createElements('div', ['category_products', item.category]);

    item.products.forEach((value) => {
      const product = createElements('div', 'product', value.name);
      
      const productInfo = createElements('div', ['product_info', value.name]);
      const price = createElements('span', 'product_price', `${value.price}$`);
      const description = createElements('p', 'product_description', value.description);
      const image = createElements('img', 'product_image', value.image);
      image.src = `./images/${value.image}`
      const button = createElements('button', 'button', 'Buy');

      productInfo.append(price, description, image, button);

      product.addEventListener('click', () => checkProductVisible(value.name, '.product_info'));
      button.addEventListener('click', () => {
        alert(`You bought ${value.name}`);
        removeAllVisible()
      });

      const productContainer = createElements('div', 'product_container');
      productContainer.append(product, productInfo);
      categoryProducts.append(productContainer);
    })
  
    productsWrapper.append(categoryProducts);
  })
}

createCategories()
createProducts()

bodyContainer.append(categoryWrapper, productsWrapper);
document.body.append(bodyContainer);