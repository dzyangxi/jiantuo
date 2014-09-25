var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//Employee
var EmployeeSchema = new Schema({
	name: String,
	birthday: Date,
	phone: String,
	address: String
},{collection:"HR.Employee"});

//Department
var DepartmentSchema = new Schema({	
	name: String,
	memberIds: [Schema.Types.ObjectId],
	parentId: Schema.Types.ObjectId
},{collection:"HR.Department", _id:1, autoIndex:false});

module.exports = {
	getEmployeeModel: function(connection){
		return connection.model("Employee", EmployeeSchema);
	},

	getDepartmentModel: function(connection){
		return connection.model("Department", DepartmentSchema);
	}
};