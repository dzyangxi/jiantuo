
/*
 * GET home page.
 */

var webapp = function(app){
	/************************
		Ajax cross domain
	*************************/
	app.all('/', function(req, res, next) {
	    res.header("Access-Control-Allow-Origin", "*");
	    res.header("Access-Control-Allow-Headers", "X-Requested-With");
	    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	    res.header("X-Powered-By",' 3.2.1')
	    res.header("Content-Type", "text/html");
	    next();
	});	


	//
	app.get("/", function(req, res){
		res.render("index",
			{title:"Jiantuo"});
	})
};



module.exports = webapp;