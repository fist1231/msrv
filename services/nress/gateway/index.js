import Rx from 'rxjs';
import cors from 'cors';
import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import config from './config/config.json'

export const app = express(),
  port = process.env.PORT || 3330,
  bodyParser = require('body-parser');

app.use(cors());


// GraphQL
import schema  from './api/schema/schema';
import resolvers from './api/schema/resolvers';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/gatewayRoutes'); //importing route
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
  console.log('Nress Gateway REST/GraphQL API server started on: ' + port);
});
