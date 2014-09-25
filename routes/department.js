
//部门
module.exports = function  (app) {
	
	var mongoose = require('mongoose'),
		Department = mongoose.models.Department,
		api = {};

	//ALL
	api.departments = function  (req,res) {
		
		Department.find(function(err,results){
			if (err) {
				res.json(500,err);
			}else{
				// res.json({posts:posts});
				// console.log(results);
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
				// console.log({departments:str});
				res.json({departments:str});
			};
		});
	};

	
	//create
	//POST
	api.createNewDepartment = function  (req,res) {
		console.log('body:'+req.body);

		Department.create(req.body,function  (err,entity) {
			if (!err) {
				return res.json(201,entity);
			}else{
				res.json(500,err);
			};
		});
	};

	//Find One
	//GET
	api.findDepartmentByID = function (req,res) {
		var id = req.params.id;
		User.findOne({'_id':id},function (err,user){
			if (err) {
				res.json(404,err);
			}else{
				res.json(user);
			};
		});
	};

	//update
	//PUT
	api.updateDepartmentByID = function (req,res){
		var id = req.params.id;

		Department.findByIdAndUpdate({'_id':id},req.body,function(err){
			if (!err) {
				res.json(200);
			}else{
				res.json(500,err);
			};
		});
	};


	//delete
	api.deleteDepartmentByID = function(req,res){
		var id = req.params.id;

		Department.findOneAndRemove({'_id':id},function(err){
			if (!err) {
				//返回204 重新发生204状态表式成功
				res.send(204);
			}else{
				res.json(500,err);
			};
		});
	};


	function toJsonTree(node){
		// console.log('toJsonTree');
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
	};
	

	app.get('/api/departments',api.departments);
	app.get('/api/departments/:id',api.findDepartmentByID);
	app.post('/api/departments',api.createNewDepartment);
	app.put('/api/departments/:id', api.updateDepartmentByID);
	app.delete('/api/departments/:id',api.deleteDepartmentByID);

};