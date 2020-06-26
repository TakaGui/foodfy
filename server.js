const express = require('express');
const nunjucks = require('nunjucks');

const recipesData = require('./data');

const server = express();

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
  express: server,
  autoescape: false,
});

server.get('/', function(request, response) {
  return response.render('home', { recipes: recipesData });
});

server.get('/recipes', function(request, response) {
  return response.render('recipes', { recipes: recipesData });
});

server.get('/recipes/:index', function(request, response) {
  const recipes = [...recipesData];
  const recipeIndex = request.params.index;
  
  return response.send(recipes[recipeIndex]);
});

server.get('/about', function(request, response) {
  return response.render('about');
});

server.listen(5000, function() {
  console.log('🍙 server is running.');
});