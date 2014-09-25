var mongoose = require("mongoose");
var connection = mongoose.createConnection("mongodb://localhost/jiantuo");

var pmAdpt = require("./PMAdapter").create(connection);

var project = {
	name:"润和原筑1-9-11",
	contractId: null,
	managerId: null,
	architectId: null,
	customerName: "曹尚平",
	customerPhone: "13980575989",
	managerName: "刘南兵",
	architectName: "王威",
	commencementDate: new Date(2014,07,26),
	materials:[
		{name: "砖",   deliveryTime: new Date(2014,07,27), quantity: 10000, amount: 5000, memo: "改墙"},
		{name: "地板", deliveryTime: new Date(2014,07,27), quantity: 135, amount: 15000, memo: "升达"}
	]
}

pmAdpt.Project_insert(project);


