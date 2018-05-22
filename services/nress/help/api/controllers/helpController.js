'use strict';

exports.get_version_help = function(req, res) {
  console.log('get_global_help called');
  res.json({version: '1.0', name: 'help', owner: 'tbd'});
};

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
