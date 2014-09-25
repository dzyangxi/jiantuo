var pmApp = function(app){
	/***********************
			Project
	************************/
	//list
	app.get("/project", function(req, res){
		app.projectAdpt.Project_all(function(error, projects){
			res.send(projects);
		});
	})
	//list
	app.get('/PMAdapter/project', function (req, res) {
		var mongoose = require("mongoose"),
			connection = mongoose.createConnection("mongodb://localhost/jiantuo"),
			Adpt = require("../models/PMAdapter.js").create(connection);
			re = '';

		Adpt.Project_all(function (json) {
			re = json;
			res.send(json);
		});
	});

	//project get
	app.get('/project/:id', function (req, res) {
		app.projectAdpt.Project_findById(req.params.id, function (error, project) {
			res.send(project);
		});
	});

	app.get('/PMAdapter/project/:id', function (req, res) {
		var mongoose = require("mongoose"),
			connection = mongoose.createConnection("mongodb://localhost/jiantuo"),
			Adpt = require("../models/PMAdapter.js").create(connection);
			re = '';

		Adpt.Project_Byid(req.params.id, function (json) {
			re = json;
			res.send(json);
		});
	});

	app.post('/PMAdapter/project', function (req, res) {
		var mongoose = require("mongoose"),
			Schema = mongoose.Schema,
			connection = mongoose.createConnection("mongodb://localhost/jiantuo"),
			Adpt = require("../models/PMAdapter.js").create(connection),
			project = {
				name: req.body.name,
				contractId: Schema.Types.ObjectId,//主合同
				managerId: Schema.Types.ObjectId,//项目经理
				architectId: Schema.Types.ObjectId,//设计师
				customerName: req.body.customerName,//客户名称
				customerPhone: req.body.customerPhone,//客户电话
				managerName: req.body.managerName,//项目经理名称
				architectName: req.body.architectName,//设计师名称
				commencementDate: new Date(req.body.commencementDate),//开工日期
				materials:[{ //材料领用		｛
					name: null,//材料名
					deliveryTime: null,//领用日期
					quantity: null,//领用数量
					amount: null,//领用金额
					memo: null //备注
				}]
			};

		Adpt.Project_insert(project);
		res.end();
	});

	

	app.post('/PMAdapter/project/material/:id', function (req, res) {
		var mongoose = require("mongoose"),
			connection = mongoose.createConnection("mongodb://localhost/jiantuo"),
			Adpt = require("../models/PMAdapter.js").create(connection),
			re = '',
			material = {
				name: req.body.name,//材料名
				deliveryTime: new Date(req.body.deliveryTime),//领用日期
				quantity: req.body.quantity,//领用数量
				amount: req.body.amount,//领用金额
				memo: req.body.memo 
			};
		Adpt.Project_Byid_update(req.params.id, material);
		res.end();
	})
}

module.exports = pmApp;