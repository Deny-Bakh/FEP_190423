// // const productsArray = [
// //   {
// //     category: "Electronics",
// //     products: [
// //       {
// //         name: "Laptop",
// //         price: 999,
// //         description: "Powerful laptop for all your computing needs",
// //         image: "laptop.jpg"
// //       },
// //       {
// //         name: "Smartphone",
// //         price: 699,
// //         description: "Feature-rich smartphone with high-quality camera",
// //         image: "smartphone.jpg"
// //       },
// //       {
// //         name: "Tablet",
// //         price: 399,
// //         description: "Lightweight tablet for entertainment and productivity",
// //         image: "tablet.jpg"
// //       }
// //     ]
// //   },
// //   {
// //     category: "Clothing",
// //     products: [
// //       {
// //         name: "Shirt",
// //         price: 29,
// //         description: "Comfortable cotton shirt in various colors",
// //         image: "shirt.jpg"
// //       },
// //       {
// //         name: "Pants",
// //         price: 49,
// //         description: "Stylish pants made from durable fabric",
// //         image: "pants.jpg"
// //       },
// //       {
// //         name: "Shoes",
// //         price: 79,
// //         description: "Trendy shoes for any occasion",
// //         image: "shoes.jpg"
// //       }
// //     ]
// //   },
// //   {
// //     category: "Books",
// //     products: [
// //       {
// //         name: "Fiction",
// //         price: 19,
// //         description: "Engaging fictional stories by popular authors",
// //         image: "fiction.jpg"
// //       },
// //       {
// //         name: "Non-fiction",
// //         price: 25,
// //         description: "Informative non-fiction books on various subjects",
// //         image: "nonfiction.jpg"
// //       },
// //       {
// //         name: "Science",
// //         price: 32,
// //         description: "Books exploring scientific concepts and discoveries",
// //         image: "science.jpg"
// //       }
// //     ]
// //   }
// // ];

// // const createElements = (tag, className, text) => {
// //   const element = document.createElement(tag);
// //   if (className) {
// //     if (Array.isArray(className)) {
// //       element.classList.add(...className);
// //     } else {
// //       element.classList.add(className);
// //     }
// //   }
// //   if (text) {
// //     element.innerText = text;  
// //   }

// //   return element;
// // }

// // const bodyContainer = createElements('div', 'body_container');
// // const categoryWrapper = createElements('div', 'category_wrapper');
// // const productsWrapper = createElements('div', 'wrapper');

// // const createCategories = () => {
// //   productsArray.forEach((product) => {
// //     const category = createElements('div', 'category', product.category);
    
// //     category.addEventListener('click', () => {
// //       checkProductVisible(product.category, '.category_products');
// //     });

// //     categoryWrapper.append(category);
// //   });
// // };

// // const checkProductVisible = (itemName, className) => {
// //   const categoryName = document.querySelectorAll(className);
// //   categoryName.forEach((item) => {
// //     const hasVisible = item.classList.contains('visible');
// //     const hasName = item.classList.contains(itemName);
// //     if (hasName) {
// //       item.classList.add('visible');
// //     }
// //     if (hasVisible) {
// //       item.classList.remove('visible');
// //     }
// //   })
// // }

// // const removeAllVisible = () => {
// //   const visibleElements = document.querySelectorAll('.visible');
// //   visibleElements.forEach((item) => item.classList.remove('visible'));
// // }

// // const createProducts = () => {
// //   productsArray.forEach((item) => {
// //     const categoryProducts = createElements('div', ['category_products', item.category]);

// //     item.products.forEach((value) => {
// //       const product = createElements('div', 'product', value.name);
      
// //       const productInfo = createElements('div', ['product_info', value.name]);
// //       const price = createElements('span', 'product_price', `${value.price}$`);
// //       const description = createElements('p', 'product_description', value.description);
// //       const image = createElements('img', 'product_image', value.image);
// //       image.src = `./images/${value.image}`
// //       const button = createElements('button', 'button', 'Buy');

// //       productInfo.append(price, description, image, button);

// //       product.addEventListener('click', () => checkProductVisible(value.name, '.product_info'));
// //       button.addEventListener('click', () => {
// //         alert(`You bought ${value.name}`);
// //         removeAllVisible()
// //       });

// //       const productContainer = createElements('div', 'product_container');
// //       productContainer.append(product, productInfo);
// //       categoryProducts.append(productContainer);
// //     })
  
// //     productsWrapper.append(categoryProducts);
// //   })
// // }

// // createCategories()
// // createProducts()

// // bodyContainer.append(categoryWrapper, productsWrapper);
// // document.body.append(bodyContainer);

// // **********************************************************************************************************

// // const productsArray = [
// //   {
// //     category: "Electronics",
// //     products: [
// //       {
// //         name: "Laptop",
// //         price: 999,
// //         description: "Powerful laptop for all your computing needs",
// //         image: "laptop.jpg"
// //       },
// //       {
// //         name: "Smartphone",
// //         price: 699,
// //         description: "Feature-rich smartphone with high-quality camera",
// //         image: "smartphone.jpg"
// //       },
// //       {
// //         name: "Tablet",
// //         price: 399,
// //         description: "Lightweight tablet for entertainment and productivity",
// //         image: "tablet.jpg"
// //       }
// //     ]
// //   },
// //   {
// //     category: "Clothing",
// //     products: [
// //       {
// //         name: "Shirt",
// //         price: 29,
// //         description: "Comfortable cotton shirt in various colors",
// //         image: "shirt.jpg"
// //       },
// //       {
// //         name: "Pants",
// //         price: 49,
// //         description: "Stylish pants made from durable fabric",
// //         image: "pants.jpg"
// //       },
// //       {
// //         name: "Shoes",
// //         price: 79,
// //         description: "Trendy shoes for any occasion",
// //         image: "shoes.jpg"
// //       }
// //     ]
// //   },
// //   {
// //     category: "Books",
// //     products: [
// //       {
// //         name: "Fiction",
// //         price: 19,
// //         description: "Engaging fictional stories by popular authors",
// //         image: "fiction.jpg"
// //       },
// //       {
// //         name: "Non-fiction",
// //         price: 25,
// //         description: "Informative non-fiction books on various subjects",
// //         image: "nonfiction.jpg"
// //       },
// //       {
// //         name: "Science",
// //         price: 32,
// //         description: "Books exploring scientific concepts and discoveries",
// //         image: "science.jpg"
// //       }
// //     ]
// //   }
// // ];

// // const createElements = (tag, className, text) => {
// //   const element = document.createElement(tag);
// //   if (className) {
// //     element.classList.add(...className);
// //   }
// //   if (text) {
// //     element.innerText = text;  
// //   }

// //   return element;
// // }

// // const bodyContainer = createElements('div', ['body_container']);
// // const categoryWrapper = createElements('div', ['category_wrapper']);
// // const productsWrapper = createElements('div', ['wrapper']);

// // const createCategories = () => {
// //   productsArray.forEach((product) => {
// //     const category = createElements('div', ['category'], product.category);
    
// //     category.addEventListener('click', () => {
// //       checkProductVisible(product.category, '.category_products');
// //     });

// //     categoryWrapper.append(category);
// //   });
// // };

// // const checkProductVisible = (itemName, className) => {
// //   const categoryName = document.querySelectorAll(className);
// //   categoryName.forEach((item) => {
// //     const hasVisible = item.classList.contains('visible');
// //     const hasName = item.classList.contains(itemName);
// //     if (hasName) {
// //       item.classList.add('visible');
// //     }
// //     if (hasVisible) {
// //       item.classList.remove('visible');
// //     }
// //   })
// // }

// // const removeAllVisible = () => {
// //   const visibleElements = document.querySelectorAll('.visible');
// //   visibleElements.forEach((item) => item.classList.remove('visible'));
// // }

// // const createProducts = () => {
// //   productsArray.forEach((item) => {
// //     const categoryProducts = createElements('div', ['category_products', item.category]);

// //     item.products.forEach((value) => {
// //       const product = createElements('div', ['product'], value.name);
      
// //       const productInfo = createElements('div', ['product_info', value.name]);
// //       const price = createElements('span', ['product_price'], `${value.price}$`);
// //       const description = createElements('p', ['product_description'], value.description);
// //       const image = createElements('img', ['product_image'], value.image);
// //       image.src = `./images/${value.image}`
// //       const button = createElements('button', ['button'], 'Buy');

// //       productInfo.append(price, description, image, button);

// //       product.addEventListener('click', () => checkProductVisible(value.name, '.product_info'));
// //       button.addEventListener('click', () => {
// //         alert(`You bought ${value.name}`);
// //         removeAllVisible()
// //       });

// //       const productContainer = createElements('div', ['product_container']);
// //       productContainer.append(product, productInfo);
// //       categoryProducts.append(productContainer);
// //     })
  
// //     productsWrapper.append(categoryProducts);
// //   })
// // }

// // createCategories()
// // createProducts()

// // bodyContainer.append(categoryWrapper, productsWrapper);
// // document.body.append(bodyContainer);

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

//       // product.addEventListener('click', () => checkProductVisible(value.name, '.product_info'));
//       // button.addEventListener('click', () => {
//       //   alert(`You bought ${value.name}`);
//       //   removeAllVisible()
//       // });

//       // product.addEventListener('click', () => checkProductVisible(value.name, '.product_info'));
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
// // modalFormWrapp.id = 'modalFormWrapp';

// document.body.append(modalFormWrapp);

// const modalForm = createElements('form', 'modal_form');

// modalFormWrapp.append(modalForm);

// const nameDiv = createElements('div', 'input_holder');
// const nameLabel = createLabel('Full Name:', 'fullName');
// const nameInput = createInput('text', 'Full Name', 'fullName');
// nameInput.classList.add('form_check');
// const namePar = createElements('p', 'err_txt', 'Please fill in full name!');

// nameDiv.append(nameLabel, nameInput, namePar);
// modalForm.append(nameDiv);


// const cityDiv = createElements('div', 'input_holder');
// const cityLabel = createLabel('City:', 'city');
// const citySelect = document.createElement('select');
// citySelect.classList.add('form_check');
// citySelect.name = 'City';
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
// const postOfficeInput = createInput('number', 'Post Office', 'postOffice');
// postOfficeInput.classList.add('form_check');
// postOfficeInput.min = '1';
// const postOfficeSpan = createElements('p', 'err_txt', 'Please insert a number!');

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
// // radioDiv.append(paymentMethodFieldset, paymentMethodLegend, postpaidInput, postpaidLabel, cardPaymentInput, cardPaymentLabel, radioSpan);
// modalForm.append(paymentMethodFieldset);

// const productsQuantityDiv = createElements('div', 'input_holder');
// const productsQuantityLabel = createLabel('Quantity of Products:', 'productsQuantity');
// const productsQuantityInput = createInput('number', 'Quantity of Products', 'productsQuantity');
// productsQuantityInput.classList.add('form_check');
// productsQuantityInput.min = '1';
// const productsQuantitySpan = createElements('p', 'err_txt', 'Please insert a number!');

// productsQuantityDiv.append(productsQuantityLabel, productsQuantityInput, productsQuantitySpan);
// modalForm.append(productsQuantityDiv);

// const orderCommentDiv = createElements('div', 'input_holder');
// const orderCommentLabel = createLabel('Comment on the Order:', 'orderComment');
// const orderCommentTextarea = document.createElement('textarea');
// orderCommentTextarea.name = 'Comment on the Order';
// orderCommentTextarea.classList.add('form_check');
// orderCommentTextarea.id = 'orderComment';
// // orderCommentTextarea.required = true;
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

// // nameInput.addEventListener('input', validationName);

// buttonSubmit.addEventListener('click', (event) => {
//   event.preventDefault();

//   const checkValid = validateInputs(modalForm);
//   if (checkValid) {
//     const formData = new FormData(modalForm);
//     const resultFormData = Object.fromEntries(formData);

//     const selectedProduct = productsArray
//       .flatMap((category) => category.products)
//       .find((product) => product.name === selectedProductName);

//     bodyContainer.classList.add('hide');
//     displayOrderDetails(selectedProduct, resultFormData);
//   }
// });

// function displayOrderDetails(productInfo, formData) {
//   const container = document.createElement('div');
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
//   document.body.appendChild(container);
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

// function generateKeyValueRows(data) {
//   return Object.entries(data)
//     .map(([key, value]) => {
//       if (key === 'image') {
//         return `<div><img class='image_display' src="./images/${value}" alt="Product Image"></div>`;
//       } else {
//         return `<div><span class="span_space">${key}</span><span>${value}</span></div>`;
//       }
//     })
//     .join('');
// }

// function displayOrderDetails(productInfo, formData) {
//   const container = document.createElement('div');
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
//   document.body.appendChild(container);
// }

// function generateKeyValueRows(data) {
//   return Object.entries(data)
//     .map(([key, value]) => `<div><span class="span_space">${key}</span><span>${value}</span></div>`)
//     .join('');
// }

// function displayOrderDetails(productInfo, deliveryInfo) {
//   const container = document.createElement('div');

//   const createSection = (title, info) => {
//     const section = document.createElement('div');
//     section.innerText = title;

//     for (const key in info) {
//       const name = document.createElement('span');
//       name.classList.add('span_space');
//       name.innerText = key;

//       const value = document.createElement('span');
//       value.innerText = info[key];

//       const row = document.createElement('div');
//       row.append(name, value);
//       section.appendChild(row);
//     }

//     container.appendChild(section);
//   };

//   createSection('Product Information:', productInfo);
//   createSection('Delivery Information:', deliveryInfo);

//   modalForm.reset();
//   removeAllVisible();
//   modalFormWrapp.classList.remove('form_visible');
//   document.body.appendChild(container);
// }

// buttonSubmit.addEventListener('click', (event) => {

//   event.preventDefault();

//   const checkValid = validateInputs(modalForm);
//   if (checkValid) {
//     const formData = new FormData(modalForm);
//     const resultFormData = Object.fromEntries(formData);

//     const selectedProduct = productsArray
//       .flatMap((category) => category.products)
//       .find((product) => product.name === selectedProductName);

//     const productInfo = selectedProduct;

//     const deliveryInfo = {
//       'Full Name:': resultFormData['Full Name'],
//       'City:': resultFormData.City,
//       'Post Office №:': resultFormData['Post Office'],
//       'Quantity of Products:': resultFormData['Quantity of Products']
//     };

//     const container = document.createElement('div');

//     const createSection = (title, info) => {
//       const section = document.createElement('div');
//       section.innerText = title;

//       for (const key in info) {
//         const name = document.createElement('span');
//         name.classList.add('span_space');
//         name.innerText = key;

//         const value = document.createElement('span');
//         value.innerText = info[key];

//         const row = document.createElement('div');
//         row.append(name, value);
//         section.appendChild(row);
//       }

//       container.appendChild(section);
//     };

//     createSection('Product Information:', productInfo);
//     createSection('Delivery Information:', deliveryInfo);

//     modalForm.reset();
//     removeAllVisible();
//     modalFormWrapp.classList.remove('form_visible');
//     document.body.appendChild(container);
//   }
// });

// buttonSubmit.addEventListener('click', (event) => {
// 	event.preventDefault();

//   // const modalForm = event.target;

  
// 	let checkValid = validateInputs(modalForm);
// 	if(checkValid){
//     const formData = new FormData(modalForm);
//     const resultFormData = Object.fromEntries(formData);
//     const selectedProduct = productsArray.find((category) => {
//       return category.products.some((product) => {
//         return product.name === selectedProductName;
//       });
//     });

//     const productInfo = selectedProduct.products.find((product) => {
//       return product.name === selectedProductName;
//     });

//     const deliveryInfo = {
//       'Full Name:': resultFormData['Full Name'],
//       'City:': resultFormData.City,
//       'Post Office №: ': resultFormData['Post Office'],
//       'Quantity of Products: ': resultFormData['Quantity of Products']
//     };

//     bodyContainer.classList.add('hide')
//     createOrder(productInfo, deliveryInfo);
// 	}
// });

// function validateInputs(modalForm){
// 	let inputs = modalForm.querySelectorAll('.form_check');
// 	let valid = [];
// 	let radioCheck = false;
// 	inputs.forEach(function(i){
// 		if(i.getAttribute('type')){
// 			checkAttr = i.getAttribute('type');
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
//           const errorMessage = 'Please enter a number.';
//           const errorSpan = i.parentNode.querySelector('.err_txt');
//           errorSpan.innerText = errorMessage;
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
// 			// case 'text':
// 			//     var _thisVal = i.value;
// 			// 	if(i.getAttribute('data-name') == 'name'){
// 			// 		if(!isNaN(i.value)){
// 			// 			_thisVal = '';
// 			// 		}
// 			// 	}
// 			// 	if(_thisVal==''){
// 			// 		i.parentNode.classList.add("error");
// 			// 		valid.push(i.getAttribute('name'));
// 			// 	}else{
// 			// 		i.parentNode.classList.remove("error");
// 			// 	}
// 			// break;
//       case 'text':
//         if (i.getAttribute('name') === 'Full Name') {
//           if (!i.value) {
//             i.parentNode.classList.add('error');
//             valid.push(i.getAttribute('name'));
//             namePar.innerText = 'Please enter your full name';
//           } else if (!/^[a-zA-Z\s]+$/.test(i.value)) {
//             i.parentNode.classList.add('error');
//             // nameInput.classList.add('red_text');
//             valid.push(i.getAttribute('name'));
//             namePar.innerText = 'Please enter a valid name (only alphabets and spaces are allowed)';
//           } else {
//             i.parentNode.classList.remove('error');
//             // nameInput.classList.remove('red_text');
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

// // function validationName(){
// //   const nameValue = nameInput.value;
// //   if(nameValue.length>0){
// //       const nameValidation = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
// //       const result = nameValidation.test(nameValue);
// //       if (result === false){
// //         nameInput.classList.add('red_text');
// //         nameInput.classList.add('red');
// //       }
// //       else {
// //         nameInput.classList.remove('red_text');
// //         nameInput.classList.remove('red');
// //       }
// //   }
// // }

// // const createTable = (formData) => {
// //   const table = document.createElement('table');

// //   const productNameLabel = document.createElement('td');
// //   productNameLabel.innerText = 'Selected Product';
// //   const productNameValue = document.createElement('td');
// //   productNameValue.innerText = selectedProductName;
// //   const productRow = document.createElement('tr');
// //   productRow.append(productNameLabel, productNameValue);
// //   table.append(productRow);

// //   Object.keys(formData).forEach((key) => {
// //     const itemName = document.createElement('td')
// //     itemName.innerText = key;

// //     const itemValue = document.createElement('td')
// //     itemValue.innerText = formData[key];

// //     const row = document.createElement('tr')
// //     row.append(itemName, itemValue)
// //     table.append(row)
  
// //     modalFormWrapp.classList.add('hide')
// //     document.body.append(table)
// //   })
// // }

// // function createTable(productInfo, deliveryInfo) {
// //   const table = document.createElement('table');
// //   const tableBody = document.createElement('tbody');

// //   // Create table rows for product information
// //   for (const key in productInfo) {
// //     const value = productInfo[key];

// //     const row = document.createElement('tr');
// //     const labelCell = document.createElement('td');
// //     const valueCell = document.createElement('td');

// //     labelCell.textContent = key;
// //     valueCell.textContent = value;

// //     row.appendChild(labelCell);
// //     row.appendChild(valueCell);

// //     tableBody.appendChild(row);
// //   }

// //   // Create table rows for delivery information
// //   for (const key in deliveryInfo) {
// //     const value = deliveryInfo[key];

// //     const row = document.createElement('tr');
// //     const labelCell = document.createElement('td');
// //     const valueCell = document.createElement('td');

// //     labelCell.textContent = key;
// //     valueCell.textContent = value;

// //     row.appendChild(labelCell);
// //     row.appendChild(valueCell);

// //     tableBody.appendChild(row);
// //   }

// //   table.appendChild(tableBody);

// //   // Clear the modal form
// //   modalForm.reset();

// //   // Display the table on the page
// //   modalFormWrapp.classList.remove('form_visible');
// //   removeAllVisible();
// //   document.body.appendChild(table);
// // }

// function createOrder(productInfo, deliveryInfo) {
//   const container = document.createElement('div');

//   const productInfoDiv = document.createElement('div');
//   productInfoDiv.innerText = 'Product Information:';
//   container.append(productInfoDiv);

//   for (const key in productInfo) {
//     const name = document.createElement('span');
//     name.classList.add('span_space');
//     name.innerText = key;

//     const value = document.createElement('span');
//     value.innerText = productInfo[key];

//     const row = document.createElement('div');
//     row.append(name);
//     row.append(value);

//     container.append(row);
//   }

//   const deliveryInfoDiv = document.createElement('div');
//   deliveryInfoDiv.innerText = 'Delivery Information:';
//   container.appendChild(deliveryInfoDiv);

//   for (const key in deliveryInfo) {
//     const name = document.createElement('span');
//     name.classList.add('span_space');
//     name.innerText = key;

//     const value = document.createElement('span');
//     value.innerText = deliveryInfo[key];

//     const row = document.createElement('div');
//     row.append(name);
//     row.append(value);

//     container.append(row);
//   }

//   modalForm.reset();

//   removeAllVisible();
//   modalFormWrapp.classList.remove('form_visible');
//   document.body.append(container);
// }



// // modalForm.addEventListener('click', (event) => {
// //   event.preventDefault();

// //   bodyContainer.classList.add('hide');
// //   const modalForm = event.target;

// //   const formData = new FormData(modalForm);
// //   const resultFormData = Object.fromEntries(formData);

// //   createTable(formData);

// // })

// // const createTable = (formData) => {
// //   const table = document.createElement('table');


// //   Object.keys(formData).forEach((key) => {
// //     const itemName = document.createElement('td')
// //     itemName.innerText = key;

// //     const itemValue = document.createElement('td')
// //     itemValue.innerText = formData[key];

// //     const row = document.createElement('tr')
// //     row.append(itemName, itemValue)
// //     table.append(row)
  
  
// //     form.classList.add('hide')
// //     document.body.append(table)
// //   })
// // }

// // const createTable = (form, selectedProductName) => {
// //   const table = document.createElement('table');

// //   const fieldsToInclude = ['Product Name', 'Quantity of Products', 'City', 'Post Office'];

// //   fieldsToInclude.forEach((field) => {
// //     const itemName = document.createElement('td');
// //     itemName.innerText = field;

// //     const itemValue = document.createElement('td');
// //     if (field === 'Product Name') {
// //       itemValue.innerText = selectedProductName; // Use the selected product name
// //     } else {
// //       const inputName = field.replace(/\s/g, '').toLowerCase();
// //       const inputElement = form.querySelector(`[name="${inputName}"]`);
// //       if (inputElement) {
// //         itemValue.innerText = inputElement.value; // Get the value from the input element
// //       }
// //     }

// //     const row = document.createElement('tr');
// //     row.append(itemName, itemValue);
// //     table.append(row);
// //   });

// //   document.body.append(table);
// // };

// // buttonSubmit.addEventListener('click', () => {
// //   const checkValid = validateInputs();
// //   if(checkValid) {

// //   }
// // })

// function showError(message) {
//   const errorElement = document.createElement('div');
//   errorElement.classList.add('red');
//   errorElement.innerText = message;

//   // Remove any existing error messages
//   const existingErrorMessages = document.querySelectorAll('.red');
//   existingErrorMessages.forEach((element) => {
//     element.remove();
//   });

//   modalForm.prepend(errorElement);
// }

// function submitOrder() {
//   // Perform the order submission logic here
//   // ...

//   // Show success message
//   const successMessage = document.createElement('div');
//   successMessage.classList.add('success-message');
//   successMessage.innerText = 'Order submitted successfully!';
//   modalFormWrapp.appendChild(successMessage);
// }

// buttonSubmit.addEventListener('click', (event) => {
//   event.preventDefault();

//   if (nameInput.value.trim() === '') {
//     showError('Please enter your full name.');
//     return;
//   }

//   if (postOfficeInput.value.trim() === '') {
//     showError('Please enter the post office number.');
//     return;
//   }

//   if (!postpaidInput.checked && !cardPaymentInput.checked) {
//     showError('Please select a payment method.');
//     return;
//   }

//   if (productsQuantityInput.value.trim() === '') {
//     showError('Please enter the quantity of products.');
//     return;
//   }

//   if (orderCommentTextarea.value.trim() === '') {
//     showError('Please enter a comment for the order.');
//     return;
//   }

//   submitOrder();
// });

// buttonCancel.addEventListener('click', () => {
//   modalFormWrapp.classList.remove('form_visible');
// });

// function validateInputs() {
//   const inputs = modalForm.querySelectorAll('.form_check');
//   let isValid = true;
//   let radioCheck = false;

//   inputs.forEach((input) => {
//     const checkAttr = input.getAttribute('type') || input.tagName;

//     switch (checkAttr) {
//       case 'radio':
//         if (!radioCheck && !input.checked) {
//           radioCheck = true;
//         }
//         break;
//       case 'text':
//         if (input.getAttribute('data-name') === 'name') {
//           if (!isNaN(input.value)) {
//             input.value = '';
//           }
//         }
//         if (input.value === '') {
//           input.classList.add('red');
//           isValid = false;
//         } else {
//           input.classList.remove('red');
//         }
//         break;
//       case 'SELECT':
//         if (input.selectedIndex === 0) {
//           input.classList.add('red');
//           isValid = false;
//         } else {
//           input.classList.remove('red');
//         }
//         break;
//       default:
//         if (input.value === '') {
//           input.parentNode.classList.add('red');
//           isValid = false;
//         } else {
//           input.parentNode.classList.remove('red');
//         }
//         break;
//     }
//   });

//   if (!radioCheck) {
//     document.getElementsByClassName('radiocheck')[0].classList.add('red');
//     isValid = false;
//   } else {
//     document.getElementsByClassName('radiocheck')[0].classList.remove('red');
//   }

//   return isValid;
// }

// function validateForm() {
//   const nameValue = nameInput .value;
//   const messageValue = orderCommentTextarea.value;
//   // const phoneValue = phoneCheck.value;
//   // const emailValue = emailCheck.value;
// }

// function submitForm(event) {
//   event.preventDefault();

//   // Retrieve the form field values
//   const fullName = nameInput.value;
//   const city = citySelect.value;
//   const postOffice = postOfficeInput.value;
//   const paymentMethod = modalForm.querySelector('input[name="paymentMethod"]:checked').value;
//   const productsQuantity = productsQuantityInput.value;
//   const orderComment = orderCommentTextarea.value;

//   // Validate the required fields
//   if (!fullName || !city || !postOffice || !paymentMethod || !productsQuantity || !orderComment) {
//     alert('Please fill in all required fields.');
//     return;
//   }

//   // Display the order information on the page
//   const orderInfo = document.createElement('div');
//   orderInfo.innerHTML = `
//     <h2>Order Information:</h2>
//     <p><strong>Full Name:</strong> ${fullName}</p>
//     <p><strong>City:</strong> ${city}</p>
//     <p><strong>Post Office №:</strong> ${postOffice}</p>
//     <p><strong>Payment Method:</strong> ${paymentMethod}</p>
//     <p><strong>Quantity of Products:</strong> ${productsQuantity}</p>
//     <p><strong>Comment on the Order:</strong> ${orderComment}</p>
//   `;

//   document.body.append(orderInfo);

//   modalForm.reset();
//   modalFormWrapp.classList.remove('form_visible');
// }

// buttonSubmit.addEventListener('click', () => {
//   bodyContainer.classList.add('hide');
// })




// *******************************************************************************************************************

// function validateForm() {
//   const nameValue = nameInput.value;
//   const phoneValue = phoneCheck.value;
//   const emailValue = emailCheck.value;
//   const messageValue = messageCheck.value;

//   if (nameValue.length <= 0) {
//     nameCheck.classList.add('red');
//   }
//   if (messageValue.length <= 0) {
//     messageCheck.classList.add('red');
//   }
//   if (phoneValue.length <= 0) {
//     phoneCheck.classList.add('red');
//   }
//   if (emailValue.length <= 0) {
//     emailCheck.classList.add('red');
//   }

//   if (nameValue.length > 0 && messageValue.length > 0 && phoneValue.length > 0 && emailValue.length > 0) {
//     if (!validateFields()) {
//       showMessage('Please fill in all fields correctly.');
//     } else {
//       sendForm();
//     }
//   } else {
//     showMessage('Please fill in all fields.');
//   }
// }

// function validateFields() {
//   const nameValue = nameCheck.value;
//   const messageValue = messageCheck.value;
//   const phoneValue = phoneCheck.value;
//   const emailValue = emailCheck.value;

//   const nameValidation = /^[A-Z][a-zA-Z]+$/;
//   const phoneValidation = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
//   const emailValidation = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

//   const isNameValid = nameValidation.test(nameValue);
//   const isPhoneValid = phoneValidation.test(phoneValue);
//   const isEmailValid = emailValidation.test(emailValue);

//   if (!isNameValid || !isPhoneValid || !isEmailValid) {
//     if (!isNameValid) {
//       nameCheck.classList.add('red_text');
//       nameCheck.classList.add('red');
//     } else {
//       nameCheck.classList.remove('red_text');
//       nameCheck.classList.remove('red');
//     }

//     if (!isPhoneValid) {
//       phoneCheck.classList.add('red_text');
//       phoneCheck.classList.add('red');
//     } else {
//       phoneCheck.classList.remove('red_text');
//       phoneCheck.classList.remove('red');
//     }

//     if (!isEmailValid) {
//       emailCheck.classList.add('red_text');
//       emailCheck.classList.add('red');
//     } else {
//       emailCheck.classList.remove('red_text');
//       emailCheck.classList.remove('red');
//     }

//     return false;
//   }

//   return true;
// }

// // function showMessage(message) {
// //   // Show the error message to the user
// //   console.log(message);
// // }

// // function sendForm() {
// //   const loader = document.createElement('div');
// //   loader.classList.add('loader');

// //   btn.textContent = '';
// //   btn.appendChild(loader);
// //   btn.style.boxShadow = 'none';
// //   btn.style.backgroundColor = '#EDEDF7';
// //   btn.style.color = '#323264';

// //   setTimeout(() => {
// //     btn.removeChild(loader);
// //     btn.textContent = 'Sent';
// //     let inputs = document.querySelectorAll('input');
// //     inputs.forEach((input) => (input.value = ''));
// //     let textareas = document.querySelectorAll('textarea');
// //     textareas.forEach((textarea) => (textarea.value = ''));
// //   }, 2000);

// //   setTimeout(() => {
// //     window.location.reload();
// //   }, 4000);
// // }
// const buttonSubmit = createElements('button', 'button', 'Submit');
// buttonSubmit.addEventListener('click', validateForm);


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
nameDiv.id = 'nameDiv';
const nameLabel = createLabel('Full Name:', 'fullName');
const nameInput = createInput('text', 'fullName', 'fullName');
nameInput.classList.add('form_check');
const namePar = createElements('p', 'err_txt', 'Please fill in full name!');

nameDiv.append(nameLabel, nameInput, namePar);
modalForm.append(nameDiv);


const cityDiv = createElements('div', 'input_holder');
cityDiv.id = 'cityDiv';
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

citySelect.options[0].selected = true;
citySelect.options[0].disabled = true;

cityDiv.append(cityLabel, citySelect, citySpan);
modalForm.append(cityDiv);

const postOfficeDiv = createElements('div', 'input_holder');
postOfficeDiv.id = 'postOfficeDiv';
postOfficeDiv.classList.add('post_office_div')
const postOfficeLabel = createLabel('post Office №:', 'postOffice');
const postOfficeInput = createInput('number', 'postOffice', 'postOffice');
postOfficeInput.classList.add('form_check');
postOfficeInput.min = '1';
const postOfficeSpan = createElements('p', 'err_txt', 'Please enter a number!');

postOfficeDiv.append(postOfficeLabel, postOfficeInput, postOfficeSpan);
modalForm.append(postOfficeDiv);

const radioDiv = createElements('div', 'input_holder');
radioDiv.id = 'radioDiv';
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
paymentMethodFieldset.id = 'paymentMethodFieldset';
paymentMethodFieldset.classList.add('input_holder');
const paymentMethodLegend = document.createElement('legend');
paymentMethodLegend.innerText = 'Payment Method:';

paymentMethodFieldset.append(paymentMethodLegend, postpaidInput, postpaidLabel, cardPaymentInput, cardPaymentLabel, radioSpan);
modalForm.append(paymentMethodFieldset);

const productsQuantityDiv = createElements('div', 'input_holder');
productsQuantityDiv.id = 'productsQuantityDiv';
const productsQuantityLabel = createLabel('Quantity of Products:', 'productsQuantity');
const productsQuantityInput = createInput('number', 'quantityOfProducts', 'productsQuantity');
productsQuantityInput.classList.add('form_check');
productsQuantityInput.min = '1';
const productsQuantitySpan = createElements('p', 'err_txt', 'Please enter a number!');

productsQuantityDiv.append(productsQuantityLabel, productsQuantityInput, productsQuantitySpan);
modalForm.append(productsQuantityDiv);

const orderCommentDiv = createElements('div', 'input_holder');
orderCommentDiv.id = 'orderCommentDiv';
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

    displayErrorRed(resultFormData);

    const selectedProduct = productsArray
      .flatMap((category) => category.products)
      .find((product) => product.name === selectedProductName);

    bodyContainer.classList.add('hide');
    displayOrderDetails(selectedProduct, resultFormData);
    console.log(resultFormData);
  }
});

const validationRules = [
  { input: 'city',
    colorError: 'cityDiv', 
    validations: 
      [
          {
              message: 'Please select one!',
              rule: 'required', 
          },
      ]
  },
  { input: 'postOffice',
    colorError: 'postOfficeDiv', 
    validations:
      [
          {
              message: 'Please enter only digits!',
              rule: '/^[0-9]+$/', 
          },
          {
            message: 'Please enter a number!',
            rule: 'required', 
          },
      ]
  },
  { input: 'quantityOfProducts',
    colorError: 'productsQuantityDiv', 
    validations:
      [
          {
              message: 'Please enter only digits!',
              rule: '/^[0-9]+$/', 
          },
          {
            message: 'Please enter a number!',
            rule: 'required', 
          },
      ]
  },
  { input: 'paymentMethod',
    colorError: 'paymentMethodFieldset', 
    validations:
      [
          {
            message: 'Please select one!',
            rule: 'required', 
          },
      ]
  },
  { input: 'commentOnTheOrder',
    colorError: 'orderCommentDiv', 
    validations:
      [
          {
            message: 'Please write your comment. No more than 100 symbols!',
            rule: 'required', 
          },
          {
            message: 'This is more than 100 symbols!',
            rule: 'maxLength', 
          },
      ]
  },
  { input: 'fullName',
    colorError: 'nameDiv', 
    validations:
  [
      {
          message: 'Please enter full name!',
          rule: 'required', 
      },
      {
          message: 'Please enter only alphabets and spaces!',
          rule: '/^[a-zA-Z\s]+$/', 
      }
  ]
  },
]


function displayErrorRed(formData) {
  Object.keys(formData).forEach((objectKey) => {
    const validationData = validationRules.filter((object) => object.input === objectKey);
    console.log(validationData);
  })
}

function displayOrderDetails(productInfo, formData) {
  const container = createElements('div', 'card_container');
  container.innerHTML = `
    <div>
      <div>Product Information:</div>
      ${generateKeyValueRows(productInfo)}
    </div>
    <div>
      <div>Order Information:</div>
      ${generateKeyValueRows(formData)}
    </div>
  `;

  modalForm.reset();
  removeAllVisible();
  modalFormWrapp.classList.remove('form_visible');
  document.body.append(container);
}

function generateKeyValueRows(data) {
  const keyMappings = {
    name: 'Name:',
    price: 'Price:',
    description: 'Description:',
    'Full Name': 'Full Name:',
    City: 'City:',
    'Post Office': 'Post Office:',
    paymentMethod: 'Payment Method:',
    'Quantity of Products': 'Quantity of Products:',
    'Comment on the Order': 'Comment on the Order:'
  };

  return Object.entries(data)
    .map(([key, value]) => {
      const displayKey = keyMappings[key] || key;

      if (key === 'image') {
        return `<div><img class='image_display' src="./images/${value}" alt="Product Image"></div>`;
      } else {
        return `<div><span class="span_space">${displayKey}</span><span>${value}</span></div>`;
      }
    })
    .join('');
}

function validateInputs(modalForm){
let inputs = modalForm.querySelectorAll('.form_check');
let valid = [];
let radioCheck = false;
inputs.forEach(function(i){
  if(i.hasAttribute('type')){
    checkAttr = i.getAttribute('type');
          console.log(checkAttr);
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