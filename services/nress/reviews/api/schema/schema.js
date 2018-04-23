//const {makeExecutableSchema} = require('graphql-tools');
// import { makeExecutableSchema } from 'graphql-tools';
//const http = require('http');

// import { reviewProposalProposalsList } from '../controllers/reviewProposalsController';
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
    reviewProposals: [ReviewProposal],
    reviewProposalsSearch(filter: String, first: Int): [ReviewProposal],
    reviewProposalById(id: String, first: Int): [ReviewProposal]
  }
  type ReviewProposal { ASSIGNED_RESPONSE_ID: String!, FIRST_NAME: String, LAST_NAME: String, RESPONSE_NUMBER: String, RESPONSE_SEQ_NUMBER: String, PSTATE: String, GENERATED_STATUS: String, PANEL_ID: String, ACRONYM: String, EVALUATION_STATUS: String}
`;

/*
const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all... queries',
  fields: () => ({
    allReviewProposals: {
      type: new GraphQLList(ReviewProposalType),
      resolve: root => reviewProposalsList.list_all_reviewProposals// Fetch the index of people from the REST API,
    },
    reviewProposal: {
      type: ReviewProposalType,
      args: {
        id: { type: GraphQLString },
      },
      //resolve: (root, args) => // Fetch the person with ID `args.id`,
    },
  }),
});

const ReviewProposalType = new GraphQLObjectType({
  name: 'ReviewProposal',
  description: 'Nress ReviewProposal',
  fields: () => ({
    title: {
      type: GraphQLString,
      resolve: reviewProposal => reviewProposal.title,
    }
  }),
});
*/

/*
const BASE_URL = 'http://localhost:3334/';

function fetchReviewProposals(relativeURL) {
  console.log('Fetching reviewProposals for GraphQL');
  // return fetch(`${BASE_URL}${relativeURL}`).then(res => res.json());
  return reviewProposalsList.list_all_reviewProposals;
//  fetch('http://localhost:3334/nress/reviewProposals').then(res => {
//console.log('res ==============> ' + JSON.stringify(res));
//    return res.json()
//  });
}

const ReviewProposalType = new GraphQLObjectType({
  name: "reviewProposal",
  description: "ReviewProposal type",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: reviewProposal => reviewProposal.id,
    },
    reviewProposal_number: {type: new GraphQLNonNull(GraphQLString)},
    acronym: {type: new GraphQLNonNull(GraphQLString)},
    title: {type: new GraphQLNonNull(GraphQLString)},
    fiscal_year: {type: GraphQLString}
  })
});

// This is the Root Query
const ReviewProposalsQueryRootType = new GraphQLObjectType({
  name: 'reviewProposals',
  description: "ReviewProposals Schema Query Root",
  fields: () => ({
    reviewProposals: {
      type: new GraphQLList(ReviewProposalType),
      description: "List of all ReviewProposals",
      resolve: (root, args) => {
        console.log('Inside the reviewProposals resolver');
        return reviewProposalsList.list_all_reviewProposals;; //fetchReviewProposals('nress/reviewProposals');
      },
    },
  }),
});

// This is the schema declaration
const ReviewProposalsSchema = new GraphQLSchema({
  query: ReviewProposalsQueryRootType
  // If you need to create or updata a datasource,
  // you use mutations. Note:
  // mutations will not be explored in this post.
  // mutation: BlogMutationRootType
});
*/
// module.exports = ReviewProposalsSchema;

// Generate the schema object from your types definition.

// const schema = makeExecutableSchema({
//   typeDefs,
//   rootResolvers,
// });

 export default schema;
// module.export = new GraphQLSchema({
//   query: QueryType,
// });
