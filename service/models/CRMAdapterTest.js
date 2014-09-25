var mongoose = require("mongoose");
var connection = mongoose.createConnection("mongodb://localhost/jiantuo");

var crmAdpt = require("./CRMAdapter").create(connection);

/*
var customers = [
	{
		name:"内电总厂1",		
		companyName:"内电总厂1",
		personName:"厂长姓名1",
		address: "白马镇1",
		phone: "0832-6862341",
		email: "njpp@huadian.cn1",
		qq: "厂长QQ1",
		website:"www.njpp.cn1"
	},
	{
		name:"内电总厂2",		
		companyName:"内电总厂2",
		personName:"厂长姓名2",
		address: "白马镇2",
		phone: "0832-6862342",
		email: "njpp@huadian.cn2",
		qq: "厂长QQ2",
		website:"www.njpp.cn2"
	},
	{
		name:"朱万才",		
		companyName:"内电总厂",
		personName:"朱万才",
		address: "白马镇",
		phone: "13629002602",
		email: "zwc@163.com",
		qq: "895108120",
		website:"zwc.qzone.com"
	}
]


customers.forEach(function(customer, index, obj){
	crmAdpt.Customer_insert(customer);
});


crmAdpt.Customer_all(function(error,results){
	results.forEach(function(customer, index, obj){
		console.log(customer);
	})
});
*/

/*
var contracts = [
	{sn:"JT201408001",customerId: null, employeeId: null, refConstractId: null,	signingDate: new Date(2014,07,26), contractObject: "润和原筑 1-9-11", amount: 50001, variantAmount:[45000], deposit: 15001, balance: 5000, progressPayment: [10000, 10000, 10000], memo:"田园风格1"},
	{sn:"JT201408002",customerId: null, employeeId: null, refConstractId: null,	signingDate: new Date(2014,07,26), contractObject: "润和原筑 1-9-12", amount: 50002, variantAmount:[45000], deposit: 15002, balance: 5000, progressPayment: [10000, 10000, 10000], memo:"田园风格2"},
	{sn:"JT201408003",customerId: null, employeeId: null, refConstractId: null,	signingDate: new Date(2014,07,26), contractObject: "润和原筑 1-9-13", amount: 50003, variantAmount:[45000], deposit: 15003, balance: 5000, progressPayment: [10000, 10000, 10000], memo:"田园风格3"}

]

contracts.forEach(function(contract, index, obj){
	crmAdpt.Contract_insert(contract);
})
*/

crmAdpt.Contract_findBySN(
	"JT201408001",
	function(error, results){
		if (error) {
			return console.error(error);
		} else {
			results.forEach(function(contract, index, obj){
				console.log(contract);
			})
		}	
		
	}
);