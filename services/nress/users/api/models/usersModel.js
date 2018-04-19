'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  _id: {
	    type: String,
	    required: 'Kindly enter id of the user'
	  },
  USERNAME: {
    type: String,
    required: 'Kindly enter the USERNAME of the user'
  },
  SALUTATION: {
    type: String
  },
  FIRST_NAME: {
    type: String,
    required: 'Kindly enter the FIRST_NAME of the user'
  },
  MIDDLE_INITIAL: {
    type: String
  },
  LAST_NAME: {
    type: String,
    required: 'Kindly enter the LAST_NAME of the user'
  },
  SUFFIX: {
    type: String,
  },
  ACTIVATIONTIME: {
    type: Date
  },
  NSPIRES_USER_ID: {
    type: String,
    required: 'Kindly enter the NSPIRES_USER_ID of the user'
  },
  LAST_LOGIN_TIME: {
    type: Date
  },
  SYSEFUS_ID: {
    type: String
  },
  REGISTRATION_DATE: {
    type: Date
  },
  CREATION_PATH: {
    type: String
  },
  CREATED_BY: {
    type: String
  },
  CREATOR_COMMENT: {
    type: String
  },
  CHALLENGE_QUESTION: {
    type: String
  },
  HASHED_RECOVERY: {
    type: String
  },
  DEM_DATA_ID: {
    type: String
  }
});

module.exports = mongoose.model('Users', UserSchema);
