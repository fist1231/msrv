/*
const http = require('http');

const server = http.createServer(function(req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.end('reviewProposals');
});

server.listen('7000');
*/

import Rx from 'rxjs';
import cors from 'cors';
//const graphqlHTTP = require('express-graphql');
//const express = require('express');
import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
//import  bodyParser  from 'body-parser';

// import mongoose from 'mongoose';
import { ReviewProposals } from './api/models/reviewProposalsModel'; //created model loading here
import { makeExecutableSchema } from 'graphql-tools';
import config from './config/config.json'

var oracledb = require('oracledb');

//bodyParser = require('body-parser');

export const app = express(),
  port = process.env.PORT || 3335,
  mongoose = require('mongoose'),
  Revs = require('./api/models/reviewProposalsModel'), //created model loading here
  bodyParser = require('body-parser');

app.use(cors());


// GraphQL
//const {graphqlExpress} = require('apollo-server-express');
import schema  from './api/schema/schema';
import resolvers from './api/schema/resolvers';
// app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));

// express-graphql
/*
app.use('/nress/reviewProposals/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true //Set to false if you don't want graphiql enabled
}));
*/

// Apollo
// app.use('/nress/reviewProposals/graphql', bodyParser.json(), graphqlExpress(req => {
// app.use('/nress/reviewProposals/graphql', bodyParser.json(), graphqlExpress({ schema: schema, graphiql: true }));


// mongoose instance connection url connection
mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost/nress_db');
//mongoose.connect('mongodb://192.168.1.169:27017/nress_db', {
//mongoose.connect('mongodb://192.168.56.1:27017/nress_db', {
mongoose.connect(config.db_connect , {
  useMongoClient: true
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.use(function(req, res) {
//	  res.status(404).send({url: req.originalUrl + ' not found'})
//	});

var routes = require('./api/routes/reviewProposalsRoutes'); //importing route
routes(app); //register the route


const sch = makeExecutableSchema({
  typeDefs: [schema],
  //rootResolvers
  resolvers,
});

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: sch }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));


app.listen(port, () => {
  console.log('Nress Review Proposals REST/GraphQL API server started on: ' + port);
});


oracledb.getConnection(
  {
    user          : "nspires4",
    password      : "nspires4",
    connectString : "(DESCRIPTION=(ADDRESS_LIST = (ADDRESS = (PROTOCOL = TCP)(HOST = 172.17.9.24)(PORT = 1521)))(CONNECT_DATA = (SID = ndevdb)(SRVR = DEDICATED)))"
  },
  function(err, connection)
  {
    if (err) {
      console.error(err.message);
      return;
    }
    connection.execute(
      // The statement to execute
      `SELECT assigned_response_id, uploaded_by, uploaded_date
       FROM assigned_response
       WHERE assigned_response_id = :id`,

      // The "bind value" 180 for the bind variable ":id"
      ['2C90DAAB195DD20B011961B9221A002E'],

      // execute() options argument.  Since the query only returns one
      // row, we can optimize memory usage by reducing the default
      // maxRows value.  For the complete list of other options see
      // the documentation.
      { maxRows: 1
        //, outFormat: oracledb.OBJECT  // query result format
        //, extendedMetaData: true      // get extra metadata
        //, fetchArraySize: 100         // internal buffer allocation size for tuning
      },

      // The callback function handles the SQL execution results
      function(err, result)
      {
        if (err) {
          console.error(err.message);
          doRelease(connection);
          return;
        }
        console.log(result.metaData); // [ { name: 'DEPARTMENT_ID' }, { name: 'DEPARTMENT_NAME' } ]
        console.log(result.rows);     // [ [ 180, 'Construction' ] ]
        doRelease(connection);
      });
  });

// Note: connections should always be released when not needed
function doRelease(connection)
{
  connection.close(
    function(err) {
      if (err) {
        console.error(err.message);
      }
    });
}
