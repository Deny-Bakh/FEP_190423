// const productsArray = [
//   {
//     category: "Electronics",
//     products: [
//       {
//         name: "Laptop",
//         price: 999,
//         description: "Powerful laptop for all your computing needs",
//         image: "laptop.jpg"
//       },
//       {
//         name: "Smartphone",
//         price: 699,
//         description: "Feature-rich smartphone with high-quality camera",
//         image: "smartphone.jpg"
//       },
//       {
//         name: "Tablet",
//         price: 399,
//         description: "Lightweight tablet for entertainment and productivity",
//         image: "tablet.jpg"
//       }
//     ]
//   },
//   {
//     category: "Clothing",
//     products: [
//       {
//         name: "Shirt",
//         price: 29,
//         description: "Comfortable cotton shirt in various colors",
//         image: "shirt.jpg"
//       },
//       {
//         name: "Pants",
//         price: 49,
//         description: "Stylish pants made from durable fabric",
//         image: "pants.jpg"
//       },
//       {
//         name: "Shoes",
//         price: 79,
//         description: "Trendy shoes for any occasion",
//         image: "shoes.jpg"
//       }
//     ]
//   },
//   {
//     category: "Books",
//     products: [
//       {
//         name: "Fiction",
//         price: 19,
//         description: "Engaging fictional stories by popular authors",
//         image: "fiction.jpg"
//       },
//       {
//         name: "Non-fiction",
//         price: 25,
//         description: "Informative non-fiction books on various subjects",
//         image: "nonfiction.jpg"
//       },
//       {
//         name: "Science",
//         price: 32,
//         description: "Books exploring scientific concepts and discoveries",
//         image: "science.jpg"
//       }
//     ]
//   }
// ];

// const createElements = (tag, className, text) => {
//   const element = document.createElement(tag);
//   if (className) {
//     if (Array.isArray(className)) {
//       element.classList.add(...className);
//     } else {
//       element.classList.add(className);
//     }
//   }
//   if (text) {
//     element.innerText = text;  
//   }

//   return element;
// }

// const bodyContainer = createElements('div', 'body_container');
// const categoryWrapper = createElements('div', 'category_wrapper');
// const productsWrapper = createElements('div', 'wrapper');

// const createCategories = () => {
//   productsArray.forEach((product) => {
//     const category = createElements('div', 'category', product.category);
    
//     category.addEventListener('click', () => {
//       checkProductVisible(product.category, '.category_products');
//     });

//     categoryWrapper.append(category);
//   });
// };

// const checkProductVisible = (itemName, className) => {
//   const categoryName = document.querySelectorAll(className);
//   categoryName.forEach((item) => {
//     const hasVisible = item.classList.contains('visible');
//     const hasName = item.classList.contains(itemName);
//     if (hasName) {
//       item.classList.add('visible');
//     }
//     if (hasVisible) {
//       item.classList.remove('visible');
//     }
//   })
// }

// const removeAllVisible = () => {
//   const visibleElements = document.querySelectorAll('.visible');
//   visibleElements.forEach((item) => item.classList.remove('visible'));
// }

// const createProducts = () => {
//   productsArray.forEach((item) => {
//     const categoryProducts = createElements('div', ['category_products', item.category]);

//     item.products.forEach((value) => {
//       const product = createElements('div', 'product', value.name);
      
//       const productInfo = createElements('div', ['product_info', value.name]);
//       const price = createElements('span', 'product_price', `${value.price}$`);
//       const description = createElements('p', 'product_description', value.description);
//       const image = createElements('img', 'product_image', value.image);
//       image.src = `./images/${value.image}`
//       const button = createElements('button', 'button', 'Buy');

//       productInfo.append(price, description, image, button);

//       product.addEventListener('click', () => {
//         selectedProductName = value.name;
//         checkProductVisible(value.name, '.product_info');
//       });

//       button.addEventListener('click', () => {
//         removeAllVisible()
//         modalFormWrapp.classList.add('form_visible');
//       });

//       const productContainer = createElements('div', 'product_container');
//       productContainer.append(product, productInfo);
//       categoryProducts.append(productContainer);
//     })
  
//     productsWrapper.append(categoryProducts);
//   })
// }

// createCategories()
// createProducts()

// bodyContainer.append(categoryWrapper, productsWrapper);
// document.body.append(bodyContainer);

// const createInput = (type, name, id, required) => {
//   const input = document.createElement('input');
//   input.type = type;
//   input.name = name;
//   input.id = id;
//   input.required = required;

//   return input;
// }

// const createLabel = (text, forId) => {
//   const label = document.createElement('label');
//   label.innerText = text;
//   label.htmlFor = forId;

//   return label;
// }

// const modalFormWrapp = createElements('div', 'modal_form_wrapp');

// document.body.append(modalFormWrapp);

// const modalForm = createElements('form', 'modal_form');
// modalForm.method = 'post';

// modalFormWrapp.append(modalForm);

// const nameDiv = createElements('div', 'input_holder');
// const nameLabel = createLabel('Full Name:', 'fullName');
// const nameInput = createInput('text', 'fullName', 'fullName');
// nameInput.classList.add('form_check');
// const namePar = createElements('p', 'err_txt', 'Please fill in full name!');

// nameDiv.append(nameLabel, nameInput, namePar);
// modalForm.append(nameDiv);


// const cityDiv = createElements('div', 'input_holder');
// const cityLabel = createLabel('City:', 'city');
// const citySelect = document.createElement('select');
// citySelect.classList.add('form_check');
// citySelect.name = 'city';
// citySelect.id = 'city';

// const citySpan = createElements('p', 'err_txt', 'Please select one!');

// const cityOptions = ['', 'Kyiv', 'Kharkiv', 'Lviv', 'Lutsk'];

// cityOptions.forEach((city) => {
//   const cityVar = document.createElement('option');
//   cityVar.value = city;
//   cityVar.innerText = city;

//   citySelect.append(cityVar);
// })

// citySelect.options[0].selected = true;
// citySelect.options[0].disabled = true;

// cityDiv.append(cityLabel, citySelect, citySpan);
// modalForm.append(cityDiv);

// const postOfficeDiv = createElements('div', 'input_holder');
// postOfficeDiv.classList.add('post_office_div')
// const postOfficeLabel = createLabel('Post Office №:', 'postOffice');
// const postOfficeInput = createInput('number', 'postOffice', 'postOffice');
// postOfficeInput.classList.add('form_check');
// postOfficeInput.min = '1';
// const postOfficeSpan = createElements('p', 'err_txt', 'Please enter a number!');

// postOfficeDiv.append(postOfficeLabel, postOfficeInput, postOfficeSpan);
// modalForm.append(postOfficeDiv);

// const radioDiv = createElements('div', 'input_holder');
// radioDiv.classList.add('radiocheck');

// const radioSpan = createElements('p', 'err_txt', 'Please select one!');

// const postpaidLabel = createLabel('Postpaid', 'postpaid');
// const postpaidInput = createInput('radio', 'paymentMethod', 'postpaid');
// postpaidInput.classList.add('form_check');
// postpaidInput.value = 'postpaid';

// const cardPaymentLabel =  createLabel('Card Payment', 'cardPayment');
// const cardPaymentInput = createInput('radio', 'paymentMethod', 'cardPayment');
// cardPaymentInput.classList.add('form_check');
// cardPaymentInput.value = 'cardpayment';

// const paymentMethodFieldset = createElements('fieldset', 'radiocheck');
// paymentMethodFieldset.classList.add('input_holder');
// const paymentMethodLegend = document.createElement('legend');
// paymentMethodLegend.innerText = 'Payment Method:';

// paymentMethodFieldset.append(paymentMethodLegend, postpaidInput, postpaidLabel, cardPaymentInput, cardPaymentLabel, radioSpan);
// modalForm.append(paymentMethodFieldset);

// const productsQuantityDiv = createElements('div', 'input_holder');
// const productsQuantityLabel = createLabel('Quantity of Products:', 'productsQuantity');
// const productsQuantityInput = createInput('number', 'quantityOfProducts', 'productsQuantity');
// productsQuantityInput.classList.add('form_check');
// productsQuantityInput.min = '1';
// const productsQuantitySpan = createElements('p', 'err_txt', 'Please enter a number!');

// productsQuantityDiv.append(productsQuantityLabel, productsQuantityInput, productsQuantitySpan);
// modalForm.append(productsQuantityDiv);

// const orderCommentDiv = createElements('div', 'input_holder');
// const orderCommentLabel = createLabel('Comment on the Order:', 'orderComment');
// const orderCommentTextarea = document.createElement('textarea');
// orderCommentTextarea.name = 'commentOnTheOrder';
// orderCommentTextarea.classList.add('form_check');
// orderCommentTextarea.id = 'orderComment';
// orderCommentTextarea.rows = '5';
// orderCommentTextarea.cols = '100';
// const orderCommentSpan = createElements('p', 'err_txt', 'Please fill some text! But no more than 100 symbols');

// orderCommentDiv.append(orderCommentLabel, orderCommentTextarea, orderCommentSpan);
// modalForm.append(orderCommentDiv);

// const buttonSubmit = createElements('button', 'button', 'Submit');
// buttonSubmit.type = 'submit';

// const buttonCancel = createElements('button', 'button', 'Cancel');

// modalForm.append(buttonSubmit, buttonCancel);

// buttonCancel.addEventListener('click', () => {
//   modalFormWrapp.classList.remove('visible');
// })

// buttonSubmit.addEventListener('click', (event) => {
//   event.preventDefault();

//   const checkValid = validateInputs(modalForm);
//   if (checkValid) {
//     const formData = new FormData(modalForm);
//     const resultFormData = Object.fromEntries(formData);

//     const selectedProduct = productsArray
//       .flatMap((category) => category.products)
//       .find((product) => product.name === selectedProductName);

//   //   bodyContainer.classList.add('hide');
//     displayOrderDetails(selectedProduct, resultFormData);
//   }
// });

// const keyMappings = {
//   fullName: 'Full Name:',
//   city: 'City:',
//   postOffice: 'Post Office:',
//   paymentMethod: 'Payment Method:',
//   quantityOfProducts: 'Quantity of Products:',
//   commentOnTheOrder: 'Comment on Order:'
// };

// function displayOrderDetails(productInfo, formData) {
//   const container = createElements('div', 'card_container');

//   const productInfoDiv = createElements('div');
//   productInfoDiv.innerHTML = '<h2>Product Information:</h2>';

//   const productName = createElements('p', '', `Product Name: ${productInfo.name}`);
//   const productPrice = createElements('p', '', `Price: ${productInfo.price}$`);
//   const productDescription = createElements('p', '', `Description: ${productInfo.description}`);
//   const productImage = createElements('img', 'image_display');
//   productImage.src = `./images/${productInfo.image}`;
//   productImage.alt = 'Product Image';

//   productInfoDiv.append(productName, productPrice, productDescription, productImage);
//   container.append(productInfoDiv);

//   const orderInfoDiv = createElements('div');
// orderInfoDiv.innerHTML = '<h2>Order Information:</h2>';

// Object.entries(formData).forEach(([key, value]) => {
//   const label = createElements('p', '', `${keyMappings[key] || key} ${value}`);
//   orderInfoDiv.append(label);
// });

// container.append(orderInfoDiv);


//   modalForm.reset();
//   removeAllVisible();
//   modalFormWrapp.classList.remove('form_visible');
//   document.body.append(container);
// }

// function validateInputs(modalForm){
// let inputs = modalForm.querySelectorAll('.form_check');
// let valid = [];
// let radioCheck = false;
// inputs.forEach(function(i){
//   if(i.getAttribute('type')){
//     checkAttr = i.getAttribute('type');
//   }else{
//     checkAttr = i.tagName;
//   }
  
//   switch(checkAttr){
//     case 'radio':
//       if(!radioCheck){
//         if(!i.checked){
//           radioCheck = false;
//         }else{
//           radioCheck = true;
//         }
//       }
//     break;
//     case 'number':
//       if (!i.value) {
//         i.parentNode.classList.add('error');
//         valid.push(i.getAttribute('name'));
//         i.parentNode.classList.add('error');
//       } else if (!/^[0-9]+$/.test(i.value)) {
//         i.parentNode.classList.add('error');
//         valid.push(i.getAttribute('name'));
//         const errorMessage = 'Please enter only digits.';
//         const errorSpan = i.parentNode.querySelector('.err_txt');
//         errorSpan.innerText = errorMessage;
//       } else {
//         i.parentNode.classList.remove('error');
//         const errorSpan = i.parentNode.querySelector('.err_txt');
//       }
//       break;
//     case 'text':
//       if (i.getAttribute('name') === 'Full Name') {
//         if (!i.value) {
//           i.parentNode.classList.add('error');
//           valid.push(i.getAttribute('name'));
//           namePar.innerText = 'Please enter your full name';
//         } else if (!/^[a-zA-Z\s]+$/.test(i.value)) {
//           i.parentNode.classList.add('error');
//           valid.push(i.getAttribute('name'));
//           namePar.innerText = 'Please enter a valid name (only alphabets and spaces are allowed)';
//         } else {
//           i.parentNode.classList.remove('error');
//         }
//       } else {
//         if (i.value === '') {
//           i.parentNode.classList.add('error');
//           valid.push(i.getAttribute('name'));
//         } else {
//           i.parentNode.classList.remove('error');
//         }
//       }
//       break;
//     case 'select':
//       if(i[select.selectedIndex].value==''){
//         i.parentNode.classList.add("error");
//         valid.push(i.getAttribute('name'));
//       }else{
//         i.parentNode.classList.remove("error");
//       }
//     break;
//     default:
//       if(i.value==''){
//         i.parentNode.classList.add("error");
//         valid.push(i.getAttribute('name'));
//       }else{
//         i.parentNode.classList.remove("error");
//       }
//     break;
//   }
// });
// if(!radioCheck){
//   document.getElementsByClassName('radiocheck')[0].classList.add("error");
//   valid.push ('radio');
// }else{
//   document.getElementsByClassName('radiocheck')[0].classList.remove("error");
// }

// if(valid.length>0){
//   return false;
// }else{
//   return true;
// }
// }

// ******************************************************************************************************

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

const LOCAL_STORAGE_ORDER_DATA = 'orderData';

const createElements = (tag, className, text) => {
  const element = document.createElement(tag);
  if (className) {
    if (Array.isArray(className)) {
      element.classList.add(...className);
    } else {
      element.classList.add(className);
    }
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

      product.addEventListener('click', () => {
        selectedProductName = value.name;
        checkProductVisible(value.name, '.product_info');
      });

      button.addEventListener('click', () => {
        removeAllVisible()
        modalFormWrapp.classList.add('form_visible');
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

const createInput = (type, name, id, required) => {
  const input = document.createElement('input');
  input.type = type;
  input.name = name;
  input.id = id;
  input.required = required;

  return input;
}

const createLabel = (text, forId) => {
  const label = document.createElement('label');
  label.innerText = text;
  label.htmlFor = forId;

  return label;
}

const modalFormWrapp = createElements('div', 'modal_form_wrapp');

document.body.append(modalFormWrapp);

const modalForm = createElements('form', 'modal_form');
modalForm.method = 'post';

modalFormWrapp.append(modalForm);

const nameDiv = createElements('div', 'input_holder');
const nameLabel = createLabel('Full Name:', 'fullName');
const nameInput = createInput('text', 'fullName', 'fullName');
nameInput.classList.add('form_check');
const namePar = createElements('p', 'err_txt', 'Please fill in full name!');

nameDiv.append(nameLabel, nameInput, namePar);
modalForm.append(nameDiv);


const cityDiv = createElements('div', 'input_holder');
const cityLabel = createLabel('City:', 'city');
const citySelect = document.createElement('select');
citySelect.classList.add('form_check');
citySelect.name = 'city';
citySelect.id = 'city';

const citySpan = createElements('p', 'err_txt', 'Please select one!');

const cityOptions = ['', 'Kyiv', 'Kharkiv', 'Lviv', 'Lutsk'];

cityOptions.forEach((city) => {
  const cityVar = document.createElement('option');
  cityVar.value = city;
  cityVar.innerText = city;

  citySelect.append(cityVar);
})

citySelect.options[0].hidden = true;
citySelect.options[0].disabled = true;

cityDiv.append(cityLabel, citySelect, citySpan);
modalForm.append(cityDiv);

const postOfficeDiv = createElements('div', 'input_holder');
postOfficeDiv.classList.add('post_office_div')
const postOfficeLabel = createLabel('Post Office №:', 'postOffice');
const postOfficeInput = createInput('number', 'postOffice', 'postOffice');
postOfficeInput.classList.add('form_check');
postOfficeInput.min = '1';
const postOfficeSpan = createElements('p', 'err_txt', 'Please enter a number!');

postOfficeDiv.append(postOfficeLabel, postOfficeInput, postOfficeSpan);
modalForm.append(postOfficeDiv);

const radioDiv = createElements('div', 'input_holder');
radioDiv.classList.add('radiocheck');

const radioSpan = createElements('p', 'err_txt', 'Please select one!');

const postpaidLabel = createLabel('Postpaid', 'postpaid');
const postpaidInput = createInput('radio', 'paymentMethod', 'postpaid');
postpaidInput.classList.add('form_check');
postpaidInput.value = 'postpaid';

const cardPaymentLabel =  createLabel('Card Payment', 'cardPayment');
const cardPaymentInput = createInput('radio', 'paymentMethod', 'cardPayment');
cardPaymentInput.classList.add('form_check');
cardPaymentInput.value = 'cardpayment';

const paymentMethodFieldset = createElements('fieldset', 'radiocheck');
paymentMethodFieldset.classList.add('input_holder');
const paymentMethodLegend = document.createElement('legend');
paymentMethodLegend.innerText = 'Payment Method:';

paymentMethodFieldset.append(paymentMethodLegend, postpaidInput, postpaidLabel, cardPaymentInput, cardPaymentLabel, radioSpan);
modalForm.append(paymentMethodFieldset);

const productsQuantityDiv = createElements('div', 'input_holder');
const productsQuantityLabel = createLabel('Quantity of Products:', 'productsQuantity');
const productsQuantityInput = createInput('number', 'quantityOfProducts', 'productsQuantity');
productsQuantityInput.classList.add('form_check');
productsQuantityInput.min = '1';
const productsQuantitySpan = createElements('p', 'err_txt', 'Please enter a number!');

productsQuantityDiv.append(productsQuantityLabel, productsQuantityInput, productsQuantitySpan);
modalForm.append(productsQuantityDiv);

const orderCommentDiv = createElements('div', 'input_holder');
const orderCommentLabel = createLabel('Comment on the Order:', 'orderComment');
const orderCommentTextarea = document.createElement('textarea');
orderCommentTextarea.name = 'commentOnTheOrder';
orderCommentTextarea.classList.add('form_check');
orderCommentTextarea.id = 'orderComment';
orderCommentTextarea.rows = '5';
orderCommentTextarea.cols = '100';
const orderCommentSpan = createElements('p', 'err_txt', 'Please fill some text! But no more than 100 symbols');

orderCommentDiv.append(orderCommentLabel, orderCommentTextarea, orderCommentSpan);
modalForm.append(orderCommentDiv);

const buttonSubmit = createElements('button', 'button', 'Submit');
buttonSubmit.type = 'submit';

const buttonCancel = createElements('button', 'button', 'Cancel');

modalForm.append(buttonSubmit, buttonCancel);

buttonCancel.addEventListener('click', () => {
  modalFormWrapp.classList.remove('visible');
})

buttonSubmit.addEventListener('click', (event) => {
  event.preventDefault();

  const checkValid = validateInputs(modalForm);
  if (checkValid) {
    const formData = new FormData(modalForm);
    const resultFormData = Object.fromEntries(formData);

    const selectedProduct = productsArray
      .flatMap((category) => category.products)
      .find((product) => product.name === selectedProductName);

      const date = new Date();
      

      const orderData = {
        productInfo: selectedProduct,
        orderInfo: resultFormData,
        orderDate: date
      };
  
  //   bodyContainer.classList.add('hide');
    displayOrderDetails(orderData);
    // orderData.unshift(...JSON.parse(localStorage.getItem(LOCAL_STORAGE_ORDER_DATA)));
    addOrderDataToLocalStorage(orderData);
  }
});

const keyMappings = {
  name: 'Name:',
  price: 'Price:',
  description: 'Description:',
  fullName: 'Full Name:',
  city: 'City:',
  postOffice: 'Post Office:',
  paymentMethod: 'Payment Method:',
  quantityOfProducts: 'Quantity of Products:',
  commentOnTheOrder: 'Comment on Order:'
};

function displayOrderDetails(orderData) {
  const container = createElements('div', 'card_container');

  const productInfoDiv = createElements('div');
  productInfoDiv.innerHTML = '<h2>Product Information:</h2>';
  const productInfoRows = createKeyValueRows(orderData.productInfo);
  productInfoRows.forEach(row => productInfoDiv.append(row));
  container.append(productInfoDiv);

  const orderInfoDiv = createElements('div');
  orderInfoDiv.innerHTML = '<h2>Order Information:</h2>';
  const orderInfoRows = createKeyValueRows(orderData.orderInfo);
  orderInfoRows.forEach(row => orderInfoDiv.append(row));
  container.append(orderInfoDiv);

  console.log(orderData);

  // const orderData = cre

  modalForm.reset();
  removeAllVisible();
  modalFormWrapp.classList.remove('form_visible');
  document.body.append(container);
}

function createKeyValueRows(data) {
  const rows = [];

  for (const [key, value] of Object.entries(data)) {
    const displayKey = keyMappings[key];

    if (key === 'image') {
      const imageDiv = createElements('div');
      const image = createElements('img', 'image_display');
      image.src = `./images/${value}`;
      image.alt = 'Product Image';
      imageDiv.append(image);
      rows.push(imageDiv);
    } else {
      const rowDiv = createElements('div');
      const keySpan = createElements('span', 'span_space', displayKey);
      const valueSpan = createElements('span', '', value);
      rowDiv.append(keySpan);
      rowDiv.append(valueSpan);
      rows.push(rowDiv);
    }
  }

  return rows;
}

function validateInputs(modalForm){
let inputs = modalForm.querySelectorAll('.form_check');
let valid = [];
let radioCheck = false;
inputs.forEach(function(i){
  if(i.getAttribute('type')){
    checkAttr = i.getAttribute('type');
  }else{
    checkAttr = i.tagName;
  }
  
  switch(checkAttr){
    case 'radio':
      if(!radioCheck){
        if(!i.checked){
          radioCheck = false;
        }else{
          radioCheck = true;
        }
      }
    break;
    case 'number':
      if (!i.value) {
        i.parentNode.classList.add('error');
        valid.push(i.getAttribute('name'));
        i.parentNode.classList.add('error');
      } else if (!/^[0-9]+$/.test(i.value)) {
        i.parentNode.classList.add('error');
        valid.push(i.getAttribute('name'));
        const errorMessage = 'Please enter only digits.';
        const errorSpan = i.parentNode.querySelector('.err_txt');
        errorSpan.innerText = errorMessage;
      } else {
        i.parentNode.classList.remove('error');
        const errorSpan = i.parentNode.querySelector('.err_txt');
      }
      break;
    case 'text':
      if (i.getAttribute('name') === 'Full Name') {
        if (!i.value) {
          i.parentNode.classList.add('error');
          valid.push(i.getAttribute('name'));
          namePar.innerText = 'Please enter your full name';
        } else if (!/^[a-zA-Z\s]+$/.test(i.value)) {
          i.parentNode.classList.add('error');
          valid.push(i.getAttribute('name'));
          namePar.innerText = 'Please enter a valid name (only alphabets and spaces are allowed)';
        } else {
          i.parentNode.classList.remove('error');
        }
      } else {
        if (i.value === '') {
          i.parentNode.classList.add('error');
          valid.push(i.getAttribute('name'));
        } else {
          i.parentNode.classList.remove('error');
        }
      }
      break;
    case 'select':
      if(i[select.selectedIndex].value==''){
        i.parentNode.classList.add("error");
        valid.push(i.getAttribute('name'));
      }else{
        i.parentNode.classList.remove("error");
      }
    break;
    default:
      if(i.value==''){
        i.parentNode.classList.add("error");
        valid.push(i.getAttribute('name'));
      }else{
        i.parentNode.classList.remove("error");
      }
    break;
  }
});
if(!radioCheck){
  document.getElementsByClassName('radiocheck')[0].classList.add("error");
  valid.push ('radio');
}else{
  document.getElementsByClassName('radiocheck')[0].classList.remove("error");
}

if(valid.length>0){
  return false;
}else{
  return true;
}
}

const myOrdersButton = createElements('button', 'my_orders_button', 'My Orders');
document.body.append(myOrders);

myOrdersButton.addEventListener('click', () => {
  bodyContainer.classList.add('hide');

  const ordersContainer = createElements('div', 'orders_container');
  document.body.append(ordersContainer);

  const loadOrderData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ORDER_DATA)) || [];
  loadOrderData.forEach((data) => {
    displayOrderDetails(data);
  })
})

function addOrderDataToLocalStorage (item) {
  const orderData = localStorage.getItem(LOCAL_STORAGE_ORDER_DATA);
  const updatedOrderData = orderData ? [...JSON.parse(orderData), item] : [item];

  localStorage.setItem(LOCAL_STORAGE_ORDER_DATA, JSON.stringify(updatedOrderData));
}

function loadSavedOrderData() {
  const orderData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ORDER_DATA));

  if (orderData && orderData.length > 0) {
    orderData.forEach((data) => {
      displayOrderDetails(data);
    });
  }
}







// const productsArray = [
//   {
//     category: "Electronics",
//     products: [
//       {
//         name: "Laptop",
//         price: 999,
//         description: "Powerful laptop for all your computing needs",
//         image: "laptop.jpg"
//       },
//       {
//         name: "Smartphone",
//         price: 699,
//         description: "Feature-rich smartphone with high-quality camera",
//         image: "smartphone.jpg"
//       },
//       {
//         name: "Tablet",
//         price: 399,
//         description: "Lightweight tablet for entertainment and productivity",
//         image: "tablet.jpg"
//       }
//     ]
//   },
//   {
//     category: "Clothing",
//     products: [
//       {
//         name: "Shirt",
//         price: 29,
//         description: "Comfortable cotton shirt in various colors",
//         image: "shirt.jpg"
//       },
//       {
//         name: "Pants",
//         price: 49,
//         description: "Stylish pants made from durable fabric",
//         image: "pants.jpg"
//       },
//       {
//         name: "Shoes",
//         price: 79,
//         description: "Trendy shoes for any occasion",
//         image: "shoes.jpg"
//       }
//     ]
//   },
//   {
//     category: "Books",
//     products: [
//       {
//         name: "Fiction",
//         price: 19,
//         description: "Engaging fictional stories by popular authors",
//         image: "fiction.jpg"
//       },
//       {
//         name: "Non-fiction",
//         price: 25,
//         description: "Informative non-fiction books on various subjects",
//         image: "nonfiction.jpg"
//       },
//       {
//         name: "Science",
//         price: 32,
//         description: "Books exploring scientific concepts and discoveries",
//         image: "science.jpg"
//       }
//     ]
//   }
// ];

// const createElements = (tag, className, text) => {
//   const element = document.createElement(tag);
//   if (className) {
//     if (Array.isArray(className)) {
//       element.classList.add(...className);
//     } else {
//       element.classList.add(className);
//     }
//   }
//   if (text) {
//     element.innerText = text;  
//   }

//   return element;
// }

// const bodyContainer = createElements('div', 'body_container');
// const categoryWrapper = createElements('div', 'category_wrapper');
// const productsWrapper = createElements('div', 'wrapper');

// const createCategories = () => {
//   productsArray.forEach((product) => {
//     const category = createElements('div', 'category', product.category);
    
//     category.addEventListener('click', () => {
//       checkProductVisible(product.category, '.category_products');
//     });

//     categoryWrapper.append(category);
//   });
// };

// const checkProductVisible = (itemName, className) => {
//   const categoryName = document.querySelectorAll(className);
//   categoryName.forEach((item) => {
//     const hasVisible = item.classList.contains('visible');
//     const hasName = item.classList.contains(itemName);
//     if (hasName) {
//       item.classList.add('visible');
//     }
//     if (hasVisible) {
//       item.classList.remove('visible');
//     }
//   })
// }

// const removeAllVisible = () => {
//   const visibleElements = document.querySelectorAll('.visible');
//   visibleElements.forEach((item) => item.classList.remove('visible'));
// }

// const createProducts = () => {
//   productsArray.forEach((item) => {
//     const categoryProducts = createElements('div', ['category_products', item.category]);

//     item.products.forEach((value) => {
//       const product = createElements('div', 'product', value.name);
      
//       const productInfo = createElements('div', ['product_info', value.name]);
//       const price = createElements('span', 'product_price', `${value.price}$`);
//       const description = createElements('p', 'product_description', value.description);
//       const image = createElements('img', 'product_image', value.image);
//       image.src = `./images/${value.image}`
//       const button = createElements('button', 'button', 'Buy');

//       productInfo.append(price, description, image, button);

//       product.addEventListener('click', () => {
//         selectedProductName = value.name;
//         checkProductVisible(value.name, '.product_info');
//       });

//       button.addEventListener('click', () => {
//         removeAllVisible()
//         modalFormWrapp.classList.add('form_visible');
//       });

//       const productContainer = createElements('div', 'product_container');
//       productContainer.append(product, productInfo);
//       categoryProducts.append(productContainer);
//     })
  
//     productsWrapper.append(categoryProducts);
//   })
// }

// createCategories()
// createProducts()

// bodyContainer.append(categoryWrapper, productsWrapper);
// document.body.append(bodyContainer);

// const createInput = (type, name, id, required) => {
//   const input = document.createElement('input');
//   input.type = type;
//   input.name = name;
//   input.id = id;
//   input.required = required;

//   return input;
// }

// const createLabel = (text, forId) => {
//   const label = document.createElement('label');
//   label.innerText = text;
//   label.htmlFor = forId;

//   return label;
// }

// const modalFormWrapp = createElements('div', 'modal_form_wrapp');

// document.body.append(modalFormWrapp);

// const modalForm = createElements('form', 'modal_form');
// modalForm.method = 'post';

// modalFormWrapp.append(modalForm);

// const nameDiv = createElements('div', 'input_holder');
// nameDiv.id = 'nameDiv';
// const nameLabel = createLabel('Full Name:', 'fullName');
// const nameInput = createInput('text', 'fullName', 'fullName');
// nameInput.classList.add('form_check');
// const namePar = createElements('p', 'err_txt', 'Please fill in full name!');

// nameDiv.append(nameLabel, nameInput, namePar);
// modalForm.append(nameDiv);


// const cityDiv = createElements('div', 'input_holder');
// cityDiv.id = 'cityDiv';
// const cityLabel = createLabel('City:', 'city');
// const citySelect = document.createElement('select');
// citySelect.classList.add('form_check');
// citySelect.name = 'city';
// citySelect.id = 'city';

// const citySpan = createElements('p', 'err_txt', 'Please select one!');

// const cityOptions = ['', 'Kyiv', 'Kharkiv', 'Lviv', 'Lutsk'];

// cityOptions.forEach((city) => {
//   const cityVar = document.createElement('option');
//   cityVar.value = city;
//   cityVar.innerText = city;

//   citySelect.append(cityVar);
// })

// citySelect.options[0].defaultSelected = true;
// citySelect.options[0].hidden = true;

// cityDiv.append(cityLabel, citySelect, citySpan);
// modalForm.append(cityDiv);

// const postOfficeDiv = createElements('div', 'input_holder');
// postOfficeDiv.id = 'postOfficeDiv';
// postOfficeDiv.classList.add('post_office_div')
// const postOfficeLabel = createLabel('post Office №:', 'postOffice');
// const postOfficeInput = createInput('number', 'postOffice', 'postOffice');
// postOfficeInput.classList.add('form_check');
// postOfficeInput.min = '1';
// const postOfficeSpan = createElements('p', 'err_txt', 'Please enter a number!');

// postOfficeDiv.append(postOfficeLabel, postOfficeInput, postOfficeSpan);
// modalForm.append(postOfficeDiv);

// const radioDiv = createElements('div', 'input_holder');
// radioDiv.id = 'radioDiv';
// radioDiv.classList.add('radiocheck');

// const radioSpan = createElements('p', 'err_txt', 'Please select one!');

// const postpaidLabel = createLabel('Postpaid', 'postpaid');
// const postpaidInput = createInput('radio', 'paymentMethod', 'postpaid');
// postpaidInput.classList.add('form_check');
// postpaidInput.value = 'postpaid';
// postpaidInput.checked = true;

// const cardPaymentLabel =  createLabel('Card Payment', 'cardPayment');
// const cardPaymentInput = createInput('radio', 'paymentMethod', 'cardPayment');
// cardPaymentInput.classList.add('form_check');
// cardPaymentInput.value = 'cardpayment';

// const paymentMethodFieldset = createElements('fieldset', 'radiocheck');
// paymentMethodFieldset.id = 'paymentMethodFieldset';
// paymentMethodFieldset.classList.add('input_holder');
// const paymentMethodLegend = document.createElement('legend');
// paymentMethodLegend.innerText = 'Payment Method:';

// paymentMethodFieldset.append(paymentMethodLegend, postpaidInput, postpaidLabel, cardPaymentInput, cardPaymentLabel, radioSpan);
// modalForm.append(paymentMethodFieldset);

// const productsQuantityDiv = createElements('div', 'input_holder');
// productsQuantityDiv.id = 'productsQuantityDiv';
// const productsQuantityLabel = createLabel('Quantity of Products:', 'productsQuantity');
// const productsQuantityInput = createInput('number', 'quantityOfProducts', 'productsQuantity');
// productsQuantityInput.classList.add('form_check');
// productsQuantityInput.min = '1';
// const productsQuantitySpan = createElements('p', 'err_txt', 'Please enter a number!');

// productsQuantityDiv.append(productsQuantityLabel, productsQuantityInput, productsQuantitySpan);
// modalForm.append(productsQuantityDiv);

// const orderCommentDiv = createElements('div', 'input_holder');
// orderCommentDiv.id = 'orderCommentDiv';
// const orderCommentLabel = createLabel('Comment on the Order:', 'orderComment');
// const orderCommentTextarea = document.createElement('textarea');
// orderCommentTextarea.name = 'commentOnTheOrder';
// orderCommentTextarea.classList.add('form_check');
// orderCommentTextarea.id = 'orderComment';
// orderCommentTextarea.rows = '5';
// orderCommentTextarea.cols = '100';
// const orderCommentSpan = createElements('p', 'err_txt', 'Please fill some text! But no more than 100 symbols');

// orderCommentDiv.append(orderCommentLabel, orderCommentTextarea, orderCommentSpan);
// modalForm.append(orderCommentDiv);

// const buttonSubmit = createElements('button', 'button', 'Submit');
// buttonSubmit.type = 'submit';

// const buttonCancel = createElements('button', 'button', 'Cancel');

// modalForm.append(buttonSubmit, buttonCancel);

// buttonCancel.addEventListener('click', () => {
//   modalFormWrapp.classList.remove('visible');
// })

// buttonSubmit.addEventListener('click', (event) => {
//   event.preventDefault();

//   // const checkValid = validateInputs(modalForm);
//   // if (checkValid) {
//     const formData = new FormData(modalForm);
//     const resultFormData = Object.fromEntries(formData);

//     const validationArray = formValidation(resultFormData);
//     if (!Object.values(validationArray).includes(false)) {
//       const selectedProduct = productsArray
//       .flatMap((category) => category.products)
//       .find((product) => product.name === selectedProductName);

//       bodyContainer.classList.add('hide');
//       displayOrderDetails(selectedProduct, resultFormData);
//       console.log(resultFormData);
//     }
//   // }
// });

// const validationRules = [
//   { input: 'city',
//     colorError: 'cityDiv', 
//     validations: 
//       [
//           {
//               message: 'Please select one!',
//               rule: 'required', 
//           },
//       ]
//   },
//   { input: 'postOffice',
//     colorError: 'postOfficeDiv', 
//     validations:
//       [
//           {
//               message: 'Please enter only digits!',
//               rule: /^[0-9]+$/, 
//           },
//           {
//             message: 'Please enter a number!',
//             rule: 'required', 
//           },
//       ]
//   },
//   { input: 'quantityOfProducts',
//     colorError: 'productsQuantityDiv', 
//     validations:
//       [
//           {
//               message: 'Please enter only digits!',
//               rule: /^[0-9]+$/, 
//           },
//           {
//             message: 'Please enter a number!',
//             rule: 'required', 
//           },
//       ]
//   },
//   { input: 'paymentMethod',
//     colorError: 'paymentMethodFieldset', 
//     validations:
//       [
//           {
//             message: 'Please select one!',
//             rule: 'required', 
//           },
//       ]
//   },
//   { input: 'commentOnTheOrder',
//     colorError: 'orderCommentDiv', 
//     validations:
//       [
//           {
//             message: 'Please write your comment. No more than 100 symbols!',
//             rule: 'required', 
//           },
//           {
//             message: 'This is more than 100 symbols!',
//             rule: 'maxLength', 
//           },
//       ]
//   },
//   { input: 'fullName',
//     colorError: 'nameDiv', 
//     validations:
//   [
//       {
//           message: 'Please enter full name!',
//           rule: 'required', 
//       },
//       {
//           message: 'Please enter only alphabets and spaces!',
//           rule: /^[a-zA-Z\s]+$/,
//       }
//   ]
//   },
// ]


// // function displayErrorRed(formData) {
// //   let valid = [];
// //   Object.keys(formData).forEach((objectKey) => {
// //     const validationData = validationRules.filter((object) => object.input === objectKey);
// //     validationData[0].validations.forEach((item) => {
// //       const errorMessage = document.querySelector(`#${validationData[0].colorError} .err_txt`);
// //       if (item.rule === 'required' && formData[objectKey].length === 0) {
// //       errorMessage.innerText = item.message;
// //       errorMessage.parentNode.classList.add('error');
// //       valid.push(false);
// //     } else if (item.rule === 'maxLength' && formData[objectKey].length > 100) {
// //       console.log('maxLength');
// //       errorMessage.innerText = item.message;
// //       errorMessage.parentNode.classList.add('error');
// //       valid.push(false);
// //     } else {
// //       // item.rule.test(formData[objectKey])
// //       errorMessage.innerText = '';
// //       console.log('else');
// //       errorMessage.parentNode.classList.remove('error');
// //       valid.push(true);
// //     }
// //     })
// //   })
// //   return valid;
// // }

// function formValidation(formData) {
//   const valid = {};

//   Object.keys(formData).forEach((objectKey) => {
//     const validationData = validationRules.find((object) => object.input === objectKey);

//     if (validationData) {
      
//       valid[validationData.input] = true;

//       validationData.validations.forEach((item) => {
//         const errorMessage = document.querySelector(`#${validationData.colorError} .err_txt`);
        
//         let isValid = true;
//         const reg = new RegExp(item.rule);

//         if(valid[validationData.input]) {
//           if (item.rule === 'required' && formData[objectKey].length === 0) {
//             errorMessage.innerText = item.message;
//             errorMessage.parentNode.classList.add('error');
//             valid[validationData.input] = false;
//             isValid = false;
//           } else if (item.rule === 'maxLength' && formData[objectKey].length > 100) {
//             errorMessage.innerText = item.message;
//             errorMessage.parentNode.classList.add('error');
//             valid[validationData.input] = false;
//             isValid = false;
//           } else if (item.rule !== 'required' && item.rule !== 'maxLength') {
//             if (!reg.test(formData[objectKey])) {
//               errorMessage.innerText = item.message;
//               errorMessage.parentNode.classList.add('error');
//               valid[validationData.input] = false;
//               isValid = false;
//             }
//           } 
  
//           if (isValid) {
//             const errorMessage = document.querySelector(`#${validationData.colorError} .err_txt`);
//             errorMessage.innerText = '';
//             errorMessage.parentNode.classList.remove('error');
//             valid[validationData.input] = true;
//           }
//         }
//         });
//     }
//   });

//   return valid;
// }

// function displayError () {
//   errorMessage.innerText = item.message;
//   errorMessage.parentNode.classList.add('error');
// }


// function displayOrderDetails(productInfo, formData) {
//   const container = createElements('div', 'card_container');
//   container.innerHTML = `
//     <div>
//       <div>Product Information:</div>
//       ${generateKeyValueRows(productInfo)}
//     </div>
//     <div>
//       <div>Order Information:</div>
//       ${generateKeyValueRows(formData)}
//     </div>
//   `;

//   modalForm.reset();
//   removeAllVisible();
//   modalFormWrapp.classList.remove('form_visible');
//   document.body.append(container);
// }

// function generateKeyValueRows(data) {
//   const keyMappings = {
//     name: 'Name:',
//     price: 'Price:',
//     description: 'Description:',
//     'Full Name': 'Full Name:',
//     City: 'City:',
//     'Post Office': 'Post Office:',
//     paymentMethod: 'Payment Method:',
//     'Quantity of Products': 'Quantity of Products:',
//     'Comment on the Order': 'Comment on the Order:'
//   };

//   return Object.entries(data)
//     .map(([key, value]) => {
//       const displayKey = keyMappings[key] || key;

//       if (key === 'image') {
//         return `<div><img class='image_display' src="./images/${value}" alt="Product Image"></div>`;
//       } else {
//         return `<div><span class="span_space">${displayKey}</span><span>${value}</span></div>`;
//       }
//     })
//     .join('');
// }

//   function validateInputs(modalForm){
// 	let inputs = modalForm.querySelectorAll('.form_check');
// 	let valid = [];
// 	let radioCheck = false;
// 	inputs.forEach(function(i){
// 		if(i.hasAttribute('type')){
// 			checkAttr = i.getAttribute('type');
//             console.log(checkAttr);
// 		}else{
// 			checkAttr = i.tagName;
// 		}
  
// 		switch(checkAttr){
// 			case 'radio':
// 				if(!radioCheck){
// 					if(!i.checked){
// 						radioCheck = false;
// 					}else{
// 						radioCheck = true;
// 					}
// 				}
// 			break;
//       case 'number':
//         if (!i.value) {
//           i.parentNode.classList.add('error');
//           valid.push(i.getAttribute('name'));
//         } else if (!/^[0-9]+$/.test(i.value)) {
//           i.parentNode.classList.add('error');
//           valid.push(i.getAttribute('name'));
//           const errorMessage = 'Please enter only digits.';
//           const errorSpan = i.parentNode.querySelector('.err_txt');
//           errorSpan.innerText = errorMessage;
//         } else {
//           i.parentNode.classList.remove('error');
//           const errorSpan = i.parentNode.querySelector('.err_txt');
//         }
//         break;
//       case 'text':
//         if (i.getAttribute('name') === 'Full Name') {
//           if (!i.value) {
//             i.parentNode.classList.add('error');
//             valid.push(i.getAttribute('name'));
//             namePar.innerText = 'Please enter your full name';
//           } else if (!/^[a-zA-Z\s]+$/.test(i.value)) {
//             i.parentNode.classList.add('error');
//             valid.push(i.getAttribute('name'));
//             namePar.innerText = 'Please enter a valid name (only alphabets and spaces are allowed)';
//           } else {
//             i.parentNode.classList.remove('error');
//           }
//         } else {
//           if (i.value === '') {
//             i.parentNode.classList.add('error');
//             valid.push(i.getAttribute('name'));
//           } else {
//             i.parentNode.classList.remove('error');
//           }
//         }
//         break;
// 			case 'select':
// 				if(i[select.selectedIndex].value==''){
// 					i.parentNode.classList.add("error");
// 					valid.push(i.getAttribute('name'));
// 				}else{
// 					i.parentNode.classList.remove("error");
// 				}
// 			break;
// 			default:
// 				if(i.value==''){
// 					i.parentNode.classList.add("error");
// 					valid.push(i.getAttribute('name'));
// 				}else{
// 					i.parentNode.classList.remove("error");
// 				}
// 			break;
// 		}
// 	});
// 	if(!radioCheck){
// 		document.getElementsByClassName('radiocheck')[0].classList.add("error");
// 		valid.push ('radio');
// 	}else{
// 		document.getElementsByClassName('radiocheck')[0].classList.remove("error");
// 	}

// 	if(valid.length>0){
// 		return false;
// 	}else{
// 		return true;
// 	}
// }