'use strict';
module.exports = function(app) {
  var help = require('../controllers/helpController');

  app.route('/help')
    .get(help.get_version_help);

  app.route('/help/users')
    .get(help.get_users_help);

  app.route('/help/solicitations')
    .get(help.get_solicitations_help);

  app.route('/help/reviews')
    .get(help.get_reviews_help);

};
