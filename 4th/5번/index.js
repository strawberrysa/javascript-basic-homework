// 여기에 1번 문제의 답을 작성하세요.
// fetch('https://dummyjson.com/products')
//   .then(res => res.json())
//   .then(console.log);

async function getData() {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();
  return data;
}
getData();

// 여기에 2번 문제의 답을 작성하세요.

// fetch('https://dummyjson.com/products/add', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     title: 'BMW Pencil',
//     /* other product data */
//   })
// })
//   .then(res => res.json())
//   .then(console.log);

async function getData() {
  const response = await fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: 'BMW Pencil',
      /* other product data */
    })
  })
  const home = await response.json();
  console.log(home);
}
getData()