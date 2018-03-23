import { list_all_reviewProposals } from '../controllers/reviewProposalsController';
import ReviewProposals from '../models/reviewProposalsModel';
//const ReviewProposals = require('../models/reviewProposalsModel');
import config from '../../config/config.json'

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
        user          : config.ora_usr,
        password      : config.ora_pwd,
        connectString : config.ora_connect
      },
      function(err, connection)
      {
        if (err) {
          console.error(err.message);
          return;
        }
        connection.execute(
          // The statement to execute
          //`SELECT RAWTOHEX(assigned_response_id) as assigned_response_id, nvl(uploaded_by, 'x') as uploaded_by, nvl(uploaded_by, 'x') as uploaded_date
           //FROM assigned_response`,
           //WHERE assigned_response_id = :id`,
           query,

          // The "bind value" 180 for the bind variable ":id"
          ['2C90DAA619C4B4700119C4B831920002'],
          // execute() options argument.  Since the query only returns one
          // row, we can optimize memory usage by reducing the default
          // maxRows value.  For the complete list of other options see
          // the documentation.
          { resultSet: false
            , maxRows: 10000
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
          user          : config.ora_usr,
          password      : config.ora_pwd,
          connectString : config.ora_connect
        },
        function(err, connection)
        {
          if (err) {
            console.error(err.message);
            return;
          }
          connection.execute(
            // The statement to execute
            //`SELECT RAWTOHEX(assigned_response_id) as assigned_response_id, nvl(uploaded_by, 'x') as uploaded_by, nvl(uploaded_by, 'x') as uploaded_date
            //FROM assigned_response`,
            query,
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


const query= `
select * from
        ( select
            RAWTOHEX(ap.ASSIGNED_RESPONSE_ID) as ASSIGNED_RESPONSE_ID,
            ap.GENERATED_STATUS as GENERATED_STATUS,
            pan.PANEL_ID,
            pan.ACRONYM as ACRONYM,
            proposal.RESPONSE_NUMBER as RESPONSE_NUMBER,
            proposal.RESPONSE_SEQ_NUMBER as RESPONSE_SEQ_NUMBER,
            u.NSPIRES_USER_ID,
            u.FIRST_NAME as FIRST_NAME,
            u.LAST_NAME as LAST_NAME,
            evaluation.EVALUATION_FORM_ID,
            evaluation.QUESTIONNAIRE,
            panel_prop.EVALUATION_STATUS,
            panel_prop.GRADE,
            scoring_m.SCORING_METHOD_ID,
            panel_prop.PANEL_PROPOSAL_ID,
            proposal.STATE as PSTATE,
            primary_rev.p_first_name,
            primary_rev.p_last_name,
            secondary_rev.s_first_name,
            secondary_rev.s_last_name,
            non_panelist_rev.np_first_name,
            non_panelist_rev.np_last_name
        from
            ASSIGNED_RESPONSE ap
        inner join
            SOLICITATION_RESPONSE_VIEW proposal
                on ap.RESPONSE_ID=proposal.RESPONSE_ID
        inner join
            RESPONSE_TEAM_MEMBER_ELEMENT tme
                on proposal.RESPONSE_ID=tme.RESPONSE_ID
        inner join
            TEAM_MEMBER tm
                on tme.TEAM_MEMBER_ELEMENT_ID=tm.TEAM_MEMBER_ELEMENT_ID
                and tm.TYPE='TEAM_MEMBER_TYPE'
        inner join
            NSPIRES_USER u
                on tm.NSPIRES_USER_ID=u.NSPIRES_USER_ID
        inner join
            RESPONSE_STRUCTURE re_struct
                on proposal.RESPONSE_STRUCTURE_ID=re_struct.RESPONSE_STRUCTURE_ID
        inner join
            REVIEW_S_RESPONSE_ST_ASSOC rsas
                on re_struct.RESPONSE_STRUCTURE_ID=rsas.RESPONSE_STRUCTURE_ID
        left outer join
            PANEL_PROPOSAL panel_prop
                on ap.ASSIGNED_RESPONSE_ID=panel_prop.ASSIGNED_RESPONSE_ID
        left outer join
            PANEL pan
                on panel_prop.PANEL_ID=pan.PANEL_ID
        inner join
            REVIEW_STRUCTURE rev_str
                on ap.REVIEW_STRUCTURE_ID=rev_str.REVIEW_STRUCTURE_ID
        inner join
            REVIEW_S_RESPONSE_ST_ASSOC rsas2
                on rev_str.REVIEW_STRUCTURE_ID=rsas2.REVIEW_STRUCTURE_ID
        left outer join
            EVALUATION_FORM evaluation
                on rsas2.PANEL_EF_ID=evaluation.EVALUATION_FORM_ID
        left outer join
            SCORING_METHOD scoring_m
                on rsas2.PANEL_SCORING_METHOD_ID=scoring_m.SCORING_METHOD_ID
        left outer join
            (
                select
                    max(u1.first_name) KEEP (DENSE_RANK FIRST
                ORDER BY
                    u1.last_name,
                    u1.first_name) as p_first_name,
                    max(u1.last_name) KEEP (DENSE_RANK FIRST
                ORDER BY
                    u1.last_name,
                    u1.first_name) as p_last_name,
                    ir1.assigned_response_id
                from
                    individual_reviewer ir1,
                    reviewer r1,
                    nspires_user u1
                where
                    r1.REVIEW_STRUCTURE_ID = :id and
                    ir1.reviewer_id=r1.reviewer_id
                    and r1.nspires_user_id=u1.nspires_user_id
                    and ir1.ROLE='PRIMARY_REVIEWER_ROLE'
                group by
                    ir1.assigned_response_id
            ) primary_rev
                on ap.ASSIGNED_RESPONSE_ID = primary_rev.assigned_response_id
        left outer join
            (
                select
                    max(u2.first_name) KEEP (DENSE_RANK FIRST
                ORDER BY
                    u2.last_name,
                    u2.first_name) as s_first_name,
                    max(u2.last_name) KEEP (DENSE_RANK FIRST
                ORDER BY
                    u2.last_name,
                    u2.first_name) as s_last_name,
                    ir2.assigned_response_id
                from
                    individual_reviewer ir2,
                    reviewer r2,
                    nspires_user u2
                where
                    r2.REVIEW_STRUCTURE_ID = :id and
                    ir2.reviewer_id=r2.reviewer_id
                    and r2.nspires_user_id=u2.nspires_user_id
                    and ir2.ROLE='SECONDARY_REVIEWER_ROLE'
                group by
                    ir2.assigned_response_id
            ) secondary_rev
                on ap.ASSIGNED_RESPONSE_ID = secondary_rev.assigned_response_id
        left outer join
            (
                select
                    max(u3.first_name) KEEP (DENSE_RANK FIRST
                ORDER BY
                    u3.last_name,
                    u3.first_name) as np_first_name,
                    max(u3.last_name) KEEP (DENSE_RANK FIRST
                ORDER BY
                    u3.last_name,
                    u3.first_name) as np_last_name,
                    ir3.assigned_response_id
                from
                    individual_reviewer ir3,
                    reviewer r3,
                    nspires_user u3
                where
                    r3.REVIEW_STRUCTURE_ID = :id and
                    ir3.reviewer_id=r3.reviewer_id
                    and r3.nspires_user_id=u3.nspires_user_id
                    and ir3.ROLE='NON_PANELIST_REVIEWER_ROLE'
                group by
                    ir3.assigned_response_id
            ) non_panelist_rev
                on ap.ASSIGNED_RESPONSE_ID = non_panelist_rev.assigned_response_id ,
            TEAM_MEMBER_ROLE tmr,
            TEAM_MEMBER_TYPE tmt
        where
            ap.REVIEW_STRUCTURE_ID = :id
            and tmr.TEAM_MEMBER_TYPE_ID=tmt.TEAM_MEMBER_TYPE_ID
            and tm.TEAM_MEMBER_ROLE_ID=tmr.TEAM_MEMBER_ROLE_ID
            and tmt.TEAM_ROLE_TYPE='PI_TYPE'
            and rsas2.REVIEW_ST_RESP_ST_ASSOC_ID=rsas.REVIEW_ST_RESP_ST_ASSOC_ID
            and (
                proposal.STATE in (
                    'SUBMITTED_STATUS', 'SELECTED_STATUS', 'UNINVITED_STATUS', 'INVITED_STATUS',
 'DISCOURAGED_STATUS', 'ENCOURAGED_STATUS', 'WITHDRAWN_STATUS', 'DECLINED_STATUS', 'RETURNED_STA
TUS', 'SELECTABLE_STATUS', 'AWARDED_STATUS', 'COMPLETED_STATUS'
                )
            )
        order by
            UPPER(proposal.RESPONSE_NUMBER) asc,
            proposal.RESPONSE_SEQ_NUMBER,
            ap.ASSIGNED_RESPONSE_ID asc NULLS LAST )
`
