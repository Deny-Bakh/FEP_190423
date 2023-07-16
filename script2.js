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
  
        // product.addEventListener('click', () => checkProductVisible(value.name, '.product_info'));
        // button.addEventListener('click', () => {
        //   alert(`You bought ${value.name}`);
        //   removeAllVisible()
        // });
  
        // product.addEventListener('click', () => checkProductVisible(value.name, '.product_info'));
        product.addEventListener('click', () => {
          selectedProductName = value.name; // Store the selected product name
          checkProductVisible(value.name, '.product_info');
        });
        button.addEventListener('click', () => {
          modalFormWrapp.classList.add('form_visible');
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
  // modalFormWrapp.id = 'modalFormWrapp';
  
  document.body.append(modalFormWrapp);
  
  const modalForm = createElements('form', 'modal_form');
  
  modalFormWrapp.append(modalForm);
  
  const nameLabel = createLabel('Full Name:', 'fullName');
  const nameInput = createInput('text', 'Full Name', 'fullName', true);
  nameInput.classList.add('form_check');
  
  modalForm.append(nameLabel, nameInput);
  
  const cityLabel = createLabel('City:', 'city');
  const citySelect = document.createElement('select');
  citySelect.name = 'City';
  citySelect.id = 'city';
  citySelect.required = true;
  const cityOptions = ['Select', 'Kyiv', 'Kharkiv', 'Lviv', 'Lutsk'];
  
  cityOptions.forEach((city) => {
    const cityVar = document.createElement('option');
    cityVar.classList.add('form_check');
    cityVar.value = city;
    cityVar.innerText = city;
  
    citySelect.append(cityVar);
  })
  
  citySelect.options[0].disabled = true;
  
  modalForm.append(cityLabel, citySelect);
  
  const postOfficeLabel = createLabel('Post Office №:', 'postOffice');
  const postOfficeInput = createInput('number', 'Post Office', 'postOffice', true);
  postOfficeInput.classList.add('form_check');
  postOfficeInput.min = '1';
  
  modalForm.append(postOfficeLabel, postOfficeInput);
  
  const postpaidLabel = createLabel('Postpaid', 'postpaid');
  const postpaidInput = createInput('radio', 'paymentMethod', 'postpaid');
  postpaidInput.classList.add('form_check');
  postpaidInput.value = 'postpaid';
  
  const cardPaymentLabel =  createLabel('Card Payment', 'cardPayment');
  const cardPaymentInput = createInput('radio', 'paymentMethod', 'cardPayment');
  cardPaymentInput.classList.add('form_check');
  cardPaymentInput.value = 'cardpayment';
  
  const paymentMethodFieldset = document.createElement('fieldset');
  paymentMethodFieldset.classList.add('radiocheck');
  const paymentMethodLegend = document.createElement('legend');
  paymentMethodLegend.innerText = 'Payment Method:';
  paymentMethodFieldset.append(paymentMethodLegend, postpaidInput, postpaidLabel, cardPaymentInput, cardPaymentLabel);
  
  modalForm.append(paymentMethodFieldset);
  
  const productsQuantityLabel = createLabel('Quantity of Products:', 'productsQuantity');
  const productsQuantityInput = createInput('number', 'Quantity of Products', 'productsQuantity', true);
  productsQuantityInput.classList.add('form_check');
  productsQuantityInput.min = '1';
  
  modalForm.append(productsQuantityLabel, productsQuantityInput);
  
  const orderCommentLabel = createLabel('Comment on the Order:', 'orderComment');
  const orderCommentTextarea = document.createElement('textarea');
  orderCommentTextarea.name = 'Comment on the Order';
  orderCommentTextarea.classList.add('form_check');
  orderCommentTextarea.id = 'orderComment';
  orderCommentTextarea.required = true;
  orderCommentTextarea.rows = '5';
  orderCommentTextarea.cols = '100';
  
  modalForm.append(orderCommentLabel, orderCommentTextarea);
  
  const buttonSubmit = createElements('button', 'button', 'Submit');
  buttonSubmit.type = 'submit';
  
  const buttonCancel = createElements('button', 'button', 'Cancel');
  
  modalForm.append(buttonSubmit, buttonCancel);
  
  buttonCancel.addEventListener('click', () => {
    modalFormWrapp.classList.remove('form_visible');
  })
  
  nameInput.addEventListener('input', validationName);
  
  // function validateForm(){
  //   const nameValue = nameInput.value;
  //   const messageValue = orderCommentTextarea.value;
  //   const productsQuantityValue = productsQuantityInput.value;
  //   const postOfficeValue = postOfficeInput.value;
  //   const radioButtons = document.getElementsByName('paymentMethod');
  
  //   const isChecked = false;
  //   for (var i = 0; i < radioButtons.length; i++) {
  //     if (radioButtons[i].checked) {
  //       isChecked = true;
  //       break;
  //     }
  //   }
    
  //   if (!isChecked) {
  //     alert("Please select a checkbox.");
  //     return false;
  //   }
  
  // if(nameValue.length<=0){
  //   nameInput.classList.add('red');
  //   return false;
  // }
  // if(messageValue.length<=0){
  //   orderCommentTextarea.classList.add('red');
  //   return false;
  // }
  // if(productsQuantityValue.length<=0){
  //   productsQuantityInput.classList.add('red');
  //   return false;
  // }
  // if(postOfficeValue.length<=0){
  //   postOfficeInput.classList.add('red');
  //   return false;
  // }
  // return true;
  // }
  
  modalForm.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const nameValue = document.getElementById('fullName').value;
    const messageValue = document.getElementById('orderComment').value;
    const productsQuantityValue = document.getElementById('productsQuantity').value;
    const postOfficeValue = document.getElementById('postOffice').value;
  
    bodyContainer.classList.add('hide');
  
    const modalForm = event.target;
  
    const formData = new FormData(modalForm);
    const resultFormData = Object.fromEntries(formData);
  
    let isChecked = false;
    for (let i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].checked) {
        isChecked = true;
        break;
      }
    }
    
    if (!isChecked) {
      alert("Please select a checkbox.");
      return false;
    }
  
    if (nameValue.length <= 0) {
      nameInput.classList.add('red');
      console.log(nameInput);
    }
    if (messageValue.length <= 0) {
      orderCommentTextarea.classList.add('red');
    }
    if (productsQuantityValue.length <= 0) {
      productsQuantityInput.classList.add('red');
    }
    if (postOfficeValue.length <= 0) {
      postOfficeInput.classList.add('red');
    }
  
    createTable(resultFormData);
  })
  
  function validationName(){
    const nameValue = nameInput.value;
    if(nameValue.length>0){
        const nameValidation = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
        const result = nameValidation.test(nameValue);
        if (result === false){
          nameInput.classList.add('red_text');
          nameInput.classList.add('red');
        }
        else {
          nameInput.classList.remove('red_text');
          nameInput.classList.remove('red');
        }
    }
  }
  
  const createTable = (formData) => {
    const table = document.createElement('table');
  
    const productNameLabel = document.createElement('td');
    productNameLabel.innerText = 'Selected Product';
    const productNameValue = document.createElement('td');
    productNameValue.innerText = selectedProductName;
    const productRow = document.createElement('tr');
    productRow.append(productNameLabel, productNameValue);
    table.append(productRow);
  
    Object.keys(formData).forEach((key) => {
      const itemName = document.createElement('td')
      itemName.innerText = key;
  
      const itemValue = document.createElement('td')
      itemValue.innerText = formData[key];
  
      const row = document.createElement('tr')
      row.append(itemName, itemValue)
      table.append(row)
    
      modalFormWrapp.classList.add('hide')
      document.body.append(table)
    })
  }