var express = require('express');
var app = express();

	app.set('view engine', 'pug');

	app.use(express.static('public'));
	app.use(express.static('node_modules'));

app.get('/',function(req,res){

	res.render('index');

});

app.get('/signup',function(req,res){

	res.render('index');

});

app.get('/signin', function(req,res){

		res.render('index');
});

app.listen(3000, function(err){
		if (err) {
				process.exit(1);
				return console.log('Something is wrong about the conection. :/');
		}
	
		console.log('Listening on port 3000');

});
