var mongoose = require("mongoose");
var connection = mongoose.createConnection("mongodb://localhost/jiantuo");

var accountAdpt = require("AccountAdapter.js").create(connection);
accountAdpt.accountTitleTree();