'use strict';

var mongoose = require('mongoose'),
Users = mongoose.model('Users');

exports.list_all_users = function(req, res) {
  Users.find({}, function(err, user) {
    if (err) {
    	console.log('list_all_users error: ' + err);
    	return res.send(err);
    }
    res.json(user);
  });
};

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
		 console.log('find_user Term not empty ');
		  Users.find({'_id': req.params.userId}, function(err, user) {
			    if (err) {
			    	console.log('find_user error: ' + err);
			    	return res.send(err);
			    }
			    res.json(user);
			  });
	};

exports.read_a_user = function(req, res) {
  console.log('read_a_user call, id: ' + req.params.userId);
  Users.findById(req.params.userId, function(err, user) {
    if (err) {
    	console.log('read_a_user error: ' + err);
    	return res.send(err);
    }
    // console.log('read_a_user found');
    res.json(user);
  });
};


exports.update_a_user = function(req, res) {
  console.log('update_a_user call: id='+ req.params.userId);
  // console.log('... users service update_a_user call: req.body.user.FIRST_NAME='+JSON.stringify(req.body.user));
  Users.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user) {
    if (err) {
    	console.log('update_a_user error: ' + err);
      return res.send(err);
    }
    res.json(user);
  });
};

/*
exports.update_a_user = function(req, res) {
  console.log('update_a_user call: id='+ req.params.userId);
  console.log('... users service update_a_user call: req.body.user.FIRST_NAME='+JSON.stringify(req.body.user));
  Users.findByIdAndUpdate({_id: req.params.userId},
    {
      $set: {
        "FIRST_NAME": req.body.user.firstName,
        "LAST_NAME": req.body.user.lastName,
        "USERNAME": req.body.user.username
      }
    }, {new: true}, function(err, user) {
    if (err) {
    	console.log('update_a_user error: ' + err);
      return res.send(err);
    }
    // console.log('********** Gateway: update_a_user result:' + JSON.stringify(res.user));
    res.json(user);
  });
};
*/

exports.delete_a_user = function(req, res) {
  Users.remove({
    _id: req.params.userId
  }, function(err, user) {
    if (err)
      return res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};
