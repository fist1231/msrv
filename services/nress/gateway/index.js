import Rx from 'rxjs';
import cors from 'cors';
import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema, mergeSchemas } from 'graphql-tools';
import config from './config/config.json'


const fetch = require('node-fetch')
const { makeRemoteExecutableSchema, introspectSchema } = require('graphql-tools')
const { createHttpLink } = require('apollo-link-http')


export const app = express(),
  port = process.env.PORT || 3330,
  bodyParser = require('body-parser');

app.use(cors());


// GraphQL
// import schema  from './api/schema/schema';
// import resolvers from './api/schema/resolvers';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/gatewayRoutes'); //importing route
routes(app); //register the route


// const sch = makeExecutableSchema({
//   typeDefs: [schema],
//   //rootResolvers
//   resolvers,
// });


async function run() {

  const makeSolicitationsServiceLink = () => createHttpLink({
    uri: `${config.solicitations_address}/graphql`,
    fetch
  })

  // 2. Retrieve schema definition of the underlying GraphQL API
  const solicitationsServiceSchemaDefinition = await introspectSchema(makeSolicitationsServiceLink())

  // 3. Create the executable schema based on schema definition and Apollo Link
  const solicitationsServiceExecutableSchema = makeRemoteExecutableSchema({
    schema: solicitationsServiceSchemaDefinition,
    link: makeSolicitationsServiceLink()
  })


  const makeReviewsServiceLink = () => createHttpLink({
    uri: `${config.reviews_address}/graphql`,
    fetch
  })

  // 2. Retrieve schema definition of the underlying GraphQL API
  const reviewsServiceSchemaDefinition = await introspectSchema(makeReviewsServiceLink())

  // 3. Create the executable schema based on schema definition and Apollo Link
  const reviewsServiceExecutableSchema = makeRemoteExecutableSchema({
    schema: reviewsServiceSchemaDefinition,
    link: makeReviewsServiceLink()
  })


  const schema = mergeSchemas({
    schemas: [
      solicitationsServiceExecutableSchema,
      reviewsServiceExecutableSchema
    ],
  });


  // The GraphQL endpoint
  // app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: sch }));
  app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: schema  }));

  // GraphiQL, a visual editor for queries
  app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));


  app.listen(port, () => {
    console.log('Nress Gateway REST/GraphQL API server started on: ' + port);
  });

}

try {
	run();
} catch (e) {
	console.log(e, e.message, e.stack);
}
