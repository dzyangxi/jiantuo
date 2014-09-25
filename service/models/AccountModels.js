var mongoose = require("mongoose");
var Schema = mongoose.Schema;


// AccountTitle 会计科目
var AccountTitleSchema = new Schema({
	code: String, //科目代码
	name: String, //科目名称	
	idxNum: Number, //排序值
	direction: Number, //余额方向
	mnemonicCode: String, //助记码
	desc: String //科目解释
},{collection:"Account.Title"})


//AccountDocument 会计凭证
var AccountDocumentSchema = new Schema({
	filterCode: String,//应用程序设置的用于过滤的值，如:职工月工资可每月一个AccountDocument，所有职工的工资条目将关联到此AccountDocument
	documentDate: Date,//日期
	subject: String//内容
},{collection:"Account.Document"})

//AccountEntry 会计分录
var AccountEntrySchema = new Schema({
	accountDocument: Schema.Types.ObjectId,//凭证Id	
	entryDate: Date,//分录日期
	titleCode: String,//科目
	direction:Number,//余额方向
	amount: Number,//金额
	amountMap: [{
		key: String,//金额分解分量key
		value: Number//金额分解分量value
	}],//
	descriptions: String,//摘要
	refObjectType:String,//参考对象类型
	refObjectId: Schema.Types.ObjectId//参考对象Id
},{collection:"Account.Entry"});

module.exports = {
	getAccountTitleModel: function (connection){
		return connection.model("AccountTitle", AccountTitleSchema);
	},

	getAccountDocumentModel: function(connection){
		return connection.model("AccountDocument", AccountDocumentSchema);
	},

	getAccountEntryModel: function (connection){
		return connection.model("AccountEntry", AccountEntrySchema);
	}
};
