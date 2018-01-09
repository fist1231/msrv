'use strict';
module.exports = function(app) {
  var solicitationsList = require('../controllers/solicitationsController');

  // Solicitations Routes
  app.route('/nress/solicitations')
    .get(solicitationsList.list_all_solicitations)
    .post(solicitationsList.create_solicitation);


  app.route('/nress/solicitations/:solicitationId')
    .get(solicitationsList.read_solicitation)
    .get(solicitationsList.filter_solicitations)
    .put(solicitationsList.update_solicitation)
    .delete(solicitationsList.delete_solicitation);


  app.route('/nress/search')
  .get(solicitationsList.list_all_solicitations);

  app.route('/nress/search/:acronym')
  .get(solicitationsList.filter_solicitations);

  app.route('/nress/solicitation/:solicitationId')
  .get(solicitationsList.find_solicitation);


// app.route('/nress/solicitations/filter')
// .get(solicitationsList.list_all_solicitations);


//  app.route('/nress/solicitations/:acronym', findSolicitationByAcronymMiddleware)
//  .get(function(req, res, next) {
//	  console.log('preKEY');
//	  var key = req.params.solicitationName;
//	  console.log('KEY = ' + key);
//	  next();
//	  return;
//  })
//  .get(solicitationsList.filter_solicitations);
//} catch (e) {
//	console.log('ERROR: ' + e);
//}

};
