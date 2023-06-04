const obj = {
  x:10, 
  y:20, 
  inner: {
    x:20, 
    z:30
  }, 
  foo2: {
    k:23, 
    p:13
  }
};

function convert(obj) {
  const newObj = {};

  for(let key in obj) {
    if(typeof obj[key] === 'object') {
      Object.assign(newObj, convert(obj[key]));
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

const resultObj = convert(obj);
console.log(resultObj);

// function convert(obj) {
//   const newObj = {};

//   for(let key in obj) {
//     if(typeof obj[key] === 'object') {
//       Object.assign(newObj, obj[key]);
//     } else {
//       newObj[key] = obj[key];
//     }
//   }
//   return newObj;
// }

// const resultObj = convert(obj);
// console.log(resultObj);
  