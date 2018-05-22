'use strict';
module.exports = function(app) {
  var reviewProposalsList = require('../controllers/reviewProposalsController');
  var solicitationsList = require('../controllers/solicitationsController');
  var usersList = require('../controllers/usersController');
  var helpList = require('../controllers/helpController');


  app.route('/nress/reviewProposals')
    .get(reviewProposalsList.list_all_reviewProposals);
    // .post(reviewProposalsList.create_reviewProposal);


  // app.route('/nress/reviewProposals/:reviewProposalId')
  //   .get(reviewProposalsList.read_reviewProposal)
  //   .get(reviewProposalsList.filter_reviewProposals)
  //   .put(reviewProposalsList.update_reviewProposal)
  //   .delete(reviewProposalsList.delete_reviewProposal);

  // ReviewProposals Routes
  // app.route('/nress/reviewProposals')
  //   .get(reviewProposalsList.list_all_reviewProposals)
  //   .post(reviewProposalsList.create_reviewProposal);
  //
  //
  // app.route('/nress/reviewProposals/:reviewProposalId')
  //   .get(reviewProposalsList.read_reviewProposal)
  //   .get(reviewProposalsList.filter_reviewProposals)
  //   .put(reviewProposalsList.update_reviewProposal)
  //   .delete(reviewProposalsList.delete_reviewProposal);
  //
  //
  // app.route('/nress/reviewProposals/search')
  // .get(reviewProposalsList.list_all_reviewProposals);
  //
  // app.route('/nress/reviewProposals/search/:acronym')
  // .get(reviewProposalsList.filter_reviewProposals);

  app.route('/nress/reviewProposal/:reviewProposalId')
    .get(reviewProposalsList.find_reviewProposal);



  // Solicitations Routes
  app.route('/nress/solicitations')
    .get(solicitationsList.list_all_solicitations)
    .post(solicitationsList.create_solicitation);


  // app.route('/nress/solicitations/:solicitationId')
  //   .get(solicitationsList.read_solicitation)
  //   .get(solicitationsList.filter_solicitations)
  //   .put(solicitationsList.update_solicitation)
  //   .delete(solicitationsList.delete_solicitation);
  //
  //
  // app.route('/nress/solicitations/search')
  // .get(solicitationsList.list_all_solicitations);

  app.route('/nress/solicitations/search/:acronym')
  .get(solicitationsList.filter_solicitations);

  app.route('/nress/solicitation/:solicitationId')
  .get(solicitationsList.find_solicitation);



  app.route('/nress/users')
    .get(usersList.list_all_users)
    .post(usersList.create_a_user);


  app.route('/nress/users/:userId')
    .get(usersList.read_a_user)
    // .get(usersList.filter_users)
    .put(usersList.update_a_user);
    // .delete(usersList.delete_a_user);


  app.route('/nress/search')
    .get(usersList.list_all_users);

  app.route('/nress/search/:username')
  .get(usersList.filter_users);

  app.route('/nress/user/:userid')
    .get(usersList.find_user);


// -------------------- help ---------------------------

  app.route('/help')
    .get(helpList.get_version_help);

  app.route('/help/users')
    .get(helpList.get_users_help);

  app.route('/help/solicitations')
    .get(helpList.get_solicitations_help);

  app.route('/help/reviews')
    .get(helpList.get_reviews_help);

};
