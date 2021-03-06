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
