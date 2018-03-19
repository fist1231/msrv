'use strict';
module.exports = function(app) {
  var reviewProposalsList = require('../controllers/reviewProposalsController');

  // ReviewProposals Routes
  app.route('/nress/reviewProposals')
    .get(reviewProposalsList.list_all_reviewProposals)
    .post(reviewProposalsList.create_reviewProposal);


  app.route('/nress/reviewProposals/:reviewProposalId')
    .get(reviewProposalsList.read_reviewProposal)
    .get(reviewProposalsList.filter_reviewProposals)
    .put(reviewProposalsList.update_reviewProposal)
    .delete(reviewProposalsList.delete_reviewProposal);


  app.route('/nress/search')
  .get(reviewProposalsList.list_all_reviewProposals);

  app.route('/nress/search/:acronym')
  .get(reviewProposalsList.filter_reviewProposals);

  app.route('/nress/reviewProposal/:reviewProposalId')
  .get(reviewProposalsList.find_reviewProposal);


// app.route('/nress/reviewProposals/filter')
// .get(reviewProposalsList.list_all_reviewProposals);


//  app.route('/nress/reviewProposals/:acronym', findReviewProposalByAcronymMiddleware)
//  .get(function(req, res, next) {
//	  console.log('preKEY');
//	  var key = req.params.reviewProposalName;
//	  console.log('KEY = ' + key);
//	  next();
//	  return;
//  })
//  .get(reviewProposalsList.filter_reviewProposals);
//} catch (e) {
//	console.log('ERROR: ' + e);
//}

};
