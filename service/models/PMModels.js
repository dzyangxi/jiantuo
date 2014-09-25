var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
	name:String,//项目名称
	contractId: Schema.Types.ObjectId,//主合同
	managerId: Schema.Types.ObjectId,//项目经理
	architectId: Schema.Types.ObjectId,//设计师
	customerName: String,//客户名称
	customerPhone: String,//客户电话
	managerName: String,//项目经理名称
	architectName: String,//设计师名称
	commencementDate: Date,//开工日期
	materials:[{ //材料领用		｛
		name: String,//材料名
		deliveryTime: Date,//领用日期
		quantity: Number,//领用数量
		amount: Number,//领用金额
		memo: String //备注
	}]

},{collection:"PM.Project"});

module.exports = {
	getProjectModel: function(connection){
		return connection.model("Project", ProjectSchema);
	}
}
