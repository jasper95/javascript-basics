const fetch = require('node-fetch')

const recursiveFetch = (delay=3000) => {
  console.log('executing fetch')
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
    .then(() => new Promise((resolve) => setTimeout(resolve, delay)))
    .then(recursiveFetch)
}

recursiveFetch()