var accountApp = function(app){
	/************************
		Ajax cross domain
	*************************/
	app.all('/accounttitle*', function(req, res, next) {
	    res.header("Access-Control-Allow-Origin", "*");
	    res.header("Access-Control-Allow-Headers", "X-Requested-With");
	    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	    res.header("X-Powered-By",' 3.2.1')
	    res.header("Content-Type", "application/json;charset=utf-8");
	    next();
	});

	
	/**************************
			AccountTitle
	***************************/
	//AccountTitle tree
	app.get("/accounttitle", function(req, res){
		app.accountAdpt.accountTitleTree(function(tree){
			res.send(tree);
		})
	});

	//AccountTitle object tree
	app.get("/accounttitleobject", function(req, res){
		app.accountAdpt.allAccountTitleTree(function(tree){
			res.send(tree);
		})
	});	

	//AccountTitle By Code
	app.get('/accounttitle/:code', function (req, res) {
		app.accountAdpt.AccountTitle_findByCode(req.params.code, function(error, accountTitle){
			res.send(accountTitle);
		})
	});


	app.get('/AccountAdapter/:code', function (req, res) {
		var mongoose = require("mongoose"),
			connection = mongoose.createConnection("mongodb://localhost/jiantuo"),
			Adpt = require("../models/AccountAdapter.js").create(connection),
			re = '';

		Adpt.accountTitleOne(req.params.code, function (json) {
			console.log(json);
			re = json;
			res.send(re);
		});
	});

	app.get('/accountAdapter', function (req, res) {
		var mongoose = require("mongoose"),
			connection = mongoose.createConnection("mongodb://localhost/jiantuo"),
			Adpt = require("../models/AccountAdapter.js").create(connection),
			re = '';

		Adpt.accountTitleTree(function (json) {
			console.log(json);
			re = json;
			res.send(re);
		});	
	});

	

	app.get('/AllAccountAdapter', function (req, res) {
		var mongoose = require("mongoose"),
			connection = mongoose.createConnection("mongodb://localhost/jiantuo"),
			Adpt = require("../models/AccountAdapter.js").create(connection),
			re = '';

		Adpt.allAccountTitleTree(function (json) {
			re = json;
			res.send(re);
		});	
	});
	
};


module.exports = accountApp;