var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CustomerSchema = new Schema({
	name: String,//个人类型客户：个人姓名，公司类型客户：公司名称
	companyName: String,//公司名称
	personName: String,// 个人名称
	address: String,//个人或公司地址
	phone: String,//个人或公司电话
	email: String,//个人或公司Email
	qq: String,//个人或公司QQ
	website: String//个人或公司网站
},{collection:"CRM.Customer"});

var ContractSchema = new Schema({
	sn:String,//合同编号
	customerId: Schema.Types.ObjectId,//客户Id
	employeeId: Schema.Types.ObjectId,//项目经理Id，用于内部分包
	refConstractId: Schema.Types.ObjectId,//合同参考，内部分包时参考的外部合同
	signingDate: Date,//合同日期
	contractObject: String,//合同标的物
	amount: Number,//合同金额
	variantAmount:[Number],//各种金额变换
	deposit: Number,//订金
	balance: Number,//尾款
	progressPayment: [Number],//各进度款
	memo:String
},{collection:"CRM.Contract"});

module.exports = {
	getCustomerModel: function(connection){
		return connection.model("Customer", CustomerSchema);
	},

	getContractModel: function(connection){
		return connection.model("Contract", ContractSchema);
	}
}
