const parse = (data) => JSON.parse(data);

function requestData(method, url, callback) {
  const childrenNames = new XMLHttpRequest();

  childrenNames.open(method, url);

  childrenNames.addEventListener('readystatechange', () => {
    if (childrenNames.readyState === 4 && childrenNames.status === 200) {
      const data = parse(childrenNames.responseText);
      callback(data);
    }
  });

  childrenNames.send();
}

requestData('GET', 'children/data.json', (data) => {
  requestData('GET', 'children/data2.json', (data2) => {
    const combinedChildren = data.children.concat(data2.children);
    console.log(combinedChildren);
  });
});
