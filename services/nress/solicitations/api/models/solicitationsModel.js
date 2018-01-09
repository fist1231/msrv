'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SolicitationSchema = new Schema({
  id: {
	    type: String,
	    required: 'Solicitation ID'
  },
  solicitation_number: {
    type: String,
    required: 'Solcitations Number'
  },
  acronym: {
    type: String,
    required: 'Acronym'
  },
  title: {
    type: String,
    default: 'Solicitation title'
  },
  fiscal_year: {
    type: Number,
    default: 2018
  },
  preview_date: {
    type: Date,
    default: Date.now
  },
  selection_date: {
    type: Date,
    default: Date.now
  },
  release_date: {
    type: Date,
    default: Date.now
  },
  close_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'published', 'unpublished']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Solicitations', SolicitationSchema);
