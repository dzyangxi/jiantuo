'use strict'

var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var fields = {
	name: String,
	memberIds: [Schema.Types.ObjectId],
	parentId: Schema.Types.ObjectId,
	created:{ type: Date,default: Date.now}
};

var departmentSchema = new Schema(fields,{collection:'HR.Department',_id:1,autoIndex:false});

module.exports = mongoose.model('Department',departmentSchema);

