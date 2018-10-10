const Promise = require('bluebird');
const fetch = require('node-fetch');

Promise.coroutine(function* () {
  const post = yield fetch('http://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json());
  const user = yield fetch('http://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json());
  console.log(post, user);
})();