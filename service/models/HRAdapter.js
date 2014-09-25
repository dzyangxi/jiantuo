var Employee ;
var Department;
var HRAdapter = function(connection){
	this.connection = connection;

	Employee = require("./HRModels").getEmployeeModel(this.connection);	

	Department = require("./HRModels").getDepartmentModel(this.connection);	
	
}



HRAdapter.prototype.Employee_insert = function(employee, callback){
	var newEmployee = new Employee(employee);
	newEmployee.save(function(error, employee){
		callback(error, employee);
	})
}

HRAdapter.prototype.Employee_findById = function(id, callback){
	Employee.findById(id, function(error,employee){
		callback(error, employee);
	});
}

HRAdapter.prototype.Employee_all = function(callback){
	Employee.find(
		{}, 
		function(error,results){
			callback(error, results);
		}
	)
}

HRAdapter.prototype.Department_insert = function(department, callback){
	var newDepartment = new Department(department);
	newDepartment.save(function(error, department){
		callback(error, department);
	});
}

HRAdapter.prototype.Department_update = function(department){
	Department.update(department, function(error, department){
		callback(error, department);
	});
}

HRAdapter.prototype.Department_tree = function(callback){
	Department.find(
		{

		},

		function(error, results){
			//console.log(results);
			// map AccountTitle by AccountTitle.Code
			var deptMap = new Array();
			for(var i=0; i<results.length; i++){
				deptMap[results[i]._id] = results[i];
			}
			//console.log(titleMap["1002"]);

			// link to the parent node
			for(var j=0; j<results.length; j++){
				var parentId = results[j].parentId;
				if(parentId){					
					var parent = deptMap[parentId];
					
					if(parent){
						if(parent.children){
							parent.children.push(results[j]);
						}else{								
							parent.children = [results[j]];
						}
						//console.log(parent.children);
					}
				}
			}
			
			//output
			var str = "";
			for(var k=0; k<results.length; k++){
				if(!results[k].parentId){
					str += toJsonTree(results[k]) + ',';	
				}					
			}
			//console.log(str.substring(0, str.length-1));
			//return str.substring(0, str.length-1);
			callback(str.substring(0, str.length-1));
	});
}

function toJsonTree(node){
	var str = '{"name":"' + node.name + '"';
	if(node.children){
		str += ', "children":[';
		for(var i=0; i<node.children.length; i++){
			str += toJsonTree(node.children[i]);
			if(i!==node.children.length-1){
				str += ',';
			}
		}
		str += ']';
	}
	str += '}';
	return str;
}

module.exports = {
	create: function(connection){
		return new HRAdapter(connection);
	}
}