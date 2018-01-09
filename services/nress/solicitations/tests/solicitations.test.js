'use strict';

import { makeExecutableSchema } from 'graphql-tools';


// const graphql = require('graphql');
import graphql from 'graphql';
// const chai = require('chai');
//import { chai } from 'chai';
var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var chaiSubset = require('chai-subset');
chai.use(chaiSubset);

// const solicitation = require('../api/schema/schema');
import schema from '../api/schema/schema';

import { app } from '../index.js';


const sch = makeExecutableSchema({
  typeDefs: [schema],
  //rootResolvers
  // resolvers,
});


const solicitationType = sch
const expect = chai.expect;

// describe('Solicitation', () => {
//   it('Should have a name field of type String', () => {
//     expect(solicitationType.getFields()).to.have.property('acronym');
//     expect(solicitationType.getFields().acronym.type).to.deep.equals(graphql.GraphQLString);
//   });
// })

describe('GET Home GraphiQL', () => {
    it('Should return GraphiQL', (done) => {
        chai
            .request(app)
            .get('/graphiql')
            .end(function (err, res) {
                // res.on('data', function(chunk) {
                //   // body += chunk;
                //   console.log('BODY: ' + chunk)
                // });

                const result = res.statusCode
                expect(result).to.equal(200)
                done()
            })
    })
})

describe('GET Solicitations home Rest', () => {
    it('Should return Solicitations JSON', (done) => {
        chai
            .request(app)
            .get('/nress/solicitations')
            .end(function (err, res) {
                if(!err) {
                  // console.log('+++++ Test Get Home res = ' + JSON.stringify(res.body));
                  // console.log('+++++ Test Get Home res = ' + JSON.parse(res.body));
                  const result = res.body
                  expect(result).to.be.an('array').that.is.not.empty;
                  expect(result).to.containSubset([{acronym: "acronym-1"}]);
                  expect(result).to.not.containSubset([{fake: "who?"}]);
                }
                done()
            })
    })
})
