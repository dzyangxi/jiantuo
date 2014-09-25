var Customer;
var Contract;

var CRMAdapter = function(connection){
	this.connection = connection;
	Customer = require("./CRMModels").getCustomerModel(this.connection);
	Contract = require("./CRMModels").getContractModel(this.connection);
}

CRMAdapter.prototype.Customer_insert = function(customer, callback){
	var newCustomer = new Customer(customer);
	newCustomer.save(function(error, customer){
		callback(error, customer);
	});		
}

CRMAdapter.prototype.Customer_all = function(callback){
	Customer.find(
		{},
		function(error, results){
			callback(error,results);				
		}
	);
}

CRMAdapter.prototype.Contract_insert = function(contract, callback){
	var newContract = new Contract(contract);
	newContract.save(function(error, contract){
		callback(error, contract);
	});
}

CRMAdapter.prototype.Contract_findBySN = function(sn, callback){
	Contract.findOne(
		{sn:sn},
		function(error, contract){
		callback(error, contract);
	});
}

module.exports = {
	create: function(connection){
		return new CRMAdapter(connection);
	}
}