//const {makeExecutableSchema} = require('graphql-tools');
// import { makeExecutableSchema } from 'graphql-tools';
//const http = require('http');

// import { solicitationsList } from '../controllers/solicitationsController';
// import { rootResolvers } from './resolvers';

// let {
//   // These are the basic GraphQL types required
//   GraphQLString,
//   GraphQLList,
//   GraphQLObjectType,
//   // This is used to create required fileds and arguments
//   GraphQLNonNull,
//   // This is the class we need to create the schema
//   GraphQLSchema,
// } = require('graphql');

// Define your types here.
const schema = `
  type Query {
    solicitations: [Solicitation],
    solicitationsById(filter: String, first: Int): [Solicitation]
  }
  type Solicitation {
    SOLICITATION_ID: String!, SOLICITATION_NUMBER: String!, PUBLICATION_APPROVAL: Int!,
    FISCAL_YEAR: Int!, OMNIBUS_NUMBER: String, TITLE: String!,
    REVIEW_DATE:String, SELECTION_DATE: String, RELEASE_DATE: String!, CLOSE_DATE: String!,
    ANNOUNCEMENT_TYPE: String!, CONTAINER_TYPE: String!, AUTHORIZED_BY: String,
    WITHDRAWAL_REASON: String, WITHDRAWAL_DATE: String, WITHDRAWN_BY: String
  }
`;

/*
const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all... queries',
  fields: () => ({
    allSolicitations: {
      type: new GraphQLList(SolicitationType),
      resolve: root => solicitationsList.list_all_solicitations// Fetch the index of people from the REST API,
    },
    solicitation: {
      type: SolicitationType,
      args: {
        id: { type: GraphQLString },
      },
      //resolve: (root, args) => // Fetch the person with ID `args.id`,
    },
  }),
});

const SolicitationType = new GraphQLObjectType({
  name: 'Solicitation',
  description: 'Nress Solicitation',
  fields: () => ({
    title: {
      type: GraphQLString,
      resolve: solicitation => solicitation.title,
    }
  }),
});
*/

/*
const BASE_URL = 'http://localhost:3334/';

function fetchSolicitations(relativeURL) {
  console.log('Fetching solicitations for GraphQL');
  // return fetch(`${BASE_URL}${relativeURL}`).then(res => res.json());
  return solicitationsList.list_all_solicitations;
//  fetch('http://localhost:3334/nress/solicitations').then(res => {
//console.log('res ==============> ' + JSON.stringify(res));
//    return res.json()
//  });
}

const SolicitationType = new GraphQLObjectType({
  name: "solicitation",
  description: "Solicitation type",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: solicitation => solicitation.id,
    },
    solicitation_number: {type: new GraphQLNonNull(GraphQLString)},
    acronym: {type: new GraphQLNonNull(GraphQLString)},
    title: {type: new GraphQLNonNull(GraphQLString)},
    fiscal_year: {type: GraphQLString}
  })
});

// This is the Root Query
const SolicitationsQueryRootType = new GraphQLObjectType({
  name: 'solicitations',
  description: "Solicitations Schema Query Root",
  fields: () => ({
    solicitations: {
      type: new GraphQLList(SolicitationType),
      description: "List of all Solicitations",
      resolve: (root, args) => {
        console.log('Inside the solicitations resolver');
        return solicitationsList.list_all_solicitations;; //fetchSolicitations('nress/solicitations');
      },
    },
  }),
});

// This is the schema declaration
const SolicitationsSchema = new GraphQLSchema({
  query: SolicitationsQueryRootType
  // If you need to create or updata a datasource,
  // you use mutations. Note:
  // mutations will not be explored in this post.
  // mutation: BlogMutationRootType
});
*/
// module.exports = SolicitationsSchema;

// Generate the schema object from your types definition.

// const schema = makeExecutableSchema({
//   typeDefs,
//   rootResolvers,
// });

 export default schema;
// module.export = new GraphQLSchema({
//   query: QueryType,
// });
