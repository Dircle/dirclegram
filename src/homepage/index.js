var page = require('page');
var head = require('./head');
var content = require('./content');
var empty = require('empty-element');
var header = document.getElementById('main-header');
var body = document.getElementById('main-container');

page('/',function(ctx,next){

		header.appendChild(head);

		var num  = [
			{
				user : {
					username : 'Lordking',
					avatar : 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/p160x160/1965059_10203063742210282_2092283534_n.jpg?oh=7aa09a5053f3067f4626e38461922053&oe=583A3343&__gda__=1480895836_72101e4c4a1e76c9508729e0c74abe69'
				},
				url : 'office.jpg',
				likes : 1,
				liked : false,
				created_at: new Date()
			},
			{
				user : {
					username : 'Dircle',
					avatar : 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/p160x160/1965059_10203063742210282_2092283534_n.jpg?oh=7aa09a5053f3067f4626e38461922053&oe=583A3343&__gda__=1480895836_72101e4c4a1e76c9508729e0c74abe69'
				},
				url : 'office.jpg',
				likes : 1024,
				liked : false,
				created_at : new Date().setDate(new Date().getDate() - 10)
			}
		];

	 empty(body).appendChild(content(num));
});
