'use strict';

var mongoose = require('mongoose'),
Solicitations = mongoose.model('Solicitations');

exports.list_all_solicitations = function(req, res) {
  Solicitations.find({}, function(err, solicitation) {
    if (err) {
    	console.log('list_all_solicitations error: ' + err);
    	return res.send(err);
    }
    console.log('####### list_all_solicitations called #######');
    res.json(solicitation);
  });
};

exports.filter_solicitations = function(req, res) {

	 if(!req.params.acronym) {
		 console.log('Term is empty');
		  Solicitations.find({}, function(err, solicitation) {
			    if (err) {
			    	console.log('filter_solicitations error: ' + err);
			      return res.send(err);
			    }
			    res.json(solicitation);
			  });
	 } else {
		 console.log('Term not empty: ');
		  Solicitations.find({'TITLE': new RegExp('.*' + req.params.acronym + '.*', "i")}, function(err, solicitation) {
			    if (err) {
			    	console.log('filter_solicitations error: ' + err);
			      return res.send(err);
			    }
			    res.json(solicitation);
			  });
	 }
	};


exports.create_solicitation = function(req, res) {
  var new_solicitationr = new Solicitations(req.body);
  new_solicitation.save(function(err, solicitation) {
    if (err) {
    	console.log('create_solicitation error: ' + err);
      return res.send(err);
    }
    res.json(solicitation);
  });
};


exports.find_solicitation = function(req, res) {
		 console.log('Term not empty: ');
		  Solicitations.find({'SOLICITATION_ID': req.params.solicitationId}, function(err, solicitation) {
			    if (err) {
			    	console.log('find_solicitation error: ' + err);
			    	return res.send(err);
			    }
			    res.json(solicitation);
			  });
	};

exports.read_solicitation = function(req, res) {
  console.log('read_solicitation call, id: ' + req.params.solicitationId);
  Solicitations.findById(req.params.solicitationId, function(err, solicitation) {
    if (err) {
    	console.log('read_solicitation error: ' + err);
    	return res.send(err);
    }
    res.json(solicitation);
  });
};


exports.update_solicitation = function(req, res) {
  Solicitations.findOneAndUpdate({_id: req.params.solicitationId}, req.body, {new: true}, function(err, solicitation) {
    if (err) {
    	console.log('update_solicitation error: ' + err);
      return res.send(err);
    }
    res.json(solicitation);
  });
};


exports.delete_solicitation = function(req, res) {
  Solicitations.remove({
    _id: req.params.solicitationId
  }, function(err, solicitation) {
    if (err)
      return res.send(err);
    res.json({ message: 'Solicitation successfully deleted' });
  });
};
