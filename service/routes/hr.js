var hrApp = function(app){
	/************************
		Ajax cross domain
	*************************/
	app.all('/department*', function(req, res, next) {
	    res.header("Access-Control-Allow-Origin", "*");
	    res.header("Access-Control-Allow-Headers", "X-Requested-With");
	    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	    res.header("X-Powered-By",' 3.2.1')
	    res.header("Content-Type", "application/json;charset=utf-8");
	    next();
	});
	app.all('/employee*', function(req, res, next) {
	    res.header("Access-Control-Allow-Origin", "*");
	    res.header("Access-Control-Allow-Headers", "X-Requested-With");
	    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	    res.header("X-Powered-By",' 3.2.1')
	    res.header("Content-Type", "application/json;charset=utf-8");
	    next();
	});

	/****************
		Employee
	******************/
	//list
	app.get("/employee", function(req, res){
		console.log("/employee");

		app.hrAdpt.Employee_all(function (error,results) {
			res.send(results);
		})
	})

	//list
	app.get('/HRAdapter/Employee', function (req, res) {
		var mongoose = require("mongoose"),
			connection = mongoose.createConnection("mongodb://localhost/jiantuo"),
			Adpt = require("../models/HRAdapter.js").create(connection),
			re = '';

		Adpt.Employee_all(function (json) {
			re = json;
			res.send(re);
		})
	});

	//new post
	app.post('/HRAdapter/Employee/:name/:date/:phone/:address', function (req, res) {
		var mongoose = require("mongoose"),
			connection = mongoose.createConnection("mongodb://localhost/jiantuo"),
			Adpt = require("../models/HRAdapter.js").create(connection),
			employee = {
				"name": req.params.name,
				"birthday":req.params.date,
				"phone": req.params.phone,
				"address": req.params.address
			};

		Adpt.Employee_insert(employee);
		res.end();
	});

	/******************
		Department
	*******************/
	//tree
	app.get("/department", function(req, res){
		app.hrAdpt.Department_tree(function (tree) {
			res.send(tree);
		});
	})

	//tree
	app.get('/HRAdapter/Department', function (req, res) {
		var mongoose = require("mongoose"),
			connection = mongoose.createConnection("mongodb://localhost/jiantuo"),
			Adpt = require("../models/HRAdapter.js").create(connection),
			re = '';

		Adpt.Department_tree(function (json) {
			re = json;
			res.send(re);
		});
	});

	app.post('/HRAdapter/Department', function (req, res) {
		var mongoose = require("mongoose"),
			connection = mongoose.createConnection("mongodb://localhost/jiantuo"),
			Adpt = require("../models/HRAdapter.js").create(connection),
			department = {
				"name" : req.body.name
			};

		Adpt.Department_insert(department);
		res.end();
	});

}

module.exports = hrApp;