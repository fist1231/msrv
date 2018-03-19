import { list_all_reviewProposals } from '../controllers/reviewProposalsController';
import ReviewProposals from '../models/reviewProposalsModel';
//const ReviewProposals = require('../models/reviewProposalsModel');

var reviewProposalsList = require('../controllers/reviewProposalsController');

var oracledb = require('oracledb');

// app/src/resolvers.js
const reviewProposalList2 = () => {
    return new Promise((resolve, reject) => {
        ReviewProposals.find((err, reviewProposals) => {
            if (err) {
              console.log('^^^^^ Error: ' + err);
              reject(err);
            } else {
              console.log('^^^^^ reviewProposals: ' + reviewProposals);
              resolve(reviewProposals);
            }
        })
    })
};

const getReviewProposalsById = (id) => {
  console.log('$$$$$$$$ id: ' + id);

  return new Promise((resolve, reject) => {
    oracledb.getConnection(
      {
        user          : "nspires4",
        password      : "nspires4",
        connectString : "(DESCRIPTION=(ADDRESS_LIST = (ADDRESS = (PROTOCOL = TCP)(HOST = 172.17.9.24)(PORT = 1521)))(CONNECT_DATA = (SID = ndevdb)(SRVR = DEDICATED)))"
      },
      function(err, connection)
      {
        if (err) {
          console.error(err.message);
          return;
        }
        connection.execute(
          // The statement to execute
          `SELECT RAWTOHEX(assigned_response_id) as assigned_response_id, nvl(uploaded_by, 'x') as uploaded_by, nvl(uploaded_by, 'x') as uploaded_date
           FROM assigned_response`,
           //WHERE assigned_response_id = :id`,

          // The "bind value" 180 for the bind variable ":id"
          [],
          // execute() options argument.  Since the query only returns one
          // row, we can optimize memory usage by reducing the default
          // maxRows value.  For the complete list of other options see
          // the documentation.
          { resultSet: false
            , maxRows: 100
            , outFormat: oracledb.OBJECT  // query result format
            //, extendedMetaData: true      // get extra metadata
            //, fetchArraySize: 100         // internal buffer allocation size for tuning
          },

          // The callback function handles the SQL execution results
          function(err, result)
          {
            if (err) {
              console.error(err.message);
              doRelease(connection);
              reject(err);
            } else {
              //res.contentType('application/json').status(200);
              //res.send(JSON.stringify(result.rows));
              var reviewProposals = JSON.stringify(result.rows);
              //console.log(reviewProposals);
              var reviewProposals2 = JSON.parse(reviewProposals);
              //console.log(reviewProposals2);
              resolve(reviewProposals2);
            }
            //console.log(result.metaData); // [ { name: 'DEPARTMENT_ID' }, { name: 'DEPARTMENT_NAME' } ]
            //console.log(result.rows);     // [ [ 180, 'Construction' ] ]
            console.log('*******************************');
            doRelease(connection);
          });
      });

  })


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
};

const reviewProposalList = () => {

    return new Promise((resolve, reject) => {
      oracledb.getConnection(
        {
          user          : "nspires4",
          password      : "nspires4",
          connectString : "(DESCRIPTION=(ADDRESS_LIST = (ADDRESS = (PROTOCOL = TCP)(HOST = 172.17.9.24)(PORT = 1521)))(CONNECT_DATA = (SID = ndevdb)(SRVR = DEDICATED)))"
        },
        function(err, connection)
        {
          if (err) {
            console.error(err.message);
            return;
          }
          connection.execute(
            // The statement to execute
            `SELECT RAWTOHEX(assigned_response_id) as assigned_response_id, nvl(uploaded_by, 'x') as uploaded_by, nvl(uploaded_by, 'x') as uploaded_date
             FROM assigned_response`,
             //WHERE assigned_response_id = :id`,

            // The "bind value" 180 for the bind variable ":id"
            [],
            // execute() options argument.  Since the query only returns one
            // row, we can optimize memory usage by reducing the default
            // maxRows value.  For the complete list of other options see
            // the documentation.
            { resultSet: false
              , maxRows: 100
              , outFormat: oracledb.OBJECT  // query result format
              //, extendedMetaData: true      // get extra metadata
              //, fetchArraySize: 100         // internal buffer allocation size for tuning
            },

            // The callback function handles the SQL execution results
            function(err, result)
            {
              if (err) {
                console.error(err.message);
                doRelease(connection);
                reject(err);
              } else {
                //res.contentType('application/json').status(200);
                //res.send(JSON.stringify(result.rows));
                var reviewProposals = JSON.stringify(result.rows);
                //console.log(reviewProposals);
                var reviewProposals2 = JSON.parse(reviewProposals);
                //console.log(reviewProposals2);
                resolve(reviewProposals2);
              }
              //console.log(result.metaData); // [ { name: 'DEPARTMENT_ID' }, { name: 'DEPARTMENT_NAME' } ]
              //console.log(result.rows);     // [ [ 180, 'Construction' ] ]
              console.log('*******************************');
              doRelease(connection);
            });
        });

    })


};


function doRelease(connection)
{
  connection.close(
    function(err) {
      if (err) {
        console.error(err.message);
      }
    });
}


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
