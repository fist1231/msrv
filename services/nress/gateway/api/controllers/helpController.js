'use strict';
import axios from 'axios';
import config from '../../config/config.json'

const helpServiceUrl = `${config.help_address}`;

exports.get_version_help = function(req, res) {
  console.log('********** Gateway: get_version_help called #######');
  const targetUrl = helpServiceUrl + req.originalUrl;
  axios
    .get(targetUrl)
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.log('********** Gateway: get_version_help error:' + error);
    });
};
/*
exports.get_users_help = function(req, res) {
  console.log('********** Gateway: get_users_help called #######');
  const targetUrl = helpServiceUrl + req.originalUrl;
  axios
    .get(targetUrl)
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.log('********** Gateway: get_users_help error:' + error);
    });

};

exports.get_solicitations_help = function(req, res) {
  console.log('********** Gateway: get_solicitations_help called #######');
  const targetUrl = helpServiceUrl + req.originalUrl;
  axios
    .get(targetUrl)
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.log('********** Gateway: get_solicitations_help error:' + error);
    });

};

exports.get_reviews_help = function(req, res) {
  console.log('********** Gateway: get_reviews_help called #######');
  const targetUrl = helpServiceUrl + req.originalUrl;
  axios
    .get(targetUrl)
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.log('********** Gateway: get_reviews_help error:' + error);
    });

};

exports.get_calendar_help = function(req, res) {
  console.log('********** Gateway: get_calendar_help called #######');
  const targetUrl = helpServiceUrl + req.originalUrl;
  axios
    .get(targetUrl)
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.log('********** Gateway: get_calendar_help error:' + error);
    });

};
*/
exports.get_help = function(req, res) {
  console.log('********** Gateway: get_help called #######');
  const targetUrl = helpServiceUrl + req.originalUrl;
  axios
    .get(targetUrl)
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.log('********** Gateway: get_help error:' + error);
    });

};
