'use strict';
module.exports = function(app) {
  var demohelp = require('../controllers/helpController');

  app.route('/help')
    .get(demohelp.get_version_help);

  /*
  app.route('/help/users')
    .get(demohelp.get_users_help);

  app.route('/help/solicitations')
    .get(demohelp.get_solicitations_help);

  app.route('/help/reviews')
    .get(demohelp.get_reviews_help);

  app.route('/help/calendar')
    .get(demohelp.get_calendar_help);
*/

  app.route('/help/search/:helpType')
  .get(demohelp.get_help);

};
