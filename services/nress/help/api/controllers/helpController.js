'use strict';

var mongoose = require('mongoose'),
Demohelp = mongoose.model('Demohelpitem');

exports.get_version_help = function(req, res) {
  console.log('get_global_help called');

  Demohelp.find({}, function(err, user) {
    if (err) {
    	console.log('list_all_users error: ' + err);
    	return res.send(err);
    }
    res.json(user);
  });
  // res.json({version: '1.0', name: 'help', owner: 'tbd'});
};

/*
const userHelpItems = [
  "Search by Username.",
  "Additional User Details by clicking icon.",
  "Multisort by clicking Column Header while holding down Shift key.",
  "To resize column, rest the mouse pointer on the header boundary until it becomes a resize pointer, and then drag the boundary.",
  "Live data from MongoDB.",
  "Hide these Tips by clicking Get Help button again."
]

exports.get_users_help = function(req, res) {
  console.log('get_users_help called');
  res.json({items: userHelpItems});
};

const solicitationsHelpItems = [
  "Search by Soliciation Title",
  "Fully functional CRUD operations: Add, Update and Delete Solicitation",
  "Live data from MongoDB Solicitations collection",
  "Hide these Tips by clicking Get Help button again"
]

exports.get_solicitations_help = function(req, res) {
  console.log('get_solicitations_help called');
  res.json({items: solicitationsHelpItems});
};

const reviewsHelpItems = [
  "Search by all columns data",
  "Reorder rows by dragging first icon of each row",
  "Quick preview by mouse-over the 'eye' icon",
  "Export table to CSV format for Excel by clicking 'Excel'",
  "Select row by clicking on it. Right-click for context menu",
  "In-place editing for Response Status, First and Last name column data",
  "To rearrange columns, drag by the column header",
  "To resize column, rest the mouse pointer on the header boundary until it becomes a resize pointer, and then drag the boundary.",
  "Live data from Oracle Beta Review Proposals table",
  "Edit/Delete operations do not propagate to the underlying database, since it is a live Beta data",
  "Hide these Tips by clicking Get Help button again"
]

exports.get_reviews_help = function(req, res) {
  console.log('get_reviews_help called');
  res.json({items: reviewsHelpItems});
};

const calendarHelpItems = [
  "Calendar events are drag-and-drop and resizable",
  "To move event to different date, rest the mouse pointer on the event until it becomes a hand pointer, and then drag and drop it to different location",
  "To resize event, rest the mouse pointer on the event's left or right boundry until it becomes a resize pointer, and then drag the boundary",
  "Calendat events data is for demonstration puropses only, and not stored in the database",
  "Hide these Tips by clicking Get Help button again"
]

exports.get_calendar_help = function(req, res) {
  console.log('get_calendar_help called');
  res.json({items: calendarHelpItems});
};
*/

exports.get_help = function(req, res) {
  console.log(`req.params: ${JSON.stringify(req.params)}`);
  console.log(`req.params.helpType: ${req.params.helpType}`);
  if(!req.params.helpType) {
    console.log('Term is empty');
  }
  Demohelp.find({'dh_type': req.params.helpType}, function(err, help) {
    if (err) {
      console.log('get_help error: ' + err);
      return res.send(err);
    }
    // console.log('helpItems: ' + JSON.stringify(user));
    res.json(help);
  });
 };