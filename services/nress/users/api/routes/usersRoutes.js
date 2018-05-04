'use strict';
module.exports = function(app) {
  var usersList = require('../controllers/usersController');

  // todoList Routes
  app.route('/nress/users')
    .get(usersList.list_all_users)
    .post(usersList.create_a_user);


  app.route('/nress/users/:userId')
    .get(usersList.read_a_user)
    .get(usersList.filter_users)
    .put(usersList.update_a_user)
    .delete(usersList.delete_a_user);


  app.route('/nress/search')
  .get(usersList.list_all_users);

  app.route('/nress/search/:username')
  .get(usersList.filter_users);

  app.route('/nress/user/:userId')
  .get(usersList.find_user);


// app.route('/nress/users/filter')
// .get(usersList.list_all_users);


//  app.route('/nress/users/:username', findUserByUsernameMiddleware)
//  .get(function(req, res, next) {
//	  console.log('preKEY');
//	  var key = req.params.userName;
//	  console.log('KEY = ' + key);
//	  next();
//	  return;
//  })
//  .get(usersList.filter_users);
//} catch (e) {
//	console.log('ERROR: ' + e);
//}

};
