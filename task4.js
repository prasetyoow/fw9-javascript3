import fetch from 'node-fetch';

async function getData(){
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const body = await response.json();
  
  for (let i = 0; i < body.length; i++) {
      console.log(body[i].name)
  }

}
getData()


// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then(data => {
//   data.map(value => {
//       console.log(value.name)
//   })
// })
// .catch((error) => {
//   console.error('Error:', error);
// });