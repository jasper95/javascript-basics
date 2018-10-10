const fetch = require('node-fetch');

(async() => {
  const post = await fetch('http://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json());
  const user = await fetch('http://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json());
  console.log(post, user);
})()