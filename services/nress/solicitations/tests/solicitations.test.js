'use strict';

import { makeExecutableSchema } from 'graphql-tools';


// const graphql = require('graphql');
import graphql from 'graphql';
// const chai = require('chai');
import chai from 'chai';

// const solicitation = require('../api/schema/schema');
import schema from '../api/schema/schema';


const sch = makeExecutableSchema({
  typeDefs: [schema],
  //rootResolvers
  // resolvers,
});


const solicitationType = sch
const expect = chai.expect;

describe('Solicitation', () => {
  it('Should have a name field of type String', () => {
  expect(solicitationType.getFields()).to.have.property('acronym');
  expect(solicitationType.getFields().acronym.type).to.deep.equals(graphql.GraphQLString);
});
})
