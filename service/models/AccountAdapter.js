var AccountTitle;
var AccountDocument;
var AccountEntry;

var AccountAdapter = function(connection){
	this.connection = connection;
	AccountTitle = require("./AccountModels").getAccountTitleModel(this.connection);
	AccountDocument = require("./AccountModels").getAccountDocumentModel(this.connection);
	AccountEntry = require("./AccountModels").getAccountEntryModel(this.connection);	
};

AccountAdapter.prototype.AccountTitle_insert = function(accountTitle, callback){
	var newAccountTitle = new AccountTitle(accountTitle);
	newAccountTitle.save(function(error, accountTitle){
		callback(error, accountTitle);
	})
}

AccountAdapter.prototype.accountTitleTree = function(callback){
	AccountTitle.find({},
		function(error, results){
			//console.log(results);
			// map AccountTitle by AccountTitle.Code
			var titleMap = new Array();
			for(var i=0; i<results.length; i++){
				titleMap[results[i].code] = results[i];
			}
			//console.log(titleMap["1002"]);

			// link to the parent node
			for(var j=0; j<results.length; j++){
				var code = results[j].code;
				if(code.length===4){
					// Level 1
				}else{
					var parentCode = code.substring(0, code.length-2);						
					//console.log(code + "==>" + parentCode);
					var parent = titleMap[parentCode];
					
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
				if(results[k].code.length===4){
					str += toJsonTree(results[k]) + ',';	
				}					
			}
			//console.log(str.substring(0, str.length-1));
			callback("[" + str.substring(0, str.length-1) + "]");
		}
	);
}

function toJsonTree(node){
	var str = '{"code":"' + node.code + '"';
	str += ', "name":"' + node.name + '"';
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

AccountAdapter.prototype.allAccountTitleTree = function (callback) {
	AccountTitle.find({},function (error, results) {
		var titleMap = new Array();
		for(var i=0; i<results.length; i++){
			titleMap[results[i].code] = results[i];
		}
		//console.log(titleMap["1002"]);

		// link to the parent node
		for(var j=0; j<results.length; j++){
			var Code = results[j].code;
			if(Code.length===4){
				// Level 1
			}else{
				var parentCode = Code.substring(0, Code.length-2);						
				//console.log(code + "==>" + parentCode);
				var parent = titleMap[parentCode];
				
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
			if(results[k].code.length===4){
				str += toAllJsonTree(results[k]) + ',';	
			}					
		}
		callback("[" + str.substring(0, str.length-1) + "]");
	})
	
}

function toAllJsonTree(node){
	var str = '{"code":"' + node.code + '"';
	str += ', "name":"' + node.name + '"';
	str += ', "displayName":"' + node.code + "-" + node.name + '"';
	str += ', "idxNum":"' + '"';
	str += ', "direction":"' + '"';
	str += ', "mnemonicCode":"' + '"';
	if(node.children){
		str += ',"children":[';
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

AccountAdapter.prototype.AccountTitle_findByCode = function (code, callback) {	
	AccountTitle.findOne({"code":code},
		function (error, accountTitle) {			
			callback(error, accountTitle);
		});
}


AccountAdapter.prototype.AccountDocument_insert = function(doc, callback){
	var newDoc = new AccountDocument(doc);
	newDoc.save(function(error, doc){
		callback(error, doc);
	});	
}

AccountAdapter.prototype.AccountDocument_filter = function(filterCode,callback){
	AccountDocument.findOne({filterCode:filterCode},function(error, doc){
		callback(error, doc);
	});
}

AccountAdapter.prototype.AccountEntry_insert = function(entry, callback){
	var newEntry = new AccountEntry(entry);
	newEntry.save(function(error, entry){
		callback(error, entry);
	});
}

//
AccountAdapter.prototype.AccountDocument_checkBalance = function(docId, callback){
	AccountEntry.find({accountDocument:docId},function(error, entries){
		var balance = 0;
		entries.forEach(function(entry, index, obj){
			balance += entry.direction * entry.amount;
		})
		callback(balance===0);
	})		
}

//dateRange:[2014-08-01, 2014-09-01)
AccountAdapter.prototype.AccountEntry_checkBalance = function(dateRange, callback){
	//TODO
	return new Eerror("AccountAdapter.prototype.AccountEntry_checkBalance not implemented yet.");
}

module.exports = {
	create: function(connection){
		return new AccountAdapter(connection);
	}
}

