'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReviewProposalSchema = new Schema({
  id: {
	    type: String,
	    required: 'ReviewProposal ID'
  },
  reviewProposal_number: {
    type: String,
    required: 'Solcitations Number'
  },
  acronym: {
    type: String,
    required: 'Acronym'
  },
  title: {
    type: String,
    default: 'Review Proposal title'
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

module.exports = mongoose.model('Solicitations', ReviewProposalSchema);
