'use strict';
import axios from 'axios';

const url = "http://localhost:3334/nress/solicitations";


exports.list_all_solicitations = function(req, res) {
    console.log('********** Gateway: list_all_solicitations called #######');
    // res.json(sols);

    axios
      .get(url)
      .then(response => {
        // console.log('********** Gateway: list_all_solicitations result:' + JSON.stringify(response.data));
        res.json(response.data);
      })
      .catch(error => {
        console.log('********** Gateway: list_all_solicitations error:' + error);
      });
};

exports.create_solicitation = function(req, res) {
  console.log('********** Gateway: create_solicitation called #######');
  // var new_solicitation = new Solicitations(req.body);
  // new_solicitation.save(function(err, solicitation) {
  //   if (err) {
  //   	console.log('create_solicitation error: ' + err);
  //     return res.send(err);
  //   }
  //   res.json(solicitation);
  // });
};

const sols =[
  {"_id":"5a54393833abd9cc3fb0cb43","id":1,"number":"NN01TSANPM2901","acronym":"acronym-1","title":"Solicitation Title 1","fiscal_year":2011,"preview_date":"Mon Jan 08 2018 22:38:32 GMT-0500 (Eastern Standard Time)","selection_date":"Mon Jan 08 2018 22:38:32 GMT-0500 (Eastern Standard Time)","release_date":"Mon Jan 08 2018 22:38:32 GMT-0500 (Eastern Standard Time)","close_date":"Mon Jan 08 2018 22:38:32 GMT-0500 (Eastern StandardTime)"},
  {"_id":"5a54393833abd9cc3fb0cb44","id":2,"number":"NN01TSANPM2902","acronym":"acronym-2","title":"Solicitation Title 2","fiscal_year":2012,"preview_date":"Mon Jan 08 2018 22:38:32 GMT-0500 (Eastern Standard Time)","selection_date":"Mon Jan 08 2018 22:38:32 GMT-0500 (Eastern Standard Time)","release_date":"Mon Jan 08 2018 22:38:32 GMT-0500 (Eastern Standard Time)","close_date":"Mon Jan 08 2018 22:38:32 GMT-0500 (Eastern Standard Time)"},
  {"_id":"5a54393833abd9cc3fb0cb45","id":3,"number":"NN01TSANPM2903","acronym":"acronym-3","title":"Solicitation Title 3","fiscal_year":2013,"preview_date":"Mon Jan 08 2018 22:38:32 GMT-0500 (Eastern Standard Time)","selection_date":"Mon Jan 08 2018 22:38:32 GMT-0500 (Eastern Standard Time)","release_date":"Mon Jan 08 2018 22:38:32 GMT-0500 (Eastern Standard Time)","close_date":"Mon Jan 08 2018 22:38:32 GMT-0500 (Eastern Standard Time)"},
  {"_id":"5a54393833abd9cc3fb0cb46","id":4,"number":"NN01TSANPM2904","acronym":"acronym-4","title":"Solicitation Title 4","fiscal_year":2014,"preview_date":"Mon Jan 08 2018 22:38:32 GMT-0500 (Eastern Standard Time)","selection_date":"Mon Jan 08 2018 22:38:32 GMT-0500 (Eastern Standard Time)","release_date":"Mon Jan 08 2018 22:38:32 GMT-0500 (Eastern Standard Time)","close_date":"Mon Jan 08 2018 22:38:32 GMT-0500 (Eastern Standard Time)"},
  {"_id":"5a54393933abd9cc3fb0cb47","id":5,"number":"NN01TSANPM2905","acronym":"acronym-5","title":"Solicitation Title 5","fiscal_year":2015,"preview_date":"Mon Jan 08 2018 22:38:33 GMT-0500 (Eastern Standard Time)","selection_date":"Mon Jan 08 2018 22:38:33 GMT-0500 (Eastern Standard Time)","release_date":"Mon Jan 08 2018 22:38:33 GMT-0500 (Eastern Standard Time)","close_date":"Mon Jan 08 2018 22:38:33 GMT-0500 (Eastern Standard Time)"},
  {"_id":"5a54393933abd9cc3fb0cb48","id":6,"number":"NN01TSANPM2906","acronym":"acronym-6","title":"Solicitation Title 6","fiscal_year":2016,"preview_date":"Mon Jan 08 2018 22:38:33 GMT-0500 (Eastern Standard Time)","selection_date":"Mon Jan 08 2018 22:38:33 GMT-0500 (Eastern Standard Time)","release_date":"Mon Jan 08 2018 22:38:33 GMT-0500 (Eastern Standard Time)","close_date":"Mon Jan 08 2018 22:38:33 GMT-0500 (Eastern Standard Time)"},
  {"_id":"5a54393933abd9cc3fb0cb49","id":7,"number":"NN01TSANPM2907","acronym":"acronym-7","title":"Solicitation Title 7","fiscal_year":2017,"preview_date":"Mon Jan 08 2018 22:38:33 GMT-0500 (Eastern Standard Time)","selection_date":"Mon Jan 08 2018 22:38:33 GMT-0500 (Eastern Standard Time)","release_date":"Mon Jan 08 2018 22:38:33 GMT-0500 (Eastern Standard Time)","close_date":"Mon Jan 08 2018 22:38:33 GMT-0500 (Eastern Standard Time)"},
  {"_id":"5a54393a33abd9cc3fb0cb4a","id":8,"number":"NN01TSANPM2908","acronym":"acronym-8","title":"Solicitation Title 8","fiscal_year":2018,"preview_date":"Mon Jan 08 2018 22:38:34 GMT-0500 (Eastern Standard Time)","selection_date":"Mon Jan 08 2018 22:38:34 GMT-0500 (Eastern Standard Time)","release_date":"Mon Jan 08 2018 22:38:34 GMT-0500 (Eastern Standard Time)","close_date":"Mon Jan 08 2018 22:38:34 GMT-0500 (Eastern Standard Time)"},
  {"_id":"5a54393a33abd9cc3fb0cb4b","id":9,"number":"NN01TSANPM2909","acronym":"acronym-9","title":"Solicitation Title 9","fiscal_year":2019,"preview_date":"Mon Jan 08 2018 22:38:34 GMT-0500 (Eastern Standard Time)","selection_date":"Mon Jan 08 2018 22:38:34 GMT-0500 (Eastern Standard Time)","release_date":"Mon Jan 08 2018 22:38:34 GMT-0500 (Eastern Standard Time)","close_date":"Mon Jan 08 2018 22:38:34 GMT-0500 (Eastern Standard Time)"},
  {"_id":"5a54393a33abd9cc3fb0cb4c","id":10,"number":"NN01TSANPM2910","acronym":"acronym-10","title":"Solicitation Title 10","fiscal_year":2020,"preview_date":"Mon Jan 08 2018 22:38:34 GMT-0500 (Eastern Standard Time)","selection_date":"Mon Jan 08 2018 22:38:34 GMT-0500 (Eastern Standard Time)","release_date":"Mon Jan 08 2018 22:38:34 GMT-0500 (Eastern Standard Time)","close_date":"Mon Jan 08 2018 22:38:34 GMT-0500 (Eastern Standard Time)"},
  {"_id":"5a54393b33abd9cc3fb0cb4d","id":11,"number":"NN01TSANPM29011","acronym":"acronym-11","title":"Solicitation Title 11","fiscal_year":2021,"preview_date":"Mon Jan 08 2018 22:38:35 GMT-0500 (Eastern Standard Time)","selection_date":"Mon Jan 08 2018 22:38:35 GMT-0500 (Eastern Standard Time)","release_date":"Mon Jan 08 2018 22:38:35 GMT-0500 (Eastern Standard Time)","close_date":"Mon Jan 08 2018 22:38:35 GMT-0500 (Eastern Standard Time)"}
];
