var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/signin', function(){

	title('%o - Signin');

	var main = document.getElementById('main-container');

  empty(main).appendChild(template);
});
