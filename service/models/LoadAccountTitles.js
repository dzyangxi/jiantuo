var mongoose = require("mongoose");
var connection = mongoose.createConnection("mongodb://localhost/jiantuo");

var accountAdpt = require("./AccountAdapter").create(connection);


var titles = [
	
	{code:"1001", name:"库存现金", desc:"是指单位为了满足经营过程中零星支付需要而保留的现金，对库存现金进行监督盘点，可以确定库存现金的真实存在性和库存现金管理的有效性，对于评价企业的内控制度将起到积极作用。"},
	{code:"1002", name:"银行存款", desc:"银行存款是指企业存放在银行和其他金融机构的货币资金。"},
	{code:"1003", name: "存放中央银行款项", desc:"银行专用  	（Due from Central Bank） 是指各金融企业在中央银行开户而存入的用于支付清算、调拨款项、提取及缴存现金、往来资金结算以及按吸收存款的一定比例缴存于中央银行的款项和其他需要缴存的款项。"},
	
	{code:"2001", name:"短期借款", desc:""},
	{code:"2201", name:"应付票据", desc:""},
	{code:"2202", name:"应付账款", desc:""},
	{code:"220201", name:"主要供应商", desc:""},
	{code:"22020101", name:"沈阳钢铁厂", desc:""},
	{code:"22020102", name:"深圳贸易公司", desc:""},
	{code:"2203", name:"预收账款", desc:""},

	{code:"3101", name:"衍生工具", desc:""},

	{code:"4001", name:"实收资本", desc:""},

	{code:"5001", name:"生产成本", desc:""},

	{code:"6001", name:"主营业务收入", desc:""},
	{code:"600101", name:"电子销售", desc:""}
];


titles.forEach(function(accountTitle, index, object){
	accountAdpt.AccountTitle_insert(accountTitle, function(error, accountTitle){
		console.log(accountTitle);
	});
});