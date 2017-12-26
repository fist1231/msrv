var express = require('express');
var router = express.Router();

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/');
	}
}

var consoleOut = text => console.log('consoleOut: ' + text);

function consolePrint(text) {
	console.log('consolePrint: ' + text);
}


module.exports = {
	ensureAuthenticated,
	consoleOut,
	consolePrint
}