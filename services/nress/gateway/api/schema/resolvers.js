import config from '../../config/config.json'
var reviewProposalsList = require('../controllers/reviewProposalsController');

// app/src/resolvers.js
const reviewProposalList = () => {
    return new Promise((resolve, reject) => {
        resolve(sols);
    })
};

const getReviewProposalsById = (id) => {
  console.log('$$$$$$$$ id: ' + id);

  return new Promise((resolve, reject) => {
    resolve(sols[1]);
  })

};


/*
    return new Promise((resolve, reject) => {
        ReviewProposals.find({'acronym': new RegExp('.*' + id + '.*', "i")}, (err, reviewProposals) => {
            if (err) {
              console.log('^^^^^ Error: ' + err);
              reject(err);
            } else {
              console.log('^^^^^ id: ' + id);
              resolve(reviewProposals);
            }
        })
    })
*/


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
    reviewProposals: () => reviewProposalList(),
    reviewProposalsById: (_, { filter }) => getReviewProposalsById(filter),
  },
  // ReviewProposal: {
  //   id(id) {
  //     return reviewProposals.find(sol => sol.id === id);
  //   },
  // },
};

//let nextId = 3;
/*
const rootResolvers  = {
  Query: {
    reviewProposals: () => sols
    // reviewProposal(root, { id }) {
    //   return sols.find(sol => sol.id === id);
    // },
  },
  // ReviewProposal: {
  //   author(id) {
  //     return sols.find(sol => sol.id === id);
  //   },
  // },
  // Mutation: {
  //   addReviewProposal: (root, args) => {
  //     const newReviewProposal = { id: nextId++, acronym: args.acronym, title: args.title };
  //     reviewProposals.push(newReviewProposal);
  //     return newReviewProposal;
  //   },
  // },
};
*/
// export const reviewProposalResolver = {
//   ReviewProposal: {
//     id: ({ id }) => id.toUpperCase(),
//     acronym: ({ acronym }) =>  acronym.toUpperCase(),
//     title: ({ title }) =>  title.toUpperCase()
//   },
// };

export default resolvers;
