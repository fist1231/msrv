'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var DemohelpitemSchema = new Schema({
  dh_type: {
    type: String,
    required: 'The HELP_TYPE ir required'
  },
  dh_text: {
    type: String,
    required: 'Provide HELP ITEM_TEXT'
  }
});

module.exports = mongoose.model('Demohelpitem', DemohelpitemSchema);
