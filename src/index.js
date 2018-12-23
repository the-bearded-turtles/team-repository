/**
 * es6 modules and imports
 */
import sayHello from './hello';
sayHello('World');

/**
 * require style imports
 */
const $ = require('jquery');

const {getMovies} = require('./api.js');

getMovies().then(() => {
/*
BELOW CODE IS NOW LOCATED WITHIN API.JS

console.log('Here are all the movies:');
  movies.forEach(({title, rating, id}) => {
    console.log(`#${id} - ${title} - Rating: ${rating}`);
  });
  */
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.');
  console.log(error)
});
