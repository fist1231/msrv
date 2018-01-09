import { list_all_solicitations } from '../controllers/solicitationsController';

// app/src/resolvers.js

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
  Query: { solicitations: () => list_all_solicitations() },
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
