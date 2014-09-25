var crmApp = function(app){
	/************************
		Ajax cross domain
	*************************/
	app.all('/customer*', function(req, res, next) {
	    res.header("Access-Control-Allow-Origin", "*");
	    res.header("Access-Control-Allow-Headers", "X-Requested-With");
	    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	    res.header("X-Powered-By",' 3.2.1')
	    res.header("Content-Type", "application/json;charset=utf-8");
	    next();
	});

	app.all('/contract*', function(req, res, next) {
	    res.header("Access-Control-Allow-Origin", "*");
	    res.header("Access-Control-Allow-Headers", "X-Requested-With");
	    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	    res.header("X-Powered-By",' 3.2.1')
	    res.header("Content-Type", "application/json;charset=utf-8");
	    next();
	});
	
	/****************
		Customer
	******************/
	//list
	app.get("/customer", function(req, res){
		app.crmAdpt.Customer_all(function(error, results){
			res.send(results);
		});
	});

	/****************
		Contract
	******************/
	//by sn
	app.get("/contract/:sn", function(req, res){
		app.crmAdpt.Contract_findBySN(req.params.sn, function(error,contract){
			res.send(contract);
		});
	});

}

module.exports = crmApp;