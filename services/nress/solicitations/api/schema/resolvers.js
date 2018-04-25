import { list_all_solicitations } from '../controllers/solicitationsController';
import Solicitations from '../models/solicitationsModel';
//const Solicitations = require('../models/solicitationsModel');

// app/src/resolvers.js
const solicitationList = () => {
    return new Promise((resolve, reject) => {
        Solicitations.find((err, solicitations) => {
            if (err) {
              console.log('^^^^^ Error: ' + err);
              reject(err);
            } else {
              console.log('^^^^^ solicitations: ' + solicitations);
              resolve(solicitations);
            }
        })
    })
};

const getSolicitationsById = (id) => {
  console.log('$$$$$$$$ id: ' + id);
    return new Promise((resolve, reject) => {
        Solicitations.find({'TITLE': new RegExp('.*' + id + '.*', "i")}, (err, solicitations) => {
            if (err) {
              console.log('^^^^^ Error: ' + err);
              reject(err);
            } else {
              console.log('^^^^^ id: ' + id);
              resolve(solicitations);
            }
        })
    })
};

const updateSolicitation = (solId, solTitle) => {
  console.log('$$$$$$$$ updateSolicitation solId: ' + solId);
  console.log('$$$$$$$$ updateSolicitation solTitle: ' + solTitle);
    return new Promise((resolve, reject) => {
        Solicitations.findByIdAndUpdate(
          { "_id" : solId },
          { $set: { TITLE: solTitle } },
          { upsert: false, new: true },
          // { upsert:false, returnNewDocument : true },
          (err, solicitation) => {
            if (err) {
              console.log('^^^^^ updateSolicitation Error: ' + err);
              reject(err);
            } else {
              console.log('^^^^^ Solicitation data updated for solId: ' + solId);
              resolve(solicitation);
            }
          }
        )
    })
};



const sols = [
  {
    // id: 1,
    acronym: 'acronym-fake 1',
    title: 'title-fake 1',
  },
  {
    // id: 2,
    acronym: 'acronym-fake 2',
    title: 'title-fake 2',
  },
];

const resolvers  = {
  Query: {
    solicitations: () => solicitationList(),
    solicitationsById: (_, { filter }) => getSolicitationsById(filter),
  },
  Mutation: {
    updateSolicitation: (_, { _id, TITLE }) => updateSolicitation(_id, TITLE),
  },

  // Solicitation: {
  //   id(id) {
  //     return solicitations.find(sol => sol.id === id);
  //   },
  // },
};

//let nextId = 3;
/*
const rootResolvers  = {
  Query: {
    solicitations: () => sols
    // solicitation(root, { id }) {
    //   return sols.find(sol => sol.id === id);
    // },
  },
  // Solicitation: {
  //   author(id) {
  //     return sols.find(sol => sol.id === id);
  //   },
  // },
  // Mutation: {
  //   addSolicitation: (root, args) => {
  //     const newSolicitation = { id: nextId++, acronym: args.acronym, title: args.title };
  //     solicitations.push(newSolicitation);
  //     return newSolicitation;
  //   },
  // },
};
*/
// export const solicitationResolver = {
//   Solicitation: {
//     id: ({ id }) => id.toUpperCase(),
//     acronym: ({ acronym }) =>  acronym.toUpperCase(),
//     title: ({ title }) =>  title.toUpperCase()
//   },
// };

export default resolvers;
