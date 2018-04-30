'use strict';
import axios from 'axios';
import config from '../../config/config.json'


// const usersServiceUrl = "http://192.168.56.1:30333";
const usersServiceUrl = `${config.users_address}`;


exports.list_all_users = function(req, res) {
  console.log('********** Gateway: list_all_users called #######');
  // res.json(sols);
  const targetUrl = usersServiceUrl + req.originalUrl;
  axios
    .get(targetUrl)
    .then(response => {
      // console.log('********** Gateway: list_all_solicitations result:' + JSON.stringify(response.data));
      res.json(response.data);
    })
    .catch(error => {
      console.log('********** Gateway: list_all_users error:' + error);
    });
};

exports.create_a_user = function(req, res) {
  console.log('********** Gateway: create_a_user called #######');
};

exports.filter_users = function(req, res) {
  console.log('********** Gateway: filter_users called #######');
  console.log('********** Gateway: filter_users originalUrl=' + req.originalUrl);
  console.log('********** Gateway: filter_users url=' + req.url);
  // res.json(sols);
  const targetUrl = usersServiceUrl + req.originalUrl;

  axios
    .get(targetUrl)
    .then(response => {
      // console.log('********** Gateway: filter_users result:' + JSON.stringify(response.data));
      res.json(response.data);
    })
    .catch(error => {
      console.log('********** Gateway: filter_users error:' + error);
    });
};


/*
exports.filter_users = function(req, res) {


	 if(!req.params.username) {
		 console.log('Term is empty');
		  Users.find({}, function(err, user) {
			    if (err) {
			    	console.log('filter_users error: ' + err);
			      return res.send(err);
			    }
			    res.json(user);
			  });
	 } else {
		 console.log('Term not empty: ');
		  Users.find({'USERNAME': new RegExp('.*' + req.params.username + '.*', "i")}, function(err, user) {
			    if (err) {
			    	console.log('filter_users error: ' + err);
			      return res.send(err);
			    }
			    res.json(user);
			  });
	 }
	};


exports.create_a_user = function(req, res) {
  var new_user = new Users(req.body);
  new_user.save(function(err, user) {
    if (err) {
    	console.log('create_a_user error: ' + err);
      return res.send(err);
    }
    res.json(user);
  });
};


exports.find_user = function(req, res) {
		 console.log('Term not empty: ');
		  Users.find({'id': req.params.userid}, function(err, user) {
			    if (err) {
			    	console.log('find_user error: ' + err);
			    	return res.send(err);
			    }
			    res.json(user);
			  });
	};

exports.read_a_user = function(req, res) {
  Users.findById(req.params.userId, function(err, user) {
    if (err) {
    	console.log('read_a_user error: ' + err);
    	return res.send(err);
    }
    res.json(user);
  });
};


exports.update_a_user = function(req, res) {
  Users.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user) {
    if (err) {
    	console.log('update_a_user error: ' + err);
      return res.send(err);
    }
    res.json(user);
  });
};


exports.delete_a_user = function(req, res) {
  Users.remove({
    _id: req.params.userId
  }, function(err, user) {
    if (err)
      return res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};
*/
