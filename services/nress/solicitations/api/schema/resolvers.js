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

const updateSolicitation = (
  _id,
  SOLICITATION_ID,
  SOLICITATION_NUMBER,
  PUBLICATION_APPROVAL,
  FISCAL_YEAR,
  OMNIBUS_NUMBER,
  TITLE,
  REVIEW_DATE,
  SELECTION_DATE,
  RELEASE_DATE,
  CLOSE_DATE,
  ANNOUNCEMENT_TYPE,
  CONTAINER_TYPE,
  AUTHORIZED_BY,
  WITHDRAWAL_REASON,
  WITHDRAWAL_DATE,
  WITHDRAWN_BY
) => {
  console.log('$$$$$$$$ updateSolicitation _id: ' + _id);
  console.log('$$$$$$$$ updateSolicitation TITLE: ' + TITLE);
    return new Promise((resolve, reject) => {
        Solicitations.findByIdAndUpdate({ "_id" : _id },
          { $set: {
            "SOLICITATION_ID": SOLICITATION_ID,
            "SOLICITATION_NUMBER": SOLICITATION_NUMBER,
            "PUBLICATION_APPROVAL": PUBLICATION_APPROVAL,
            "FISCAL_YEAR": FISCAL_YEAR,
            "OMNIBUS_NUMBER": OMNIBUS_NUMBER,
            "TITLE": TITLE,
            "REVIEW_DATE": REVIEW_DATE,
            "SELECTION_DATE": SELECTION_DATE,
            "RELEASE_DATE": RELEASE_DATE,
            "CLOSE_DATE": CLOSE_DATE,
            "ANNOUNCEMENT_TYPE": ANNOUNCEMENT_TYPE,
            "CONTAINER_TYPE": CONTAINER_TYPE,
            "AUTHORIZED_BY": AUTHORIZED_BY,
            "WITHDRAWAL_REASON": WITHDRAWAL_REASON,
            "WITHDRAWAL_DATE": WITHDRAWAL_DATE,
            "WITHDRAWN_BY": WITHDRAWN_BY
          } },
          { upsert: false, new: true },
          // { upsert:false, returnNewDocument : true },
          (err, solicitation) => {
            if (err) {
              console.log('^^^^^ updateSolicitation Error: ' + err);
              console.log('^^^^^ updateSolicitation Error: ' + solicitation);
              reject(err);
            } else {
              console.log('^^^^^ Solicitation data updated for solId: ' + _id);
              console.log('^^^^^ updateSolicitation updated: ' + solicitation);
              resolve(solicitation);
            }
          }
        )
    })
};


const addSolicitation = (
  SOLICITATION_ID,
  SOLICITATION_NUMBER,
  PUBLICATION_APPROVAL,
  FISCAL_YEAR,
  OMNIBUS_NUMBER,
  TITLE,
  REVIEW_DATE,
  SELECTION_DATE,
  RELEASE_DATE,
  CLOSE_DATE,
  ANNOUNCEMENT_TYPE,
  CONTAINER_TYPE,
  AUTHORIZED_BY,
  WITHDRAWAL_REASON,
  WITHDRAWAL_DATE,
  WITHDRAWN_BY
) => {
  console.log('$$$$$$$$ addSolicitation SOLICITATION_ID: ' + SOLICITATION_ID);
  console.log('$$$$$$$$ addSolicitation OMNIBUS_NUMBER: ' + OMNIBUS_NUMBER);
  console.log('$$$$$$$$ addSolicitation AUTHORIZED_BY: ' + AUTHORIZED_BY);
    return new Promise((resolve, reject) => {
        Solicitations.create({
          "SOLICITATION_ID": SOLICITATION_NUMBER,
          "SOLICITATION_NUMBER": SOLICITATION_NUMBER,
          "PUBLICATION_APPROVAL": PUBLICATION_APPROVAL,
          "FISCAL_YEAR": FISCAL_YEAR,
          "OMNIBUS_NUMBER": OMNIBUS_NUMBER,
          "TITLE": TITLE,
          "REVIEW_DATE": REVIEW_DATE,
          "SELECTION_DATE": SELECTION_DATE,
          "RELEASE_DATE": RELEASE_DATE,
          "CLOSE_DATE": CLOSE_DATE,
          "ANNOUNCEMENT_TYPE": ANNOUNCEMENT_TYPE,
          "CONTAINER_TYPE": CONTAINER_TYPE,
          "AUTHORIZED_BY": AUTHORIZED_BY,
          "WITHDRAWAL_REASON": WITHDRAWAL_REASON,
          "WITHDRAWAL_DATE": WITHDRAWAL_DATE,
          "WITHDRAWN_BY": WITHDRAWN_BY
          },
          // { upsert:false, returnNewDocument : true },
          (err, solicitation) => {
            if (err) {
              console.log('^^^^^ addSolicitation Error: ' + err);
              console.log('^^^^^ addSolicitation Error: ' + solicitation);
              reject(err);
            } else {
              console.log('^^^^^ Solicitation created with _id: ' + solicitation._id);
              console.log('^^^^^ Solicitation created with solicitation: ' + solicitation);
              resolve(solicitation);
            }
          }
        )
    })
};

const deleteSolicitation = (solId) => {
  console.log('$$$$$$$$ deleteSolicitation solId: ' + solId);
    return new Promise((resolve, reject) => {
        Solicitations.findByIdAndRemove(solId, (err, solicitation) => {
            if (err) {
              console.log('^^^^^ deleteSolicitation Error: ' + err);
              console.log('^^^^^ deleteSolicitation Error res: ' + solicitation);
              reject({
                id: solId,
                result: undefined,
                error: err
              });
            } else {
              // console.log('^^^^^ Solicitation deleted with id: ' + solId);
              console.log('^^^^^ Solicitation deleted: ' + solicitation);
              resolve({
                id: solId,
                result: solicitation?`DELETE SUCCESS for id:${solicitation._id}`:undefined,
                error: solicitation?undefined:`DELETE FAILED not found solicitation id:${solId}`
              });
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
    updateSolicitation: (_, {
      _id,
      SOLICITATION_ID,
      SOLICITATION_NUMBER,
      PUBLICATION_APPROVAL,
      FISCAL_YEAR,
      OMNIBUS_NUMBER,
      TITLE,
      REVIEW_DATE,
      SELECTION_DATE,
      RELEASE_DATE,
      CLOSE_DATE,
      ANNOUNCEMENT_TYPE,
      CONTAINER_TYPE,
      AUTHORIZED_BY,
      WITHDRAWAL_REASON,
      WITHDRAWAL_DATE,
      WITHDRAWN_BY
    }) => updateSolicitation(
      _id,
      SOLICITATION_ID,
      SOLICITATION_NUMBER,
      PUBLICATION_APPROVAL,
      FISCAL_YEAR,
      OMNIBUS_NUMBER,
      TITLE,
      REVIEW_DATE,
      SELECTION_DATE,
      RELEASE_DATE,
      CLOSE_DATE,
      ANNOUNCEMENT_TYPE,
      CONTAINER_TYPE,
      AUTHORIZED_BY,
      WITHDRAWAL_REASON,
      WITHDRAWAL_DATE,
      WITHDRAWN_BY
    ),
    addSolicitation: (_, {
      SOLICITATION_ID,
      SOLICITATION_NUMBER,
      PUBLICATION_APPROVAL,
      FISCAL_YEAR,
      OMNIBUS_NUMBER,
      TITLE,
      REVIEW_DATE,
      SELECTION_DATE,
      RELEASE_DATE,
      CLOSE_DATE,
      ANNOUNCEMENT_TYPE,
      CONTAINER_TYPE,
      AUTHORIZED_BY,
      WITHDRAWAL_REASON,
      WITHDRAWAL_DATE,
      WITHDRAWN_BY
    }) => addSolicitation(
      SOLICITATION_ID,
      SOLICITATION_NUMBER,
      PUBLICATION_APPROVAL,
      FISCAL_YEAR,
      OMNIBUS_NUMBER,
      TITLE,
      REVIEW_DATE,
      SELECTION_DATE,
      RELEASE_DATE,
      CLOSE_DATE,
      ANNOUNCEMENT_TYPE,
      CONTAINER_TYPE,
      AUTHORIZED_BY,
      WITHDRAWAL_REASON,
      WITHDRAWAL_DATE,
      WITHDRAWN_BY
    ),
    deleteSolicitation: (_, { _id }) => deleteSolicitation(_id)
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
