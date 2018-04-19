import config from './config/config.json'

var Rx = require('rxjs');

var cors = require('cors');
var express = require('express'),

app = express(),
  port = process.env.PORT || 3333,
  mongoose = require('mongoose'),
  Users = require('./api/models/usersModel'), //created model loading here
  bodyParser = require('body-parser');

app.use(cors());


// mongoose instance connection url connection
mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost/nress_db');
//mongoose.connect('mongodb://192.168.1.169:27017/nress_db', {
mongoose.connect(config.db_connect, {
  useMongoClient: true
});



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.use(function(req, res) {
//	  res.status(404).send({url: req.originalUrl + ' not found'})
//	});

var routes = require('./api/routes/usersRoutes'); //importing route
routes(app); //register the route


app.listen(port);


exports.getUsers = function() {

	var users = [{id: '101', name: 'name-1010', status: 'fake', created_date: new Date()}
	, {id: '102', name: 'name-102', status: 'fake', created_date: new Date()}
	, {id: '103', name: 'name-103', status: 'fake', created_date: new Date()}];


	app.get('/dowork',function(res,req){
	    console.log(req.params.msg);
	  /... code to do your work .../
	});


	return Rx.Observable.of(users);
}


console.log('Nress users RESTful API server started on: ' + port);
