'use strict';
import axios from 'axios';
import config from '../../config/config.json'

const reviewsServiceUrl = `${config.reviews_address}`;

exports.list_all_reviewProposals = function(req, res) {
  console.log('********** Gateway: list_all_reviewProposals called #######');
  // res.json(sols);
  const targetUrl = reviewsServiceUrl + req.originalUrl;
  console.log('********** Gateway: list_all_reviewProposals targetUrl='+ targetUrl);
  axios
    .get(targetUrl)
    .then(response => {
      // console.log('********** Gateway: list_all_reviewProposals result:' + JSON.stringify(response.data));
      res.json(response.data);
    })
    .catch(error => {
      console.log('********** Gateway: list_all_reviewProposals error:' + error);
    });
};

exports.find_reviewProposal = function(req, res) {
  console.log('********** Gateway: find_reviewProposal called #######');
  // res.json(sols);
  const targetUrl = reviewsServiceUrl + req.originalUrl;
  console.log('********** Gateway: find_reviewProposal targetUrl='+ targetUrl);
  axios
    .get(targetUrl)
    .then(response => {
      // console.log('********** Gateway: find_reviewProposal result:' + JSON.stringify(response.data));
      res.json(response.data);
    })
    .catch(error => {
      console.log('********** Gateway: find_reviewProposal error:' + error);
    });
};



/*
exports.list_all_reviewProposals = function(req, res) {
  ReviewProposals.find({}, function(err, reviewProposal) {
    if (err) {
    	console.log('list_all_reviewProposals error: ' + err);
    	return res.send(err);
    }
    console.log('####### list_all_reviewProposals called #######');
    res.json(reviewProposal);
  });
};

exports.filter_reviewProposals = function(req, res) {

	 if(!req.params.acronym) {
		 console.log('acronym is empty');
		  ReviewProposals.find({}, function(err, reviewProposal) {
			    if (err) {
			    	console.log('filter_reviewProposals error: ' + err);
			      return res.send(err);
			    }
			    res.json(reviewProposal);
			  });
	 } else {
		 console.log('acronym not empty: ');
		  ReviewProposals.find({'acronym': new RegExp('.*' + req.params.acronym + '.*', "i")}, function(err, reviewProposal) {
			    if (err) {
			    	console.log('filter_reviewProposals error: ' + err);
			      return res.send(err);
			    }
			    res.json(reviewProposal);
			  });
	 }
	};


exports.create_reviewProposal = function(req, res) {
  var new_reviewProposalr = new ReviewProposals(req.body);
  new_reviewProposal.save(function(err, reviewProposal) {
    if (err) {
    	console.log('create_reviewProposal error: ' + err);
      return res.send(err);
    }
    res.json(reviewProposal);
  });
};


exports.find_reviewProposal = function(req, res) {
		 console.log('find_reviewProposal ');
		  ReviewProposals.find({'id': req.params.reviewProposalId}, function(err, reviewProposal) {
			    if (err) {
			    	console.log('find_reviewProposal error: ' + err);
			    	return res.send(err);
			    }
			    res.json(reviewProposal);
			  });
	};

exports.read_reviewProposal = function(req, res) {
  ReviewProposals.findById(req.params.reviewProposalId, function(err, reviewProposal) {
    if (err) {
    	console.log('read_reviewProposal error: ' + err);
    	return res.send(err);
    }
    res.json(reviewProposal);
  });
};


exports.update_reviewProposal = function(req, res) {
  ReviewProposals.findOneAndUpdate({_id: req.params.reviewProposalId}, req.body, {new: true}, function(err, reviewProposal) {
    if (err) {
    	console.log('update_reviewProposal error: ' + err);
      return res.send(err);
    }
    res.json(reviewProposal);
  });
};


exports.delete_reviewProposal = function(req, res) {
  ReviewProposals.remove({
    _id: req.params.reviewProposalId
  }, function(err, reviewProposal) {
    if (err)
      return res.send(err);
    res.json({ message: 'ReviewProposal successfully deleted' });
  });
};
*/
