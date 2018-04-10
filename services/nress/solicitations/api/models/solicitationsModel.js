'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SolicitationSchema = new Schema({
  SOLICITATION_ID: {
	    type: String,
	    required: 'SOLICITATION_ID'
  },
  SOLICITATION_NUMBER: {
    type: String,
    required: 'Solcitations Number'
  },
  PUBLICATION_APPROVAL: {
    type: Number,
    required: 'PUBLICATION_APPROVAL'
  },
  FISCAL_YEAR: {
    type: Number,
    required: 'FISCAL_YEAR'
  },
  OMNIBUS_NUMBER: {
    type: Number
  },
  TITLE: {
    type: String
  },
  REVIEW_DATE: {
    type: Date
  },
  SELECTION_DATE: {
    type: Date
  },
  RELEASE_DATE: {
    type: Date,
    required: 'RELEASE_DATE'
  },
  CLOSE_DATE: {
    type: Date,
    required: 'CLOSE_DATE'
  },
  ANNOUNCEMENT_TYPE: {
    type: String
  },
  CONTAINER_TYPE: {
    type: String
  },
  AUTHORIZED_BY: {
    type: String
  },
  WITHDRAWAL_REASON: {
    type: String
  },
  WITHDRAWAL_DATE: {
    type: Date
  },
  WITHDRAWN_BY: {
    type: String
  }
});

module.exports = mongoose.model('Solicitations', SolicitationSchema);
