var Project;

var PMAdapter = function(connection){
	this.connection = connection;

	Project = require("./PMModels").getProjectModel(this.connection);
}

PMAdapter.prototype.Project_insert = function(project, callback){
	var newProject = new Project(project);
	newProject.save(function(error, project){
		callback(error, project);
	});
}

PMAdapter.prototype.Project_findById = function(projectId, callback){
	Project.findById(projectId, callback);
}

PMAdapter.prototype.Project_all = function(callback){
	Project.find({},
		function(error, results){
			callback(error, results);
		});
}

module.exports = {
	create: function(connection){
		return new PMAdapter(connection);
	}
}